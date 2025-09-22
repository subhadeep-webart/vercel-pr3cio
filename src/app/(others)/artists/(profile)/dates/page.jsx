"use client"

import useAuth from '@/hooks/useAuth'
import React, { use } from 'react'
import { useSelector } from 'react-redux'
import EventCard from './_components/EventCard'

const Dates = () => {
    const artist = useSelector((state) => state.artist.data)

    console.log("Artist Details===>", artist);
    return (
        <>
            <div class='grid w-full grid-cols-1 gap-4 px-8 py-4 sm:grid-cols-2 lg:grid-cols-3'>
                {artist?.event?.length > 0 ? artist?.event?.map((eventDetails)=>(
                <EventCard key={eventDetails?._id} eventDetails={eventDetails} />
                )):(
                    <div className='col-span-3 text-center text-lg text-gray-500'>No Events Found</div>
                )}
            </div>
        </>
    )
}

export default Dates;
