'use client'

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Tab,
    Tabs,
} from '@heroui/react'
import { usePathname } from 'next/navigation'
import { BiHomeSmile, BiSearch } from 'react-icons/bi'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { PiMusicNoteFill } from 'react-icons/pi'
import useAuth from '@/hooks/useAuth'

import BottomPlayer from '../player/bottom-player'
import { RiDashboardLine } from 'react-icons/ri'
import { CiMicrophoneOn } from 'react-icons/ci'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

export default function TabBar() {
    const pathname = usePathname()

    const { isLoggedIn, user } = useAuth()

    return (
        <div className='fixed bottom-0 z-50 h-fit w-full space-y-0.5 p-2 md:hidden'>
            <BottomPlayer />
            {user?.is_artist ? (
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
                        key='/artists/dashboard'
                        href='/artists/dashboard'
                        title={
                            <div className='flex flex-col items-center'>
                                <RiDashboardLine className='text-2xl' />
                                <span className='text-body3'>Dashboard</span>
                            </div>
                        }
                    />

                    {/* <Tab
                        key='/search'
                        href='/search'
                        title={
                            <div className='flex flex-col items-center'>
                                <BiSearch className='text-2xl' />
                                <span className='text-body3'>Search</span>
                            </div>
                        }
                    /> */}

                    <Tab
                        key='/artists/my-library/song/draft-songs'
                        href='/artists/my-library/song/draft-songs'
                        title={
                            <div className='flex flex-col items-center'>
                                <MdOutlineLibraryMusic className='text-2xl' />
                                <span className='text-body3'>My Library</span>
                            </div>
                        }
                    />

                    <Tab
                        key='/artists/create-song-with-ai'
                        href='/artists/create-song-with-ai'
                        title={
                            <div className='flex flex-col items-center'>
                                <BsFillFileEarmarkMusicFill className='text-2xl' />
                                <span className='text-body3'>Create AI</span>
                            </div>
                        }
                    />
                </Tabs>
            ) : (
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

                    {/* <Tab
                        key='/search'
                        href='/search'
                        title={
                            <div className='flex flex-col items-center'>
                                <BiSearch className='text-2xl' />
                                <span className='text-body3'>Search</span>
                            </div>
                        }
                    /> */}
                    <Tab
                        key='/library'
                        title={
                            <Dropdown>
                                <DropdownTrigger>
                                    <div className='flex cursor-pointer flex-col items-center'>
                                        <MdOutlineLibraryMusic className='text-2xl' />
                                        <span className='text-body3'>
                                            Library
                                        </span>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label='Library Menu'
                                    variant='flat'>
                                    <DropdownItem
                                        key='songs'
                                        href='/users/songs-library/favourites'>
                                        Songs
                                    </DropdownItem>
                                    <DropdownItem
                                        key='albums'
                                        href='/users/albums-library/latest'>
                                        Albums
                                    </DropdownItem>
                                    <DropdownItem
                                        key='purchase'
                                        href='/users/purchase-library/songs'>
                                        Purchase
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        }
                    />

                     <Tab
                        key='/artists'
                        href='/artists'
                        title={
                            <div className='flex flex-col items-center'>
                                <CiMicrophoneOn className='text-2xl' />
                                <span className='text-body3'>Artists</span>
                            </div>
                        }
                    />

                    <Tab
                        key='/users/my-store'
                        href='/users/my-store'
                        title={
                            <div className='flex flex-col items-center'>
                                <PiMusicNoteFill className='text-2xl' />
                                <span className='text-body3'>Store</span>
                            </div>
                        }
                    />
                </Tabs>
            )}
        </div>
    )
}
