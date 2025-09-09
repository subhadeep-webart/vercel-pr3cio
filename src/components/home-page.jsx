'use client'

import React, { useEffect, useMemo, useState } from 'react'
import AlbumCard from '@/app/albums/_components/album-card'
import AlbumCardSkeleton from '@/app/albums/_components/album-card-skeleton'
import MusicList from '@/app/songs/_components/music-list'
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
        // <Container className="space-y-6">
        //     {/* Tabs */}
        //     <div className="flex gap-4 mb-4">
        //         <div
        //             onClick={() => setActiveTab('latestAlbum')}
        //             className={`px-4 py-2 text-lg cursor-pointer border-b-2 ${activeTab === 'latestAlbum' ? 'border-primary text-primary' : 'border-transparent text-gray-500'
        //                 }`}
        //         >
        //             Latest Albums
        //         </div>
        //         <div
        //             onClick={() => handelTab()}
        //             className={`px-4 py-2 text-lg cursor-pointer border-b-2 ${activeTab === 'latestSong' ? 'border-primary text-primary' : 'border-transparent text-gray-500'
        //                 }`}
        //         >
        //             Latest Songs
        //         </div>
        //     </div>

        //     {/* Tab content */}
        //     {activeTab === 'latestAlbum' ? (
        //         <div>
        //             <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        //                 {status === 'pending' &&
        //                     Array.from({ length: 8 }).map((_, i) => <AlbumCardSkeleton key={i} />)}

        //                 {status === 'success' &&
        //                     albums.map((album) => <AlbumCard key={album._id} data={album} handleActionInAlbumCard={handleActionInAlbumCard} />)}

        //                 {isFetchingNextPage &&
        //                     Array.from({ length: 4 }).map((_, i) => (
        //                         <AlbumCardSkeleton key={`loading-${i}`} />
        //                     ))}
        //             </div>

        //             <CircularProgress
        //                 ref={observerRef}
        //                 className={cn(hasNextPage ? 'block' : 'hidden')}
        //             />
        //         </div>
        //     ) : (
        //         <MusicList trending={false} />
        //     )}
        // </Container>
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

                <div class="mb-5 mt-5 rounded-[27px] bg-[#2A2929] bg-none bg-[length:70%_auto] bg-[right_center] bg-no-repeat px-5 py-3 md:bg-[url('/images/3.webp')] lg:px-10 lg:py-5">
                    <div class=''>
                        <h2 class='font-protest mb-5 mt-3 text-[1.2rem] leading-8 text-white lg:text-[1.75rem]'>
                            Mark Your Jam!
                            <br />
                            Tap the heart to keep your top songs
                            <br />
                            at your fingertips.
                        </h2>

                        <span class='inline-block text-center'>
                            <a
                                href='#'
                                class='rounded-4xl inline-block h-[2.50rem] border-1 border-solid border-[#494949] px-9 text-xs font-semibold leading-[2.50rem] text-white transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                                Log in to add favorite
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className='lg:flex-flex-[0_0_13.31rem] sticky top-[6.2rem] w-full flex-[0_0_auto] rounded-xl pl-3 pr-3 sm:w-full sm:flex-[0_0_auto] md:w-full md:flex-[0_0_auto] md:px-4 lg:w-[13.31rem] lg:px-0 xl:w-[15.31rem] xl:flex-[0_0_15.31rem] 2xl:w-[15.31rem] 2xl:flex-[0_0_15.31rem]'>
                <RightSidebar />
            </div>
            {/* Footer Home */}
        </>
    )
}

export default HomePageLayout
