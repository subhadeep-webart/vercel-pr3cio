'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import PictureCard from './_components/PictureCard'

const Pictures = () => {
    const artist = useSelector((state) => state.artist.data)
    const { gallery = [] } = artist;

    return (
        <>
            <div class='grid w-full grid-cols-2 gap-8 px-8 py-4 sm:grid-cols-3 lg:grid-cols-6'>
                {
                    gallery.map((img, index) => (<PictureCard imageUrl={img} key={`gallery-image-${index + 1}`} />))
                }
            </div>
        </>
    )
}

export default Pictures
