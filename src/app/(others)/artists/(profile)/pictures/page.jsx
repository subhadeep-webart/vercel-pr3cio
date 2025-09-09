'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const Pictures = () => {
    const artist = useSelector((state) => state.artist.data)
    console.log('Pictures', artist)

    return (
        <>
            <div class='grid w-full grid-cols-2 gap-8 px-8 py-4 sm:grid-cols-3 lg:grid-cols-4 lg:grid-cols-6'>
                <div class=''>
                    <img
                        src='/images/artist/8.webp'
                        alt='skipBack'
                        loading='lazy'
                        class='h-[10.13rem] w-full rounded-[0.75rem] object-cover'
                    />
                </div>
            </div>
        </>
    )
}

export default Pictures
