// components/MusicCardSkeleton.jsx or .tsx

import { Card, CardBody, Skeleton } from '@heroui/react'

const MusicCardSkeleton = () => {
    return (
        <Card className='w-full border-none bg-transparent shadow-none'>
            <CardBody className='flex flex-row items-center justify-between border-b border-dashed border-white/10 py-4'>
                <div className='flex items-center gap-3 w-full'>
                    <span className='w-5 text-sm text-white'>--</span>
                    <Skeleton className='min-w-[60px] max-w-[60px] aspect-square rounded-[6px]' />
                    <div className='flex-1'>
                        <Skeleton className='h-4 w-2/3 rounded-md' />
                    </div>
                </div>
                <Skeleton className='h-4 w-12 rounded-md' />
            </CardBody>
        </Card>
    )
}

export default MusicCardSkeleton
