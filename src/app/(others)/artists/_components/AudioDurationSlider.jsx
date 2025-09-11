import React from 'react'
import { Slider } from '@heroui/react'

import styles from './media-controls.module.scss'

export default function AudioDurationSlider({ currentTime, duration, setCurrentTime, playerService }) {
    const [value, setValue] = React.useState(0)
    const maxValue = 60

    const formatTime = (val) => {
        const mins = Math.floor(val / 60)
        const secs = Math.floor(val % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        // <div className='w-full relative mt-1'>
        <>
            <Slider
                aria-label='Audio Duration'
                className={`w-full relative ${styles.afterNone}`}
                value={currentTime}
                maxValue={duration}
                onChange={(value) => setCurrentTime(value)}
                onChangeEnd={(value) => playerService.seekTo(value)}
                classNames={{
                    track: 'bg-white w-full h-[2px] border-none',
                    filler: 'bg-[#ff2663]',
                    thumb: 'bg-white w-[8px] h-[8px] rounded-full',
                }}
            />
        </>


        // </div>
    )
}