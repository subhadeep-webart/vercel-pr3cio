import { useRef, useState, useEffect } from 'react'
import { generateLyricsWithAI } from '@/services/api/artist-api'
import { useMutation } from '@tanstack/react-query'

import { SEND_ICON_2 } from '@/utils/icons'
import useApp from '@/hooks/useApp'
import Loader from '@/components/ui/Loader'

import styles from '../createsong.module.scss'
import useAuth from '@/hooks/useAuth'

const GenerateLyricsTextArea = ({
    mutation,
    lyricsPrompt,
    setLyricsPrompt,
    isLyricsGenerating,
    setIsLyricsGenerating
}) => {
    const { user } = useAuth();
    const textareaRef = useRef(null);
    const { setAiGeneratedLyrics,clearAiGeneratedSongs } = useApp()

    const handleGenerateLyricsClick = () => {
        setLyricsPrompt('')
        if (lyricsPrompt.trim()) {
            clearAiGeneratedSongs();
            setIsLyricsGenerating(true);
            mutation.mutate({ prompt: lyricsPrompt, userId: user?._id });
        }
    }

    const handleTextareaChange = (e) => {
        setLyricsPrompt(e.target.value)
    }

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            const newHeight = Math.min(textarea.scrollHeight, 100); // max 200px
            textarea.style.height = `${newHeight}px`;
        }
    }, [lyricsPrompt]);

    return (
        <div className={`relative mb-20 mt-5 px-5 md:mb-0 ${styles.songwriters_corner}`}>
            <textarea
                ref={textareaRef}
                id="message"
                rows="1"
                className={`w-[95%] !py-1 px-2 text-sm text-white resize-none bg-transparent focus:outline-none ${styles.ai_custom_scrollbar}`}
                placeholder="Describe the lyrics you want, or share a theme or topic."
                value={lyricsPrompt}
                onChange={handleTextareaChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault(); // Prevent newline
                        if (!isLyricsGenerating) {
                            handleGenerateLyricsClick(); // Trigger your function
                        }
                    }
                }}
            ></textarea>
            <button
                type='button'
                disabled={isLyricsGenerating}
                className='absolute right-2 top-1/2 -translate-y-1/2 transform p-2'
                onClick={handleGenerateLyricsClick}>
                {isLyricsGenerating ? (
                    <Loader size='sm' />
                ) : (
                    <img
                        src={SEND_ICON_2?.src}
                        alt='Send'
                        className='h-5 w-6'
                    />
                )}
            </button>
        </div>
    )
}

export default GenerateLyricsTextArea
