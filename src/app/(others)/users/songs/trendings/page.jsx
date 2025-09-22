'use client'

import React, { useState, useMemo } from 'react';
import { Button } from '@heroui/react';
import Container from '@/components/ui/container';
// import MusicList from './_components/music-list';
import { CircularProgress, cn } from '@heroui/react'
import { useInfiniteQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { getSongs } from '@/services/api/song-api'
import MusicCard from '@/app/(others)/artists/my-library/song/_components/MusicCard'
import MusicCardSkeleton from '@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MusicPage = () => {
    const pathname = usePathname();
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('latest');
    // Use the useInfiniteQuery hook to fetch the songs with pagination support
    const { data, hasNextPage, fetchNextPage, status, refetch, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [queryConstants.getSongs], // Include trending in the query key to trigger a refetch on change
        queryFn: ({ pageParam = 1 }) =>
            getSongs({
                page: pageParam,
                limit: 10,
                is_trending: true, // Pass the trending prop to the API call
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const totalFetched = allPages.reduce(
                (acc, page) => acc + (page?.data?.length ?? 0),
                0
            )
            return lastPage?.total > totalFetched
                ? allPages.length + 1
                : undefined
        },
    })

    // Combine all pages of songs into one array using useMemo
    const musics = useMemo(() => {
        return data?.pages.flatMap((page) => page?.data) ?? []
    }, [data])

    // Use the custom hook to handle infinite scroll
    const { observerRef } = useInfiniteScroll({
        callback: fetchNextPage,
    })

    return (
        <div className="flex items-start flex-wrap w-full justify-end">
            <div className="bg-[#2B2B2B] rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                <div className="flex justify-between">
                    <h1 className="text-[1.56rem] font-semibold mb-5">Songs</h1>
                    <ul className="flex">
                        <li>
                            <Link className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300}`} href={"/users/songs/latests"}>
                                Latest
                            </Link>
                        </li>
                        <li>
                            <Link className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300  bg-gradient-to-r from-[#D344C9] to-[#2D2694]`} href={"/users/songs/trendings"}>
                                Trending
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    {status === 'pending' &&
                        Array.from({ length: 5 }).map((_, i) => (
                            <MusicCardSkeleton key={`skeleton-${i + 1}`} />
                        ))}


                    {/* Render the list of songs when the query is successful */}
                    {status === 'success' &&
                        musics?.length > 0 && musics?.map((song) => (
                            // <MusicCard key={song._id} track={song} tracks={musics} onActionComplete={handleRefetch} />
                            <MusicCard
                                key={song._id}
                                track={song}
                                tracks={musics}
                                // onActionComplete={handleRefetch}
                                showing={false}
                            />
                        ))}

                    {/* Show the CircularProgress component for infinite scroll loading */}
                    {/* <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block' : 'hidden')}
            /> */}
                    {isFetchingNextPage &&
                        Array.from({ length: 5 }).map((_, i) => (
                            <MusicCardSkeleton key={`skeleton-${i + 1}`} />
                        ))}
                    {/* <CircularProgress
                        ref={observerRef}
                        className={cn(hasNextPage ? 'block mt-4 mx-auto' : 'hidden')}
                    /> */}
                    <div ref={observerRef} className="h-1 w-full" />
                    {/* {hasNextPage && (
                <div
                    ref={observerRef}
                    className="h-1 w-full mt-4"
                />
            )} */}
                </div>
            </div>
        </div>
    );
};

export default MusicPage;
