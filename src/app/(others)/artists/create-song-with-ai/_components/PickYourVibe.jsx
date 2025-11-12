'use client'

import { useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

import styles from '../createsong.module.scss'
import useApp from '@/hooks/useApp'

const PickYourVibe = ({ selected, setSelected }) => {
    const { isCreateSongAISidebarOpen, setSongAIContext } = useApp();
    const buttons = [
        { id: 1, label: 'Hip-Hop' },
        { id: 2, label: 'Classical' },
        { id: 3, label: 'Jazz' },
        { id: 4, label: 'Rock' },
        { id: 5, label: 'Pop' },
        { id: 6, label: 'Electronic' },
        { id: 7, label: 'Reggae' },
        { id: 8, label: 'Country' },
        { id: 9, label: 'Blues' },
        { id: 10, label: 'Funk' },
        { id: 11, label: 'Soul' },
        { id: 12, label: 'Metal' },
    ]

    const toggleSelect = (label) => {
        setSelected((prev) => {
            const updated =
                prev.includes(label)
                    ? prev.filter((item) => item !== label)
                    : [...prev, label];

            // Now update the context using the fresh selection
            setSongAIContext({ type: "style", typeState: updated.join(",") });

            return updated;
        });
    }

    console.log("Selected Vibes======>", selected);

    return (
        <>
            <div className={`${styles.pick_your_vibe} ${styles.ai_custom_scrollbar} transition-all duration-300 ${isCreateSongAISidebarOpen ? 'text-sm scale-90' : 'text-sm scale-90 md:text-base md:scale-100'
                }`}>
                <h2 className='text-xl text-white font-semibold'>Pick Your Vibe</h2>
                <p className='text-xs text-[#D7D7D7]'>
                    Select a style, and let the AI craft your perfect track
                </p>

                <div className={`mt-4 max-h-60 overflow-y-auto ${styles.pick_vibe_section}`}>
                    <div className={`mt-4 grid ${isCreateSongAISidebarOpen ? "grid-cols-2" : "grid-cols-3"} gap-4 pr-10`}>
                        {buttons.map(({ id, label }) => {
                            const isSelected = selected.includes(label)

                            return (
                                <button
                                    key={id}
                                    onClick={() => toggleSelect(label)}
                                    className={`flex items-center justify-start gap-2 rounded-3xl px-4 py-3 text-xs transition-colors duration-300 font-medium ${isSelected
                                        ? 'bg-[#C6FF00] text-black'
                                        : 'bg-[#1C1C2F] text-white hover:bg-[#2A2A3F]'
                                        }`}>
                                    {isSelected ? (
                                        <AiOutlineClose className='h-4 w-4' />
                                    ) : (
                                        <AiOutlinePlus className='h-4 w-4' />
                                    )}
                                    {label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickYourVibe
