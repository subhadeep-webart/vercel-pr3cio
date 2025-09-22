'use client'

import { addToFavorite, getAlbumDetails } from '@/services/api/album-ep'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import queryConstants from '@/constants/query-constants'
import { PAUSE_ICON } from "@/utils/icons";
import usePlayer from '@/hooks/usePlayer'
import SongsCard from '../../_components/SongsCard'
import toast from 'react-hot-toast'
import { convertSecondsToTime, formatTrackTime } from '@/utils/func-utils'
import SimilarAlbum from './_components/SimilarAlbum'

const AlbumDetails = () => {
    const queryClient = useQueryClient();
    const params = useParams()
    const albumId = params.id
    const player = usePlayer()

    console.log('albumId', albumId)

    const { data, status } = useQuery({
        queryKey: [queryConstants.getOneAlbum, albumId],
        queryFn: () => getAlbumDetails(albumId),
    })

    console.log('album data', data)

    // const handleSongPlay = (song) => {
    //     if (!data) return
    //     player.clearCachedState()
    //     if (player.isCurrentSong(song._id)) {
    //         player.togglePlayback()
    //     } else {
    //         player.playTrack({ track: song, tracks: data.songs })
    //     }
    // }

    const handleAlbumPlay = () => {
        console.log("Datta", data);
        if (!data) return
        player.clearCachedState()
        if (
            player.isCurrentAlbum(data?.album._id) &&
            player.status === 'playing'
        ) {
            player.togglePlayback()
        } else if (data.songs.length) {
            player.playTrack({ track: data.songs[0], tracks: data.songs })
        }
    }

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus } =
        useMutation({
            mutationKey: [queryConstants.addToFavorite],
            mutationFn: addToFavorite,
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: [queryConstants.getOneAlbum, albumId],
                })
                toast.success(data?.message ?? "Song added to favourite successfully")
            },
            onError: (error) => {
                toast.error(error?.message)
            },
        })

    const handleLike = () => {
        addToFavoriteMutate({ type: 'album', id: albumId })
    }

    return (
        <>
            <div className='flex w-full flex-wrap items-start justify-end pl-6'>
                <div className='w-full rounded-[0.75rem] bg-[#333232]'>
                    <div className="flex max-h-[12.69rem] w-full rounded-[0.75rem] bg-[#1C1919] bg-[url('/images/artist/bg.webp')] bg-cover bg-center bg-no-repeat px-10 py-8">
                        <span className='mr-6 block w-[13.19rem] flex-[0_0_13.19rem]'>
                            <img
                                src={data?.album?.thumbnail}
                                alt='songs'
                                className='h-[15.00rem] w-full rounded-[0.75rem] object-cover'
                            />
                        </span>
                        <div className='grow'>
                            <div className='flex items-end justify-between'>
                                <div className='mb-10 grow'>
                                    <small className='text-sm text-[#979797]'>
                                        Album
                                    </small>
                                    <h3 className='text-2xl font-semibold'>
                                        {data?.album?.name}
                                    </h3>
                                    <ul className='mt-2 flex text-xs text-[#979797]'>
                                        <li className='mr-1 text-[#F844B0]'>
                                            {data?.album?.user?.name}
                                        </li>
                                        {/* <li className="mr-1"><i className="bi bi-dot"></i> Sankar sharma</li>
                                    <li className="mr-1"><i className="bi bi-dot"></i> John Doe</li> */}
                                    </ul>
                                </div>
                                <span className='inline-block rounded-[0.75rem] border-1 border-solid border-[#585858] px-4 py-2 text-sm font-medium'>
                                    {data?.totalSongs} Tracks, {convertSecondsToTime(data?.totalSongsDuration)}
                                </span>
                            </div>

                            <span className='group inline-flex h-[2.63rem] w-[2.63rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]' onClick={handleAlbumPlay}>
                                {player.isCurrentAlbum(
                                    data?.album?._id
                                ) && player.status === 'playing' ? (
                                    <Image src={PAUSE_ICON?.src} alt="pause" height={10} width={10} />
                                ) : (
                                    <svg
                                        width='15'
                                        height='15'
                                        viewBox='0 0 10 10'
                                        fill='none'
                                        className='fill-current text-black'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z' />
                                    </svg>
                                )}
                            </span>
                            <span 
                            className='group ml-2 inline-flex h-[1.75rem] w-[1.75rem] cursor-pointer items-center justify-center rounded-full border-1 border-solid border-[#989898] bg-[#2F2F2F]' 
                            onClick={handleLike}
                            >
                                <svg
                                    width='11'
                                    height='9'
                                    viewBox='0 0 11 9'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                        fill={`${data?.album?.liked ? "#F844B0" : "#2F2F2F"}`}
                                        stroke='#F844B0'
                                        stroke-width='1.5'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='mt-32 flex w-full items-start md:px-10'>
                        <div className='flex-1'>
                            <div className='w-full'>
                                {data?.songs?.length > 0 &&
                                    data?.songs?.map((song) => (
                                        <SongsCard key={song?._id} song={song} data={data} />
                                    ))}
                            </div>
                            <SimilarAlbum artistName={data?.album?.user?.name ?? ""} similarAlbumDetails={data?.moreByArtist?.album ?? []} />
                            {/* <h3 className='mb-4 mt-5 text-2xl font-semibold'>
                                Albums with a Similar Vibe
                            </h3>
                            <div className='mb-10 grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                                <div className='mb-3 rounded-[0.75rem] transition-colors duration-300 md:mb-0'>
                                    <div className='relative mb-2'>
                                        <img
                                            src='/images/album/1.webp'
                                            alt='skipBack'
                                            loading='lazy'
                                            className='h-[13.44rem] w-full rounded-[0.75rem] object-cover'
                                        />
                                    </div>
                                    <h5>
                                        <a
                                            href='#'
                                            className='text-sm font-semibold'>
                                            Maecenas biben
                                        </a>
                                    </h5>
                                    <p className='w-full truncate text-xs text-[#9D9D9D]'>
                                        Quisque isus laoreet, risus Quisque isus
                                        laoreet, risus{' '}
                                    </p>
                                    <div className='mt-2 flex items-center justify-between'>
                                        <span className='text-xs text-[#F844B0]'>
                                            7 Track
                                        </span>
                                        <ul className='flex text-center'>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-[#191919]'>
                                                    <svg
                                                        width='9'
                                                        height='12'
                                                        viewBox='0 0 9 12'
                                                        fill='none'
                                                        className='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                        <path
                                                            d='M1.04883 10.4878H7.48785'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919]'>
                                                    <svg
                                                        width='11'
                                                        height='9'
                                                        viewBox='0 0 11 9'
                                                        fill='none'
                                                        className='stroke-current text-[#F844B0] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                                            fill='#2F2F2F'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                                    <svg
                                                        width='10'
                                                        height='10'
                                                        viewBox='0 0 10 10'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='fill-current text-[#4D41FA] group-hover:text-black'>
                                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-3 rounded-[0.75rem] transition-colors duration-300 md:mb-0'>
                                    <div className='relative mb-2'>
                                        <img
                                            src='/images/album/2.webp'
                                            alt='skipBack'
                                            loading='lazy'
                                            className='h-[13.44rem] w-full rounded-[0.75rem] object-cover'
                                        />
                                    </div>
                                    <h5>
                                        <a
                                            href='#'
                                            className='text-sm font-semibold'>
                                            Maecenas biben
                                        </a>
                                    </h5>
                                    <p className='w-full truncate text-xs text-[#9D9D9D]'>
                                        Quisque isus laoreet, risus Quisque isus
                                        laoreet, risus{' '}
                                    </p>
                                    <div className='mt-2 flex items-center justify-between'>
                                        <span className='text-xs text-[#F844B0]'>
                                            7 Track
                                        </span>
                                        <ul className='flex text-center'>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-[#191919]'>
                                                    <svg
                                                        width='9'
                                                        height='12'
                                                        viewBox='0 0 9 12'
                                                        fill='none'
                                                        className='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                        <path
                                                            d='M1.04883 10.4878H7.48785'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919]'>
                                                    <svg
                                                        width='11'
                                                        height='9'
                                                        viewBox='0 0 11 9'
                                                        fill='none'
                                                        className='stroke-current text-[#F844B0] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                                            fill='#2F2F2F'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                                    <svg
                                                        width='10'
                                                        height='10'
                                                        viewBox='0 0 10 10'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='fill-current text-[#4D41FA] group-hover:text-black'>
                                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-3 rounded-[0.75rem] transition-colors duration-300 md:mb-0'>
                                    <div className='relative mb-2'>
                                        <img
                                            src='/images/album/3.webp'
                                            alt='skipBack'
                                            loading='lazy'
                                            className='h-[13.44rem] w-full rounded-[0.75rem] object-cover'
                                        />
                                    </div>
                                    <h5>
                                        <a
                                            href='#'
                                            className='text-sm font-semibold'>
                                            Maecenas biben
                                        </a>
                                    </h5>
                                    <p className='w-full truncate text-xs text-[#9D9D9D]'>
                                        Quisque isus laoreet, risus Quisque isus
                                        laoreet, risus{' '}
                                    </p>
                                    <div className='mt-2 flex items-center justify-between'>
                                        <span className='text-xs text-[#F844B0]'>
                                            7 Track
                                        </span>
                                        <ul className='flex text-center'>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-[#191919]'>
                                                    <svg
                                                        width='9'
                                                        height='12'
                                                        viewBox='0 0 9 12'
                                                        fill='none'
                                                        className='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                        <path
                                                            d='M1.04883 10.4878H7.48785'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919]'>
                                                    <svg
                                                        width='11'
                                                        height='9'
                                                        viewBox='0 0 11 9'
                                                        fill='none'
                                                        className='stroke-current text-[#F844B0] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                                            fill='#2F2F2F'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                                    <svg
                                                        width='10'
                                                        height='10'
                                                        viewBox='0 0 10 10'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='fill-current text-[#4D41FA] group-hover:text-black'>
                                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-3 rounded-[0.75rem] transition-colors duration-300 md:mb-0'>
                                    <div className='relative mb-2'>
                                        <img
                                            src='/images/album/3.webp'
                                            alt='skipBack'
                                            loading='lazy'
                                            className='h-[13.44rem] w-full rounded-[0.75rem] object-cover'
                                        />
                                    </div>
                                    <h5>
                                        <a
                                            href='#'
                                            className='text-sm font-semibold'>
                                            Maecenas biben
                                        </a>
                                    </h5>
                                    <p className='w-full truncate text-xs text-[#9D9D9D]'>
                                        Quisque isus laoreet, risus Quisque isus
                                        laoreet, risus{' '}
                                    </p>
                                    <div className='mt-2 flex items-center justify-between'>
                                        <span className='text-xs text-[#F844B0]'>
                                            7 Track
                                        </span>
                                        <ul className='flex text-center'>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-[#191919]'>
                                                    <svg
                                                        width='9'
                                                        height='12'
                                                        viewBox='0 0 9 12'
                                                        fill='none'
                                                        className='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                        <path
                                                            d='M1.04883 10.4878H7.48785'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919]'>
                                                    <svg
                                                        width='11'
                                                        height='9'
                                                        viewBox='0 0 11 9'
                                                        fill='none'
                                                        className='stroke-current text-[#F844B0] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                                            fill='#2F2F2F'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                                    <svg
                                                        width='10'
                                                        height='10'
                                                        viewBox='0 0 10 10'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='fill-current text-[#4D41FA] group-hover:text-black'>
                                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-3 rounded-[0.75rem] transition-colors duration-300 md:mb-0'>
                                    <div className='relative mb-2'>
                                        <img
                                            src='/images/album/1.webp'
                                            alt='skipBack'
                                            loading='lazy'
                                            className='h-[13.44rem] w-full rounded-[0.75rem] object-cover'
                                        />
                                    </div>
                                    <h5>
                                        <a
                                            href='#'
                                            className='text-sm font-semibold'>
                                            Maecenas biben
                                        </a>
                                    </h5>
                                    <p className='w-full truncate text-xs text-[#9D9D9D]'>
                                        Quisque isus laoreet, risus Quisque isus
                                        laoreet, risus{' '}
                                    </p>
                                    <div className='mt-2 flex items-center justify-between'>
                                        <span className='text-xs text-[#F844B0]'>
                                            7 Track
                                        </span>
                                        <ul className='flex text-center'>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-[#191919]'>
                                                    <svg
                                                        width='9'
                                                        height='12'
                                                        viewBox='0 0 9 12'
                                                        fill='none'
                                                        className='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                        <path
                                                            d='M1.04883 10.4878H7.48785'
                                                            stroke-width='2'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919]'>
                                                    <svg
                                                        width='11'
                                                        height='9'
                                                        viewBox='0 0 11 9'
                                                        fill='none'
                                                        className='stroke-current text-[#F844B0] transition-colors duration-300 group-hover:text-white'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                                            fill='#2F2F2F'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className='ml-2'>
                                                <a
                                                    href='#'
                                                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                                    <svg
                                                        width='10'
                                                        height='10'
                                                        viewBox='0 0 10 10'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='fill-current text-[#4D41FA] group-hover:text-black'>
                                                        <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlbumDetails
