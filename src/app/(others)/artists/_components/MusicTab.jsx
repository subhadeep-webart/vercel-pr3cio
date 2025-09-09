'use client'

import { useMemo, useState } from 'react'
import { Image } from '@heroui/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
    FaBackward,
    FaForward,
    FaPause,
    FaPlay,
    FaVolumeUp,
} from 'react-icons/fa'

import queryConstants from '@/constants/query-constants'

// import DesktopPlayer from './DesktopPlayer'
import MusicCard from './MusicCard'
import MusicCardSkeleton from './MusicCardSkeleton'
import RecommendationsSlider from './RecommendationsSlider'

const MusicTab = ({ musics, albums, name }) => {
    const [playing, setPlaying] = useState(false)

    return (
        <div className='space-y-6'>
            {/* Track List */}
            {status === 'pending'
                ? Array.from({ length: 5 }).map((_, idx) => (
                      <MusicCardSkeleton key={idx} />
                  ))
                : musics?.map((music, index) => (
                      <MusicCard
                          key={music._id}
                          tracks={musics}
                          track={music}
                          index={index}
                      />
                  ))}

            {/* Recommendations Carousel */}
            <div className='w-full lg:block'>
                <h2 className='mb-4 text-lg font-semibold text-white'>
                    More By {name}
                </h2>
                <RecommendationsSlider recommendations={albums} />
            </div>

            {/* Bottom Music Player Bar */}
            {/* <DesktopPlayer /> */}
        </div>
    )
}

export default MusicTab
