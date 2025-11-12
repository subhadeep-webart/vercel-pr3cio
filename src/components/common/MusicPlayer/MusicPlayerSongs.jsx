'use client'

import { FaPlay } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'
import { MdOutlineDownloadForOffline } from 'react-icons/md'

import styles from './music.player.module.scss'
import MusicPlayerSongsAlsoLike from './MusicPlayerSongsAlsoLike'
import MusicPlayerSongsTable from './MusicPlayerSongsTable'

const MusicPlayerSongs = () => {
    return (
        <>
            <div
                className={`relative rounded-t-2xl text-white ${styles.song_wrapper} mb-32`}>
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#121212]' />

                {/* <div className='relative z-10 flex h-48 flex-col justify-end p-6'>
                    <p className='text-sm opacity-80'>Public Playlist</p>
                    <h1 className='mt-1 text-4xl font-bold'>I-Pop Icons</h1>
                    <p className='mt-1 max-w-md text-sm text-gray-300'>
                        Hottest tracks from your favourite I-Pop Icons. Cover –
                        Artist Name.
                    </p>
                </div> */}
                <div className='relative z-10 flex h-48 justify-end p-6'>
                    <span className='mr-6 block w-[13.19rem] flex-[0_0_13.19rem]'>
                        <img
                            src='/images/songs/10.webp'
                            alt='songs'
                            className='h-[15.00rem] w-full rounded-[0.75rem] object-cover'
                        />
                    </span>
                    <div className='mt-14 grow'>
                        <h3 className='line-clamp-1 text-base font-semibold md:text-2xl'>
                            Song Title
                        </h3>
                        <small className='line-clamp-3 text-sm text-[#979797]'>
                            Song Description
                        </small>
                        <p className='mb-10 text-xs text-[#F844B0]'>Artist</p>

                        <button className='group inline-flex h-[2.63rem] w-[2.63rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                            <svg
                                width='15'
                                height='15'
                                viewBox='0 0 10 10'
                                fill='none'
                                className='fill-current text-black'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z' />
                            </svg>
                        </button>
                        <button className='group ml-2 inline-flex h-[1.75rem] w-[1.75rem] cursor-pointer items-center justify-center rounded-full border-1 border-solid border-[#989898] bg-[#2F2F2F]'>
                            <svg
                                width='11'
                                height='9'
                                viewBox='0 0 11 9'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                    fill='#F844B0'
                                    stroke='#F844B0'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className='mt-5 flex items-center gap-6'>
                <button className='rounded-full bg-green-500 p-4 shadow-lg transition-transform duration-200 hover:scale-105'>
                    <FaPlay className='text-xl text-black' />
                </button>

                <button className='text-3xl text-gray-300 transition-colors duration-150 hover:text-white'>
                    <FiPlusCircle />
                </button>

                <button className='text-3xl text-gray-300 transition-colors duration-150 hover:text-white'>
                    <MdOutlineDownloadForOffline />
                </button>

                <button className='text-3xl text-gray-300 transition-colors duration-150 hover:text-white'>
                    ⋯
                </button>
            </div> */}

            {/* <div className='mt-6 px-2'>
                <div className='grid grid-cols-6 border-b border-gray-700 pb-2 text-sm text-gray-400'>
                    <div className='col-span-1'>#</div>
                    <div className='col-span-2'>Title</div>
                    <div className='col-span-1'>Album</div>
                    <div className='col-span-1'>Date Added</div>
                    <div className='col-span-1 text-right'>⏱</div>
                </div>

                <MusicPlayerSongsTable />
                <MusicPlayerSongsTable />
                <MusicPlayerSongsTable />
                <MusicPlayerSongsTable />
            </div> */}

            <MusicPlayerSongsTable />
            <MusicPlayerSongsTable />
            <MusicPlayerSongsTable />
            <MusicPlayerSongsTable />

            <div className='mt-6 px-2'>
                <h3 className='mb-4 mt-5 pl-2 text-base font-semibold md:pl-0 md:text-2xl'>
                    You might also like
                </h3>

                <div className='grid grid-cols-2 gap-5 pl-2 sm:grid-cols-2 md:grid-cols-3 md:pl-0 xl:grid-cols-4 2xl:grid-cols-4'>
                    <MusicPlayerSongsAlsoLike />
                    <MusicPlayerSongsAlsoLike />
                    <MusicPlayerSongsAlsoLike />
                    <MusicPlayerSongsAlsoLike />
                </div>
            </div>
        </>
    )
}

export default MusicPlayerSongs
