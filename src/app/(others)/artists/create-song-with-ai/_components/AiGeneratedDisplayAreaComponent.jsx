'use client'

import { useEffect, useRef, useState } from 'react'
import { Spinner } from '@heroui/react'
import DOMPurify from 'dompurify'
import { motion } from 'framer-motion'
import useApp from '@/hooks/useApp'
import styles from '../createsong.module.scss'
import LyricsSkeleton from './LyricsSkeleton'

const AiGeneratedDisplayAreaComponent = ({
    isGenerating,
    onClose,
    setLyricsPrompt,
    setSelected
}) => {
    const { aiGeneratedLyrics, setSongAIContext, clearAiGeneratedLyrics, setSongGenerated } =
        useApp()

    // Each lyric has its own displayed text
    const [displayedTexts, setDisplayedTexts] = useState([])

    // Create a ref array for each lyric block
    const containerRefs = useRef([])

    useEffect(() => {
        if (aiGeneratedLyrics.length > 0) {
            setDisplayedTexts(Array(aiGeneratedLyrics.length).fill(''))

            aiGeneratedLyrics.forEach((lyric, idx) => {
                const fullText = lyric?.text || ''
                let charIndex = 0

                const interval = setInterval(() => {
                    setDisplayedTexts((prev) => {
                        const updated = [...prev]
                        updated[idx] = fullText.slice(0, charIndex + 1)
                        return updated
                    })

                    charIndex++
                    if (charIndex >= fullText.length) {
                        clearInterval(interval)
                    }
                }, 25) // typing speed
            })
        }
    }, [aiGeneratedLyrics])

    // Auto-scroll whenever displayedTexts updates
    useEffect(() => {
        displayedTexts.forEach((_, idx) => {
            const container = containerRefs.current[idx]
            if (container) {
                container.scrollTop = container.scrollHeight
            }
        })
    }, [displayedTexts])

    const handleSelectedLyrics = (lyricDetails) => {
        if (lyricDetails?.text) {
            const actionPayload = {
                type: 'prompt',
                typeState: lyricDetails?.text,
            }
            const titlePayload = {
                type: "title",
                typeState: lyricDetails?.title
            }
            const stylePayload = {
                type: "style",
                typeState: ""
            }
            setSongAIContext(titlePayload)
            setSongAIContext(actionPayload)
            setSongAIContext(stylePayload)
            clearAiGeneratedLyrics()
            setLyricsPrompt('')
            // setSongGenerated(false);
            // setSongGeneratedStatus("");
            setSelected([]);
            onClose()
        }
    }

    return (
        <div className='flex max-h-[65vh] md:max-h-[70vh] md:min-h-[50vh] w-full gap-6 rounded-lg px-4 py-6 shadow-inner'>
            {aiGeneratedLyrics.length > 0 ? (
                aiGeneratedLyrics.map((lyricDetails, index) => {
                    const formattedLyrics = DOMPurify.sanitize(
                        (displayedTexts[index] || '')
                            .replace(
                                /\[([^\]]+)\]/g,
                                '<strong class="block mt-4 mb-1 text-white">[$1]</strong>'
                            )
                            .replace(/\n/g, '<br />')
                    )

                    return (
                        <div className='w-1/2' key={index}>
                            <motion.div
                                ref={(el) =>
                                    (containerRefs.current[index] = el)
                                }
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`max-h-[55vh] md:max-h-[60vh] md:min-h-[50vh] w-full overflow-y-auto px-5 py-4 text-gray-300 shadow-md ${styles.ai_custom_scrollbar}`}>
                                <h2 className='mb-2 text-lg font-semibold text-white'>
                                    {lyricDetails?.title}
                                </h2>

                                <div
                                    className='text-sm font-light leading-relaxed'
                                    dangerouslySetInnerHTML={{
                                        __html: formattedLyrics,
                                    }}
                                />
                            </motion.div>
                            <div className='w-full py-2'>
                                <button
                                    onClick={() =>
                                        handleSelectedLyrics(lyricDetails)
                                    }
                                    className='rounded-full border-1 border-[#C6FF00] bg-transparent px-6 py-2 text-xs font-medium text-[#C6FF00] transition-all'>
                                    Get With This
                                </button>
                            </div>
                        </div>
                    )
                })
            ) : isGenerating ? (
                <>
                    <div className='flex h-full min-h-[50vh] w-full animate-pulse items-start justify-start italic text-gray-400'>
                        {/* <Spinner /> Generating lyrics... */}
                        <LyricsSkeleton />
                    </div>
                    <div className='flex h-full min-h-[50vh] w-full animate-pulse items-start justify-start italic text-gray-400'>
                        <LyricsSkeleton />
                    </div>
                </>

            ) : (
                <div className='flex h-full min-h-[50vh] w-full items-center justify-center italic text-gray-500'>
                    No lyrics generated yet.
                </div>
            )}
        </div>
    )
}

export default AiGeneratedDisplayAreaComponent
