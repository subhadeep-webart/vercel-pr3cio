'use client'

import React, { useEffect, useState } from 'react'
import ArtistCardSkeleton from '@/app/(others)/artists/_components/artist-card-skeleton'
import { getAllArtists } from '@/services/api/artist-api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import queryConstants from '@/constants/query-constants'

const PopularArtists = () => {
    const { data, status } = useQuery({
        queryKey: [queryConstants.getAllArtists],
        queryFn: () => getAllArtists({ page: 1, limit: 3 }),
    })
    console.log('data', data)

    const artists = data?.artist || []
    console.log('artists', artists)

    return (
        <>
            <div className='mt-5 rounded-[27px] bg-[#2A2929] px-5 py-5'>
                <div className='xs:justify-between flex flex-wrap items-center justify-between sm:justify-between xl:justify-between 2xl:justify-between'>
                    <h2 className='text-base font-semibold text-white'>
                        Popular artists
                    </h2>
                    <span className='inline-block text-center'>
                        {/* <Link
                            href='/artists'
                            className='rounded-4xl inline-block h-[1.88rem] border-1 border-solid border-[#d3d3d3a1] px-8 text-xs font-semibold leading-[1.88rem] text-[#F9FF45] transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                            View all
                        </Link> */}
                    </span>
                </div>
                <div className='xl::gap-16 grid grid-cols-1 grid-cols-2 justify-center gap-4 sm:grid-cols-2 sm:justify-center md:grid-cols-3 md:justify-center md:gap-4 lg:justify-center lg:gap-8 xl:justify-between 2xl:justify-between'>
                    {status === 'pending' &&
                        Array.from({ length: 3 }).map((_, i) => (
                            <ArtistCardSkeleton key={i} />
                        ))}

                    {status === 'success' &&
                        artists?.map((item, index) => (
                            <div key={index} className="relative mt-5 bg-center bg-no-repeat text-center after:absolute after:top-[30%] after:z-0 after:h-[4.50rem] after:w-[0.06rem] after:-translate-y-[50%] after:transform after:bg-[url('/images/artist/line.webp')] after:content-[''] lg:after:right-[0rem] xl:after:right-[-1rem] 2xl:after:right-[-1rem]">
                                <Link
                                    href={`/artists/bio?id=${item._id}`}
                                    className='block'>
                                    <img
                                        src={item?.avatar}
                                        alt='signs'
                                        loading='lazy'
                                        className='m-auto max-h-[7.63rem] w-full max-w-[7.63rem] rounded-full object-cover'
                                    />
                                    <h3 className='mt-3 text-sm font-semibold'>
                                        {item.name}
                                    </h3>
                                    <p className='text-[0.69rem]'>Artist</p>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default PopularArtists
