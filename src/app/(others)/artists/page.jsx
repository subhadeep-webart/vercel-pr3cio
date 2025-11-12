'use client'

import { useEffect, useMemo } from 'react'
import { getAllArtists } from '@/services/api/artist-api'
import { CircularProgress, cn } from '@heroui/react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import PageCommonBg from '@/components/artist/PageCommonBg'
import Container from '@/components/ui/container'

import ArtistCard from './_components/artist-card'
import ArtistCardSkeleton from './_components/artist-card-skeleton'

const ArtistsPage = () => {
    
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
        useInfiniteQuery({
            queryKey: [queryConstants.getAllArtists],
            queryFn: ({ pageParam = 1 }) =>
                getAllArtists({
                    page: pageParam,
                    limit: 10,
                }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                console.log("All Pages======>", allPages)
                if (!Array.isArray(allPages)) return undefined

                const totalFetched = allPages?.reduce((acc, page) => {
                    const artistCount = Array.isArray(page?.artist)
                        ? page?.artist?.length
                        : 0
                    return acc + artistCount
                }, 0)

                const total = typeof lastPage?.total === 'number' ? lastPage?.total : 0

                return total > totalFetched ? allPages.length + 1 : undefined
            },
        })

    console.log('data===>', data)

    const artists = useMemo(() => {
        // return data?.artist ?? []
        return data?.pages?.flatMap((page) => page?.artist) ?? []
    }, [data])

    console.log('Artitst=======>', artists)

    const { observerRef } = useInfiniteScroll({
        callback: fetchNextPage,
    })

    return (
        <>
            <div className="flex items-start flex-wrap w-full justify-end">
                <div className="rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                    <div className="flex justify-between">
                        <h1 className="text-base md:text-[1.56rem] font-semibold mb-5">My Artist</h1>
                        {/* <ul className="flex">
                        <li><a href="#"
                                className="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300">Liked</a>
                        </li>
                        <li><a href="#"
                                className="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300">Download</a>
                        </li>
                    </ul> */}
                    </div>
                    <div
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                        {status === 'pending' &&
                            Array.from({ length: 10 }).map((_, i) => (
                                <ArtistCardSkeleton key={i} />
                            ))}

                        {status === 'success' &&
                            artists?.map((artist) => (
                                <ArtistCard
                                    key={artist._id}
                                    data={{
                                        _id: artist._id,
                                        name: artist.name,
                                        image: artist.avatar,
                                    }}
                                />
                            ))}

                        {isFetchingNextPage &&
                            Array.from({ length: 5 }).map((_, i) => (
                                <ArtistCardSkeleton key={`loading-${i}`} />
                            ))}
                    </div>
                </div>
                <div ref={observerRef} className="h-1 w-full" />
            </div>
        </>
    )
}

export default ArtistsPage
