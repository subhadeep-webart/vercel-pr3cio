'use client'

import { useCallback, useEffect, useState } from 'react'
import { updateSongPlayCount } from '@/services/api/song-api'
import { playerService } from '@/services/player-service'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Image,
    Slider,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiHeart, PiHeartFill } from 'react-icons/pi'
import {
    TbArrowsShuffle,
    TbHeart,
    TbHeartFilled,
    TbPlayerPauseFilled,
    TbPlayerPlayFilled,
    TbPlayerSkipBackFilled,
    TbPlayerSkipForwardFilled,
    TbRepeat,
    TbRepeatOff,
    TbRepeatOnce,
} from 'react-icons/tb'

import { ApiResponse } from '@/models/common'
import queryConstants from '@/constants/query-constants'
import { formatPlayCount, formatTrackTime } from '@/utils/func-utils'
import { getImageColors } from '@/utils/image-colors'
import useApp from '@/hooks/useApp'
import usePlayer from '@/hooks/usePlayer'

import Marquee from '../ui/marquee'

export default function MobilePlayer() {
    const [backgroundColor, setBackgroundColor] = useState<string>()
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const player = usePlayer()
    const { modal, setModal } = useApp()

    const { mutate: updateSongCountMutate } = useMutation({
        mutationKey: [queryConstants.songCount],
        mutationFn: updateSongPlayCount,
    })

    useEffect(() => {
        setBackgroundColor(undefined)
        getImageColors(player.activeTrack?.artwork ?? '')
            .then((colors) => {
                if (colors.length) {
                    setBackgroundColor(colors[0])
                }
            })
            .catch((error) => {})
    }, [player.activeTrack?.artwork])

    const updateSongCount = useCallback(() => {
        if (!player.activeTrack?._id) return
        updateSongCountMutate(player.activeTrack?._id)
    }, [player.activeTrack?._id, updateSongCountMutate])

    useEffect(() => {
        let animationFrame: number
        let hasUpdatedCount = false
        const updateTime = (currentTime: number, duration: number) => {
            animationFrame = requestAnimationFrame(() => {
                setCurrentTime(currentTime)
                setDuration((prev) => (prev !== duration ? duration : prev))
            })
            if (
                !hasUpdatedCount &&
                duration > 0 &&
                currentTime / duration >= 0.3
            ) {
                hasUpdatedCount = true
                updateSongCount()
            }
        }

        playerService.onTimeUpdate(updateTime)

        return () => {
            playerService.onTimeUpdate(() => {})
            cancelAnimationFrame(animationFrame)
        }
    }, [player.activeTrack?._id, updateSongCount])

    const handleClose = () => {
        setModal('none')
    }

    return (
        <Drawer
            isOpen={modal === 'mobile-player'}
            placement='bottom'
            size='full'
            onOpenChange={handleClose}
            hideCloseButton
            scrollBehavior='outside'
            className='bg-gradient-to-t from-background/70 to-transparent'>
            <DrawerContent
                className='grid grid-rows-9 bg-primary'
                style={{ backgroundColor }}>
                <DrawerHeader className='row-span-1 flex items-center justify-between px-3 py-3'>
                    <Button isIconOnly variant='light' onPress={handleClose}>
                        <IoIosArrowDown className='text-2xl' />
                    </Button>
                    {/* <p className='text-body1'>Playing from Album</p> */}
                    <Button isIconOnly variant='light'>
                        <HiOutlineDotsVertical className='text-2xl' />
                    </Button>
                </DrawerHeader>

                <DrawerBody className='row-span-5 flex flex-col items-center'>
                    <Image
                        alt='Song Thumbnail'
                        src={player.activeTrack?.artwork}
                        className='h-96 w-full object-cover'
                        classNames={{
                            wrapper: 'my-auto min-w-full',
                        }}
                        shadow='sm'
                    />
                </DrawerBody>
                <DrawerFooter className='row-span-3 flex flex-col justify-start gap-4'>
                    <div className='grid grid-cols-9 items-start'>
                        <div className='col-span-8'>
                            <Marquee
                                classNames={{ text: 'text-body1' }}
                                speed={0.5}
                                pauseDuration={700}>
                                {player.activeTrack?.title}
                            </Marquee>
                            <p className='text-body3 truncate capitalize text-foreground/80'>
                                {player.activeTrack?.artist}
                            </p>
                            <p className='text-body3 flex items-center gap-1 text-foreground/80'>
                                <FaHeadphonesAlt />
                                <span>
                                    {formatPlayCount(
                                        player.activeTrack?.play_count
                                    )}
                                </span>
                            </p>
                        </div>
                        <Button
                            className='col-span-1'
                            isIconOnly
                            radius='full'
                            variant='light'
                            onPress={() => {}}>
                            {player.activeTrack?.liked ? (
                                <PiHeartFill className='text-2xl text-danger' />
                            ) : (
                                <PiHeart className='text-2xl' />
                            )}
                        </Button>
                    </div>
                    <div className='relative w-full'>
                        <Slider
                            aria-label='Player progress'
                            color='foreground'
                            value={currentTime}
                            maxValue={duration}
                            size='sm'
                            onChange={(value) =>
                                setCurrentTime(value as number)
                            }
                            onChangeEnd={(value) =>
                                playerService.seekTo(value as number)
                            }
                        />
                        <span className='text-body3 absolute -bottom-5 left-0 text-foreground/80'>
                            {formatTrackTime(currentTime)}
                        </span>
                        <span className='text-body3 absolute -bottom-5 right-0 text-foreground/80'>
                            {formatTrackTime(duration)}
                        </span>
                    </div>
                    <div className='mt-3 flex w-full items-center justify-between'>
                        <Button isIconOnly radius='full' variant='light'>
                            <TbArrowsShuffle className='text-xl' />
                        </Button>
                        <Button
                            isIconOnly
                            radius='full'
                            variant='light'
                            onPress={player.skipPrevious}>
                            <TbPlayerSkipBackFilled className='text-2xl' />
                        </Button>
                        <Button
                            isIconOnly
                            radius='full'
                            variant='solid'
                            size='lg'
                            isLoading={player.status === 'loading'}
                            onPress={player.togglePlayback}>
                            {player.status === 'playing' ? (
                                <TbPlayerPauseFilled className='text-2xl' />
                            ) : (
                                <TbPlayerPlayFilled className='text-2xl' />
                            )}
                        </Button>
                        <Button
                            isIconOnly
                            radius='full'
                            variant='light'
                            onPress={player.skipNext}>
                            <TbPlayerSkipForwardFilled className='text-2xl' />
                        </Button>
                        <Button isIconOnly radius='full' variant='light'>
                            <TbRepeat className='text-xl' />
                        </Button>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
