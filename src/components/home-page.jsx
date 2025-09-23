'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { getAllAlbums } from '@/services/api/album-ep'
import { Button, CircularProgress, cn } from '@heroui/react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import Container from '@/components/ui/container'

import NewReleases from './home/NewReleases'
import PopularAlbums from './home/PopularAlbums'
import PopularArtists from './home/PopularArtists'
import RightSidebar from './home/RightSideBar'
import TopGenres from './home/TopGenres/TopGenres'
import TrendingSongs from './home/TrendingSongs/TrendingSongs'

const HomePageLayout = () => {
    const [activeTab, setActiveTab] = useState('latestAlbum') // 'latestAlbum' or 'latestSong'
    const { isLoggedIn } = useAuth()
    const { setModal } = useApp()

    const {
        data: albumData,
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
                is_trending: false,
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const totalFetched = allPages.reduce(
                (acc, page) => acc + (page.albums?.length || 0),
                0
            )
            return lastPage?.total > totalFetched
                ? allPages.length + 1
                : undefined
        },
    })

    const albums = useMemo(() => {
        return albumData?.pages.flatMap((page) => page.albums) || []
    }, [albumData])

    const { observerRef } = useInfiniteScroll({
        callback: () => {
            if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage()
            }
        },
    })
    const handleActionInAlbumCard = () => {
        refetch()
    }

    console.log('Album Data=====>', albums)

    return (
        <>
            <div className='flex-1 pl-3 pr-3 md:px-5'>
                {/* New Releases */}
                <NewReleases />
                {/* Popular Album */}
                <PopularAlbums albums={albums} />
                <div className='mb-4 grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-2 xl:justify-between 2xl:grid-cols-2 2xl:justify-between'>
                    <div>
                        {/* <!-- Popular artists --> */}
                        <PopularArtists />
                        {/* <!-- Trending songs --> */}
                        <TrendingSongs />
                    </div>
                    {/* <!-- Top Genres --> */}
                    <TopGenres />
                </div>

                <div className="mb-5 mt-5 rounded-[27px] bg-[#2A2929] bg-none bg-[length:70%_auto] bg-[right_center] bg-no-repeat px-5 py-3 md:bg-[url('/images/3.webp')] lg:px-10 lg:py-5">
                    <div className=''>
                        <h2 className='font-protest mb-5 mt-3 text-[1.2rem] leading-8 text-white lg:text-[1.75rem]'>
                            Mark Your Jam!
                            <br />
                            Tap the heart to keep your top songs
                            <br />
                            at your fingertips.
                        </h2>

                        <span className='inline-block text-center'>
                            <a
                                href='#'
                                className='rounded-4xl inline-block h-[2.50rem] border-1 border-solid border-[#494949] px-9 text-xs font-semibold leading-[2.50rem] text-white transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                                Log in to add favorite
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className='lg:flex-flex-[0_0_13.31rem] sticky top-[6.2rem] w-full flex-[0_0_auto] rounded-xl pl-3 pr-3 sm:w-full sm:flex-[0_0_auto] md:w-full md:flex-[0_0_auto] md:px-4 lg:w-[13.31rem] lg:px-0 xl:w-[15.31rem] xl:flex-[0_0_15.31rem] 2xl:w-[15.31rem] 2xl:flex-[0_0_15.31rem]'>
                <RightSidebar albums={albums} onActionComplete={handleActionInAlbumCard}  />
            </div>
            {/* Footer Home */}
        </>
    )
}

export default HomePageLayout
