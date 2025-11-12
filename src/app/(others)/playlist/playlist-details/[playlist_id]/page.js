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

// import SongsCard from '../../_components/SongsCard'
// import SimilarAlbum from './_components/SimilarAlbum'
import { getPlaylistDetailsById } from '@/services/api/playlist-api'
import useAuth from '@/hooks/useAuth'
import { publicImages } from '@/utils/publicImages'
import SongsCard from '@/app/(others)/albums/_components/SongsCard'
import NoSongFoundComponent from '@/app/(others)/users/songs-library/_components/NoSongFoundComponent'
import SongPlayingAnimation from '@/components/animatedgif/SongPlayingAnimmation'

const PlaylistDetails = () => {
    const { user } = useAuth();
    const queryClient = useQueryClient()
    const player = usePlayer()
    const params = useParams()
    const playlistId = params.playlist_id;

    const { data: playlistData, isPending } = useQuery({
        queryKey: ['playlistDetails', playlistId], // unique key per playlist
        queryFn: () => getPlaylistDetailsById(playlistId),
        enabled: !!playlistId && !!user, // only run when id and user exist
        staleTime: 1000 * 60 * 5, // optional caching time
        retry: 1,
    });

    const { playList = {}, songs = [] } = playlistData?.data ?? {};

    const handleAlbumPlay = () => {
        if (!playlistData) return
        player.clearCachedState()
        if (
            player.isCurrentAlbum(playList?._id) &&
            player.status === 'playing'
        ) {
            player.togglePlayback()
        } else if (songs.length) {
            player.playTrack({ track: songs[0], tracks: songs })
        }
    }

    return (
        <>
            <div className='flex w-full flex-wrap items-start justify-end pl-4'>
                <div className='w-full rounded-[0.75rem] bg-[#333232]'>
                    <div className="flex max-h-[12.69rem] w-full flex-row rounded-[0.75rem] bg-[#1C1919] bg-[url('/images/artist/bg.webp')] bg-cover bg-center bg-no-repeat px-4 py-4 md:px-10 md:py-8">
                        <span className='mr-4 mt-10 block w-[10.19rem] flex-[0_0_auto] md:mr-6 md:mt-0 md:w-[13.19rem]'>
                            <img
                                src={playList.thumbnail ?? publicImages.noPlaylistImage}
                                alt='songs'
                                className='h-[13.00rem] w-full rounded-[0.75rem] object-cover md:h-[15.00rem]'
                            />
                        </span>

                        <div className='mt-36 flex grow flex-col justify-center md:mt-16'>
                            <div className='mb-4 flex items-end justify-between md:mb-10'>
                                <div>
                                    <small className='text-xs text-[#979797] md:text-sm'>
                                        Playlist
                                    </small>
                                    <h3 className='text-base font-semibold md:text-2xl'>
                                        {playList?.title}
                                    </h3>
                                    {/* <ul className='mt-2 flex text-xs text-[#979797]'>
                                        <li className='mr-1 text-[#F844B0]'>
                                            {data?.album?.user?.name}
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                                <div className='flex items-center'>
                                    <span
                                        className='group inline-flex h-[2.63rem] w-[2.63rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'
                                        onClick={handleAlbumPlay}>
                                        {player.isCurrentAlbum(
                                            playList?._id
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
                                    {/* <span
                                        className='group ml-2 inline-flex h-[1.75rem] w-[1.75rem] cursor-pointer items-center justify-center rounded-full border border-solid border-[#989898] bg-[#2F2F2F]'
                                    >
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
                                    </span> */}
                                </div>

                                {songs.count && <span className='mt-4 inline-block whitespace-nowrap rounded-[0.75rem] border border-solid border-[#585858] px-3 py-1.5 text-sm font-medium md:mt-0'>
                                    {songs.count} Tracks,{' '}
                                    {convertSecondsToTime(
                                        data?.totalSongsDuration
                                    )}
                                </span>}
                            </div>
                        </div>
                    </div>

                    <div className='mt-20 flex w-full flex-col items-start md:mt-20 md:flex-row md:px-10'>
                        <div className='flex-1'>
                            <div className="w-full mb-10">
                                {songs?.length > 0 ? (
                                    songs.map((song) => (
                                        <SongsCard
                                            key={song?._id}
                                            track={song}
                                            tracks={songs}
                                        />
                                    ))
                                ) : (
                                    <div className="w-full h-1/2 flex flex-col justify-center items-center mx-auto">
                                        <SongPlayingAnimation />
                                        <NoSongFoundComponent
                                            message="Your playlist is feeling a little quiet 🎵 Add your first song to bring the vibes!"
                                        />
                                    </div>

                                )}
                            </div>

                            {/* <SimilarAlbum
                                artistName={data?.album?.user?.name ?? ''}
                                similarAlbumDetails={
                                    data?.moreByArtist?.album ?? []
                                }
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistDetails
