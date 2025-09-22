import { addToFavorite } from '@/services/api/album-ep'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'

import queryConstants from '@/constants/query-constants'
import toast from 'react-hot-toast'

const PopularAlbums = ({ album ,onActionComplete}) => {
    console.log('album right sidebar', album)
    console.log('album liked', album?.liked)
        const queryClient = useQueryClient();

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus } =
        useMutation({
            mutationKey: [queryConstants.addToFavorite],
            mutationFn: addToFavorite,
            onSuccess: (data) => {
                toast.success(
                    data?.message ?? 'Song added to favourite successfully'
                )

                onActionComplete?.()

                queryClient.invalidateQueries([queryConstants.getAlbums])
            },
            onError: (error) => {
                toast.error(error?.message)
            },
        })

    const handleLike = (e) => {
        e.preventDefault()
        addToFavoriteMutate({ type: 'album', id: album?._id })
    }
    return (
        <>
            <Link
                href={`/albums/album-details/${album?._id}`}
                className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                    <img
                        src={album?.thumbnail}
                        alt='play'
                        loading='lazy'
                        className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                    />
                    {/* <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small> */}
                </span>
                <div className='px-2'>
                    <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                        {album?.name}
                    </h6>
                    {/* <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p> */}
                </div>
                <span
                    onClick={handleLike}
                    className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                    <i
                        className={
            !!album?.liked
                ? 'bi bi-suit-heart-fill'
                : 'bi bi-suit-heart'
        }
                        ></i>
                </span>
            </Link>
        </>
    )
}

export default PopularAlbums
