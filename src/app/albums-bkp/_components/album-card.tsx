"use client"
import { Button, Card, CardBody, CardFooter, Image, Skeleton, Tooltip } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { FaDollarSign, FaRegBookmark } from 'react-icons/fa'

import { Album } from '@/models/responses/albums-data'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'
import { MdEdit, MdOutlineDeleteOutline, MdShoppingCartCheckout } from 'react-icons/md'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { deleteAlbum, downloadAlbumById, purchaseAlbumById } from '@/services/api/album-ep'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { postInAppDownload } from '@/services/api/song-api-service'

type AlbumCardProps = {
    data: Album
    ownAlbum?: boolean
    handleActionInAlbumCard?: () => void
}
const AlbumCard = ({ data, ownAlbum, handleActionInAlbumCard }: AlbumCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)
    const router = useRouter()
    const { isLoggedIn, user } = useAuth()
    const { setModal } = useApp()
    const handleClick = () => {
        if (!isLoggedIn) {
            return setModal('signin')
        }
        router.push(`/albums/${data._id}`)
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
            const resp = await deleteAlbum(deleteItemId)
            if (resp.status === "success") {
                toast.success(resp.message)
                if (handleActionInAlbumCard) {

                    handleActionInAlbumCard()
                }
            } else {
                toast.error(resp.message)
            }
        }

        closeDeleteModal()
    }
    const handelBuyAlbum = async (id: string) => {
        purchaseAlbumById({ albumId: id })
            .then((res) => {
                router.push(res?.paymentUrl)
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const handelAlbumDownload = async (id: string) => {
        const resp = await downloadAlbumById(id)
        if (resp.status === 200) {
            const contentDisposition = resp.headers['content-disposition'];
            let fileName = data?.name || 'download.mp3'; // Use fileName from JSON or fallback
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
    const handelInAppDownload = async (id: string) => {
        const reqObj = {
            id: id,
            type: "album"
        }
        postInAppDownload(reqObj).then((res) => {
            toast.success(res.message)
            handleActionInAlbumCard?.()
        })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <>
            <Card isPressable onPress={handleClick} className='hover:opacity-80'>
                <CardBody>
                    <Image
                        alt='Album Thumbnail'
                        className='h-52 object-cover sm:h-32'
                        src={data?.thumbnail}
                        width={'100%'}
                    />
                </CardBody>
                <CardFooter className='flex-col items-start'>
                    <div className='flex justify-between w-full'>
                        <h3 className='text-subtitle'>{data?.name}</h3>
                        {
                            ownAlbum ? <>
                                <div>
                                    <Button
                                        isIconOnly
                                        radius='full'
                                        variant='light'
                                        onPress={() => router.push(`/update-album/${data._id}`)}
                                    >
                                        <Tooltip content='Edit Album'>
                                            <MdEdit className='text-xl' />
                                        </Tooltip>
                                    </Button>

                                    <Button
                                        isIconOnly
                                        radius='full'
                                        variant='light'
                                        onPress={() => openDeleteModal(data._id)}
                                    >
                                        <Tooltip content='Delete Album'>
                                            <MdOutlineDeleteOutline className='text-xl' />
                                        </Tooltip>
                                    </Button>
                                </div>
                            </> :
                                <div>
                                    {
                                        data.isAlbumDownLoad ?

                                            <Button
                                                isIconOnly
                                                radius='full'
                                                variant='light'
                                                onPress={() => handelAlbumDownload(data._id)}
                                            >
                                                <Tooltip content='Download Now'>
                                                    <IoCloudDownloadOutline className='text-xl' />
                                                </Tooltip>
                                            </Button> : <Button
                                                isIconOnly
                                                radius='full'
                                                variant='light'
                                                onPress={() => handelBuyAlbum(data._id)}
                                            >
                                                <Tooltip content='Buy Now'>
                                                    <MdShoppingCartCheckout className='text-xl' />
                                                </Tooltip>
                                            </Button>
                                    }
                                    {user?.isSubscribed && (
                                        !data.inAppDownload && <Button
                                            isIconOnly
                                            radius='full'
                                            variant='light'
                                            onPress={() => handelInAppDownload(data._id)}
                                        >
                                            <Tooltip content='In app download'>
                                                <FaRegBookmark className='text-xl' />
                                            </Tooltip>
                                        </Button>
                                    )


                                    }

                                </div>
                        }
                    </div>
                    <p className='text-body2 text-foreground/80'>
                        {data?.user?.name}
                    </p>
                    <div className='flex w-full items-center justify-between'>
                        <small className='text-body3 opacity-80'>
                            {data?.totalSongs} Track
                        </small>
                        <span className='text-body3 flex items-center gap-1'>
                            <FaDollarSign />
                            7.99
                        </span>
                    </div>
                </CardFooter>
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

export default AlbumCard
