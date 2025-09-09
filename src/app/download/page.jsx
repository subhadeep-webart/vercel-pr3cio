'use client'

import React from 'react'
import { getInAppDownloadList } from '@/services/api/song-api'
import { Card, Divider } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'
import { withAuthProtection } from '@/components/auth/protected-component'
import Container from '@/components/ui/container'

// import AlbumCard from '../albums/_components/album-card'
// import AlbumCardSkeleton from '../albums/_components/album-card-skeleton'
// import MusicCardSkeleton from '../(others)/artists/_components/MusicCardSkeleton'
// import MusicCard from '../songs/_components/music-card'
// import UserNav from '../subscriptions/_components/UserNav'

const Page = () => {
    const {
        data: songData,
        isLoading: songsLoading,
        error: songsError,
    } = useQuery({
        queryKey: [queryConstants.inAppDownload, { type: 'song' }],
        queryFn: () => getInAppDownloadList({ type: 'song' }),
    })

    const {
        data: albumData,
        isLoading: albumsLoading,
        error: albumsError,
    } = useQuery({
        queryKey: [queryConstants.inAppDownload, { type: 'album' }],
        queryFn: () => getInAppDownloadList({ type: 'album' }),
    })

    const songList = (songData?.song || []).filter((song) => song !== null)
    const albumList = (albumData?.album || []).filter((album) => album !== null)

    return (
        <Container>
            {/* <UserNav />
            <Card className='mt-4 w-full bg-[#2A2F2C] p-10 text-white'>
                <h2 className='text-h2 mb-5'>Your Favourite Albums & Songs</h2>

                {albumsLoading ? (
                    <div className='mb-2 grid grid-cols-1 justify-between gap-6 sm:grid-cols-3 lg:grid-cols-4'>
                        {Array.from({ length: 4 }).map((_, i) => (
                            <AlbumCardSkeleton key={i} />
                        ))}
                    </div>
                ) : albumsError ? (
                    <div>Failed to load albums</div>
                ) : (
                    <div className='mb-2 grid grid-cols-1 justify-between gap-6 sm:grid-cols-3 lg:grid-cols-4'>
                        {albumList?.length > 0 ? (
                            albumList?.map((album) => (
                                <>
                                    <AlbumCard key={album?._id} data={album} />
                                </>
                            ))
                        ) : (
                            <div>No albums in favorites</div>
                        )}
                    </div>
                )}

                <Divider className='my-8' />

                {songsLoading ? (
                    Array.from({ length: 8 }).map((_, idx) => (
                        <MusicCardSkeleton key={idx} />
                    ))
                ) : songsError ? (
                    <div>Failed to load songs</div>
                ) : (
                    <div className='space-y-4'>
                        {songList?.length > 0 ? (
                            songList?.map((song) => (
                                <>
                                    <MusicCard
                                        key={song?._id}
                                        track={song}
                                        tracks={songList}
                                        likable={false}
                                    />
                                </>
                            ))
                        ) : (
                            <div>No songs in favorites</div>
                        )}
                    </div>
                )}
            </Card> */}
            
        </Container>
    )
}

export default withAuthProtection(Page)
