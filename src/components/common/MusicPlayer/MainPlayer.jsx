"use client"

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

import { log } from 'util'
import { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import {
    updateSongPlayCount,
    updateUserSongPlayCount,
} from '@/services/api/song-api'
import { playerService } from '@/services/player-service'
import { Image } from '@heroui/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import useAuth from '@/hooks/useAuth'
import usePlayer from '@/hooks/usePlayer'

// import AudioDurationSlider from './AudioDurationSlider'
// import MediaControls from './MediaControls'
// import VolumeControl from './VolumeControl'
import TrackDetails from './TrackDetails'
import VolumeControl from '@/app/(others)/artists/_components/VolumeControl'
import { PAUSE_ICON } from '@/utils/icons'
import MediaControls from './MediaControl'
import AudioDurationSlider from '@/app/(others)/artists/_components/AudioDurationSlider'
import MainAlbumTitle from "./MainAlbumTitle";
import MainPlayerControl from "./MainPlayerControl";
import MusicAlbumCard from "./MusicAlbumCard";

const MainPlayer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    };


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

    const { data: musicData, status, refetch } = useQuery({
        queryKey: [queryConstants.getSongs, true],
        queryFn: () =>
            getSongs({
                page: 1,
                limit: 10,
                is_trending: true,
            }),
        keepPreviousData: true, // Optional: helps keep old data while fetching new
    });

    const musics = useMemo(() => {
        return musicData?.data ?? [];
    }, [musicData]);

    const { mutate: updateUserSongCountMutate } = useMutation({
        mutationKey: [queryConstants.userSongCount],
        mutationFn: updateUserSongPlayCount,
        onSuccess: (data) => {
            player.play()
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
            playerService.onTimeUpdate(() => { })
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

    const formatTime = (val) => {
        const mins = Math.floor(val / 60)
        const secs = Math.floor(val % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <div className="mx-1">
                    <button onClick={handleOpen}>
                        <i className="bi bi-arrows-fullscreen"></i>
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} size={"full"} onClose={onClose} hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                            <ModalBody>
                                <div id="default-modal" tabIndex="-1" aria-hidden="true"
                                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative p-4 w-full max-w-screen max-h-full">
                                        <div className="relative shadow-sm dark:bg-gray-700">
                                            <div className="space-y-4">
                                                <div
                                                    className=" w-full m-auto border-[#878787] border-1 border-solid rounded-[1.75rem] px-15 py-10 bg-cover bg-no-repeat  bg-[url('/images/player-bg.webp')] relative">

                                                    <button type="button"
                                                        className="text-gray-400 w-[2.38rem] flex-[0_0_2.38rem] h-[2.38rem] rounded-full flex justify-center items-center border-[#878787] border-1 border-solid absolute top-10 right-10 cursor-pointer"
                                                        onClick={onClose}>
                                                        <span className="clodePopup ">
                                                            <img src="/images/player/close.webp" alt="cover" loading="lazy"
                                                                className="inline-block" />
                                                        </span>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>

                                                    <div
                                                        className="musicPlayer md:inline-flex justify-between items-center hidden sm:hidden md:ml-4 xl:ml-8 2xl:ml-12">
                                                        {player?.activeTrack && <TrackDetails trackDetails={player.activeTrack} />}
                                                    </div>
                                                    <div
                                                        className="mainPlayer w-full relative text-center after:content-[''] after:absolute after:w-full after:max-w-[46.00rem] after:h-[14.88rem] after:w-full after:bottom-[-3rem] after:left-0 after:right-0 after:z-0 after:rounded-[100%]  after:border-[rgba(255,255,255,0.7)] after:border-[0.16rem] after:border-solid after:m-auto after:shadow-[0_4px_15px_rgba(255,255,255,0.3)] mb-20 mt-10">
                                                        {musics?.slice(0, 10).map((item, index) => {
                                                            return (
                                                                <MusicAlbumCard musicDetails={item} index={index} key={item?._id} />
                                                            );
                                                        })}
                                                        <div className="innerWap w-full max-w-[15.63rem] m-auto relative player  z-1">
                                                            {/* <img src="/images/player/1.webp" alt="cover" loading="lazy"
                                                                className="m-auto rounded-[0.75rem] max-w[12.50rem] h-[15.63rem] object-cover" />
                                                            <h2 className="text-sm font-semibold mt-3">Maecenas biben</h2>
                                                            <p className="truncate text-xs w-[12.25rem] m-auto text-[#C3C3C3]">Quisque isus laoreet,
                                                                risus </p> */}
                                                            {player?.activeTrack && <MainAlbumTitle trackDetails={player.activeTrack} />}
                                                            {/* <div className="w-full relative overflow-hidden bg-white h-0.5 mt-4">
                                                                <span className="absolute left-0 top-0 w-30 bg-[#ff2663]  h-0.5"></span>
                                                            </div> */}
                                                            {/* <div className="w-full relative overflow-hidden h-4 mt-4"> */}
                                                            <AudioDurationSlider
                                                                currentTime={currentTime}
                                                                setCurrentTime={setCurrentTime}
                                                                playerService={playerService}
                                                                duration={duration}
                                                            />
                                                            {/* </div> */}

                                                            <div className="flex justify-between w-full mt-1">
                                                                <span className="text-xs text-[#C3C3C3]">{formatTime(currentTime)}</span>
                                                                <span className="text-xs text-[#C3C3C3]">{formatTime(duration)}</span>
                                                            </div>
                                                            <MainPlayerControl isPlaying={player.status === 'playing'}
                                                                isLoading={player.status === 'loading'}
                                                                onPlayPause={player.togglePlayback}
                                                                playerStatus={player.status}
                                                                onNext={player.skipNext}
                                                                onPrevious={player.skipPrevious} />

                                                            {/* <audio id="myAudio2" className="hidden myAudio" src="/music.mp3"></audio> */}
                                                        </div>

                                                    </div>
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

export default MainPlayer;