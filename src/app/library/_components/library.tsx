'use client'

import { IoAlbumsOutline } from 'react-icons/io5'
import { LiaMicrophoneAltSolid } from 'react-icons/lia'
import { PiHeart, PiMusicNoteFill } from 'react-icons/pi'

import { withAuthProtection } from '@/components/auth/protected-component'

import LibraryItem from './library-item'
import useAuth from '@/hooks/useAuth'


const Library = () => {
    const { user, isLoading } = useAuth()
    const libraryItems = [
        {
            label: 'Songs',
            href: user?.is_artist ? "/draft-song" : '/songs',
            icon: <PiMusicNoteFill className='text-2xl' />,
        },
        {
            label: user?.is_artist ? "Own Albums" : 'Albums',
            href: user?.is_artist ? "/own-albums" : '/albums',
            icon: <IoAlbumsOutline className='text-2xl' />,
        },
        {
            label: 'Artists',
            href: '/artists',
            icon: <LiaMicrophoneAltSolid className='text-2xl' />,
        },
        {
            label: 'Liked',
            href: '/favourite',
            icon: <PiHeart className='text-2xl' />,
        },
    ]

    return (
        <div className='flex flex-col'>
            {libraryItems.map((item) => (
                <LibraryItem key={item.label} {...item} />
            ))}
        </div>
    )
}

export default withAuthProtection(Library)
