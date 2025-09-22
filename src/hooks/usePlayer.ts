"use client"

import { useEffect } from 'react'
import {
    playTrack as playTrackAction,
    setPlaybackRate,
    setVolume,
    skipToNext,
    skipToPrev,
    stop as stopAction,
    toggleMute,
    toggleShuffle as toggleShuffleAction,
    updateStatus,
} from '@/redux/slices/player-slice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { playerService } from '@/services/player-service'

import { Track } from '@/models/player'

// Update with your slice path

const usePlayer = () => {
    const dispatch = useAppDispatch()
    const player = useAppSelector((state) => state.player)

    useEffect(() => {
        playerService.onPlay(() => {
            dispatch(updateStatus('playing'))
        })
        playerService.onLoading((isLoading) => {
            dispatch(updateStatus(isLoading ? 'loading' : 'playing'))
        })
        playerService.onError((error) => {
            dispatch(updateStatus('error'))
        })
        playerService.onPause(() => {
            dispatch(updateStatus('paused'))
        })
        playerService.onTrackEnd(() => {
            dispatch(skipToNext())
        })

        playerService.setupMediaSessionActions({
            onPlay: () => playerService.play(),
            onPause: () => playerService.pause(),
            onSkipNext: () => dispatch(skipToNext()),
            onSkipPrevious: () => dispatch(skipToPrev()),
        })
    }, [dispatch])

    // Playback Controls
    const play = () => {
        if (player.activeTrack) {
            playerService.play()
        }
    }

    const playTrack = (data: { track: Track; tracks?: Track[] }) => {
        dispatch(playTrackAction(data))
    }

    const pause = () => {
        playerService.pause()
    }

    const stop = async () => {
        dispatch(stopAction())
    }

    const togglePlayback = () => {
        if (player.status === 'playing') {
            playerService.pause()
        } else {
            if (player.activeTrack) {
                playerService.play()
            }
        }
    }

    const toggleShuffle = () => {
        dispatch(toggleShuffleAction())
    }

    const skipNext = () => {
        dispatch(skipToNext())
    }

    const skipPrevious = () => {
        dispatch(skipToPrev())
    }

    // Volume Controls
    const setPlayerVolume = (volume: number) => {
        dispatch(setVolume(volume))
    }

    const togglePlayerMute = () => {
        dispatch(toggleMute())
    }

    // Playback Rate
    const setPlayerPlaybackRate = (rate: number) => {
        dispatch(setPlaybackRate(rate))
    }

    const isCurrentAlbum = (albumId: string) =>
        player.activeTrack?.album === albumId
    const isCurrentSong = (songId: string) => player.activeTrack?._id === songId

    const clearCachedState = () => {
        playerService.cleanupCache()
    }

    // Return all features
    return {
        ...player,
        play,
        playTrack,
        pause,
        stop,
        togglePlayback,
        skipNext,
        skipPrevious,
        setPlayerVolume,
        togglePlayerMute,
        setPlayerPlaybackRate,
        toggleShuffle,
        isCurrentAlbum,
        isCurrentSong,
        clearCachedState,
    }
}

export default usePlayer
