import { FC, ReactNode } from 'react'
import DesktopPlayer from '@/app/(others)/artists/_components/DesktopPlayer'
import { cn } from '@heroui/react'

type ContainerProps = {
    children: ReactNode
    className?: string
}
const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn('p-4 pb-40 md:p-8', className)}>
            {children}
            <DesktopPlayer />
        </div>
    )
}

export default Container
