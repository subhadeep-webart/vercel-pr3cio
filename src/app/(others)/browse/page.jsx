'use client'

import React from 'react'
import { getSongs } from '@/services/api/song-api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FaPlay, FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { IoMdDownload } from 'react-icons/io'
import { IoPlay } from 'react-icons/io5'
import { RiMusicAiLine } from 'react-icons/ri'

import queryConstants from '@/constants/query-constants'
import TrendingSkeleton from '@/components/home/TrendingSongs/_components/TrendingSkeleton'

const Browse = () => {
    const { data, status } = useQuery({
        queryKey: [queryConstants.getSongs, true],
        queryFn: ({ pageParam = 1 }) =>
            getSongs({
                page: pageParam,
                limit: 27,
                is_trending: false,
            }),
    })
    const allSongs = data?.data
    console.log('allSongs', allSongs)

    return (
        <>
            <div className='w-full'>
                <div className='float-right mb-6 sm:w-[calc(100%-1rem)]'>
                    <ul className='inline-flex w-auto rounded-[0.75rem] bg-[#2B2B2B] py-2 pr-2'>
                        <li>
                            <a
                                href='#'
                                className='ml-2 rounded-[0.50rem] bg-[#373437] px-4 py-1 text-xs font-medium text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694]'>
                                All
                            </a>
                        </li>
                        <li>
                            <a
                                href='store.html'
                                className='ml-2 rounded-[0.50rem] bg-gradient-to-r from-[#D344C9] to-[#2D2694] px-4 py-1 text-xs font-medium text-white transition-colors duration-300'>
                                Songs
                            </a>
                        </li>
                        <li>
                            <a
                                href='store-album.html'
                                className='ml-2 rounded-[0.50rem] bg-[#373437] px-4 py-1 text-xs font-medium text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694]'>
                                Albums
                            </a>
                        </li>
                    </ul>
                </div>
                {status === 'pending' &&
                    Array.from({ length: 5 }).map((_, i) => (
                        <TrendingSkeleton key={i} />
                    ))}

                {status === 'success' && (
                    <div className='float-right rounded-[0.75rem] bg-[#2B2B2B] p-6 sm:w-[calc(100%-1rem)]'>
                        <div className='flex justify-between'>
                            <h1 className='mb-5 text-[1.56rem] font-semibold'>
                                Songs
                            </h1>
                            <ul className='flex'>
                                <li>
                                    <a
                                        href='#'
                                        className='flex text-sm font-medium text-[#9D9D9D] transition-colors duration-300'>
                                        Recently Added
                                        <span className='ml-2 inline-block'>
                                            <svg
                                                width='22'
                                                height='22'
                                                viewBox='0 0 22 22'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.4788 10.9999H8.15343M4.15584 10.9999H2.52051M4.15584 10.9999C4.15584 10.4699 4.36638 9.96167 4.74114 9.58691C5.1159 9.21214 5.62418 9.00161 6.15417 9.00161C6.68417 9.00161 7.19245 9.21214 7.56721 9.58691C7.94197 9.96167 8.15251 10.4699 8.15251 10.9999C8.15251 11.5299 7.94197 12.0382 7.56721 12.413C7.19245 12.7877 6.68417 12.9983 6.15417 12.9983C5.62418 12.9983 5.1159 12.7877 4.74114 12.413C4.36638 12.0382 4.15584 11.5299 4.15584 10.9999ZM19.4788 17.0564H14.2098M14.2098 17.0564C14.2098 17.5865 13.9988 18.0953 13.624 18.4702C13.2491 18.845 12.7407 19.0556 12.2106 19.0556C11.6806 19.0556 11.1723 18.8442 10.7976 18.4694C10.4228 18.0946 10.2123 17.5863 10.2123 17.0564M14.2098 17.0564C14.2098 16.5262 13.9988 16.0183 13.624 15.6435C13.2491 15.2686 12.7407 15.058 12.2106 15.058C11.6806 15.058 11.1723 15.2686 10.7976 15.6433C10.4228 16.0181 10.2123 16.5264 10.2123 17.0564M10.2123 17.0564H2.52051M19.4788 4.94352H16.6326M12.635 4.94352H2.52051M12.635 4.94352C12.635 4.41353 12.8455 3.90525 13.2203 3.53049C13.5951 3.15573 14.1034 2.94519 14.6333 2.94519C14.8958 2.94519 15.1556 2.99688 15.3981 3.0973C15.6405 3.19773 15.8608 3.34493 16.0464 3.53049C16.2319 3.71605 16.3791 3.93635 16.4796 4.17879C16.58 4.42124 16.6317 4.6811 16.6317 4.94352C16.6317 5.20595 16.58 5.4658 16.4796 5.70825C16.3791 5.9507 16.2319 6.171 16.0464 6.35656C15.8608 6.54212 15.6405 6.68932 15.3981 6.78974C15.1556 6.89017 14.8958 6.94186 14.6333 6.94186C14.1034 6.94186 13.5951 6.73132 13.2203 6.35656C12.8455 5.9818 12.635 5.47351 12.635 4.94352Z'
                                                    stroke='#9D9D9D'
                                                    stroke-width='1.2'
                                                    stroke-miterlimit='10'
                                                    stroke-linecap='round'
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='grid h-[39rem] grid-cols-1 grid-cols-2 gap-8 overflow-y-auto overflow-x-hidden [scrollbar-width:none] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                            {allSongs.map((item, index) => (
                                <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                                    <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                                        <img
                                            src={item?.artwork}
                                            alt='skipBack'
                                            loading='lazy'
                                            className='h-[185.93] w-full rounded-[0.75rem] object-cover'
                                        />

                                        <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                            <h6 className='text-sm font-semibold'>
                                                $ {item?.amount}
                                            </h6>
                                            <Link
                                                href='#'
                                                className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                                <FiShoppingCart
                                                    size={16}
                                                    color='black'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <h5>
                                        <Link
                                            href='#'
                                            className='text-sm font-semibold'>
                                            {item?.title}
                                        </Link>
                                    </h5>
                                    <p className='text-xs text-[#9D9D9D]'>
                                        {item?.artist}
                                    </p>
                                    <div className='mt-2 flex justify-between'>
                                        <span className='group flex rounded-full bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
                                            <RiMusicAiLine
                                                size={14}
                                                color='#4D41FA'
                                            />
                                            {''}
                                            {item?.play_count}
                                        </span>
                                        <ul className='flex'>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-[#191919]'>
                                                    <IoMdDownload
                                                        size={14}
                                                        color='#4D41FA'
                                                    />
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919]'>
                                                    <FaRegHeart
                                                        size={10}
                                                        color='#F844B0'
                                                    />
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                                    <FaPlay
                                                        size={10}
                                                        color='#4D41FA'
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Browse
