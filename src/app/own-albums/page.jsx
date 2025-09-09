"use client"
import queryConstants from '@/constants/query-constants'
import { getUserAlbums } from '@/services/api/album-ep'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Container from "../../components/ui/container"
import AlbumCard from '../albums/_components/album-card'
import AlbumCardSkeleton from '../albums/_components/album-card-skeleton'
import { withAuthProtection } from '@/components/auth/protected-component'

const OwnAlbums = () => {
    const { data: albumsData, status, refetch } = useQuery({
        queryKey: [queryConstants.getUserAlbum],
        queryFn: getUserAlbums,
    })

    const handleActionInAlbumCard = () => {
        refetch();
    };
    return (
        <Container>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {status === 'loading' &&
                    // When data is still loading, show skeleton loaders
                    Array.from({ length: 8 }).map((_, i) => <AlbumCardSkeleton key={i} />)
                }

                {status === 'success' &&
                    // When data is successfully fetched, render the actual albums
                    albumsData?.albums?.map((album) => (
                        <AlbumCard key={album._id} data={album} ownAlbum handleActionInAlbumCard={handleActionInAlbumCard} />
                    ))
                }

                {status === 'error' &&
                    // Optional: Handle error state
                    <div>There was an error loading the albums.</div>
                }
            </div>
        </Container>
    )
}

export default withAuthProtection(OwnAlbums)
