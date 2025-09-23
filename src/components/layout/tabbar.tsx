'use client'

import { Tab, Tabs } from '@heroui/react'
import { usePathname } from 'next/navigation'
import { BiHomeSmile, BiSearch } from 'react-icons/bi'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { PiMusicNoteFill } from 'react-icons/pi'

import useAuth from '@/hooks/useAuth'

import BottomPlayer from '../player/bottom-player'

export default function TabBar() {
    const pathname = usePathname()

    const { isLoggedIn } = useAuth()

    return (
        <div className='fixed bottom-0 z-50 h-fit w-full space-y-0.5 p-2 md:hidden'>
            <BottomPlayer />
            <Tabs
                disabledKeys={!isLoggedIn ? ['/music'] : []}
                selectedKey={pathname}
                aria-label='Options'
                color='primary'
                variant='underlined'
                size='lg'
                classNames={{
                    tabList:
                        'bg-background/90 rounded-xl backdrop-blur-sm border-default border-1.5',
                    tab: 'py-7 px-0',
                }}
                fullWidth>
                <Tab
                    key='/'
                    href='/'
                    title={
                        <div className='flex flex-col items-center'>
                            <BiHomeSmile className='text-2xl' />
                            <span className='text-body3'>Home</span>
                        </div>
                    }
                />

                <Tab
                    key='/search'
                    href='/search'
                    title={
                        <div className='flex flex-col items-center'>
                            <BiSearch className='text-2xl' />
                            <span className='text-body3'>Search</span>
                        </div>
                    }
                />
                <Tab
                    key='/library'
                    href='/library'
                    title={
                        <div className='flex flex-col items-center'>
                            <MdOutlineLibraryMusic className='text-2xl' />
                            <span className='text-body3'>Library</span>
                        </div>
                    }
                />
             
                <Tab
                    key='/store'
                    href='/users/my-store'
                    title={
                        <div className='flex flex-col items-center'>
                            <PiMusicNoteFill className='text-2xl' />
                            <span className='text-body3'>Store</span>
                        </div>
                    }
                />
            </Tabs>
        </div>
    )
}
