import { FC } from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

type LibraryItemProps = {
    label: string
    href: string
    icon: React.ReactNode
}
const LibraryItem: FC<LibraryItemProps> = ({ label, href, icon }) => (
    <Link
        href={href}
        className='flex select-none items-center gap-3 pl-4 hover:bg-secondary'>
        {icon}
        <div className='flex w-full items-center justify-between border-b border-secondary py-4 pr-3'>
            <span className='font-medium'>{label}</span>
            <IoIosArrowForward className='text-2xl' />
        </div>
    </Link>
)
export default LibraryItem
