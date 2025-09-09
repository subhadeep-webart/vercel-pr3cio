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
    const { data, status } = useQuery({
        queryKey: [queryConstants.getAllArtists],
        queryFn: () => getAllArtists({ page: 1, limit: 50 }),
    })
    // const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    //     useInfiniteQuery({
    //         queryKey: [queryConstants.getAllArtists],
    //         queryFn: ({ pageParam = 1 }) =>
    //             getAllArtists({
    //                 page: pageParam,
    //                 limit: 10,
    //             }),
    //         initialPageParam: 1,
    //         getNextPageParam: (lastPage, allPages) => {
    //             console.log("All Pages======>", allPages)
    //             if (!Array.isArray(allPages)) return undefined

    //             const totalFetched = allPages?.reduce((acc, page) => {
    //                 const artistCount = Array.isArray(page?.artist)
    //                     ? page?.artist?.length
    //                     : 0
    //                 return acc + artistCount
    //             }, 0)

    //             const total = typeof lastPage?.total === 'number' ? lastPage?.total : 0

    //             return total > totalFetched ? allPages.length + 1 : undefined
    //         },
    //     })

    console.log('data===>', data)

    const artists = useMemo(() => {
        return data?.artist ?? []
        // return data?.pages?.flatMap((page) => page?.artist) ?? []
    }, [data])

    console.log("Artitst=======>", artists);

    // const { observerRef } = useInfiniteScroll({
    //     callback: fetchNextPage,
    // })
    // if (!artists || !artists?.length) {
    //     return
    // }

    return (
        <>
            <Container className=''>
                <h2 className='text-h2 mb-5'>Artists</h2>
                <div
                    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    {status === 'pending' &&
                        Array.from({ length: 8 }).map((_, i) => (
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

                    {/* {isFetchingNextPage &&
                        Array.from({ length: 4 }).map((_, i) => (
                            <ArtistCardSkeleton key={`loading-${i}`} />
                        ))} */}
                </div>
                {/* <CircularProgress
                    //ref={observerRef}
                    className={cn(hasNextPage ? 'block' : 'hidden')}
                />{' '} */}
            </Container>
        </>
    )
}

export default ArtistsPage
