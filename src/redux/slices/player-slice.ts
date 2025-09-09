import { playerService } from '@/services/player-service'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PlayerStatus, RepeatMode, Track } from '@/models/player'
import { arePlayListEqual, getSongUrl } from '@/utils/func-utils'

interface PlayerState {
    tracks: Track[]
    activeTrack: Track | null
    status: PlayerStatus
    volume: number
    playbackRate: number
    muted: boolean
    repeatMode: RepeatMode
    isShuffling: boolean
}

const initialState: PlayerState = {
    tracks: [],
    activeTrack: null,
    status: 'idle',
    volume: 1,
    playbackRate: 1,
    muted: false,
    repeatMode: 'Off',
    isShuffling: false,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        // Playback Controls
        toggleShuffle(state) {
            state.isShuffling = !state.isShuffling
        },

        skipToNext(state) {
            // If shuffle mode is enabled, pick a random track from the queue
            let currentTrackIndex = state.tracks.findIndex(
                (track) => track._id === state.activeTrack?._id
            )
            if (state.isShuffling) {
                currentTrackIndex = Math.floor(
                    Math.random() * state.tracks.length
                )
            } else {
                // Otherwise, just move to the next track
                currentTrackIndex =
                    (currentTrackIndex + 1) % state.tracks.length
            }

            // Get the next track from the queue
            const nextTrack = state.tracks[currentTrackIndex]

            state.activeTrack = nextTrack
            playerService.setTrack(getSongUrl(nextTrack?._id))
            playerService.play()
            playerService.setMediaMetadata({
                title: nextTrack.title,
                artist: nextTrack.artist,
                artworkUrl: nextTrack.artwork ?? '',
            })
        },

        skipToPrev(state) {
            // If shuffle mode is enabled, pick a random track from the queue
            let currentTrackIndex = state.tracks.findIndex(
                (track) => track._id === state.activeTrack?._id
            )
            if (state.isShuffling) {
                currentTrackIndex = Math.floor(
                    Math.random() * state.tracks.length
                )
            } else {
                // Otherwise, just move to the previous track
                currentTrackIndex =
                    (currentTrackIndex - 1 + state.tracks.length) %
                    state.tracks.length
            }

            // Get the previous track from the queue
            const prevTrack = state.tracks[currentTrackIndex]

            state.activeTrack = prevTrack
            playerService.setTrack(getSongUrl(prevTrack?._id))
            playerService.play()
            playerService.setMediaMetadata({
                title: prevTrack.title,
                artist: prevTrack.artist,
                artworkUrl: prevTrack.artwork ?? '',
            })
        },

        // Volume Control
        setVolume(state, action: PayloadAction<number>) {
            state.volume = Math.min(1, Math.max(0, action.payload))
            playerService.setVolume(state.volume)
        },
        toggleMute(state) {
            state.muted = !state.muted
            playerService.mute()
        },

        // Playback Rate
        setPlaybackRate(state, action: PayloadAction<number>) {
            state.playbackRate = action.payload
            playerService.setPlaybackRate(state.playbackRate)
        },

        // Seek
        seekTo(state, action: PayloadAction<number>) {
            if (state.activeTrack) {
                state.activeTrack.duration = Math.min(
                    action.payload,
                    state.activeTrack.duration!
                )
                playerService.seekTo(action.payload)
            }
        },

        playTrack: (
            state,
            action: PayloadAction<{ track: Track; tracks?: Track[] }>
        ) => {
            const { track, tracks } = action.payload

            // Check if we need to update the entire playlist
            if (tracks && !arePlayListEqual(state.tracks, tracks)) {
                state.tracks = tracks
            }

            // Set the selected track as active and play it
            state.activeTrack = track
            playerService.setTrack(getSongUrl(track?._id))
            playerService.play()
            playerService.setMediaMetadata({
                title: track.title,
                artist: track.artist,
                artworkUrl: track.artwork ?? '',
            })
        },

        updateStatus: (state, action: PayloadAction<PlayerStatus>) => {
            state.status = action.payload
        },

        stop: (state) => {
            state.activeTrack = null
            state.status = 'idle'
            state.tracks = []
            playerService.stop()
        },
    },
})

export const {
    skipToNext,
    skipToPrev,
    setVolume,
    toggleMute,
    setPlaybackRate,
    seekTo,
    playTrack,
    toggleShuffle,
    updateStatus,
    stop,
} = playerSlice.actions

export default playerSlice.reducer
