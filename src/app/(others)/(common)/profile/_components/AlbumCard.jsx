import { Button, Card, CardBody, CardHeader, Image } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { BsTrash } from "react-icons/bs";

function AlbumCard({ album, onDelete }) {
    const router = useRouter()
    const handleCardClick = () => {
        router.push(`profile/album/${album._id}`)
    }

    return (
        <Card className='py-4' isPressable onPress={handleCardClick}>
            <CardHeader className='flex justify-between items-start px-4 pb-0 pt-2'>
                <div className='flex flex-col'>
                    <small className='text-default-500'>{album.created_at}</small>
                    <h4 className='text-large font-bold'>{album.name}</h4>
                </div>
                <Button
                    onPress={() => onDelete(album.id)}
                    isIconOnly
                    className='text-red-500 hover:text-red-700 transition'
                    aria-label='Delete album'
                >
                    <BsTrash size={24} />
                </Button>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
                <Image
                    alt='Card background'
                    className='rounded-xl object-cover w-full w-max-[500px] mx-auto aspect-square'
                    src={album.thumbnail}
                    removeWrapper
                />
            </CardBody>
        </Card>
    )
}

export default AlbumCard
