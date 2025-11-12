'use client'

import { log } from 'util'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import AudioDurationSlider from '@/app/(others)/artists/_components/AudioDurationSlider'
import VolumeControl from '@/app/(others)/artists/_components/VolumeControl'
import {
    updateSongPlayCount,
    updateUserSongPlayCount,
} from '@/services/api/song-api'
import { playerService } from '@/services/player-service'
import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@heroui/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { BiShuffle } from 'react-icons/bi'
import { FaMusic, FaPlay, FaRegFolder } from 'react-icons/fa'
import { FiPlus, FiPlusCircle } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { MdOutlineDownloadForOffline } from 'react-icons/md'
import { TiPlus } from 'react-icons/ti'

import queryConstants from '@/constants/query-constants'
import { PAUSE_ICON } from '@/utils/icons'
import useAuth from '@/hooks/useAuth'
import usePlayer from '@/hooks/usePlayer'

import MainAlbumTitle from './MainAlbumTitle'
import MainPlayerControl from './MainPlayerControl'
import MediaControls from './MediaControl'
import MusicAlbumCard from './MusicAlbumCard'
import MusicPlayerMain from './MusicPlayerMain'
// import AudioDurationSlider from './AudioDurationSlider'
// import MediaControls from './MediaControls'
// import VolumeControl from './VolumeControl'
import TrackDetails from './TrackDetails'

const MainPlayer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpen = () => {
        onOpen()
    }

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

    const {
        data: musicData,
        status,
        refetch,
    } = useQuery({
        queryKey: [queryConstants.getSongs, true],
        queryFn: () =>
            getSongs({
                page: 1,
                limit: 10,
                is_trending: true,
            }),
        keepPreviousData: true, // Optional: helps keep old data while fetching new
    })

    const musics = useMemo(() => {
        return musicData?.data ?? []
    }, [musicData])

    const { mutate: updateUserSongCountMutate } = useMutation({
        mutationKey: [queryConstants.userSongCount],
        mutationFn: updateUserSongPlayCount,
        onSuccess: (data) => {
            if (isOpen) {
                player.play()
            }
            // console.log("data", data)
            // if (data?.limitReached) {
            //     if (data.data.song.isSongDownLoad) {
            //         player.play()
            //     } else {
            //         player.pause()
            //         setPlayDemo(true)
            //         setDemoUrl(data.data.song.demoAudioUrl)
            //         setImagUrl(data.data.song.imageUrl)
            //     }
            // } else {
            //     // Directly play the main audio if user is subscribed or no limit is reached
            //     player.play()
            // }
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
        if (isSubscribed || !player.activeTrack?._id || !isOpen) return
        updateUserSongCount()
    }, [
        player.activeTrack?._id,
        updateUserSongCount,
        user?.isSubscribed,
        isOpen,
    ])

    useEffect(() => {
        let animationFrame
        let hasUpdatedCount = false

        const updateTime = (currTime, dur) => {
            if (!isOpen) return

            animationFrame = requestAnimationFrame(() => {
                setCurrentTime(currTime)
                setDuration((prev) => (prev !== dur ? dur : prev))
            })

            if (!hasUpdatedCount && dur > 0 && currTime / dur >= 0.3) {
                hasUpdatedCount = true
                updateSongCount()
            }
        }

        if (!playDemo && isOpen) {
            playerService.onTimeUpdate(updateTime)
        }

        return () => {
            playerService.onTimeUpdate(() => {})
            cancelAnimationFrame(animationFrame)
        }
    }, [player.activeTrack?._id, updateSongCount, playDemo, isOpen])

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
    }, [playDemo, player, isOpen])

    const handleDemoPlayPause = () => {
        if (demoAudioRef.current) {
            if (demoAudioRef.current.paused) {
                demoAudioRef.current.play()
            } else {
                demoAudioRef.current.pause()
            }
        }
    }

    const formatTime = (val) => {
        const mins = Math.floor(val / 60)
        const secs = Math.floor(val % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <>
            <div className='flex flex-wrap gap-3'>
                <div className='mx-1'>
                    <button
                        onClick={handleOpen}
                        disabled
                        className='cursor-not-allowed'
                    >
                        <i className='bi bi-arrows-fullscreen'></i>
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                size={'full'}
                onClose={onClose}
                hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                            <ModalBody>
                                <div
                                    id='default-modal'
                                    tabIndex='-1'
                                    aria-hidden='true'
                                    className='fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-hidden md:inset-0'>
                                    <div className='max-w-screen relative max-h-full w-full p-4'>
                                        <div className='relative shadow-sm dark:bg-gray-700'>
                                            <div className='space-y-4'>
                                                <div className="px-15 relative m-auto w-full rounded-[1.75rem] border-1 border-solid border-[#878787] bg-[url('/images/player-bg.webp')] bg-cover bg-no-repeat py-10">
                                                    <button
                                                        type='button'
                                                        className='absolute right-2 top-1 flex h-[1.875rem] w-[1.875rem] flex-[0_0_1.875rem] cursor-pointer items-center justify-center rounded-full border border-solid border-[#878787] text-gray-400'
                                                        onClick={onClose}>
                                                        <span className='clodePopup'>
                                                            <img
                                                                src='/images/player/close.webp'
                                                                alt='close'
                                                                loading='lazy'
                                                                className='inline-block h-[0.9rem] w-[0.9rem]'
                                                            />
                                                        </span>
                                                        <span className='sr-only'>
                                                            Close modal
                                                        </span>
                                                    </button>

                                                    {/* <div className='musicPlayer hidden items-center justify-between sm:hidden md:ml-4 md:inline-flex xl:ml-8 2xl:ml-12'>
                                                        {player?.activeTrack && (
                                                            <TrackDetails
                                                                trackDetails={
                                                                    player.activeTrack
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="mainPlayer relative mb-20 mt-10 w-full text-center after:absolute after:bottom-[-3rem] after:left-0 after:right-0 after:z-0 after:m-auto after:h-[14.88rem] after:w-full after:max-w-[46.00rem] after:rounded-[100%] after:border-[0.16rem] after:border-solid after:border-[rgba(255,255,255,0.7)] after:shadow-[0_4px_15px_rgba(255,255,255,0.3)] after:content-['']">
                                                        {musics
                                                            ?.slice(0, 10)
                                                            .map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <MusicAlbumCard
                                                                            musicDetails={
                                                                                item
                                                                            }
                                                                            index={
                                                                                index
                                                                            }
                                                                            key={
                                                                                item?._id
                                                                            }
                                                                        />
                                                                    )
                                                                }
                                                            )}
                                                        <div className='innerWap player z-1 relative m-auto w-full max-w-[15.63rem]'>
                                                            <img src="/images/player/1.webp" alt="cover" loading="lazy" 
                                                                className="m-auto rounded-[0.75rem] max-w[12.50rem] h-[15.63rem] object-cover" />
                                                            <h2 className="text-sm font-semibold mt-3">Maecenas biben</h2>
                                                            <p className="truncate text-xs w-[12.25rem] m-auto text-[#C3C3C3]">Quisque isus laoreet,
                                                                risus </p>                  
                                                            {player?.activeTrack && (
                                                                <MainAlbumTitle
                                                                    trackDetails={
                                                                        player.activeTrack
                                                                    }
                                                                />
                                                            )}
                                                            <div className="w-full relative overflow-hidden bg-white h-0.5 mt-4">
                                                                <span className="absolute left-0 top-0 w-30 bg-[#ff2663]  h-0.5"></span>
                                                            </div>
                                                            <div className="w-full relative overflow-hidden h-4 mt-4">
                                                            <AudioDurationSlider
                                                                currentTime={
                                                                    currentTime
                                                                }
                                                                setCurrentTime={
                                                                    setCurrentTime
                                                                }
                                                                playerService={
                                                                    playerService
                                                                }
                                                                duration={
                                                                    duration
                                                                }
                                                            />
                                                            </div>
                                                            <div className='mt-1 flex w-full justify-between'>
                                                                <span className='text-xs text-[#C3C3C3]'>
                                                                    {formatTime(
                                                                        currentTime
                                                                    )}
                                                                </span>
                                                                <span className='text-xs text-[#C3C3C3]'>
                                                                    {formatTime(
                                                                        duration
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <MainPlayerControl
                                                                isPlaying={
                                                                    player.status ===
                                                                    'playing'
                                                                }
                                                                isLoading={
                                                                    player.status ===
                                                                    'loading'
                                                                }
                                                                onPlayPause={
                                                                    player.togglePlayback
                                                                }
                                                                playerStatus={
                                                                    player.status
                                                                }
                                                                onNext={
                                                                    player.skipNext
                                                                }
                                                                onPrevious={
                                                                    player.skipPrevious
                                                                }
                                                            />

                                                            <audio id="myAudio2" className="hidden myAudio" src="/music.mp3"></audio>
                                                        </div>
                                                    </div> */}

                                                    <MusicPlayerMain />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            {/* <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default MainPlayer
