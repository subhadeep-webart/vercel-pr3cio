"use client"
import { useEffect, useState } from "react"
import { editAlbumById, getAlbumDetails } from "@/services/api/album-ep"
import { purchaseSong } from "@/services/api/packages-api"
import { Button, Card, CardBody, Image, Input } from "@heroui/react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { FaDollarSign, FaEdit, FaHeadphonesAlt, FaSave, FaTrash } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import { MdShoppingCartCheckout } from "react-icons/md"
import FileUploader from "@/components/file-uploader"
import queryConstants from "@/constants/query-constants"
import { formatPlayCount } from "@/utils/func-utils"
import { withAuthProtection } from "@/components/auth/protected-component"
import Container from "@/components/ui/container"

function AlbumEditComponent() {
    const params = useParams()
    const queryClient = useQueryClient()
    const router = useRouter()
    const [isEditing, setIsEditing] = useState(false)
    const [isOpenThumbnailUpload, setIsOpenThumbnailUpload] = useState(false)
    const [albumName, setAlbumName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [songs, setSongs] = useState([])

    const { data, status, refetch } = useQuery({
        queryKey: [queryConstants.getOneAlbum, params?.slug],
        queryFn: () => getAlbumDetails(params?.slug),
        enabled: params?.slug !== undefined
    })

    useEffect(() => {
        if (data) {
            setAlbumName(data.album.name)
            setThumbnail(data.album.thumbnail)
            setSongs(data.songs)
        }
    }, [data])

    const handleEditToggle = () => {
        setIsEditing(!isEditing)
    }

    const handleThumbnailUpload = (filePath) => {
        setThumbnail(filePath)
        setIsOpenThumbnailUpload(false)
    }

    const handleNameChange = (e) => {
        setAlbumName(e.target.value)
    }

    const handleSaveChanges = async () => {
        const reqObj = {
            thumbnail: thumbnail,
            name: albumName

        }
        const resp = await editAlbumById(data.album._id, reqObj)
        if (resp.status) {
            toast.success(resp.message)
            setIsEditing(false)
            setIsOpenThumbnailUpload(false)
            refetch()
        } else {
            toast.error(resp.message)
        }

    }

    const handleSongDelete = async (songId) => {
        const reqObj = {
            removeSongs: [songId]
        }
        const resp = await editAlbumById(data.album._id, reqObj)
        if (resp.status) {
            toast.success(resp.message)
            refetch()
        } else {
            toast.error(resp.message)
        }
    }

    return (
        <Container>
            <div className="flex flex-col gap-8">
                {status === "pending" && <div>Loading...</div>}
                {status === "success" && data && (
                    <>
                        <div className="flex w-full justify-end">

                            <Button className="bg-primary" onPress={() => router.push(`/own-albums`)}>Back to Albums List</Button>
                        </div>
                        <Card>
                            <CardBody>
                                <div className="relative">
                                    <Image
                                        src={thumbnail || data.album.thumbnail}
                                        alt="Album Thumbnail"
                                        className="h-52 object-cover sm:h-72"
                                        width="100%"
                                    />
                                    {isEditing && (
                                        <div className="absolute top-4 right-4 flex items-center gap-3 z-20">
                                            <Button
                                                variant="faded"
                                                size="sm"
                                                onPress={() => setIsOpenThumbnailUpload(true)}
                                            >
                                                Upload Thumbnail
                                            </Button>

                                        </div>
                                    )}
                                </div>
                                <FileUploader
                                    isOpen={isOpenThumbnailUpload}
                                    onClose={() => setIsOpenThumbnailUpload(false)}
                                    onSuccess={handleThumbnailUpload}
                                    accept={{
                                        'image/*': ['.jpg', '.jpeg', '.png']
                                    }}
                                />
                                <div className="mt-2 flex items-start justify-between">
                                    <div className="w-full">
                                        {isEditing ? (
                                            <Input
                                                value={albumName}
                                                onChange={handleNameChange}
                                                className="text-h2 flex-grow pr-2"
                                            />
                                        ) : (
                                            <h1 className="text-h2">{albumName}</h1>
                                        )}
                                        <p className="text-body1 truncate text-foreground/80">
                                            by {data.album.user.name}
                                        </p>

                                    </div>
                                    <div className="flex items-center gap-3">
                                        {isEditing ? (
                                            <Button onPress={handleSaveChanges}>
                                                <FaSave className="text-xl" />
                                            </Button>
                                        ) : (
                                            <Button onPress={handleEditToggle}>
                                                <FaEdit className="text-xl" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <div>
                            <h2 className="text-h3 my-3">Tracks</h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {data.songs.map(song => (
                                    <Card key={song._id} className="border-none" shadow="sm">
                                        <CardBody className="p-1.5">
                                            <div className="grid grid-cols-8 items-center justify-center gap-3">
                                                <div className="relative col-span-2">
                                                    <Image
                                                        alt="Album cover"
                                                        className="h-14 object-cover md:h-20"
                                                        shadow="md"
                                                        src={song.artwork}
                                                        width="100%"
                                                    />
                                                </div>
                                                <div className="col-span-4 flex flex-col">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex w-full flex-col gap-0">
                                                            <h3 className="text-body1 truncate font-semibold">
                                                                {song.title}
                                                            </h3>
                                                            <p className="text-body3 text-foreground/80">
                                                                {song.artist}
                                                            </p>
                                                            <p className="text-body3 flex items-center gap-1 text-foreground/80">
                                                                <FaHeadphonesAlt />
                                                                <span>{formatPlayCount(song?.play_count)}</span>
                                                            </p>
                                                            <span className="text-body3 flex items-center gap-1">
                                                                <FaDollarSign />
                                                                1.30
                                                            </span>
                                                            <span className="text-body3 flex items-center gap-1">
                                                                <FaRegHeart />
                                                                {song.likes}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 flex items-center justify-end">
                                                    <Button
                                                        isIconOnly
                                                        variant="light"
                                                        onPress={() => handleSongDelete(song._id)}
                                                    >
                                                        <FaTrash className="text-xl" />
                                                    </Button>
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
        </Container>
    )
}

export default withAuthProtection(AlbumEditComponent)