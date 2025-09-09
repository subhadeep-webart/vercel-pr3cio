import React from 'react'
import { Card, CardBody, CardFooter, Skeleton } from '@heroui/react'

const AlbumCardSkeleton = () => {
    return (
        <Card className='cursor-pointer hover:opacity-80'>
            <CardBody>
                <Skeleton className='h-[180px] w-full rounded-xl' />
            </CardBody>
            <CardFooter className='flex-col items-start space-y-2 px-4'>
                <Skeleton className='h-6 w-3/4' />
                <Skeleton className='h-4 w-1/2' />
                <Skeleton className='h-3 w-1/3 opacity-80' />
            </CardFooter>
        </Card>
    )
}

export default AlbumCardSkeleton
