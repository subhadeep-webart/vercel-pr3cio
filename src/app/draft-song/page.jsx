'use client';

import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, cn } from '@heroui/react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getPrivateSongList } from '@/services/api/user-api';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import MusicCard from '@/app/songs/_components/music-card';
import { withAuthProtection } from '@/components/auth/protected-component';

const DriftSong = () => {
    const [activeTab, setActiveTab] = useState('draft');
    const isPublic = activeTab === 'publish';

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

    // useEffect(() => {
    //     refetch()
    // }, [activeTab, refetch])
    return (
        <div className="p-5">
            {/* Tabs */}
            <div className="flex mb-8">
                <div
                    onClick={() => setActiveTab('draft')}
                    className={`px-4 py-2 text-lg cursor-pointer border-b ${activeTab === 'draft'
                        ? 'border-primary text-primary'
                        : 'text-white'
                        }`}
                >
                    Draft Songs
                </div>
                <div
                    onClick={() => setActiveTab('publish')}
                    className={`px-4 py-2 text-lg cursor-pointer border-b ${activeTab === 'publish'
                        ? 'border-primary text-primary'
                        : 'text-white'
                        }`}
                >
                    Published Songs
                </div>
            </div>

            {/* Song Grid */}
            <div className="grid grid-cols-1 gap-6 ">
                {status === 'pending' &&
                    Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-36 bg-gray-800 animate-pulse rounded-lg"
                        />
                    ))}

                {status === 'success' &&
                    (activeTab === "draft" ?
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
            </div>

            {/* Scroll Trigger */}
            <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block mt-4 mx-auto' : 'hidden')}
            />
        </div>
    );
};

export default withAuthProtection(DriftSong);
