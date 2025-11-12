'use client'

import { addToFavorite, getAlbumDetails } from '@/services/api/album-ep'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import { convertSecondsToTime, formatTrackTime } from '@/utils/func-utils'
import { PAUSE_ICON } from '@/utils/icons'
import usePlayer from '@/hooks/usePlayer'

import SongsCard from '../../_components/SongsCard'
import SimilarAlbum from './_components/SimilarAlbum'

const AlbumDetails = () => {
    const queryClient = useQueryClient()
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
        console.log('Datta', data)
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
                toast.success(
                    data?.message ?? 'Song added to favourite successfully'
                )
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
            <div className='flex w-full flex-wrap items-start justify-end pl-4'>
                <div className='w-full rounded-[0.75rem] bg-[#333232]'>
                    {/* <div className="flex max-h-[12.69rem] w-full flex-row rounded-[0.75rem] bg-[#1C1919] bg-[url('/images/artist/bg.webp')] bg-cover bg-center bg-no-repeat px-4 py-4 md:flex-row md:px-10 md:py-8">
                        <span className='mr-4 mt-6 block w-[10.19rem] flex-[0_0_auto] md:mr-6 md:mt-0 md:w-[13.19rem]'>
                            <img
                                src={data?.album?.thumbnail}
                                alt='songs'
                                className='h-[13.00rem] w-full rounded-[0.75rem] object-cover md:h-[15.00rem]'
                            />
                        </span>
                        <div className='mt-20 flex grow flex-col justify-center md:mt-16'>
                            <div className='flex items-end justify-between'>
                                <div className='mb-4 grow md:mb-10'>
                                    <small className='md:text-sm text-xs text-[#979797]'>
                                        Album
                                    </small>
                                    <h3 className='md:text-2xl text-base font-semibold'>
                                        {data?.album?.name}
                                    </h3>
                                    <ul className='mt-2 flex text-xs text-[#979797]'>
                                        <li className='mr-1 text-[#F844B0]'>
                                            {data?.album?.user?.name}
                                        </li>
                                    </ul>
                                </div>
                                <span className='inline-block whitespace-nowrap rounded-[0.75rem] border border-solid border-[#585858] px-3 py-1.5 text-sm font-medium'>
                                    {data?.totalSongs} Tracks,{' '}
                                    {convertSecondsToTime(
                                        data?.totalSongsDuration
                                    )}
                                </span>
                            </div>

                            <div className='mt-4 flex items-center'>
                                <span
                                    className='group inline-flex h-[2.63rem] w-[2.63rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'
                                    onClick={handleAlbumPlay}>
                                    {player.isCurrentAlbum(data?.album?._id) &&
                                    player.status === 'playing' ? (
                                        <Image
                                            src={PAUSE_ICON?.src}
                                            alt='pause'
                                            height={10}
                                            width={10}
                                        />
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
                                    className='group ml-2 inline-flex h-[1.75rem] w-[1.75rem] cursor-pointer items-center justify-center rounded-full border border-solid border-[#989898] bg-[#2F2F2F]'
                                    onClick={handleLike}>
                                    <svg
                                        width='11'
                                        height='9'
                                        viewBox='0 0 11 9'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                            fill={`${data?.album?.liked ? '#F844B0' : '#2F2F2F'}`}
                                            stroke='#F844B0'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex max-h-[12.69rem] w-full flex-row rounded-[0.75rem] bg-[#1C1919] bg-[url('/images/artist/bg.webp')] bg-cover bg-center bg-no-repeat px-4 py-4 md:px-10 md:py-8">
                        <span className='mr-4 mt-10 block w-[10.19rem] flex-[0_0_auto] md:mr-6 md:mt-0 md:w-[13.19rem]'>
                            <img
                                src={data?.album?.thumbnail}
                                alt='songs'
                                className='h-[13.00rem] w-full rounded-[0.75rem] object-cover md:h-[15.00rem]'
                            />
                        </span>

                        <div className='mt-36 flex grow flex-col justify-center md:mt-16'>
                            <div className='mb-4 flex items-end justify-between md:mb-10'>
                                <div>
                                    <small className='text-xs text-[#979797] md:text-sm'>
                                        Album
                                    </small>
                                    <h3 className='text-base font-semibold md:text-2xl'>
                                        {data?.album?.name}
                                    </h3>
                                    <ul className='mt-2 flex text-xs text-[#979797]'>
                                        <li className='mr-1 text-[#F844B0]'>
                                            {data?.album?.user?.name}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                                <div className='flex items-center'>
                                    <span
                                        className='group inline-flex h-[2.63rem] w-[2.63rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'
                                        onClick={handleAlbumPlay}>
                                        {player.isCurrentAlbum(
                                            data?.album?._id
                                        ) && player.status === 'playing' ? (
                                            <Image
                                                src={PAUSE_ICON?.src}
                                                alt='pause'
                                                height={10}
                                                width={10}
                                            />
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
                                        className='group ml-2 inline-flex h-[1.75rem] w-[1.75rem] cursor-pointer items-center justify-center rounded-full border border-solid border-[#989898] bg-[#2F2F2F]'
                                        onClick={handleLike}>
                                        <svg
                                            width='11'
                                            height='9'
                                            viewBox='0 0 11 9'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z'
                                                fill={`${data?.album?.liked ? '#F844B0' : '#2F2F2F'}`}
                                                stroke='#F844B0'
                                                strokeWidth='1.5'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <span className='mt-4 inline-block whitespace-nowrap rounded-[0.75rem] border border-solid border-[#585858] px-3 py-1.5 text-sm font-medium md:mt-0'>
                                    {data?.totalSongs} Tracks,{' '}
                                    {convertSecondsToTime(
                                        data?.totalSongsDuration
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-28 flex w-full flex-col items-start md:mt-32 md:flex-row md:px-10 min-h-[250px]'>
                        <div className='flex-1'>
                            <div className='w-full mb-10'>
                                {data?.songs?.length > 0 &&
                                    data?.songs?.map((song,index) => (
                                        <SongsCard
                                            key={song?._id}
                                            track={song}
                                            tracks={data?.songs}
                                        />
                                    ))}
                            </div>
                            <SimilarAlbum
                                artistName={data?.album?.user?.name ?? ''}
                                similarAlbumDetails={
                                    data?.moreByArtist?.album ?? []
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlbumDetails
