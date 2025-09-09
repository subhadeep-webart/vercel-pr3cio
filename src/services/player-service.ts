/* eslint-disable no-console */
class PlayerService {
    private audioElement?: HTMLAudioElement
    private static instance: PlayerService
    private timeUpdateCallbacks: Array<
        (currentTime: number, duration: number) => void
    > = []
    private errorCallbacks: Array<(error: Error) => void> = []
    private loadingCallbacks: Array<(isLoading: boolean) => void> = []
    private trackEndCallbacks: Array<() => void> = []
    private metadataLoadedCallbacks: Array<() => void> = []
    private loading = false
    private abortController?: AbortController
    private currentPlayPromise?: Promise<void>

    // Track-specific state for caching
    private currentTrackUrl?: string
    private trackStates: Map<
        string,
        { currentTime: number; wasPlaying: boolean }
    > = new Map()
    private readonly STORAGE_KEY = 'playerServiceState'
    private readonly MAX_CACHED_TRACKS = 50

    private constructor() {
        if (typeof window !== 'undefined') {
            this.audioElement = new Audio()
            this.audioElement.preload = 'auto'
            this.audioElement.loop = false

            this.audioElement.ontimeupdate = this.handleTimeUpdate.bind(this)
            this.audioElement.onended = this.handleTrackEnd.bind(this)
            this.audioElement.onerror = this.handleAudioError.bind(this)
            this.audioElement.onwaiting = () => this.setLoadingState(true)
            this.audioElement.oncanplay = () => this.setLoadingState(false)
            this.audioElement.onloadedmetadata = () =>
                this.handleMetadataLoaded()

            this.loadCachedState()
        }
    }

    private loadCachedState(): void {
        try {
            const cachedState = localStorage.getItem(this.STORAGE_KEY)
            if (cachedState) {
                const parsedState: Array<
                    [string, { currentTime: number; wasPlaying: boolean }]
                > = JSON.parse(cachedState)

                // Validate and sanitize cached data
                const validEntries = parsedState.filter(
                    ([url, state]) =>
                        typeof url === 'string' &&
                        typeof state?.currentTime === 'number' &&
                        typeof state?.wasPlaying === 'boolean'
                )

                this.trackStates = new Map(
                    validEntries.slice(-this.MAX_CACHED_TRACKS)
                )
            }
        } catch (error) {
            this.clearCachedState()
        }
    }

    private saveCachedState(): void {
        try {
            const stateToSave = Array.from(this.trackStates.entries()).slice(
                -this.MAX_CACHED_TRACKS
            )

            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stateToSave))
        } catch (error) {
            
        }
    }

    private clearCachedState(): void {
        localStorage.removeItem(this.STORAGE_KEY)
        this.trackStates.clear()
    }

    public static getInstance(): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService()
        }
        return PlayerService.instance
    }

    private handleTrackEnd(): void {
        if (this.currentTrackUrl) {
            // Remove from cache completely instead of resetting
            this.trackStates.delete(this.currentTrackUrl)
            this.saveCachedState()
        }

        // Call any registered end callbacks
        this.trackEndCallbacks.forEach((callback) => callback())
    }

    public async setTrack(trackUrl: string): Promise<void> {
        if (!this.audioElement) return

        // Abort any previous pending operations
        this.abortController?.abort()
        this.abortController = new AbortController()

        // Save current track state before switching
        if (this.currentTrackUrl && this.audioElement.src) {
            const wasPlaying = !this.audioElement.paused
            const currentTime = this.audioElement.currentTime

            // Only save state if track wasn't completed
            if (currentTime < this.audioElement.duration - 0.5) {
                // Allow small threshold
                this.trackStates.set(this.currentTrackUrl, {
                    currentTime,
                    wasPlaying,
                })
                this.saveCachedState()
            }
        }

        try {
            // Load new track with abort support
            this.currentTrackUrl = trackUrl
            this.audioElement.src = trackUrl

            // Wait for both load and canplaythrough with abort capability
            await Promise.race([
                new Promise<void>((resolve, reject) => {
                    this.audioElement!.addEventListener(
                        'canplaythrough',
                        () => resolve(),
                        { once: true }
                    )
                    this.audioElement!.addEventListener(
                        'error',
                        (e) => reject(e),
                        { once: true }
                    )
                    this.audioElement!.load()
                }),
                new Promise((_, reject) => {
                    this.abortController!.signal.addEventListener('abort', () =>
                        reject(new DOMException('Aborted', 'AbortError'))
                    )
                }),
            ])

            // Apply cached state if available and not completed
            const cachedState = this.trackStates.get(trackUrl)
            if (cachedState && cachedState.currentTime > 0) {
                this.audioElement.currentTime = cachedState.currentTime
            } else {
                this.audioElement.currentTime = 0
                this.trackStates.set(trackUrl, {
                    currentTime: 0,
                    wasPlaying: false,
                })
                this.saveCachedState()
            }
        } catch (error: any) {
            if (error?.name !== 'AbortError') {
                this.handleError(error)
            }
            // Cleanup if aborted
            if (this.abortController?.signal.aborted) {
                this.audioElement.src = ''
                this.currentTrackUrl = undefined
            }
        }
    }

    private async playSafe(): Promise<void> {
        try {
            if (!this.audioElement) return

            // Store the play promise so we can track it
            this.currentPlayPromise = this.audioElement.play()
            await this.currentPlayPromise
        } catch (error: any) {
            if (error?.name === 'AbortError') {
                // Expected during track changes, ignore
                return
            }
            throw error
        } finally {
            this.currentPlayPromise = undefined
        }
    }

    public async play(): Promise<void> {
        if (!this.audioElement) {
            const error = new Error('Audio element not initialized')
            this.handleError(error)
            throw error
        }

        try {
            await this.playSafe()
            // Update track state when playback starts
            if (this.currentTrackUrl) {
                const state = this.trackStates.get(this.currentTrackUrl) || {
                    currentTime: 0,
                    wasPlaying: false,
                }
                this.trackStates.set(this.currentTrackUrl, {
                    ...state,
                    wasPlaying: true,
                })
            }
        } catch (error) {
            this.handleError(error as Error)
            throw error
        }
        if (this.currentTrackUrl) {
            const state = this.trackStates.get(this.currentTrackUrl) || {
                currentTime: 0,
                wasPlaying: false,
            }
            this.trackStates.set(this.currentTrackUrl, {
                ...state,
                wasPlaying: true,
            })
            this.saveCachedState()
        }
    }
    public pause(): void {
        this.audioElement?.pause()
        if (this.currentTrackUrl) {
            this.trackStates.set(this.currentTrackUrl, {
                currentTime: this.audioElement?.currentTime ?? 0,
                wasPlaying: false,
            })
            this.saveCachedState()
        }
    }

    public stop(): void {
        if (this.audioElement) {
            this.audioElement.pause()
            this.audioElement.currentTime = 0
            if (this.currentTrackUrl) {
                this.trackStates.set(this.currentTrackUrl, {
                    currentTime: 0,
                    wasPlaying: false,
                })
                this.saveCachedState()
            }
        }
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = null
        }
    }

    public togglePlay(): void {
        if (this.audioElement?.paused) {
            this.play()
        } else {
            this.pause()
        }
    }

    // Error handling
    public onError(callback: (error: Error) => void): () => void {
        this.errorCallbacks.push(callback)
        return () => {
            this.errorCallbacks = this.errorCallbacks.filter(
                (cb) => cb !== callback
            )
        }
    }

    private handleAudioError(): void {
        const error = this.audioElement?.error
        if (error) {
            this.handleError(
                new Error(`MediaError: ${error.message} (code ${error.code})`)
            )
        }
    }

    private handleError(error: Error): void {
        this.errorCallbacks.forEach((cb) => cb(error))
    }

    // Loading state
    public onLoading(callback: (isLoading: boolean) => void): () => void {
        this.loadingCallbacks.push(callback)
        return () => {
            this.loadingCallbacks = this.loadingCallbacks.filter(
                (cb) => cb !== callback
            )
        }
    }

    private setLoadingState(isLoading: boolean): void {
        if (this.loading !== isLoading) {
            this.loading = isLoading
            this.loadingCallbacks.forEach((cb) => cb(isLoading))
        }
    }

    // Metadata handling
    public onMetadataLoaded(callback: () => void): () => void {
        this.metadataLoadedCallbacks.push(callback)
        return () => {
            this.metadataLoadedCallbacks = this.metadataLoadedCallbacks.filter(
                (cb) => cb !== callback
            )
        }
    }

    private handleMetadataLoaded(): void {
        this.metadataLoadedCallbacks.forEach((cb) => cb())
    }

    // Existing time update handling
    private handleTimeUpdate(): void {
        const currentTime = this.audioElement?.currentTime || 0
        const duration = this.audioElement?.duration || 0
        this.timeUpdateCallbacks.forEach((callback) =>
            callback(currentTime, duration)
        )
    }

    public onTimeUpdate(
        callback: (currentTime: number, duration: number) => void
    ): () => void {
        this.timeUpdateCallbacks.push(callback)
        return () => {
            this.timeUpdateCallbacks = this.timeUpdateCallbacks.filter(
                (cb) => cb !== callback
            )
        }
    }

    // Set the volume (0 to 1)
    public setVolume(volume: number): void {
        if (this.audioElement) {
            this.audioElement.volume = Math.min(1, Math.max(0, volume))
        }
    }

    // Mute the audio
    public mute(): void {
        if (this.audioElement) {
            this.audioElement.muted = !this.audioElement.muted
        }
    }

    // Set the playback rate (speed)
    public setPlaybackRate(rate: number): void {
        if (this.audioElement) {
            this.audioElement.playbackRate = rate
        }
    }

    // Seek to a specific time in the track
    public seekTo(time: number): void {
        if (this.audioElement) {
            this.audioElement.currentTime = time
        }
    }

    // Add event listener for when the track ends
    public onTrackEnd(callback: () => void): () => void {
        this.trackEndCallbacks.push(callback)
        return () => {
            this.trackEndCallbacks = this.trackEndCallbacks.filter(
                (cb) => cb !== callback
            )
        }
    }

    // Get the current track time
    public getCurrentTime(): number {
        return this.audioElement?.currentTime ?? 0
    }

    // Get the duration of the current track
    public getDuration(): number {
        return this.audioElement?.duration ?? 0
    }

    /**
     * Occurs when the play method is requested.
     * @param callback
     */
    public onPlay = (callback: () => void): void => {
        if (this.audioElement) {
            this.audioElement.onplay = callback
        }
    }

    /**
     * Occurs when the pause method is requested.
     * @param callback
     */
    public onPause = (callback: () => void): void => {
        if (this.audioElement) {
            this.audioElement.onpause = callback
        }
    }

    /**
     * Set metadata for the Media Session API.
     * @param metadata - Object containing title, artist, album, and artwork.
     */
    public setMediaMetadata(metadata: {
        title: string
        artist: string
        album?: string
        artworkUrl: string
        artwork?: {
            src: string
            sizes: string
            type: string
        }[]
    }): void {
        if ('mediaSession' in navigator) {
            // Generate an array of artwork objects with different sizes
            const artwork = [
                { src: metadata.artworkUrl, sizes: '96x96', type: 'image/png' },
                {
                    src: metadata.artworkUrl,
                    sizes: '128x128',
                    type: 'image/png',
                },
                {
                    src: metadata.artworkUrl,
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: metadata.artworkUrl,
                    sizes: '256x256',
                    type: 'image/png',
                },
                {
                    src: metadata.artworkUrl,
                    sizes: '384x384',
                    type: 'image/png',
                },
                {
                    src: metadata.artworkUrl,
                    sizes: '512x512',
                    type: 'image/png',
                },
            ]

            // Set the media metadata
            navigator.mediaSession.metadata = new MediaMetadata({
                title: metadata.title,
                artist: metadata.artist,
                album: metadata.album,
                artwork: artwork,
            })
        }
    }

    /**
     * Set up Media Session actions (e.g., play, pause, skip next, skip previous).
     */
    public setupMediaSessionActions({
        onPlay,
        onPause,
        onSkipNext,
        onSkipPrevious,
    }: {
        onPlay: () => void
        onPause: () => void
        onSkipNext: () => void
        onSkipPrevious: () => void
    }): void {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.setActionHandler('play', onPlay)
            navigator.mediaSession.setActionHandler('pause', onPause)
            navigator.mediaSession.setActionHandler('nexttrack', onSkipNext)
            navigator.mediaSession.setActionHandler(
                'previoustrack',
                onSkipPrevious
            )
        }
    }

    public cleanupCache(): void {
        this.clearCachedState()
    }

    public getAudioElement(): HTMLAudioElement | undefined {
        return this.audioElement
    }
}

export const playerService = PlayerService.getInstance()

export default PlayerService
