'use client'

import { Button, Card, CardBody, Image } from '@heroui/react'
import usePlayer from '@/hooks/usePlayer'
import { useMemo } from 'react'
import { postToAddSongToPublish } from '@/services/api/user-api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';

function MusicCard({ tracks, track, index, drift }) {

    const player = usePlayer()
    const router = useRouter()

    const handleSongPlay = () => {
        player.clearCachedState()
        if (player.isCurrentSong(track?._id)) {
            player.togglePlayback()
        } else {
            player.playTrack({ track, tracks })
        }
    }

    const isLoading = useMemo(() => {
        return player.isCurrentSong(track?._id) && player.status === 'loading'
    }, [player, track?._id])

    const publishSongById = async (id) => {
        const resp = await postToAddSongToPublish(id)
        if (resp.status === "success") {
            toast.success(resp.message)
        } else {
        }
    }

    return (
        <Card
            isPressable
            onPress={handleSongPlay}
            className='w-full border-none bg-transparent shadow-none'>
            <CardBody className='flex flex-col md:flex-row items-center justify-between border-b border-dashed border-white/10 py-4'>
                <div className='flex items-center gap-3 w-full md:w-auto'>
                    <span className='w-5 text-sm text-white'>{index + 1}.</span>
                    <div className='relative aspect-square min-w-[60px] max-w-[60px] overflow-hidden rounded-[6px]'>
                        <Image
                            src={track?.artwork}
                            alt='avatar'
                            classNames={{
                                wrapper: 'relative aspect-square w-full h-full',
                            }}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <span className='text-sm text-white truncate md:max-w-[200px]'>
                        {track.title}
                    </span>
                </div>
                <span className='text-sm text-white/70 md:block'>{track.duration}</span>

                {drift && (
                    <div className='flex gap-3 mt-2 md:mt-0'>
                        <Button
                            className='mr-3 w-full md:w-auto'
                            onClick={() => router.push(`/update-song/${track._id}`)}>
                            Edit
                        </Button>
                        <Button
                            onClick={() => publishSongById(track._id)}
                            className='bg-[#5c52d8] w-full md:w-auto'>
                            Publish
                        </Button>
                    </div>
                )}
            </CardBody>
        </Card>
    )
}

export default MusicCard
