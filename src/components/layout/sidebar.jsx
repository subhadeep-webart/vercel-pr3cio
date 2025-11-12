'use client'

import React from 'react'
import {
    Accordion,
    AccordionItem,
    cn,
    Image,
    Listbox,
    ListboxItem,
} from '@heroui/react'
import { usePathname } from 'next/navigation'
import { BiHomeSmile } from 'react-icons/bi'
import { IoMdMusicalNotes } from 'react-icons/io'
import { IoAlbumsOutline } from 'react-icons/io5'
import { LiaCommentDollarSolid } from 'react-icons/lia'
import { MdOutlineLibraryMusic, MdOutlinePerson } from 'react-icons/md'
import { PiMusicNoteFill } from 'react-icons/pi'
import Link from 'next/link'
import { SIDEBAR_MENU, SIDEBAR_MENU_ARTISTS } from '@/utils/constant'
import useAuth from '@/hooks/useAuth'
import LogoutButton from './LogoutButton'

const ListboxWrapper = ({ children, className }) => (
    <div
        className={cn(
            'h-full border-small border-b-0 border-l-0 border-t-0 border-default-200 py-2 dark:border-default-100',
            className
        )}>
        {children}
    </div>
)
const SideBar = () => {
    const pathName = usePathname()
    const { user } = useAuth()

    const isActive = (path) => {
        if (pathName === path) {
            return true
        }
        return false
    }


    const SIDEBAR_MENU_ARRAY = user?.is_artist ? SIDEBAR_MENU_ARTISTS : SIDEBAR_MENU;

    return (
        <>
            <nav className='menu rounded-0 fixed right-[-100%] top-[4.5rem] z-10 h-[100vh] w-full flex-[0_0_auto] bg-[#2A2929] px-3 py-3 transition-all sm:left-5 sm:top-[7.2rem] sm:block sm:h-screen sm:w-[11.63rem] sm:flex-[0_0_11.63rem] sm:rounded-xl'>
                <div className='searchBox relative mb-4 mt-4 px-3 sm:hidden'>
                    <input
                        type='text'
                        placeholder='Search music, artist'
                        className='h-[2.50rem] w-full rounded-full border-1 border-solid border-[#d3d3d3a1] bg-[linear-gradient(135deg,rgba(211,211,211,0.2)_0%,rgba(152,152,152,0.2)_100%)] px-5 py-0 text-xs text-[#d3d3d3]'
                    />
                    <button
                        type='submit'
                        className='absolute right-5 top-1.5 inline-block h-[1.81rem] w-[1.81rem] cursor-pointer rounded-full border-0 bg-white text-center leading-[1rem]'>
                        <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            className='inline-block'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10.8147 10.7916L14.0145 14.0145M12.5357 6.62049C12.5357 9.88737 9.88739 12.5357 6.62051 12.5357C3.35364 12.5357 0.705322 9.88737 0.705322 6.62049C0.705322 3.35362 3.35364 0.705299 6.62051 0.705299C9.88739 0.705299 12.5357 3.35362 12.5357 6.62049Z'
                                stroke='#6F6F6F'
                                strokeWidth='1.40097'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                </div>
                <ul>
                    {SIDEBAR_MENU_ARRAY.map((item, index) => (
                        <li className='mb-3' key={`menu-${index + 1}`}>
                            {item?.label === 'My library' ? (
                                <Accordion isCompact>
                                    <AccordionItem
                                        key='1'
                                        aria-label={item?.label}
                                        title={
                                            <div className='flex items-center gap-2'>
                                                <span className='h-4 w-4'>
                                                    {item?.icon}
                                                </span>
                                                <span>{item?.label}</span>
                                            </div>
                                        }>
                                        <ul class='rounded-[0_0_0.8rem_0.8rem]  border-1 border-[#373737] bg-black pb-2 pl-10 pt-2'>
                                            {item?.children.map(
                                                (innerItem, index) => (
                                                    <li key={`sub-menu-${index + 1}`}>
                                                        <Link
                                                            href={
                                                                innerItem.path
                                                            }
                                                            class='mb-2 block text-sm font-medium text-[#979797] transition-colors hover:text-white'>
                                                            {innerItem.label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </AccordionItem>
                                </Accordion>
                            ) : (
                                <Link
                                    href={item?.path}
                                    className='group flex w-full items-center rounded-[0.3rem_0_0_0.3rem] px-2 py-2 text-xs font-medium text-white transition-colors hover:bg-[#505736] hover:shadow-[-3px_0px_0px_0px_#C6FF00_inset] sm:text-xs md:text-[0.94rem]'>
                                    <span className='mr-2 w-[1.36rem] flex-[0_0_1.36rem] text-center'>
                                        {item?.icon}
                                    </span>
                                    {item?.label}
                                </Link>
                            )}
                        </li>
                    ))}

                    {user && <LogoutButton />}
                </ul>
            </nav>
        </>
    )
}

export default SideBar;
