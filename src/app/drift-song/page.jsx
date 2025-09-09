'use client'

import React, { useEffect, useState } from 'react'
import { getPrivateSongList } from '@/services/api/user-api'

import MusicCard from '../artist/_components/MusicCard'

const DraftSong = () => {
    const [driftList, setDriftList] = useState([])
    const getDriftList = async () => {
        const resp = await getPrivateSongList()
        if (resp.status === 'success') {
            setDriftList(resp.songs)
        }
    }

    useEffect(() => {
        getDriftList()
    }, [])
    return (
        <div>
            <div className='space-y-4'>
                {driftList.map((song, index) => (
                    <MusicCard
                        key={song._id}
                        track={song}
                        drift
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default DraftSong
