'use client'

import { getAlbumDetails } from '@/services/api/album-ep'
import { Button, Card, CardBody, CardHeader, Image } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { BsTrash } from 'react-icons/bs'

import queryConstants from '@/constants/query-constants'

function AlbumMusics() {
    const params = useParams()
    const { data, status } = useQuery({
        queryKey: [queryConstants.getOneAlbum, params?.slug],
        queryFn: () => getAlbumDetails(params?.slug),
        enabled: params?.slug !== undefined,
    })

    return (
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(0,_270px))] gap-4'>
            {data?.songs.map((song) => (
                <Card key={song._id} className='py-4'>
                    <CardHeader className='flex items-start justify-between px-4 pb-0 pt-2'>
                        <div className='flex flex-col'>
                            <small className='text-default-500'>
                                {new Date(song.created_at).toLocaleDateString()}
                            </small>
                            <h4 className='truncate text-large font-bold'>
                                {song.title}
                            </h4>
                            <span className='text-sm text-default-400'>
                                By {song.artist}
                            </span>
                        </div>
                        <Button
                            isIconOnly
                            className='text-red-500 transition hover:text-red-700'
                            aria-label='Delete song'>
                            <BsTrash size={20} />
                        </Button>
                    </CardHeader>
                    <CardBody className='overflow-visible py-2'>
                        <Image
                            alt={song.title}
                            className='w-max-[500px] mx-auto aspect-square w-full rounded-xl object-cover'
                            src={song.artwork}
                            removeWrapper
                        />
                        <p className='mt-2 line-clamp-2 text-sm text-gray-600'>
                            {song.description}
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default AlbumMusics
