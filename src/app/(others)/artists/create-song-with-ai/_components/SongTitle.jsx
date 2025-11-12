'use client'

import { useState } from 'react'
import { Switch } from '@heroui/react'

import styles from '../createsong.module.scss'
import useApp from '@/hooks/useApp'

const SongTitle = () => {
    const { songAIContext, setSongAIContext } = useApp();

    const { instrumental, title } = songAIContext;

    const handleInstrumentalChange = () => {
        const actionPayload = { type: "instrumental", typeState: !instrumental }
        setSongAIContext(actionPayload);
    }

    const handleSongTitleChange = (e) => {
        const value = e.target.value;
        console.log("Title change", value);
        const actionPayload = {
            type: "title",
            typeState: value
        };
        setSongAIContext(actionPayload);

    };
    return (
        <>
            <div className='flex w-full flex-col items-center gap-4'>
                <input type='text'
                    className={`w-full rounded-3xl text-start text-sm ${styles.song_title_btn}`} placeholder='Add a Song Title' onChange={handleSongTitleChange} value={title} />

                <div className='flex items-center justify-between gap-1 rounded-3xl border border-[#949494] bg-[#140E1A] px-6 py-3'>
                    <span className='text-sm font-medium text-white'>
                        Instrumental
                    </span>

                    <Switch
                        checked={instrumental}
                        onChange={handleInstrumentalChange}
                        className={`${instrumental ? 'bg-[#F844B0]' : 'bg-gray-600'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
                    ></Switch>
                </div>
            </div>
        </>
    )
}

export default SongTitle
