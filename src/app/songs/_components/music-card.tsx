'use client'

import { useMemo, useState } from 'react'
import { addToFavorite } from '@/services/api/album-ep'
import { Button, Card, CardBody, Image, Tooltip } from '@heroui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { FaDollarSign, FaHeadphonesAlt, FaRegBookmark, FaRegHeart } from 'react-icons/fa'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { PiHeart, PiHeartFill, PiPause, PiPlay } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { ApiResponse } from '@/models/common'
import { Song } from '@/models/responses/songs-data'
import queryConstants from '@/constants/query-constants'
import { formatPlayCount } from '@/utils/func-utils'
import usePlayer from '@/hooks/usePlayer'
import { withAuthProtection } from '@/components/auth/protected-component'
import { MdEdit, MdPublish, MdShoppingCartCheckout, MdOutlineDeleteOutline } from "react-icons/md"
import { postToAddSongToPublish } from '@/services/api/user-api'
import { deleteSongById, downloadSongById, postInAppDownload } from '@/services/api/song-api-service'
import { purchaseSong } from '@/services/api/packages-api'
import useAuth from '@/hooks/useAuth'
// import { Tooltip } from 'react-tooltip'

type MusicCardProps = {
    track: Song
    tracks?: Song[]
    likable?: boolean
    drift?: boolean
    publish?: boolean
    onActionComplete?: () => void
}

const MusicCard = ({ track, tracks, likable = true, drift, publish, onActionComplete }: MusicCardProps) => {
    const player = usePlayer()
    const queryClient = useQueryClient()
    const router = useRouter()
    const { user } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)

    const handleSongPlay = () => {
        if (player.isCurrentSong(track?._id)) {
            console.log("Calling inside the current song playing======>");
            player.togglePlayback()
        } else {
            console.log("Calling when track is not playing");
            player.clearCachedState()
            player.playTrack({ track, tracks })
        }
    }

    const isLoading = useMemo(() => {
        return player.isCurrentSong(track?._id) && player.status === 'loading'
    }, [player, track?._id])

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus } =
        useMutation<ApiResponse, Error, { type: 'song'; id: string }>({
            mutationKey: [queryConstants.addToFavorite],
            mutationFn: addToFavorite,
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [queryConstants.getSongs],
                })
            },
            onError: (error) => {
                toast.error(error?.message)
            },
        })

    const handleLike = () => {
        addToFavoriteMutate({ type: 'song', id: track._id })
    }

    const publishSongById = async (id: string | number) => {
        const resp = await postToAddSongToPublish(id)
        if (resp.status === "success") {
            toast.success(resp.message)
            onActionComplete?.()
        } else {
            toast.error("Error publishing song.")
        }
    }

    const openDeleteModal = (id: string) => {
        setDeleteItemId(id)
        setIsModalOpen(true)
    }

    const closeDeleteModal = () => {
        setIsModalOpen(false)
        setDeleteItemId(null)
    }

    const handleDelete = async () => {
        if (deleteItemId) {
            const resp = await deleteSongById(deleteItemId)
            if (resp.status === "success") {
                toast.success(resp.message)
                onActionComplete?.()
            }
        }

        closeDeleteModal()
    }
    const handelBuySong = (id: string) => {
        purchaseSong(id)
            .then((res) => {
                router.push(res.paymentUrl)
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    const handelInAppDownload = async (id: string) => {
        const reqObj = {
            id: id,
            type: "song"
        }
        postInAppDownload(reqObj).then((res) => {
            toast.success(res.message)
            onActionComplete?.()
        })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const handelDownloadSong = async (id: string) => {
        const resp = await downloadSongById(id)
        if (resp.status === 200) {
            const contentDisposition = resp.headers['content-disposition'];
            let fileName = track?.title || 'download.mp3'; // Use fileName from JSON or fallback
            if (contentDisposition && contentDisposition.includes('attachment')) {
                const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                if (filenameMatch && filenameMatch[1]) {
                    fileName = filenameMatch[1]; // Prefer Content-Disposition filename
                }
            }

            // Convert file response to Blob and trigger download
            const contentType = resp.headers['content-type'] || 'audio/mpeg';
            const blob = new Blob([resp.data], { type: contentType });
            const url = window.URL.createObjectURL(blob);
            downloadFile(url, fileName);
            window.URL.revokeObjectURL(url);
        }
    }
    const downloadFile = (url: any, fileName: any) => {
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }


    return (
        <>
            <Card key={track._id} className='border-none' shadow='sm'>
                <CardBody className='p-1.5'>
                    <div className='grid grid-cols-8 items-center justify-center gap-3'>
                        <div className='relative col-span-2'>
                            <Image
                                alt='Album cover'
                                className='h-14 object-cover md:h-20'
                                shadow='md'
                                src={track?.artwork}
                                width='100%'
                            />
                        </div>

                        <div className='col-span-4 flex flex-col'>
                            <div className='flex items-start justify-between'>
                                <div className='flex w-full flex-col gap-0'>
                                    <h3 className='text-body1 truncate font-semibold capitalize'>
                                        {track?.title}
                                    </h3>
                                    <p className='text-body3 text-foreground/80'>
                                        {track?.artist}
                                    </p>
                                    <p className='text-body3 flex items-center gap-1 text-foreground/80'>
                                        <FaHeadphonesAlt />
                                        <span>
                                            {formatPlayCount(track?.play_count)}
                                        </span>
                                    </p>
                                    <span className='text-body3 flex items-center gap-1'>
                                        <FaRegHeart />
                                        {track?.likes}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-2 flex items-center justify-end'>
                            <span className='mr-2 flex items-center gap-1'>
                                <FaDollarSign />
                                1.30
                            </span>

                            {drift ? (
                                <>
                                    <Button
                                        isIconOnly
                                        radius='full'
                                        variant='light'
                                        isLoading={isLoading}
                                        onPress={handleSongPlay}>
                                        {player.isCurrentSong(track._id) &&
                                            player.status === 'playing' ? (
                                            <Tooltip content='Pause'>
                                                <PiPause className='text-2xl' />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip content='Play'>
                                                <PiPlay className='text-2xl' />
                                            </Tooltip>
                                        )}
                                    </Button>
                                    {!publish && (
                                        <Button
                                            isIconOnly
                                            radius='full'
                                            variant='light'
                                            onPress={() => publishSongById(track._id)}
                                        >
                                            <Tooltip content='Publish Song'>
                                                <MdPublish className='text-2xl' />
                                            </Tooltip>

                                        </Button>
                                    )}

                                    <Button
                                        isIconOnly
                                        radius='full'
                                        variant='light'
                                        onPress={() => router.push(`/update-song/${track._id}`)}
                                    >
                                        <Tooltip content='Edit song'>
                                            <MdEdit className='text-2xl' />
                                        </Tooltip>
                                    </Button>

                                    <Button
                                        isIconOnly
                                        radius='full'
                                        variant='light'
                                        onPress={() => openDeleteModal(track._id)}
                                    >
                                        <Tooltip content='Delete Song'>
                                            <MdOutlineDeleteOutline className='text-2xl' />
                                        </Tooltip>
                                    </Button>
                                </>
                            ) : (
                                <>
                                    {likable && (
                                        <Tooltip content='Add to favorite'>
                                            <Button
                                                isIconOnly
                                                radius='full'
                                                variant='light'
                                                disabled={addToFavoriteStatus === 'pending'}
                                                onPress={handleLike}>
                                                {track?.liked ? (
                                                    <PiHeartFill className='text-2xl text-danger' />
                                                ) : (
                                                    <PiHeart className='text-2xl' />
                                                )}
                                            </Button>
                                        </Tooltip>
                                    )}
                                    {user?.isSubscribed && (
                                        !track.inAppDownload && <Button
                                            isIconOnly
                                            radius='full'
                                            variant='light'
                                            onPress={() => handelInAppDownload(track._id)}
                                        >
                                            <Tooltip content='In app download'>
                                                <FaRegBookmark className='text-2xl' />
                                            </Tooltip>
                                        </Button>
                                    )


                                    }
                                    <Button
                                        isIconOnly
                                        radius='full'
                                        variant='light'
                                        isLoading={isLoading}
                                        onPress={handleSongPlay}>
                                        {player.isCurrentSong(track._id) &&
                                            player.status === 'playing' ? (
                                            <Tooltip content='Pause'>
                                                <PiPause className='text-2xl' />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip content='Play Now'>
                                                <PiPlay className='text-2xl' />
                                            </Tooltip>
                                        )}
                                    </Button>
                                    {
                                        track?.isSongDownLoad ? <Button
                                            isIconOnly
                                            radius='full'
                                            variant='light'
                                            onPress={() => handelDownloadSong(track._id)}
                                        >
                                            <Tooltip content='Download Now'>
                                                <IoCloudDownloadOutline className='text-2xl' />
                                            </Tooltip>
                                        </Button> : <Button
                                            isIconOnly
                                            radius='full'
                                            variant='light'
                                            onPress={() => handelBuySong(track._id)}
                                        >
                                            <Tooltip content='Buy Now'>
                                                <MdShoppingCartCheckout className='text-2xl' />
                                            </Tooltip>
                                        </Button>
                                    }


                                </>
                            )}
                        </div>
                    </div>

                </CardBody>
            </Card>

            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-[#343839] p-6 py-10 rounded-lg shadow-lg max-w-sm w-full">
                            <h2 className="text-base mb-4">Are you sure you want to delete this item?</h2>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleDelete}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Yes, Delete
                                </button>
                                <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default withAuthProtection(MusicCard)
