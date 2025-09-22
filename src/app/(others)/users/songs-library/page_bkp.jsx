"use client"

import { CircularProgress } from "@heroui/react";
import { useMemo, useEffect } from "react";
import MusicCard from "../../artists/my-library/song/_components/MusicCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import queryConstants from '@/constants/query-constants';
import { getSongs } from '@/services/api/song-api';
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { cn } from "@heroui/react";

const SongsLibrary = ({ trending = true }) => {
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
        <div className="flex items-start flex-wrap w-full justify-end">
            <div className="bg-[#2B2B2B] rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                <div className="flex justify-between">
                    <h1 className="text-[1.56rem] font-semibold mb-5">My Songs</h1>
                    <ul className="flex">
                        <li>
                            <a href="#" className="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300">
                                Liked
                            </a>
                        </li>
                        <li>
                            <a href="#" className="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300">
                                Download
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    {status === "pending" && hasNextPage && <CircularProgress />}

                    {status === "success" &&
                        musics.map((song) => (
                            <MusicCard
                                key={song._id}
                                track={song}
                                tracks={musics}
                                onActionComplete={handleRefetch}
                                showing={false}
                            />
                        ))}

                    {/* {status === "error" && (
                        <p className="text-red-500">Failed to load songs.</p>
                    )} */}
                </div>
            </div>
            <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block' : 'hidden')}
            />
        </div>
    );
};

export default SongsLibrary;
