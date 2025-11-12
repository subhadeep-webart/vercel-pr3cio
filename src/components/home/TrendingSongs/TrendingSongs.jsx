'use client'

import React from 'react'
import { getSongs } from '@/services/api/song-api'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import queryConstants from '@/constants/query-constants'
import { PAUSE_ICON } from '@/utils/icons'

import TrendingSkeleton from './_components/TrendingSkeleton'
import TrendingSongCard from './_components/TrendingSongCard'

const trending = true
const TrendingSongs = () => {

    const { data, status } = useQuery({
        queryKey: [queryConstants.getSongs, true],
        queryFn: ({ pageParam = 1 }) =>
            getSongs({
                page: pageParam,
                limit: 5,
                is_trending: true,
            }),
    })

    const songs = data?.data
    const total = data?.total

    return (
        <>
            <div className='mt-5 rounded-[27px] bg-[#2A2929] px-6 py-6'>
                {status === 'pending' &&
                    Array.from({ length: 5 }).map((_, i) => (
                        <TrendingSkeleton key={i} />
                    ))}
                {status === 'success' && (
                    <>
                        <div className='xs:justify-between flex flex-wrap items-center justify-between sm:justify-between xl:justify-between 2xl:justify-between'>
                            <h2 className='text-base font-semibold text-white'>
                                Trending songs
                            </h2>
                            <span className='inline-block text-center'>
                                <Link
                                    // href='/browse'
                                    href='/users/songs/trendings'
                                    className='inline-block h-[1.88rem] rounded-[27px] border-1 border-solid border-[#d3d3d3a1] px-8 text-xs font-semibold leading-[1.88rem] text-[#F9FF45] transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                                    View all {total}
                                </Link>
                            </span>
                        </div>
                        {songs?.length > 0 ? songs?.map((item, index) => (
                            <TrendingSongCard song={item} songs={songs} key={item?._id} index={index} />
                        )) : (
                            <p className='mt-4 text-sm text-gray-300'>No trending songs available.</p>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default TrendingSongs
