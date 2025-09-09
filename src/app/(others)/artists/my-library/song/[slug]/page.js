"use client"

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPrivateSongList } from "@/services/api/user-api";
import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, cn } from '@heroui/react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { withAuthProtection } from '@/components/auth/protected-component';
import { useParams } from "next/navigation";
import MusicCard from "../_components/MusicCard";

const MyLibraryPage = () => {
    const { slug } = useParams();
    console.log("Slug from the page=====>", slug);
    const isPublic = slug === "published-song";
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        refetch,
        status,
    } = useInfiniteQuery({
        queryKey: ['private-songs', { isPublic }],
        queryFn: ({ pageParam = 1, queryKey }) => {
            const [_key, { isPublic }] = queryKey;
            return getPrivateSongList({
                isPublic,
                page: pageParam,
                limit: 10,
            });
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const isLastPageEmpty = !lastPage.songs || lastPage.songs.length === 0;
            if (isLastPageEmpty) return undefined;

            const totalFetched = allPages.reduce(
                (acc, page) => acc + (page.songs?.length || 0),
                0
            );

            return totalFetched < lastPage.total ? allPages.length + 1 : undefined;
        }

    });

    const songs = useMemo(() => {
        return data?.pages.flatMap((page) => page.songs) || [];
    }, [data]);

    const { observerRef } = useInfiniteScroll({ callback: fetchNextPage });
    const handleRefetch = () => {
        refetch();
    };

    console.log("draft Songs========>", songs);
    return (
        <div
            class="grid grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
            {status === 'pending' &&
                Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-36 bg-gray-800 animate-pulse rounded-lg"
                    />
                ))}

            {status === 'success' &&
                (slug === "draft-songs" ?
                    songs.map((song) => (
                        <MusicCard key={song._id} track={song} drift onActionComplete={handleRefetch} />
                    )) :
                    songs.map((song) => (
                        <MusicCard key={song._id} track={song} publish drift onActionComplete={handleRefetch} />
                    ))

                )

            }
            {isFetchingNextPage &&
                Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={`loading-${i}`}
                        className="h-36 bg-gray-700 animate-pulse rounded-lg"
                    />
                ))}
            <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block mt-4 mx-auto' : 'hidden')}
            />
        </div>
    )
}

export default withAuthProtection(MyLibraryPage);