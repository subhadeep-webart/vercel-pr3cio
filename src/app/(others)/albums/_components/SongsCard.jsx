'use client'

import Image from 'next/image'
import Link from 'next/link'

import { PAUSE_ICON } from '@/utils/icons'
import useAuth from '@/hooks/useAuth'
import usePlayer from '@/hooks/usePlayer'

import BuySongButton from '../../artists/my-library/song/_components/BuySongButton'
import { formatSecondsToMinutes } from '@/utils/func-utils'

const SongsCard = ({ track, tracks }) => {
    const { user } = useAuth()
    const player = usePlayer()

    console.log("data", track)

    const handleSongPlay = (e, track) => {
        console.log('Song======>', track)
        e.preventDefault()
        e.stopPropagation()
        if (!track) return
        player.clearCachedState()
        if (player.isCurrentSong(track._id)) {
            player.togglePlayback()
        } else {
            player.playTrack({ track, tracks })
        }
    }

    console.log("Track===========>", track);
    return (
        <>
            {/* <Link
                href={`/song-details/${song?._id}`}
                className='mb-3 flex flex-col sm:flex-row w-full items-start sm:items-center justify-between rounded-[0.75rem] px-4 sm:px-5 py-2 hover:bg-[#484848]'
                >
                <div className='flex items-center'>
                    <span 
                    className='mr-4 w-[2.5rem] sm:w-[2.81rem] flex-shrink-0'
                    >
                        <img
                            src={song?.artwork ?? '/images/album/4.webp'}
                            alt='artist'
                            className='h-[3.81rem] w-full rounded-[0.5rem] object-cover'
                        />
                    </span>
                    <div
                    className="w-full sm:w-52 mt-2 sm:mt-0"
                    >
                        <h6 className='text-lg font-semibold text-white line-clamp-1'>
                            {song?.title}
                        </h6>
                        <p className='text-sm font-medium text-[#CFCFCF] line-clamp-1'>
                            {song?.artist}
                        </p>
                    </div>
                    <div 
                    className='flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2 px-0 sm:px-4 mt-2 sm:mt-0'
                    >
                        <span className='group mx-2 flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-sm font-semibold text-white'>
                            <svg
                                width='17'
                                height='15'
                                viewBox='0 0 17 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='mr-1 fill-current text-[#F844B0]'>
                                <path d='M14.7851 8.88297L10.0869 13.7009C9.02938 14.7853 7.28605 14.7853 6.22852 13.7009L1.5303 8.88297C-0.299813 7.00625 -0.299813 3.96347 1.5303 2.08674C3.36041 0.210018 6.3276 0.210018 8.15771 2.08674C9.98783 0.210018 12.955 0.210018 14.7851 2.08674C16.6152 3.96347 16.6152 7.00625 14.7851 8.88297Z'></path>
                            </svg>
                            {song?.likes}
                        </span>
                        <span className='group mx-2 flex items-center rounded-full bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
                            <svg
                                width='14'
                                height='15'
                                viewBox='0 0 14 15'
                                fill='none'
                                className='mr-1 stroke-current text-[#4D41FA]'
                                xmlns='http://www.w3.org/2000/svg'>
                                <ellipse
                                    cx='6.68408'
                                    cy='7.81589'
                                    rx='1.26319'
                                    ry='1.26316'
                                    stroke-width='1.2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'></ellipse>
                                <ellipse
                                    cx='10.4741'
                                    cy='5.92112'
                                    rx='1.26319'
                                    ry='1.26316'
                                    stroke-width='1.2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'></ellipse>
                                <path
                                    d='M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069'
                                    stroke-width='1.2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'></path>
                                <path
                                    d='M11.7373 5.92105V1.5L13.0005 2.76316'
                                    stroke-width='1.2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'></path>
                            </svg>
                            {song?.play_count}
                        </span>
                        <span className='mx-2 text-base'>
                            ${song?.amount}
                        </span>
                    </div>
                </div>
                <div 
                className='flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0'
                >
                    <span className='mx-2 text-lg'>
                        {' '}
                        {song?.duration}
                    </span>
                    <ul className='mx-3 flex min-w-[8rem] items-center'>
                        <li className='ml-3'>
                            <button
                                onClick={(e) =>
                                    handleSongPlay(
                                        e, song
                                    )
                                }
                                className="bg-white w-[2.00rem] h-[2.00rem] rounded-full flex justify-center items-center group hover:bg-[#4D41FA]  transition-colors duration-300">
                                {player.isCurrentSong(
                                    song?._id
                                ) &&
                                    player.status ===
                                    'playing' ? (
                                    <Image
                                        src={
                                            PAUSE_ICON?.src
                                        }
                                        height={10}
                                        width={10}
                                        alt='Click to Pause'
                                    />
                                ) : (
                                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fill-current text-[#4D41FA] group-hover:text-white  transition-colors duration-300">
                                        <path
                                            d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z">
                                        </path>
                                    </svg>
                                )}
                            </button>
                        </li>
                        <li className='ml-6 w-[2.63rem] flex-[0_0_2.63rem]'>
                            {!user?.is_artist && <BuySongButton songId={song._id} />}
                        </li>
                    </ul>
                </div>
            </Link> */}

            {/* <Link
                href={`/song-details/${song?._id}`}
                className='mb-3 flex items-center gap-4 w-full rounded-[0.75rem] px-4 py-3 transition-colors duration-300 hover:bg-[#484848] md:px-5'>
            
                <div className='flex w-full items-start sm:w-auto sm:items-center'>
               
                    <span className='mr-3 h-[2.81rem] w-[2rem] md:h-[3.81rem] md:w-[3rem] flex-shrink-0'>
                        <img
                            src={song?.artwork ?? '/images/album/4.webp'}
                            alt='artist'
                            className='h-full w-full rounded-[0.5rem] object-cover'
                        />
                    </span>

                 
                    <div className='flex-1'>
                        <h6 className='line-clamp-1 text-sm font-semibold text-white md:text-lg'>
                            {song?.title}
                        </h6>
                        <p className='line-clamp-1 text-xs font-medium text-[#CFCFCF]'>
                            {song?.artist}
                        </p>
                    </div>
                </div>

              
                <div className='mt-3 flex flex-wrap justify-end md:items-center gap-2 md:ml-4 md:mt-0 md:flex-nowrap md:gap-4'>
                    <span className='group flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-sm font-semibold text-white'>
                        <svg
                            width='17'
                            height='15'
                            viewBox='0 0 17 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mr-1 fill-current text-[#F844B0]'>
                            <path d='M14.7851 8.88297L10.0869 13.7009C9.02938 14.7853 7.28605 14.7853 6.22852 13.7009L1.5303 8.88297C-0.299813 7.00625 -0.299813 3.96347 1.5303 2.08674C3.36041 0.210018 6.3276 0.210018 8.15771 2.08674C9.98783 0.210018 12.955 0.210018 14.7851 2.08674C16.6152 3.96347 16.6152 7.00625 14.7851 8.88297Z'></path>
                        </svg>
                        {song?.likes}
                    </span>
                    <span className='group flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-xs font-semibold text-white'>
                        <svg
                            width='14'
                            height='15'
                            viewBox='0 0 14 15'
                            fill='none'
                            className='mr-1 stroke-current text-[#4D41FA]'
                            xmlns='http://www.w3.org/2000/svg'>
                            <ellipse
                                cx='6.68408'
                                cy='7.81589'
                                rx='1.26319'
                                ry='1.26316'
                                strokeWidth='1.2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <ellipse
                                cx='10.4741'
                                cy='5.92112'
                                rx='1.26319'
                                ry='1.26316'
                                strokeWidth='1.2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069'
                                strokeWidth='1.2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M11.7373 5.92105V1.5L13.0005 2.76316'
                                strokeWidth='1.2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        {song?.play_count}
                    </span>
                    <span className='text-sm font-medium text-white'>
                        ${song?.amount}
                    </span>
                </div>

         
                <div className='mt-3 flex w-full flex-col items-center justify-end gap-2 md:mt-0 md:w-auto md:flex-row md:ml-auto md:justify-end'
                >
                    <span className='text-sm font-medium text-white sm:text-base'>
                        {song?.duration}
                    </span>

                    <ul className='flex items-center gap-4'>
                        <li>
                            <button
                                onClick={(e) => handleSongPlay(e, song)}
                                className='group flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-[#4D41FA]'>
                                {player.isCurrentSong(song?._id) &&
                                player.status === 'playing' ? (
                                    <Image
                                        src={PAUSE_ICON?.src}
                                        height={10}
                                        width={10}
                                        alt='Click to Pause'
                                    />
                                ) : (
                                    <svg
                                        width='12'
                                        height='12'
                                        viewBox='0 0 10 10'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='fill-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'>
                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                    </svg>
                                )}
                            </button>
                        </li>

                        {!user?.is_artist && (
                            <li className='w-[2.63rem] flex-[0_0_2.63rem]'>
                                <BuySongButton songId={song._id} />
                            </li>
                        )}
                    </ul>
                </div>
            </Link> */}

            <Link
                href={`/song-details/${track?._id}`}
                className={`mb-3 flex w-full rounded-[0.75rem] px-4 py-3 transition-colors duration-300 hover:bg-[#484848] 
                md:flex-row md:items-center md:px-5`}>
                {/* Top Row: Artwork + Title/Artist */}
                <div className='flex !w-40 items-start sm:items-center'>
                    <span className='mr-3 h-[2.81rem] w-[2rem] flex-shrink-0 md:h-[3.81rem] md:w-[3rem]'>
                        <img
                            src={track?.artwork ?? '/images/album/4.webp'}
                            alt='artist'
                            className='h-full w-full rounded-[0.5rem] object-cover'
                        />
                    </span>
                    <div className='flex-1'>
                        <h6 className='line-clamp-1 text-sm font-semibold text-white md:text-lg'>
                            {track?.title}
                        </h6>
                        <p className='line-clamp-1 text-xs font-medium text-[#CFCFCF]'>
                            {track?.artist}
                        </p>
                    </div>
                </div>

                {/* This wrapper only for mobile: stack the bottom parts */}
                <div className='mt-3 flex w-full flex-col md:mt-0 md:flex md:flex-row md:items-center md:justify-between md:ml-4'>
                    {/* Likes / Plays / Amount */}
                    <div className='flex w-full flex-wrap justify-end gap-2 md:ml-4 md:w-auto md:flex-nowrap md:items-center md:gap-4'>
                        <span className='group flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-sm font-semibold text-white'>
                            <svg
                                width='17'
                                height='15'
                                viewBox='0 0 17 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='mr-1 fill-current text-[#F844B0]'>
                                <path d='M14.7851 8.88297L10.0869 13.7009C9.02938 14.7853 7.28605 14.7853 6.22852 13.7009L1.5303 8.88297C-0.299813 7.00625 -0.299813 3.96347 1.5303 2.08674C3.36041 0.210018 6.3276 0.210018 8.15771 2.08674C9.98783 0.210018 12.955 0.210018 14.7851 2.08674C16.6152 3.96347 16.6152 7.00625 14.7851 8.88297Z'></path>
                            </svg>
                            {track?.likes}
                        </span>
                        <span className='group flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-xs font-semibold text-white'>
                            <svg
                                width='14'
                                height='15'
                                viewBox='0 0 14 15'
                                fill='none'
                                className='mr-1 stroke-current text-[#4D41FA]'
                                xmlns='http://www.w3.org/2000/svg'>
                                <ellipse
                                    cx='6.68408'
                                    cy='7.81589'
                                    rx='1.26319'
                                    ry='1.26316'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <ellipse
                                    cx='10.4741'
                                    cy='5.92112'
                                    rx='1.26319'
                                    ry='1.26316'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11.7373 5.92105V1.5L13.0005 2.76316'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            {track?.play_count}
                        </span>
                        <span className='text-sm font-medium text-white'>
                            ${track?.amount}
                        </span>
                    </div>

                    {/* Duration + Control Buttons */}
                    <div className='mt-2 flex w-full items-center justify-end gap-2 md:mt-0 md:w-auto md:gap-4'>
                        {track?.duration && 
                        <span className='text-sm font-medium text-white sm:text-base'>
                            {formatSecondsToMinutes(track?.duration)}
                        </span>
}
                        <ul className='flex items-center gap-4'>
                            <li>
                                <button
                                    onClick={(e) => handleSongPlay(e, track)}
                                    className='group flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-[#4D41FA]'>
                                    {player.isCurrentSong(track?._id) &&
                                        player.status === 'playing' ? (
                                        <Image
                                            src={PAUSE_ICON?.src}
                                            height={10}
                                            width={10}
                                            alt='Click to Pause'
                                        />
                                    ) : (
                                        <svg
                                            width='12'
                                            height='12'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    )}
                                </button>
                            </li>

                            {!user?.is_artist && !track?.inAppDownload && !track?.isSongDownLoad && (
                                <li className='w-[2.63rem] flex-[0_0_2.63rem]'>
                                    <BuySongButton songId={track?._id} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SongsCard
