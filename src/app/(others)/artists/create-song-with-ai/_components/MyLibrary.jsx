'use client'

import { useMemo, useState } from 'react'
import { getSongHistoryAi } from '@/services/api/artist-api'
import { useQuery } from '@tanstack/react-query'
import { AiOutlineClose } from 'react-icons/ai'

import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'

import styles from '../createsong.module.scss'
import MyLibraryCart from './MyLibraryCart'
import MyLibraryCartSkeleton from './MyLibraryCartSkeleton'

const MyLibrary = () => {
    const { user } = useAuth()
    const {
        toggleIsCreateSongAISidebarOpen,
        aiGeneratedSongs,
        songGeneratedStatus,
        songGenerated,
    } = useApp()

    const { data: songHistoryData, isLoading: isHistoryLoading } = useQuery({
        queryKey: ['songHistoryAi'], // unique cache key
        queryFn: () => getSongHistoryAi(user?._id),
        enabled: !!user?._id, // only run if userId exists
        retry: false, // optional: disable auto-retries
    })

    const [playingId, setPlayingId] = useState(null)

    const handlePlay = (id) => {
        setPlayingId(id === playingId ? null : id)
    }

    const handleMyLibrary = () => {
        toggleIsCreateSongAISidebarOpen()
    }

    const handleClearSong = () => {
        setPlayingId(null)
    }

    const reversedSongData = useMemo(() => {
        if (songHistoryData?.data) {
            // const usersSongHistory=songHistoryData.filter
            return [...songHistoryData.data].reverse() // Create a copy and reverse it
        }
        return [] // Fallback if data is undefined or null
    }, [songHistoryData])

    console.log('Reversed Song Data======>', reversedSongData)

    console.log('Ai Generated Songs======>', aiGeneratedSongs)
    return (
        <>
            <aisde className='flex h-[calc(100vh-100px)] max-h-[750px] flex-col bg-[#141414] pt-4'>
                <div className='flex items-center justify-between px-4'>
                    <h2 className='text-lg font-medium text-white'>
                        My Library
                    </h2>
                    <button onClick={handleMyLibrary} type='button'>
                        <AiOutlineClose
                            className='mr-2'
                            size={20}
                            fill='#9D9D9D'
                        />
                    </button>
                </div>
                <div
                    className={`flex-1 overflow-y-auto ${styles.ai_custom_scrollbar}`}>
                    {/* <MyLibraryCartSkeleton /> */}
                    {songGenerated ? (
                        <div
                            id='generated-song'
                            className='flex flex-col gap-0.5 bg-[linear-gradient(153.92deg,_#141414_7.19%,_#0D1F45_114.71%,_#254F8B_222.24%)] px-4 py-2'>
                            {songGeneratedStatus ? (
                                aiGeneratedSongs.map((songDetails, index) => (
                                    <MyLibraryCart
                                        songDetails={songDetails}
                                        isPlaying={playingId === songDetails.id}
                                        onPlay={() =>
                                            handlePlay(songDetails.id)
                                        }
                                        key={songDetails?.id}
                                        version={index + 1}
                                        isHistory={false}
                                        onEnded={handleClearSong}
                                    />
                                ))
                            ) : (
                                <>
                                    <MyLibraryCartSkeleton />
                                    <MyLibraryCartSkeleton />
                                </>
                            )}
                        </div>
                    ) : null}
                    {reversedSongData && reversedSongData?.length ? (
                        <div id='history-song' className='w-full px-4 py-2'>
                            <p className='border-b border-gray-400 py-2 text-xs opacity-90'>
                                My History
                            </p>
                            {reversedSongData?.map((songDetails) => (
                                <MyLibraryCart
                                    songDetails={songDetails}
                                    isPlaying={playingId === songDetails.id}
                                    onPlay={() => handlePlay(songDetails.id)}
                                    key={songDetails?.id}
                                    isHistory={true}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            </aisde>
        </>
    )
}

export default MyLibrary
