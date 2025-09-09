'use client'

import { Skeleton } from '@heroui/react'

const ArtistCardSkeleton = () => {
    return (
        <div className="flex flex-col items-center space-y-3">
            <Skeleton className="h-[151px] w-[151px] rounded-full" />
            <Skeleton className="h-4 w-[151px] rounded" />
        </div>
    )
}

export default ArtistCardSkeleton
