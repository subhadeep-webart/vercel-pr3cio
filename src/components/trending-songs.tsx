'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button, CircularProgress, cn } from '@heroui/react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { getAllAlbums } from '@/services/api/album-ep'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { AlbumsData, Album } from '@/models/responses/albums-data'
import queryConstants from '@/constants/query-constants'

import Container from './ui/container'
import AlbumCard from '@/app/albums/_components/album-card'
import AlbumCardSkeleton from '@/app/albums/_components/album-card-skeleton'

type TrendingSongsProps = {
    heading?: string
    hideHeading?: boolean
}

const TrendingSongs = ({ heading, hideHeading }: TrendingSongsProps) => {
    const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest')
    const isTrending = activeTab === 'popular'

    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        status,
        refetch,
    } = useInfiniteQuery({
        queryKey: [queryConstants.getAlbums, isTrending],
        queryFn: ({ pageParam = 1 }) =>

            getAllAlbums({
                page: pageParam,
                limit: 12,
                is_trending: isTrending
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

    useEffect(() => {
        refetch()
    }, [activeTab, refetch])

    return (
        <Container>
            {/* Tabs */}
            <div className="flex  mb-8">
                <div
                    onClick={() => setActiveTab('latest')}
                    className={`px-4 py-2 text-lg cursor-pointer  border-b ${activeTab === 'latest' ? 'border-primary text-primary' : 'bg-transparent text-wight'
                        }`}
                >
                    Latest
                </div>
                <div
                    onClick={() => setActiveTab('popular')}
                    className={`px-4 py-2 text-lg  border-b cursor-pointer  ${activeTab === 'popular' ? 'border-primary text-primary' : 'bg-transparent text-wight'
                        }`}
                >
                    Trending
                </div>
            </div>

            {/* Album Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {status === 'pending' &&
                    Array.from({ length: 8 }).map((_, i) => <AlbumCardSkeleton key={i} />)}

                {status === 'success' &&
                    albums.map((album: Album) => (
                        <AlbumCard key={album._id} data={album} />
                    ))}

                {isFetchingNextPage &&
                    Array.from({ length: 4 }).map((_, i) => (
                        <AlbumCardSkeleton key={`loading-${i}`} />
                    ))}
            </div>

            {/* Scroll trigger */}
            <CircularProgress
                ref={observerRef}
                className={cn(hasNextPage ? 'block' : 'hidden')}
            />
        </Container>
    )
}

export default TrendingSongs
