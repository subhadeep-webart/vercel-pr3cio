"use client"

import MusicCardSkeleton from "@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton";
import AlbumCard from "@/components/common/AlbumCard";
import queryConstants from "@/constants/query-constants";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getAllAlbums } from "@/services/api/album-ep";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

const LatestAlbum = () => {
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        status,
        refetch,
    } = useInfiniteQuery({
        queryKey: [queryConstants.getAlbums, false],
        queryFn: ({ pageParam = 1 }) =>

            getAllAlbums({
                page: pageParam,
                limit: 12,
                is_trending: false
                // queryKey: [queryConstants.getAlbums, { is_trending: isTrending }],
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const totalFetched = allPages.reduce((acc, page) => acc + page?.albums.length, 0)
            return lastPage?.total > totalFetched ? allPages.length + 1 : undefined
        },
    })

    const albums = useMemo(() => {
        return data?.pages.flatMap((page) => page.albums) ?? []
    }, [data])

    const { observerRef } = useInfiniteScroll({ callback: fetchNextPage })

    // useEffect(() => {
    //     refetch()
    // }, [activeTab, refetch])

    console.log("Album Details========>", albums);

    return (
        <>

            <div
                className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8 overflow-y-auto overflow-x-hidden h-[40rem] [scrollbar-width:none]">
                {status === 'pending' &&
                    Array.from({ length: 10 }).map((_, i) => (
                        <MusicCardSkeleton key={`skeleton-${i + 1}`} />
                    ))}

                {status === 'success' &&
                    albums.map((album) => (
                        // <MusicCard key={song._id} track={song} tracks={musics} onActionComplete={handleRefetch} />
                        <AlbumCard albumDetails={album} key={album?._id} />
                    ))}

                {/* Show the CircularProgress component for infinite scroll loading */}
                {/* <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block' : 'hidden')}
            /> */}
                {isFetchingNextPage &&
                    Array.from({ length: 10 }).map((_, i) => (
                        <MusicCardSkeleton key={`skeleton-${i + 1}`} />
                    ))}
                {/* <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block mt-4 mx-auto' : 'hidden')}
            /> */}
                <div ref={observerRef} className="h-1 w-full" />
            </div>

        </>
    )
};

export default LatestAlbum;