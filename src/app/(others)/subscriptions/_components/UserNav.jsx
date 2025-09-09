'use client'

import { Card } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaRegUser } from 'react-icons/fa'
import { LiaCommentDollarSolid } from 'react-icons/lia'
import { LuShirt } from 'react-icons/lu'
import { RiDownloadCloudLine } from 'react-icons/ri'
import { TbMusicHeart } from 'react-icons/tb'

function UserNav() {
    const pathname = usePathname()

    const links = [
        { href: '/my-plans', label: 'Account', icon: <FaRegUser /> },
        { href: '/download', label: 'Download', icon: <RiDownloadCloudLine /> },
        // { href: '/my-order', label: 'My Order', icon: <LuShirt /> },
        { href: '/favourite', label: 'Favourite', icon: <TbMusicHeart /> },
        {
            href: '/subscriptions',
            label: 'Subscription Plan',
            icon: <LiaCommentDollarSolid />,
        },
    ]
    return (
        <Card className='w-full flex flex-col md:flex-row items-center justify-between bg-[#2A2F2C] px-4 md:px-10 py-3 text-white'>
            <Image
                src='/img/logo/pr3cio-p.svg'
                alt='Logo'
                width={33}
                height={53}
                className='mx-auto md:mx-0'
            />
            <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6'>
                {links.map(({ href, label, icon }) => {
                    const isActive = pathname === href
                    const baseClass =
                        'text-md flex items-center transition hover:text-[#847AFE]'
                    const activeClass = isActive ? 'text-[#847AFE]' : ''

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`${baseClass} ${activeClass}`}>
                            <span className='mr-2 inline-block text-xl'>
                                {icon}
                            </span>
                            <span className='transition'>{label}</span>
                        </Link>
                    )
                })}
            </div>
        </Card>
    )
}

export default UserNav
