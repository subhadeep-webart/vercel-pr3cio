'use client'

import { useEffect, useState } from 'react'
import { addToFavorite, getAlbumDetails } from '@/services/api/album-ep'
import { purchaseSong } from '@/services/api/packages-api'
import { Button, Card, CardBody, Image } from '@heroui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaDollarSign, FaHeadphonesAlt } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa6'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { PiHeart, PiHeartFill, PiPause, PiPlay } from 'react-icons/pi'

import { ApiResponse } from '@/models/common'
import { AlbumDetails } from '@/models/responses/albums-data'
import { Song } from '@/models/responses/songs-data'
import queryConstants from '@/constants/query-constants'
import { formatPlayCount } from '@/utils/func-utils'
import { getImageColors } from '@/utils/image-colors'
import usePlayer from '@/hooks/usePlayer'
import { withAuthProtection } from '@/components/auth/protected-component'

function AlbumDetailsComponent() {
    const params = useParams()
    const [backgroundColor, setBackgroundColor] = useState<string>()
    const player = usePlayer()
    const queryClient = useQueryClient()
    const router = useRouter()

    const { data, status } = useQuery({
        queryKey: [queryConstants.getOneAlbum, params?.slug],
        queryFn: () => getAlbumDetails(params?.slug as string),
        enabled: params?.slug !== undefined,
    })

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus } =
        useMutation<ApiResponse, Error, { type: 'album' | 'song'; id: string }>(
            {
                mutationKey: [queryConstants.addToFavorite],
                mutationFn: addToFavorite,
                onSuccess: () => {
                    queryClient.refetchQueries({
                        queryKey: [queryConstants.getOneAlbum, params?.slug],
                        exact: true,
                    })
                },
                onError: (error) => {
                    toast.error(error?.message)
                },
            }
        )

    useEffect(() => {
        if (!data) return
        getImageColors(data.album.thumbnail)
            .then((colors) => {
                if (colors) {
                    setBackgroundColor(colors[0])
                }
            })
            .catch((error) => { })
    }, [data])

    const handleAlbumPlay = () => {
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

    const handleSongPlay = (song: Song) => {
        if (!data) return
        player.clearCachedState()
        if (player.isCurrentSong(song._id)) {
            player.togglePlayback()
        } else {
            player.playTrack({ track: song, tracks: data.songs })
        }
    }

    const handleLike = (data: { type: 'album' | 'song'; id: string }) => () => {
        addToFavoriteMutate(data)
    }

    const handlePurchaseSong = (song: Song) => {
        purchaseSong(song._id)
            .then((res) => {
                router.push(res.paymentUrl)
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className='flex flex-col gap-8'>
            {status === 'pending' && <div>Loading...</div>}
            {status === 'success' && data && (
                <>
                    {' '}
                    <Card style={{ backgroundColor }}>
                        <CardBody>
                            <Image
                                src={data.album.thumbnail}
                                alt='Album Thumbnail'
                                className='h-52 object-cover sm:h-72'
                                width={'100%'}
                            />
                            <div className='mt-2 flex items-center justify-between'>
                                <div className='w-full'>
                                    <h1 className='text-h2 truncate'>
                                        {data.album.name}
                                    </h1>
                                    <p className='text-body1 truncate text-foreground/80'>
                                        by {data.album.user.name}
                                    </p>
                                    <span className='text-body1 flex items-center gap-1'>
                                        <FaDollarSign />
                                        7.99
                                    </span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Button
                                        onPress={handleAlbumPlay}
                                        isIconOnly
                                        radius='full'
                                        color='primary'>
                                        {player.isCurrentAlbum(
                                            data.album._id
                                        ) && player.status === 'playing' ? (
                                            <PiPause className='text-2xl' />
                                        ) : (
                                            <PiPlay className='text-2xl' />
                                        )}
                                    </Button>
                                    <Button
                                        isIconOnly
                                        radius='full'
                                        disabled={
                                            addToFavoriteStatus === 'pending'
                                        }
                                        onPress={handleLike({
                                            type: 'album',
                                            id: data.album._id,
                                        })}>
                                        {data.album.liked ? (
                                            <PiHeartFill className='text-2xl text-danger' />
                                        ) : (
                                            <PiHeart className='text-2xl' />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <div>
                        <h2 className='text-h3 my-3'>Tracks</h2>
                        <div className='grid gap-6 sm:grid-cols-2'>
                            {data.songs.map((song) => (
                                <Card
                                    key={song._id}
                                    className='border-none'
                                    shadow='sm'>
                                    <CardBody className='p-1.5'>
                                        <div className='grid grid-cols-8 items-center justify-center gap-3'>
                                            <div className='relative col-span-2'>
                                                <Image
                                                    alt='Album cover'
                                                    className='h-14 object-cover md:h-20'
                                                    shadow='md'
                                                    src={song.artwork}
                                                    width='100%'
                                                />
                                            </div>

                                            <div className='col-span-4 flex flex-col'>
                                                <div className='flex items-start justify-between'>
                                                    <div className='flex w-full flex-col gap-0'>
                                                        <h3 className='text-body1 truncate font-semibold'>
                                                            {song.title}
                                                        </h3>
                                                        <p className='text-body3 text-foreground/80'>
                                                            {song.artist}
                                                        </p>
                                                        <p className='text-body3 flex items-center gap-1 text-foreground/80'>
                                                            <FaHeadphonesAlt />
                                                            <span>
                                                                {formatPlayCount(
                                                                    song?.play_count
                                                                )}
                                                            </span>
                                                        </p>
                                                        <span className='text-body3 flex items-center gap-1'>
                                                            <FaDollarSign />
                                                            1.30
                                                        </span>
                                                        <span className='text-body3 flex items-center gap-1'>
                                                            <FaRegHeart />
                                                            {song.likes}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-span-2 flex items-center justify-end'>
                                                <Button
                                                    isIconOnly
                                                    radius='full'
                                                    variant='light'
                                                    disabled={
                                                        addToFavoriteStatus ===
                                                        'pending'
                                                    }
                                                    onPress={handleLike({
                                                        type: 'song',
                                                        id: song?._id,
                                                    })}>
                                                    {song?.liked ? (
                                                        <PiHeartFill className='text-2xl text-danger' />
                                                    ) : (
                                                        <PiHeart className='text-2xl' />
                                                    )}
                                                </Button>
                                                <Button
                                                    isIconOnly
                                                    radius='full'
                                                    variant='light'
                                                    isLoading={
                                                        player.isCurrentSong(
                                                            song._id
                                                        ) &&
                                                        player.status ===
                                                        'loading'
                                                    }
                                                    onPress={() =>
                                                        handleSongPlay(song)
                                                    }>
                                                    {player.isCurrentSong(
                                                        song._id
                                                    ) &&
                                                        player.status ===
                                                        'playing' ? (
                                                        <PiPause className='text-2xl' />
                                                    ) : (
                                                        <PiPlay className='text-2xl' />
                                                    )}
                                                </Button>
                                                {
                                                    song.isSongDownLoad ? <Button
                                                        isIconOnly
                                                        radius='full'
                                                        variant='light'
                                                    // isLoading={isLoading}
                                                    // onPress={handleSongPlay}
                                                    >
                                                        <IoCloudDownloadOutline className='text-2xl' />
                                                    </Button> : <Button
                                                        isIconOnly
                                                        radius='full'
                                                        variant='light'
                                                        // isLoading={isLoading}
                                                        onPress={() =>
                                                            handlePurchaseSong(song)
                                                        }>
                                                        <MdShoppingCartCheckout className='text-2xl' />
                                                    </Button>
                                                }


                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default withAuthProtection(AlbumDetailsComponent)
