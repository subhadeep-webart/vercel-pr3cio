import { generateSongWithAI, getSongsByTaskId } from '@/services/api/artist-api'
import { addToast } from '@heroui/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { SEND_ICON_2 } from '@/utils/icons'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'
import Loader from '@/components/ui/Loader'

import styles from '../createsong.module.scss'
import { useEffect, useState } from 'react'
import { getSocket } from '@/configs/socket-config'

const SongwritersCorner = () => {
    //jj
    const queryClient = useQueryClient();
    const socket = getSocket();
    const [songGeneratingStatus, setSongGeneratingStatus] = useState(null);
    const [isSongGenerating, setIsSongGenerating] = useState(false);
    const [taskId, setTaskId] = useState(null);
    const { user } = useAuth()
    const {
        songAIContext,
        setSongAIContext,
        setAiGeneratedSongs,
        toggleIsCreateSongAISidebarOpen,
        setIsCreateSongAISidebarOpen,
        setSongGenerated,
        songGeneratedStatus,
        setSongGeneratedStatus
    } = useApp()

    const { prompt } = songAIContext

    const handleSongPrompChange = (e) => {
        const value = e.target.value
        console.log('Title change', value)

        const actionPayload = {
            type: 'prompt',
            typeState: value,
        }

        setSongAIContext(actionPayload)
    }


    const mutation = useMutation({
        mutationFn: generateSongWithAI,
        onSuccess: (data) => {
            console.log('Data coming from suno======>', data?.data)
            if (data?.data?.data && data?.data?.data?.taskId) {
                // setAiGeneratedSongs(data?.data)
                setSongGenerated(true);
                setIsCreateSongAISidebarOpen(true)
                setTaskId(data?.data?.data?.taskId);
            }
        },
        onError: (error) => {
            toast.error(error.message || 'Failed to add crew member')
        },
    })

    const handleSongGenerateClick = () => {
        if (!user?._id) return

        if (songGeneratedStatus === "pending") {

            addToast({
                title: 'Please wait a moment',
                description: "Please wait for other generation is finish",
                color: 'warning',
            })

            return;
        }
        const songGeneratePayload = { ...songAIContext, userId: user?._id }
        const missingFields = []

        if (!songAIContext?.title) {
            missingFields.push('Provide a song title')
        }

        if (!songAIContext?.prompt) {
            missingFields.push('Describe the lyrics you want or share a theme')
        }

        if (!songAIContext?.style) {
            missingFields.push('Pick at least one vibe or musical style')
        }

        if (missingFields.length > 0) {
            const numberedList = missingFields
                .map((msg, index) => `${index + 1}. ${msg}`)
                .join('\n')

            addToast({
                title: 'Song Generation Failed',
                description: numberedList,
                color: 'warning',
            })

            return
        }
        setSongGeneratedStatus("");
        queryClient.invalidateQueries(['songHistoryAi']);
        setAiGeneratedSongs([]);
        setSongGenerated(false);
        // setIsSongGenerating(true);
        setIsSongGenerating(true);
        mutation.mutate(songGeneratePayload)
    }

    useEffect(() => {
        if (taskId) {
            const handleSuccess = (response) => {
                setIsSongGenerating(false);
                console.log("Song Generated======>", response);
                if (response?.userId != user?._id) return
                setAiGeneratedSongs(response?.data ?? [])
                setSongGeneratedStatus(response?.status);
                setIsCreateSongAISidebarOpen(true);
            };

            // const handleError = (response) => {
            //     console.error("WATCH_COUNT_ERROR:", response.message);
            // };1

            socket.on("songsList", handleSuccess);
            // socket.on("UPDATE_WATCH_COUNT_MOVIE_ERROR", handleError);
        }

        return () => {
            socket.off('songsList');
        };
    }, [taskId])

    return (
        <>
            <div className='mb-20 mt-5 px-5 md:mb-0'>
                <div className='mb-3 w-full'>
                    <label
                        htmlFor='message'
                        className='text-sm font-medium text-white'>
                        Songwriter’s Corner
                    </label>
                </div>
                <div
                    className={`relative ${styles.songwriters_corner} flex items-start justify-start gap-2`}>
                    <textarea
                        id='message'
                        rows='4'
                        className={`w-full p-2.5 text-sm text-white placeholder-[#AEAEAE] ${styles.ai_custom_scrollbar} resize-none bg-transparent`}
                        placeholder='Pen down your rhythm & rhyme…'
                        value={prompt}
                        disabled={mutation.isPending}
                        onChange={handleSongPrompChange}></textarea>
                    <button
                        type='button'
                        className={`p-2.5 cursor-pointer`}
                        onClick={handleSongGenerateClick}
                        disabled={mutation.isPending || isSongGenerating}
                    >
                        {mutation.isPending ? (
                            <Loader />
                        ) : (
                            <img
                                src={SEND_ICON_2?.src}
                                alt='Send'
                                className='h-5 w-6'
                            />
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default SongwritersCorner
