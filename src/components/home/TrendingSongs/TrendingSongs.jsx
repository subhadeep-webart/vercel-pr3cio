import React from 'react'
import { getSongs } from '@/services/api/song-api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import queryConstants from '@/constants/query-constants'

import TrendingSkeleton from './_components/TrendingSkeleton'

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
    console.log('data', data)
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
                                    href='/browse'
                                    className='inline-block h-[1.88rem] rounded-[27px] border-1 border-solid border-[#d3d3d3a1] px-8 text-xs font-semibold leading-[1.88rem] text-[#F9FF45] transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                                    View all {total}
                                </Link>
                            </span>
                        </div>
                        {songs.map((item, index) => (
                            <div className="songlist relative mt-5 flex items-center justify-between pb-5 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                                <span className='pr-3 text-[0.81rem]'>
                                    {index + 1}
                                </span>
                                <span className=''>
                                    <img
                                        src={item.artwork}
                                        alt='play'
                                        loading='lazy'
                                        className='relative inline-block h-[2.19rem] w-[2.19rem] object-cover'
                                    />
                                </span>
                                <div className='flex-1 px-3'>
                                    <h6 className='text-[0.81rem] font-semibold'>
                                        {item.title}
                                    </h6>
                                    <p className='text-[0.63rem]'>
                                        {item.artist}
                                    </p>
                                </div>
                                <span className='mr-3 flex h-[1.31rem] w-[1.31rem] cursor-pointer items-center justify-center rounded-full bg-[#D3D7E4] leading-[1.31rem]'>
                                    <img
                                        src='/images/player-icon/play2.webp'
                                        alt='play'
                                        loading='lazy'
                                        className=''
                                    />
                                </span>
                                <span className='pl-3 text-sm font-semibold'>
                                    $ {item.amount}
                                </span>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default TrendingSongs
