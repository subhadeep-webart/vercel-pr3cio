import { useState } from 'react'
import { Button } from '@heroui/react'
import {
    FaPause,
    FaPlay,
    FaRandom,
    FaRedo,
    FaStepBackward,
    FaStepForward,
} from 'react-icons/fa'
import { TfiLoop } from 'react-icons/tfi'
import { TiArrowShuffle } from 'react-icons/ti'

import styles from './media-controls.module.scss'

const MediaControls = ({
    isPlaying,
    isLoading,
    onPlayPause,
    onNext,
    onPrevious,
    playerStatus
}) => {
    const [isShuffleActive, setIsShuffleActive] = useState(false)
    const [isLoopActive, setIsLoopActive] = useState(false)

    const buttonClass = (active) =>
        `text-xl md:text-2xl p-3 rounded-full transition-all duration-300
    ${active ? 'text-white bg-blue-600' : 'text-gray-400 hover:text-white hover:bg-gray-700'}
    active:scale-95`

    return (
        <div className='mx-auto flex items-center gap-4'>
            {/* Shuffle */}
            <button
                className={buttonClass(isShuffleActive)}
                onClick={() => setIsShuffleActive(!isShuffleActive)}
                aria-label='Shuffle'>
                <TiArrowShuffle />
            </button>

            {/* Previous */}
            <button
                className={`${buttonClass(false)} bg-[rgba(150,150,150,0.15)]`}
                onClick={onPrevious}
                aria-label='Previous'>
                <FaStepBackward />
            </button>

            {/* Play / Pause */}
            <button
                className={`relative flex h-[70px] w-[70px] items-center justify-center rounded-full !bg-[#FAFAFA] ${styles.withBefore}`}
                onClick={onPlayPause}
                disabled={isLoading}
                aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? (
                    <FaPause className='text-black' />
                ) : (
                    <FaPlay className='text-black' />
                )}
            </button>

            {/* Next */}
            <button
                className={`${buttonClass(false)} bg-[rgba(150,150,150,0.15)]`}
                onClick={onNext}
                aria-label='Next'>
                <FaStepForward />
            </button>

            {/* Loop */}
            <button
                className={buttonClass(isLoopActive)}
                onClick={() => setIsLoopActive(!isLoopActive)}
                aria-label='Loop'>
                <TfiLoop />
            </button>
        </div>
    )
}

export default MediaControls
