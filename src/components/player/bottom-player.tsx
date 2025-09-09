'use client'

import { useEffect, useState } from 'react'
import { playerService } from '@/services/player-service'
import { Button, Card, CardBody, Image, Slider } from '@heroui/react'
import { PiHeart, PiHeartFill } from 'react-icons/pi'
import {
    TbHeart,
    TbHeartFilled,
    TbPlayerPauseFilled,
    TbPlayerPlayFilled,
} from 'react-icons/tb'

import { getImageColors } from '@/utils/image-colors'
import useApp from '@/hooks/useApp'
import usePlayer from '@/hooks/usePlayer'

import Marquee from '../ui/marquee'

export default function BottomPlayer() {
    const [backgroundColor, setBackgroundColor] = useState<string>()
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const player = usePlayer()
    const { setModal } = useApp()

    useEffect(() => {
        // Get the colors of the album thumbnail
        setBackgroundColor(undefined)
        getImageColors(player.activeTrack?.artwork ?? '')
            .then((colors) => {
                if (colors.length) {
                    setBackgroundColor(colors[0])
                }
            })
            .catch((error) => {})
    }, [player.activeTrack?.artwork])

    useEffect(() => {
        let animationFrame: number
        const updateTime = (currentTime: number, duration: number) => {
            animationFrame = requestAnimationFrame(() => {
                setCurrentTime(currentTime)
                setDuration((prev) => (prev !== duration ? duration : prev))
            })
        }

        playerService.onTimeUpdate(updateTime)

        return () => {
            playerService.onTimeUpdate(() => {})
            cancelAnimationFrame(animationFrame)
        }
    }, [])

    const handlePress = () => {
        setModal('mobile-player')
    }

    if (!player.activeTrack) {
        return null
    }

    return (
        <Card
            radius='sm'
            style={{ backgroundColor }}
            isPressable
            as='div'
            onPress={handlePress}
            shadow='lg'
            className='relative bg-primary/90 backdrop-blur'>
            <CardBody className='grid w-full grid-cols-12 gap-2 p-1'>
                <div className='col-span-2'>
                    <Image
                        radius='sm'
                        src={player.activeTrack?.artwork}
                        alt='Album Thumbnail'
                        className='h-12'
                        width={'100%'}
                    />
                </div>
                <div className='col-span-7 w-full'>
                    <Marquee
                        classNames={{ text: 'text-body1' }}
                        speed={0.5}
                        pauseDuration={700}>
                        {player.activeTrack?.title}
                    </Marquee>
                    <p className='text-body3 truncate text-foreground/80'>
                        Singer
                    </p>
                </div>

                <div className='col-span-3 flex items-center justify-end gap-2'>
                    <Button
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
                    <Button
                        isIconOnly
                        radius='full'
                        variant='light'
                        isLoading={player.status === 'loading'}
                        onPress={player.togglePlayback}>
                        {player.status === 'playing' ? (
                            <TbPlayerPauseFilled className='text-2xl' />
                        ) : (
                            <TbPlayerPlayFilled className='text-2xl' />
                        )}
                    </Button>
                </div>
            </CardBody>
            <Slider
                aria-label='Player progress'
                className='absolute -bottom-1.5 max-w-md'
                classNames={{
                    track: 'rounded-none h-0.5',
                }}
                color='foreground'
                value={currentTime}
                maxValue={duration}
                hideThumb={true}
                onChange={(value) => setCurrentTime(value as number)}
                onChangeEnd={(value) => playerService.seekTo(value as number)}
            />
        </Card>
    )
}
