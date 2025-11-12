'use client'

import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import useAuth from '@/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import queryConstants from '@/constants/query-constants'
import { getArtistAllProduct } from '@/services/api/artist-api'
import MerchandiseCard from './_components/MerchandiseCard'

const Merchandise = () => {
    const artist = useSelector((state) => state.artist.data);

    return (
        <>
            <div class='grid h-[40rem] w-full grid-cols-2 items-start gap-8 overflow-y-auto overflow-x-hidden px-8 py-4 [scrollbar-width:none] sm:grid-cols-2 lg:grid-cols-3'>
                {artist?.products?.length > 0 &&
                    artist?.products?.map((product) => (
                        <MerchandiseCard product={product} key={product?._id} artist_id={artist?._id}/>
                    ))}
            </div>
        </>
    )
}

export default Merchandise
