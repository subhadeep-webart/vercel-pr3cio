'use client'

import { useEffect, useRef, useState } from 'react'
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa'

const songs = [
    {
        id: 1,
        title: 'Love Me Like You Do',
        artist: 'Jonsan Doe',
        cover: '/covers/cover1.jpg',
        audio: '/audios/song1.mp3',
    },
    {
        id: 2,
        title: 'Bangels',
        artist: 'Artist 2',
        cover: '/covers/cover2.jpg',
        audio: '/audios/song2.mp3',
    },
    {
        id: 3,
        title: 'This Year',
        artist: 'Artist 3',
        cover: '/covers/cover3.jpg',
        audio: '/audios/song3.mp3',
    },
    {
        id: 4,
        title: 'Song Name',
        artist: 'Artist 4',
        cover: '/covers/cover4.jpg',
        audio: '/audios/song4.mp3',
    },
]

export default function MusicPlayer() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const audioRef = useRef(null)
    const canvasRef = useRef(null)
    const analyserRef = useRef(null)
    const animationRef = useRef(null)

    const currentSong = songs[currentIndex]

    const playSong = (index) => {
        setCurrentIndex(index)
        setIsPlaying(true)
        setTimeout(() => audioRef.current.play(), 100)
    }

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % songs.length
        playSong(nextIndex)
    }

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length
        playSong(prevIndex)
    }

    // Format mm:ss
    const formatTime = (time) => {
        if (isNaN(time)) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    // Track progress
    useEffect(() => {
        const audio = audioRef.current

        const updateProgress = () => {
            setCurrentTime(audio.currentTime)
            setDuration(audio.duration)
        }

        audio.addEventListener('timeupdate', updateProgress)
        audio.addEventListener('loadedmetadata', updateProgress)

        return () => {
            audio.removeEventListener('timeupdate', updateProgress)
            audio.removeEventListener('loadedmetadata', updateProgress)
        }
    }, [])

    const handleSeek = (e) => {
        const seekTime = e.target.value
        audioRef.current.currentTime = seekTime
        setCurrentTime(seekTime)
    }

    // 🎵 Gradient Waveform Visualizer
    useEffect(() => {
        const audio = audioRef.current
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)()
        const source = audioCtx.createMediaElementSource(audio)
        const analyser = audioCtx.createAnalyser()

        analyser.fftSize = 256
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        source.connect(analyser)
        analyser.connect(audioCtx.destination)

        analyserRef.current = analyser

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, '#ff00cc') // pink
        gradient.addColorStop(1, '#3333ff') // purple

        const draw = () => {
            animationRef.current = requestAnimationFrame(draw)
            analyser.getByteFrequencyData(dataArray)

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const barWidth = (canvas.width / bufferLength) * 1.5
            let x = 0

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i]
                ctx.fillStyle = gradient
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)
                x += barWidth + 2
            }
        }

        draw()

        return () => {
            cancelAnimationFrame(animationRef.current)
            audioCtx.close()
        }
    }, [currentIndex])

    return (
        <>
            <div
                id='default-modal'
                tabindex='-1'
                aria-hidden='true'
                class='fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0'>
                <div class='max-w-screen relative max-h-full w-full p-4'>
                    <div class='relative shadow-sm dark:bg-gray-700'>
                        <div class='space-y-4'>
                            <div class="px-15 relative m-auto w-full rounded-[1.75rem] border-1 border-solid border-[#878787] bg-[url('/images/player-bg.webp')] bg-cover bg-no-repeat py-10">
                                <button
                                    type='button'
                                    class='absolute right-10 top-10 flex h-[2.38rem] w-[2.38rem] flex-[0_0_2.38rem] cursor-pointer items-center justify-center rounded-full border-1 border-solid border-[#878787] text-gray-400'
                                    data-modal-hide='default-modal'>
                                    <span class='clodePopup'>
                                        <img
                                            src='/images/player/close.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='inline-block'
                                        />
                                    </span>
                                    <span class='sr-only'>Close modal</span>
                                </button>

                                <div class='musicPlayer hidden items-center justify-between sm:hidden md:ml-4 md:inline-flex xl:ml-8 2xl:ml-12'>
                                    <span class='w-[3.25rem] flex-[0_0_3.25rem]'>
                                        <a href='#'>
                                            <img
                                                src='/images/player-icon/thumb.webp'
                                                alt='pr3cio-logo'
                                                loading='lazy'
                                                class='w-full rounded-[0.56rem]'
                                            />
                                        </a>
                                    </span>
                                    <div class='songInfo sm:hidden md:hidden lg:block lg:px-2 xl:px-3 2xl:px-5'>
                                        <p class='m-0'>
                                            <strong class='font-semibold text-white md:text-xs lg:text-xs xl:text-sm 2xl:text-sm'>
                                                love me like you do
                                            </strong>
                                        </p>
                                        <p class='font-normal text-[#A8A8A8] md:text-xs lg:text-xs xl:text-[0.75rem] 2xl:text-[0.75rem]'>
                                            By Jonsan Doe
                                        </p>
                                        <span class='inline-block'>
                                            <a
                                                href='#'
                                                class='text-[#C6FF00] md:text-xs lg:text-xs xl:text-[0.75rem] 2xl:text-[0.75rem]'>
                                                Follow
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div class="mainPlayer relative mb-20 mt-10 w-full text-center after:absolute after:bottom-[-3rem] after:left-0 after:right-0 after:z-0 after:m-auto after:h-[14.88rem] after:w-full after:max-w-[46.00rem] after:rounded-[100%] after:border-[0.16rem] after:border-solid after:border-[rgba(255,255,255,0.7)] after:shadow-[0_4px_15px_rgba(255,255,255,0.3)] after:content-['']">
                                    <span class="z-1 absolute left-[20%] top-[25%] rotate-[3.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/2.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[8.50rem] h-[9.75rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute right-[15%] top-[25%] rotate-[-3.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/3.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[8.50rem] h-[9.75rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute left-[1%] top-[45%] rotate-[3.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/4.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[7.31rem] h-[9.75rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute right-[-2%] top-[40%] rotate-[-2.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/5.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[8.50rem] h-[9.75rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute left-[15%] top-[95%] rotate-[2.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/6.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[5.78rem] h-[7.01rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute right-[15%] top-[95%] rotate-[-2.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/7.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[ 5.78rem] h-[7.01rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute left-[11%] top-0 rotate-[19.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/8.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[4.60rem] h-[5.10rem] object-cover'
                                        />
                                    </span>

                                    <span class="z-1 absolute left-[33%] top-[-25%] rotate-[-19.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/9.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[5.42rem] h-[6.40rem] object-cover'
                                        />
                                    </span>
                                    <span class="z-1 absolute right-[33%] top-[-25%] rotate-[19.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/10.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[5.42rem] h-[6.40rem] object-cover'
                                        />
                                    </span>

                                    <span class="z-1 absolute right-[10%] top-1 rotate-[-19.86deg] cursor-pointer overflow-hidden rounded-[0.50rem] after:absolute after:left-0 after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 after:content-[''] active:after:opacity-100">
                                        <img
                                            src='/images/player/11.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[4.60rem] h-[5.10rem] object-cover'
                                        />
                                    </span>

                                    <div class='innerWap player z-1 relative m-auto w-full max-w-[15.63rem]'>
                                        <img
                                            src='/images/player/1.webp'
                                            alt='cover'
                                            loading='lazy'
                                            class='max-w[12.50rem] m-auto h-[15.63rem] rounded-[0.75rem] object-cover'
                                        />
                                        <h2 class='mt-3 text-sm font-semibold'>
                                            Maecenas biben
                                        </h2>
                                        <p class='m-auto w-[12.25rem] truncate text-xs text-[#C3C3C3]'>
                                            Quisque isus laoreet, risus{' '}
                                        </p>
                                        <div class='relative mt-4 h-0.5 w-full overflow-hidden bg-white'>
                                            <span class='w-30 absolute left-0 top-0 h-0.5 bg-[#ff2663]'></span>
                                        </div>
                                        <div class='mt-1 flex w-full justify-between'>
                                            <span class='text-xs text-[#C3C3C3]'>
                                                1.25
                                            </span>
                                            <span class='text-xs text-[#C3C3C3]'>
                                                4.18
                                            </span>
                                        </div>
                                        <ul class='absolute left-0 right-0 top-[calc(100%+1.25rem)] m-auto flex items-center justify-center'>
                                            <li class='px-2 sm:px-2 md:px-2 xl:px-1 2xl:px-2'>
                                                <a
                                                    href='#'
                                                    class='backdrop-blur-xs flex h-[1.88rem] w-[1.88rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]'>
                                                    <img
                                                        src='/images/player-icon/repeat-big.png'
                                                        alt='shuffle'
                                                        loading='lazy'
                                                    />
                                                </a>
                                            </li>
                                            <li class='px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2'>
                                                <a
                                                    href='#'
                                                    class='backdrop-blur-xs flex h-[1.88rem] w-[1.88rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]'>
                                                    <img
                                                        src='/images/player-icon/skipBack-big.webp'
                                                        alt='skipBack'
                                                        loading='lazy'
                                                        src='/images/player-icon/pause.webp'
                                                        alt='play'
                                                        loading='lazy'
                                                        class='w-[1.19rem]'
                                                    />
                                                </a>
                                            </li>
                                            <li class='px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2'>
                                                <a
                                                    href='#'
                                                    id='playBtn2'
                                                    class='playBtn flex h-[2.88rem] w-[3.00rem] items-center justify-center rounded-full bg-[#C6FF00] text-center leading-[2.88rem]'>
                                                    <img
                                                        src='/images/player-icon/play.webp'
                                                        alt='play'
                                                        loading='lazy'
                                                        class='playIcon'
                                                        id='playIcon2'
                                                    />
                                                </a>
                                            </li>

                                            <li class='px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2'>
                                                <a
                                                    href='#'
                                                    class='backdrop-blur-xs flex h-[1.88rem] w-[1.88rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]'>
                                                    <img
                                                        src='/images/player-icon/skipFwd-big.png'
                                                        alt='skipFwd'
                                                        loading='lazy'
                                                        class='w-[1.19rem]'
                                                    />
                                                </a>
                                            </li>
                                            <li class='px-2 pr-0 sm:px-2 md:px-1 xl:px-2 2xl:px-2'>
                                                <a
                                                    href='#'
                                                    class='backdrop-blur-xs flex h-[1.88rem] w-[1.88rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]'>
                                                    <img
                                                        src='/images/player-icon/repeat-big.png'
                                                        alt='repeat'
                                                        loading='lazy'
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                        <audio
                                            id='myAudio2'
                                            class='myAudio hidden'
                                            src='/music.mp3'></audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
