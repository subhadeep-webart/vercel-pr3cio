'use client'

import { log } from 'util'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
    updateSongPlayCount,
    updateUserSongPlayCount,
} from '@/services/api/song-api'
import { playerService } from '@/services/player-service'
import { Image } from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import useAuth from '@/hooks/useAuth'
import usePlayer from '@/hooks/usePlayer'

import AudioDurationSlider from './AudioDurationSlider'
import MediaControls from './MediaControls'
import VolumeControl from './VolumeControl'

function DesktopPlayer() {
    const player = usePlayer()
    const [currentTime, setCurrentTime] = useState(0)
    const [currentTime1, setCurrentTime1] = useState(0)
    const [playDemo, setPlayDemo] = useState(false)
    const [demoUrl, setDemoUrl] = useState(null)
    const [duration, setDuration] = useState(0)
    const [duration1, setDuration1] = useState(0)
    const [imgUrl, setImagUrl] = useState('')
    const { user } = useAuth()
    const router = useRouter()
    const demoAudioRef = useRef(null)

    const { mutate: updateSongCountMutate } = useMutation({
        mutationKey: [queryConstants.songCount],
        mutationFn: updateSongPlayCount,
    })

    const { mutate: updateUserSongCountMutate } = useMutation({
        mutationKey: [queryConstants.userSongCount],
        mutationFn: updateUserSongPlayCount,
        onSuccess: (data) => {
            // console.log("data", data)
            if (data?.limitReached) {
                if (data.data.song.isSongDownLoad) {
                    player.play()
                } else {
                    player.pause()
                    setPlayDemo(true)
                    setDemoUrl(data.data.song.demoAudioUrl)
                    setImagUrl(data.data.song.imageUrl)
                }
            } else {
                // Directly play the main audio if user is subscribed or no limit is reached
                player.play()
            }
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })
    useEffect(() => {
        if (demoAudioRef.current) {
            demoAudioRef.current.onended = () => {
                if (!user?.isSubscribed) {
                    // If the user is not subscribed, start the main track after demo ends
                    setPlayDemo(false)
                    setDemoUrl(null)
                    player.play() // This will start playing the main audio
                } else {
                    // If the user is subscribed, just start playing the main audio
                    player.play() // This will start playing the main audio
                }
            }
        }
    }, [demoAudioRef, user?.isSubscribed, player])
    const updateSongCount = useCallback(() => {
        if (!player.activeTrack?._id) return
        updateSongCountMutate(player.activeTrack._id)
    }, [player.activeTrack?._id, updateSongCountMutate])

    const updateUserSongCount = useCallback(() => {
        if (!player.activeTrack?._id) return
        updateUserSongCountMutate(player.activeTrack._id)
    }, [player.activeTrack?._id, updateUserSongCountMutate])

    useEffect(() => {
        const isSubscribed = user?.isSubscribed || false
        if (isSubscribed || !player.activeTrack?._id) return
        updateUserSongCount()
    }, [player.activeTrack?._id, updateUserSongCount, user?.isSubscribed])

    useEffect(() => {
        let animationFrame
        let hasUpdatedCount = false

        const updateTime = (currTime, dur) => {
            animationFrame = requestAnimationFrame(() => {
                setCurrentTime(currTime)
                setDuration((prev) => (prev !== dur ? dur : prev))
            })

            if (!hasUpdatedCount && dur > 0 && currTime / dur >= 0.3) {
                hasUpdatedCount = true
                updateSongCount()
            }
        }

        if (!playDemo) {
            playerService.onTimeUpdate(updateTime)
        }

        return () => {
            playerService.onTimeUpdate(() => {})
            cancelAnimationFrame(animationFrame)
        }
    }, [player.activeTrack?._id, updateSongCount, playDemo])

    useEffect(() => {
        if (playDemo && demoAudioRef.current) {
            const audio = demoAudioRef.current
            const updateDemoTime = () => {
                setCurrentTime1(audio.currentTime)
                setDuration1(audio.duration || 0)
            }

            const handleDemoEnded = () => {
                setPlayDemo(false)
                setDemoUrl(null)
                setCurrentTime1(0)
                setDuration1(0)
                if (player.activeTrack) {
                    player.togglePlayback() // Resume the active track
                }
            }

            audio.addEventListener('timeupdate', updateDemoTime)
            audio.addEventListener('ended', handleDemoEnded)

            return () => {
                audio.removeEventListener('timeupdate', updateDemoTime)
                audio.removeEventListener('ended', handleDemoEnded)
            }
        }
    }, [playDemo, player])

    const handleDemoPlayPause = () => {
        if (demoAudioRef.current) {
            if (demoAudioRef.current.paused) {
                demoAudioRef.current.play()
            } else {
                demoAudioRef.current.pause()
            }
        }
    }
    return (
        <>
            {!playDemo ? (
                <>
                    {player.activeTrack && (
                        <div className='sticky bottom-0 left-0 right-0 z-10 hidden rounded-[100px] bg-[linear-gradient(109.46deg,_rgba(196,_196,_196,_0.02)_1.57%,_rgba(201,_201,_201,_0.16)_100%)] px-8 py-6 backdrop-blur-[11.7263px] lg:block'>
                            <div className='flex items-center gap-7 text-white'>
                                <Image
                                    src={player.activeTrack?.artwork}
                                    alt='Now Playing'
                                    className='aspect-[128/61] max-w-[128px] rounded-[100px] object-cover'
                                />
                                <VolumeControl />
                                <MediaControls
                                    isPlaying={player.status === 'playing'}
                                    isLoading={player.status === 'loading'}
                                    onPlayPause={player.togglePlayback}
                                    playerStatus={player.status}
                                    onNext={player.skipNext}
                                    onPrevious={player.skipPrevious}
                                />
                                <AudioDurationSlider
                                    currentTime={currentTime}
                                    setCurrentTime={setCurrentTime}
                                    playerService={playerService}
                                    duration={duration}
                                />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    {' '}
                    {setDemoUrl && (
                        <>
                            <div className='sticky bottom-0 left-0 right-0 z-10 hidden rounded-[100px] bg-[linear-gradient(109.46deg,_rgba(196,_196,_196,_0.02)_1.57%,_rgba(201,_201,_201,_0.16)_100%)] px-8 py-6 backdrop-blur-[11.7263px] lg:block'>
                                <div className='flex items-center gap-7 text-white'>
                                    <Image
                                        src={imgUrl}
                                        alt='Demo Playing'
                                        className='aspect-[128/61] max-w-[128px] rounded-[100px] object-cover'
                                    />
                                    <VolumeControl />
                                    <MediaControls
                                        isPlaying={
                                            !demoAudioRef.current?.paused
                                        }
                                        isLoading={false}
                                        onPlayPause={handleDemoPlayPause}
                                        playerStatus={
                                            demoAudioRef.current?.paused
                                                ? 'paused'
                                                : 'playing'
                                        }
                                        onNext={() => {}} // No next
                                        onPrevious={() => {}} // No previous
                                    />
                                    <AudioDurationSlider
                                        currentTime={currentTime1}
                                        setCurrentTime1={(time) => {
                                            if (demoAudioRef.current) {
                                                demoAudioRef.current.currentTime =
                                                    time
                                                setCurrentTime1(time)
                                            }
                                            if (currentTime1 === duration1) {
                                                player.play()
                                            }
                                        }}
                                        playerService={null}
                                        duration={duration1}
                                    />
                                    <audio
                                        ref={demoAudioRef}
                                        src={demoUrl}
                                        autoPlay
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default DesktopPlayer
