'use client'

import { addToFavorite } from '@/services/api/album-ep'
import { getSongDataByID } from '@/services/api/song-api-service'
import {
    QueryClient,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'

import CreditComponent from './_components/CreditComponent'
import PopularAlbumComponent from './_components/PopularAlbumComponent'
import PopularReleaseComponent from './_components/PopularReleaseComponent'
import SongDetailsContainer from './_components/SongDetailsContainer'
import SongStatsComponent from './_components/SongStatsComponent'
import YouMayAlsoLikeComponent from './_components/YouMayAlsoLikeComponent'

const SongDetails = () => {
    const queryClient = useQueryClient()
    const { song_id } = useParams()
    const {
        data: songData,
        isLoading,
        error,
    } = useQuery({
        queryKey: [queryConstants.getSongById],
        queryFn: () => getSongDataByID(song_id),
        enabled: !!song_id, // only run if songId is truthy
        retry: 1, // optional: retry once on failure
    })

    // const { song = {} } = songData;

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus } =
        useMutation({
            mutationKey: [queryConstants.addToFavorite],
            mutationFn: addToFavorite,
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: [queryConstants.getSongById],
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
        addToFavoriteMutate({ type: 'song', id: song_id })
    }

    if (isLoading) return

    const { song, trendingSongByArtist, trendingAlbumByArtist } = songData

    console.log('Song Details fetched======>', songData)
    return (
        // <div className="bg-[#333232] w-full rounded-[0.75rem]">
        //     <div
        //         className="bg-[#1C1919] rounded-[0.75rem] px-10 py-8 max-h-[12.69rem] bg-cover bg-no-repeat
        //         bg-[url('/images/artist/bg.webp')] w-full bg-center flex">
        //         <SongDetailsContainer song={song} handleLike={handleLike} />
        //     </div>
        //     <div className="w-full flex items-start mt-28 md:px-10">
        //         <div className="flex-1 ">
        //             {trendingSongByArtist?.length ? <PopularReleaseComponent trendingSongByArtist={trendingSongByArtist} /> : null}

        //             {trendingAlbumByArtist?.length ? <PopularAlbumComponent trendingAlbumByArtist={trendingAlbumByArtist} /> : null}

        //             <YouMayAlsoLikeComponent />
        //         </div>
        //         <div
        //             className="rounded-xl w-full sm:w-full md:w-full lg:w-[13.31rem] xl:w-[15.31rem] 2xl:w-[15.31rem]
        //              flex-[0_0_auto] sm:flex-[0_0_auto] md:flex-[0_0_auto] lg:flex-flex-[0_0_13.31rem] xl:flex-[0_0_15.31rem]
        //               2xl:flex-[0_0_15.31rem] sticky top-[6.2rem] pl-4">
        //             <SongStatsComponent songDetails={song} />
        //             {song?.credits?.length ? <CreditComponent creditsName={song?.credits ?? []} /> : null}
        //         </div>
        //     </div>
        // </div>

        <div className='ml-5 w-full rounded-[0.75rem] bg-[#333232]'>
            <div className="flex w-full rounded-[0.75rem] bg-[#1C1919] bg-[url('/images/artist/bg.webp')] 
            bg-cover bg-center bg-no-repeat px-4 py-6 max-h-[12.69rem] md:px-10 md:py-8">
                <SongDetailsContainer song={song} handleLike={handleLike} />
            </div>

            <div className='mt-24 flex w-full flex-col items-start gap-8 px-4 sm:mt-16 sm:px-6 md:mt-20 md:px-10 lg:flex-row'>
                <div className='w-full flex-1'>
                    {trendingSongByArtist?.length ? (
                        <PopularReleaseComponent
                            trendingSongByArtist={trendingSongByArtist}
                        />
                    ) : null}

                    {trendingAlbumByArtist?.length ? (
                        <PopularAlbumComponent
                            trendingAlbumByArtist={trendingAlbumByArtist}
                        />
                    ) : null}

                    <YouMayAlsoLikeComponent />
                </div>

                <div className='sticky top-[6.2rem] w-full flex-shrink-0 sm:w-full md:w-full lg:w-[13.31rem] 
                xl:w-[15.31rem] 2xl:w-[15.31rem]'>
                    <SongStatsComponent songDetails={song} />
                    {song?.credits?.length ? (
                        <CreditComponent creditsName={song?.credits ?? []} />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default SongDetails
