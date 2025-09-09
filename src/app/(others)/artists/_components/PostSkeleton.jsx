'use client'

import { Card, CardBody, Skeleton } from '@heroui/react'

const PostSkeleton = () => {
    return (
        <Card className='rounded-[27px] border border-[#4B4B4B] bg-[#2A2F2C] p-3 text-white'>
            <CardBody className='space-y-3'>
                {/* Header */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <Skeleton className='h-8 w-8 rounded-full' />
                        <div>
                            <Skeleton className='h-3 w-24 rounded' />
                            <Skeleton className='mt-1 h-2 w-16 rounded' />
                        </div>
                    </div>
                    <Skeleton className='h-[29px] w-[29px] rounded-full' />
                </div>

                {/* Text */}
                <div>
                    <Skeleton className='h-4 w-48 rounded' />
                    <Skeleton className='mt-2 h-3 w-full rounded' />
                    <Skeleton className='mt-1 h-3 w-5/6 rounded' />
                </div>

                {/* Image */}
                <Skeleton className='aspect-[426/240] w-full rounded-[27px]' />

                {/* Reactions */}
                <div className='mt-2 flex items-center justify-between text-sm'>
                    <div className='flex items-center gap-3'>
                        <Skeleton className='h-3 w-10 rounded' />
                        <Skeleton className='h-3 w-10 rounded' />
                    </div>
                    <Skeleton className='h-3 w-10 rounded' />
                </div>
            </CardBody>
        </Card>
    )
}

const FlowTabSkeleton = () => {
    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {[...Array(4)].map((_, idx) => (
                <PostSkeleton key={idx} />
            ))}
        </div>
    )
}

export default FlowTabSkeleton
