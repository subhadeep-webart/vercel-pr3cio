import React from 'react'
import { Skeleton } from '@heroui/react'

const TrendingSkeleton = () => {
    return (
        <>
            <div className='mb-3 flex w-full max-w-[300px] items-center gap-3'>
                <div>
                    <Skeleton className='flex h-12 w-12 rounded-full' />
                </div>
                <div className='flex w-full flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
        </>
    )
}

export default TrendingSkeleton
