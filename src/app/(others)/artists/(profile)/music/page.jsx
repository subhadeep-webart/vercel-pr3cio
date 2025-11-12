'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import SongsCard from '@/app/(others)/albums/_components/SongsCard'

const Music = () => {
    const artist = useSelector((state) => state.artist.data)

    return (
        <>
            <div class='w-full px-4 py-4 min-h-[340px]'>
                {artist?.songs.map((item, index, items) => (
                    <SongsCard key={item?._id} track={item} tracks={items} />
                ))}
            </div>
        </>
    )
}

export default Music
