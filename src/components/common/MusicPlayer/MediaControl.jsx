"use client"

import { useState } from "react";
import { PAUSE_ICON } from "@/utils/icons";
import Image from "next/image";
const MediaControls = ({
    isPlaying,
    isLoading,
    onPlayPause,
    onNext,
    onPrevious,
    playerStatus
}) => {
    console.log("Is Playing Details======>", isPlaying);
    const [isShuffleActive, setIsShuffleActive] = useState(false)
    const [isLoopActive, setIsLoopActive] = useState(false)
    return (
        <ul className='flex items-center justify-center'>
            <li className='w-[0.8rem] flex-[0_0_0.8rem]'>
                <button onClick={() => setIsShuffleActive(prevShuffleActive => !prevShuffleActive)}>
                    <img
                        src='/images/player-icon/shuffle.webp'
                        alt='shuffle'
                        loading='lazy'
                    />
                </button>
            </li>
            <li className='px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2'>
                <button
                    onClick={onPrevious}
                    className='flex h-[1.28rem] w-[1.28rem] items-center justify-center rounded-full bg-[#52534d]'>
                    <img
                        src='/images/player-icon/skipBack.webp'
                        alt='skipBack'
                        loading='lazy'
                    />
                </button>
            </li>
            <li>
                <button className='flex h-[2.03rem] w-[2.03rem] items-center justify-center rounded-full bg-white text-center leading-[2.03rem]' onClick={onPlayPause} disabled={isLoading}>
                    {
                        isPlaying ? (
                            <Image src={PAUSE_ICON?.src} height={10} width={10} alt="Click to Pause" />
                        ) : (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current text-[#4D41FA] group-hover:text-black">
                                <path
                                    d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                            </svg>
                        )}
                </button>

                {/* <a
                                href='#'
                                id='playBtn'
                                className='flex h-[2.03rem] w-[2.03rem] items-center justify-center rounded-full bg-white text-center leading-[2.03rem]'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className=''
                                    id='playIcon'
                                />
                            </a> */}
            </li>
            <li className='px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2'>
                <button
                    onClick={onNext}
                    className='flex h-[1.28rem] w-[1.28rem] items-center justify-center rounded-full bg-[#52534d]'>
                    <img
                        src='/images/player-icon/skipFwd.webp'
                        alt='skipFwd'
                        loading='lazy'
                    />
                </button>
            </li>
            <li className='w-[0.8rem] flex-[0_0_0.8rem]'>
                <button onClick={() => setIsLoopActive(!isLoopActive)}>
                    <img
                        src='/images/player-icon/repeat.webp'
                        alt='repeat'
                        loading='lazy'
                    />
                </button>
            </li>
        </ul>
    )
}

export default MediaControls;