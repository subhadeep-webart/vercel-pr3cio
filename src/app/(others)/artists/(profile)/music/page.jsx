'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import SongsCard from '@/app/(others)/albums/_components/SongsCard'

const Music = () => {
    const artist = useSelector((state) => state.artist.data)

    return (
        <>
            <div class='w-full px-4 py-4'>
                {artist?.songs.map((item, index, items) => (
                    <SongsCard key={item?._id} song={item} data={items} />
                ))}
            </div>
        </>
    )
}

export default Music
