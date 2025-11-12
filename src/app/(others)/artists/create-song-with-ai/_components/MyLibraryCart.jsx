import { useEffect, useRef } from 'react'
import { Tooltip } from '@heroui/react'
import Image from 'next/image'
import { HiDotsHorizontal } from 'react-icons/hi'

import { formatSecondsToMinutes } from '@/utils/func-utils'
import { PAUSE_ICON, PUBLISH_ICON } from '@/utils/icons'
import useApp from '@/hooks/useApp'

const MyLibraryCart = ({
    songDetails,
    isPlaying,
    onPlay,
    onEnded,
    version,
}) => {
    const { songGeneratedStatus } = useApp()
    const audioRef = useRef(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const handleEnded = () => {
            // When song ends, trigger parent to set playingId = null
            if (onEnded) onEnded()
        }

        audio.addEventListener('ended', handleEnded)

        // handle play/pause safely
        const playAudio = async () => {
            try {
                await audio.play()
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.warn('Playback failed:', error)
                }
            }
        }

        if (isPlaying) {
            playAudio()
        } else {
            if (!audio.paused) {
                audio.pause()
                audio.currentTime = 0
            }
        }

        return () => {
            audio.removeEventListener('ended', handleEnded)
            if (!audio.paused) {
                audio.pause()
            }
        }
    }, [isPlaying, onEnded])

    return (
        <div className='relative my-6'>
            <div className='flex space-x-2'>
                <div className='relative w-1/4'>
                    {version && (
                        <button className='absolute -top-5 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#BB40C1] bg-transparent text-center leading-7 transition'>
                            <p className='bg-[linear-gradient(91.57deg,#D344C9_1.33%,#2D2694_76.47%),linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2))] bg-clip-text text-xs text-transparent'>{`V${version}`}</p>
                        </button>
                    )}

                    {/* Song image */}
                    <img
                        src={songDetails?.image_url || '/images/album/1.webp'}
                        alt='Artist'
                        loading='lazy'
                        className='relative z-0 h-full w-full rounded-2xl object-cover'
                    />

                    {/* Play/Pause Button */}
                    <button
                        onClick={onPlay}
                        className='absolute -bottom-4 left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center leading-7 transition'>
                        {isPlaying ? (
                            <Image
                                src={PAUSE_ICON?.src}
                                height={10}
                                width={10}
                                alt='Click to Pause'
                            />
                        ) : (
                            <svg
                                width='10'
                                height='10'
                                viewBox='0 0 10 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='fill-current text-[#4D41FA] group-hover:text-black'>
                                <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z' />
                            </svg>
                        )}
                    </button>

                    {/* Hidden Audio Element */}
                    <audio
                        ref={audioRef}
                        src={
                            songGeneratedStatus === 'pending'
                                ? songDetails?.stream_audio_url
                                : songDetails?.audio_url
                        }
                        preload='none'
                    />
                </div>

                {/* Song Info */}
                <div className='w-3/4'>
                    <div className='mb-3 flex items-start justify-start gap-2'>
                        <div className='w-4/5'>
                            <h3 className='line-clamp-1 w-full text-sm'>
                                {songDetails?.title}
                            </h3>
                            <p className='line-clamp-2 w-full text-left text-[10px] text-[#9D9D9D]'>
                                An anthem of {songDetails?.tags}
                            </p>
                        </div>
                        {songDetails?.duration && (
                            <div className='w-1/5'>
                                <p className='text-xs text-white'>
                                    {formatSecondsToMinutes(
                                        songDetails?.duration
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center justify-between pr-2'>
                        <Tooltip content='Work in progress'>
                            <button className='rounded-3xl border border-[#8E8E8E] bg-[#1A0F1E] px-3 py-0.5'>
                                <Image
                                    src={PUBLISH_ICON}
                                    alt='Click to publish'
                                    height={12}
                                    width={12}
                                />
                            </button>
                        </Tooltip>
                        <Tooltip content='Work in progress'>
                            <button>
                                <HiDotsHorizontal fill='#B93FC0' size={20} />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLibraryCart
