'use client'

import { FC } from 'react'
import { cn } from '@heroui/react'
import { usePathname } from 'next/navigation'

function formatTitle(path: string) {
    if (path === '/') return 'Home'

    return path
        .split('/')
        .filter(Boolean)
        .map((segment) =>
            segment
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())
        )
        .join(' / ')
}

type PageTitleProps = {
    className?: string
}
const PageTitle: FC<PageTitleProps> = ({ className }) => {
    const pathname = usePathname()
    const title = formatTitle(pathname)

    return <span className={cn('text-2xl font-bold', className)}>{title}</span>
}
export default PageTitle
