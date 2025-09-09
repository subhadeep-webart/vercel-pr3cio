'use client'

import { useMemo, useEffect } from 'react'
import { CircularProgress, cn } from '@heroui/react'
import { useInfiniteQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { getSongs } from '@/services/api/song-api'
import MusicCard from './music-card'

interface MusicListProps {
    trending: boolean;
}

const MusicList: React.FC<MusicListProps> = ({ trending }) => {
    // Use the useInfiniteQuery hook to fetch the songs with pagination support
    const { data, hasNextPage, fetchNextPage, status, refetch } = useInfiniteQuery({
        queryKey: [queryConstants.getSongs, trending], // Include trending in the query key to trigger a refetch on change
        queryFn: ({ pageParam = 1 }) =>
            getSongs({
                page: pageParam,
                limit: 10,
                is_trending: trending, // Pass the trending prop to the API call
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const totalFetched = allPages.reduce(
                (acc, page) => acc + page.data.length,
                0
            )
            return lastPage?.total > totalFetched
                ? allPages.length + 1
                : undefined
        },
    })

    // Combine all pages of songs into one array using useMemo
    const musics = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? []
    }, [data])

    // Use the custom hook to handle infinite scroll
    const { observerRef } = useInfiniteScroll({
        callback: fetchNextPage,
    })

    const handleRefetch = () => {
        refetch();
    };
    // Trigger refetch when the 'trending' prop changes
    useEffect(() => {
        refetch() // Fetch new data based on the updated 'trending' value
    }, [trending, refetch])

    return (
        <div className='space-y-4'>
            {/* Show a loading spinner when the query is pending */}
            {status === 'pending' && <CircularProgress />}

            {/* Render the list of songs when the query is successful */}
            {status === 'success' &&
                musics.map((song) => (
                    <MusicCard key={song._id} track={song} tracks={musics} onActionComplete={handleRefetch} />
                ))}

            {/* Show the CircularProgress component for infinite scroll loading */}
            <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block' : 'hidden')}
            />
        </div>
    )
}

export default MusicList
