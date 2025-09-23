'use client'

import React, { useMemo, useState } from 'react'
import { setArtist } from '@/redux/slices/app-slice'
import { useAppDispatch } from '@/redux/store'
import {
    Avatar,
    Button,
    Chip,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Skeleton,
    Tooltip,
} from '@heroui/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'
import { TbMusicUp } from 'react-icons/tb'
import { WiStars } from 'react-icons/wi'

import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import usePlayer from '@/hooks/usePlayer'

import MiniMusicPlayer from '../common/MusicPlayer/MiniMusicPlayer'
import PageTitle from '../ui/page-title'
import DrawerSideBar from './DrawerSidebar'

const Header = () => {
    const { isLoggedIn, user, isLoading, logout } = useAuth()
    const { setModal } = useApp()
    const pathname = usePathname()
    const router = useRouter()
    const player = usePlayer()
    const { isMobile } = useMediaQuery()
    const dispatch = useAppDispatch()
    const hidePageTitle = useMemo(() => {
        const hidePaths = ['/']
        const detailsPaths = ['/songs', '/albums', '/artists']

        if (hidePaths.includes(pathname)) return true

        return detailsPaths.some((basePath) =>
            pathname.startsWith(`${basePath}/`)
        )
    }, [pathname])

//    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleSigninClick = () => {
        dispatch(setArtist(false))
        setModal('signin')
    }

    const handleSigninAsArtistClick = (value) => {
        dispatch(setArtist(value))
        setModal('signin')
    }

    const handleCreateClick = () => {
        router.push('/publish-song')
    }

    const handleLogout = () => {
        logout()
        player.stop()
    }

    //   const handleHamburgerClick = () => {
    //     if (isMobile) setIsDrawerOpen(true)
    // }

    return (
        <>
            <header className='sticky top-0 z-50 flex items-center justify-between border-b border-b-[rgba(255,255,255,0.15)] px-5 py-4 backdrop-blur-lg'>
                <div className='headLeft flex items-center justify-between'>
                    <span className='w-[4.48rem] sm:w-[4.48rem] md:w-[4.48rem] lg:w-[4.48rem] xl:w-[5.48rem] 2xl:w-[6.48rem]'>
                        <Link href='/'>
                            <img
                                src='/images/pr3cio-logo.webp'
                                alt='pr3cio-logo'
                                loading='lazy'
                                className='w-full'
                            />
                        </Link>
                    </span>
                    <MiniMusicPlayer />
                </div>
                <div className='headRight flex items-center justify-between'>
                    <div className='searchBox relative mr-3 hidden sm:block'>
                        <input
                            type='text'
                            placeholder='Search music, artist'
                            className='h-[2.50rem] rounded-full border-1 border-solid border-[#d3d3d3a1] bg-[linear-gradient(135deg,rgba(211,211,211,0.2)_0%,rgba(152,152,152,0.2)_100%)] px-5 py-0 text-xs text-[#d3d3d3] md:w-[11.63rem] xl:w-[13.63rem] 2xl:w-[14.63rem]'
                        />
                        <button
                            type='submit'
                            className='absolute right-2 top-1.5 inline-block h-[1.81rem] w-[1.81rem] cursor-pointer rounded-full border-0 bg-white text-center leading-[1rem]'>
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
                                    stroke-width='1.40097'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                    {isLoading ? (
                        <Skeleton classNameName='h-10 w-10 rounded-full' />
                    ) : (
                        <>
                            {isLoggedIn ? (
                                <Dropdown placement='bottom-end'>
                                    <DropdownTrigger>
                                        <Avatar
                                            isBordered
                                            as='button'
                                            classNameName='transition-transform'
                                            color='secondary'
                                            name='Jason Hughes'
                                            size='md'
                                            src={user?.avatar}
                                        />
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label='Profile Actions'
                                        variant='flat'>
                                        <DropdownItem
                                            key='profile'
                                            href={
                                                user?.is_artist
                                                    ? '/artists/biography'
                                                    : '/profile'
                                            }>
                                            <p classNameName='flex items-center gap-2'>
                                                {user?.name}
                                                {user?.is_artist && (
                                                    <WiStars
                                                        color='yellow'
                                                        classNameName='text-2xl'
                                                    />
                                                )}
                                            </p>
                                        </DropdownItem>

                                        {/* <DropdownItem
                                            key='settings'
                                            href='/settings'>
                                            Settings
                                        </DropdownItem>

                                        <DropdownItem
                                            key='help_and_feedback'
                                            href='/help'>
                                            Help & Feedback
                                        </DropdownItem> */}

                                        {user?.is_artist ? (
                                        <>
                                            {/* <DropdownItem
                                                        key='artistDashboard'
                                                        href='/artists/dashboard'>
                                                        <p classNameName='flex items-center gap-2'>
                                                            Dashboard
                                                        </p>
                                                    </DropdownItem> */}
                                            <DropdownItem
                                                key='biography'
                                                href='/artists/biography'>
                                                <p classNameName='flex items-center gap-2'>
                                                    Biography
                                                </p>
                                            </DropdownItem>
                                            <DropdownItem
                                                key='musicUpload'
                                                href='/artists/song-upload'>
                                                <p classNameName='flex items-center gap-2'>
                                                    Music upload
                                                </p>
                                            </DropdownItem>
                                            <DropdownItem
                                                key='merchendise'
                                                href='/artists/merchendise'>
                                                <p classNameName='flex items-center gap-2'>
                                                    Merchendise
                                                </p>
                                            </DropdownItem>
                                            <DropdownItem
                                                key='my-gallery'
                                                href='/artist/my-upload'>
                                                <p className='flex items-center gap-2'>
                                                    My Gallery
                                                </p>
                                            </DropdownItem>
                                             <DropdownItem
                                                key='events'
                                                href='/artists/events'
                                            >
                                                <p className='flex items-center gap-2'>
                                                    Events
                                                </p>
                                            </DropdownItem>
                                            <DropdownItem
                                                key='create-event'
                                                href='/artists/create-event'
                                            >
                                                <p className='flex items-center gap-2'>
                                                    Create Event
                                                </p>
                                            </DropdownItem>  
                                            <DropdownItem
                                                key='earning'
                                                href='/artist/earning'>
                                                <p className='flex items-center gap-2'>
                                                    Earning
                                                </p>
                                                {/* <p className='pt-[1px] text-xs text-gray-600'>
                                                        Development is in
                                                        process
                                                    </p> */}
                                            </DropdownItem>

                                            </>
                                             ) : ( 
                                             <> 
                                            {/* <DropdownItem
                                                        key='userDashboard'
                                                        href='/user/dashboard'>
                                                        <p className='flex items-center gap-2'>
                                                            Dashboard
                                                        </p>
                                                    </DropdownItem> */}
                                            <DropdownItem
                                                key='myPlan'
                                                href='/users/my-plans'>
                                                <p className='flex items-center gap-2'>
                                                    My Plans
                                                </p>
                                            </DropdownItem>
                                            <DropdownItem
                                                key='paymentHistory'
                                                href='/profile/order-history'>
                                                <p className='flex items-center gap-2'>
                                                    Payment History
                                                </p>
                                            </DropdownItem>
                                            {/* <DropdownItem
                                                    key='download'
                                                    href='/download'>
                                                    <p className='flex items-center gap-2'>
                                                        Download
                                                    </p>
                                                </DropdownItem> */}
                                            {/* <DropdownItem
                                                        key='myOrder'
                                                    >
                                                        <p className='flex items-center gap-2'>
                                                            My Order
                                                        </p>
                                                        <p className='text-xs pt-[1px] text-gray-600'>Development is in process</p>
                                                    </DropdownItem> */}
                                            {/* <DropdownItem
                                                    key='favourite'
                                                    href='/favourite'>
                                                    <p className='flex items-center gap-2'>
                                                        Favourite
                                                    </p>
                                                </DropdownItem> */}
                                        </>
                                         )} 

                                        <DropdownItem
                                            key='logout'
                                            color='danger'
                                            onPress={handleLogout}>
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <>
                                    <span className='ml-3 inline-block sm:ml-3 md:ml-3 xl:pl-3 2xl:pl-4'>
                                        <Link
                                            href='/user-signup'
                                            className='text-xs font-semibold text-white transition-colors hover:text-[#ff2663] sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm'>
                                            Sign up
                                        </Link>
                                    </span>
                                    <span className='ml-3 inline-block sm:ml-3 md:ml-3 xl:pl-3 2xl:pl-4'>
                                        <Link
                                            href='/login'
                                            className='inline-block flex h-[2.50rem] w-[4.38rem] items-center justify-center rounded-full border-1 border-solid border-[#989898] text-center text-xs font-semibold leading-[2.50rem] text-white transition-colors hover:bg-[#ff2663] hover:text-white sm:w-[4.38rem] sm:text-xs md:w-[4.38rem] md:text-xs lg:w-[4.38rem] lg:text-xs xl:w-[5.38rem] xl:text-xs 2xl:w-[6.38rem] 2xl:text-sm'>
                                            Log in
                                        </Link>
                                    </span>
                                </>
                            )}
                        </>
                    )}

                      {/* {isMobile && (
                        <span
                            className='ml-3 inline-block cursor-pointer text-xl hover:text-[#ff2663]'
                            onClick={handleHamburgerClick}>
                            <i className='bi bi-list'></i>
                        </span>
                    )} */}

                </div>
            </header>

           {/* <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement='left'
        size='sm' // you can specify appropriate size
        backdrop='blur' // or 'opaque' etc
        isDismissable={true}
        shouldBlockScroll={true}
      >
        <DrawerContent>
          <DrawerHeader>
            <div className='flex justify-between items-center p-4'>
              <span className='text-lg font-semibold text-white'>Menu</span>
             
            </div>
          </DrawerHeader>
          <DrawerBody className='px-0'>
            <DrawerSideBar
              onNavigate={() => setIsDrawerOpen(false)}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}

            <Navbar isBordered={!isMobile} maxWidth='full' className='hidden'>
                <NavbarContent justify='start'>
                    <NavbarBrand classNameName='sm:hidden'>
                        {isMobile && hidePageTitle ? (
                            <Link href='/'>
                                <Image
                                    src='/img/logo/logo.png'
                                    alt='PR3CIO'
                                    height={40}
                                />
                            </Link>
                        ) : (
                            <PageTitle />
                        )}
                    </NavbarBrand>
                    <NavbarContent classNameName='hidden gap-3 sm:flex'>
                        <Input
                            classNameNames={{
                                base: 'max-w-full sm:max-w-[10rem] h-10',
                                mainWrapper: 'h-full',
                                input: 'text-small',
                                inputWrapper:
                                    'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
                            }}
                            placeholder='Type to search...'
                            size='sm'
                            startContent={<FiSearch />}
                            type='search'
                        />
                        {/* <NavbarItem>
                        <Link color='foreground' href='#'>
                            Trending
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href='#'>Popular</Link>
                    </NavbarItem> */}
                    </NavbarContent>
                </NavbarContent>

                <NavbarContent
                    as='div'
                    classNameName='items-center'
                    justify='end'>
                    {isLoading ? (
                        <Skeleton classNameName='h-10 w-10 rounded-full' />
                    ) : (
                        <>
                            {isLoggedIn ? (
                                <>
                                    {/* {user?.is_artist && <Tooltip
                                    content='Upload your Own music on PR3CIO'
                                    showArrow
                                    color='primary'>
                                    <Button
                                        isIconOnly={isMobile}
                                        color='primary'
                                        classNameName='font-bold'
                                        onPress={handleCreateClick}
                                        startContent={
                                            <TbMusicUp classNameName='text-xl' />
                                        }>
                                        {!isMobile && 'Upload'}
                                    </Button>
                                </Tooltip>} */}
                                    <Dropdown placement='bottom-end'>
                                        <DropdownTrigger>
                                            <Avatar
                                                isBordered
                                                as='button'
                                                classNameName='transition-transform'
                                                color='secondary'
                                                name='Jason Hughes'
                                                size='sm'
                                                src={user?.avatar}
                                            />
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            aria-label='Profile Actions'
                                            variant='flat'>
                                            <DropdownItem
                                                key='profile'
                                                href='/profile'>
                                                <p classNameName='flex items-center gap-2'>
                                                    {user?.name}
                                                    {user?.is_artist && (
                                                        <WiStars
                                                            color='yellow'
                                                            classNameName='text-2xl'
                                                        />
                                                    )}
                                                </p>
                                            </DropdownItem>

                                            {/* <DropdownItem
                                            key='settings'
                                            href='/settings'>
                                            Settings
                                        </DropdownItem>

                                        <DropdownItem
                                            key='help_and_feedback'
                                            href='/help'>
                                            Help & Feedback
                                        </DropdownItem> */}
                                            {user?.is_artist ? (
                                            <>
                                                {/* <DropdownItem
                                                        key='artistDashboard'
                                                        href='/artists/dashboard'>
                                                        <p classNameName='flex items-center gap-2'>
                                                            Dashboard
                                                        </p>
                                                    </DropdownItem> */}
                                                <DropdownItem
                                                    key='biography'
                                                    href='/artists/biography'>
                                                    <p classNameName='flex items-center gap-2'>
                                                        Biography
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='musicUpload'
                                                    href='/artists/song-upload'>
                                                    <p classNameName='flex items-center gap-2'>
                                                        Music upload
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='merchendise'
                                                    href='/artist/merchendise'>
                                                    <p classNameName='flex items-center gap-2'>
                                                        Merchendise
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='my-gallery'
                                                    href='/artist/my-upload'>
                                                    <p className='flex items-center gap-2'>
                                                        My Gallery
                                                    </p>
                                                </DropdownItem>
                                                  <DropdownItem
                                                    key='events'
                                                    href='/artists/events'
                                                >
                                                    <p className='flex items-center gap-2'>
                                                       Events
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='create-event'
                                                    href='/artists/create-event'
                                                >
                                                    <p className='flex items-center gap-2'>
                                                        Create Event
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='earning'
                                                    href='/artist/earning'>
                                                    <p className='flex items-center gap-2'>
                                                        Earning
                                                    </p>
                                                    {/* <p className='pt-[1px] text-xs text-gray-600'>
                                                        Development is in
                                                        process
                                                    </p> */}
                                                </DropdownItem>
                                                </>
                                            ) : (
                                                <>
                                                {/* <DropdownItem
                                                        key='userDashboard'
                                                        href='/user/dashboard'>
                                                        <p className='flex items-center gap-2'>
                                                            Dashboard
                                                        </p>
                                                    </DropdownItem> */}
                                                <DropdownItem
                                                    key='myPlan'
                                                    href='/my-plans'>
                                                    <p className='flex items-center gap-2'>
                                                        My Plans
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='paymentHistory'
                                                    href='/payment-history'>
                                                    <p className='flex items-center gap-2'>
                                                        Payment History
                                                    </p>
                                                </DropdownItem>
                                                <DropdownItem
                                                    key='download'
                                                    href='/download'>
                                                    <p className='flex items-center gap-2'>
                                                        Download
                                                    </p>
                                                </DropdownItem>
                                                {/* <DropdownItem
                                                        key='myOrder'
                                                    >
                                                        <p className='flex items-center gap-2'>
                                                            My Order
                                                        </p>
                                                        <p className='text-xs pt-[1px] text-gray-600'>Development is in process</p>
                                                    </DropdownItem> */}
                                                <DropdownItem
                                                    key='favourite'
                                                    href='/favourite'>
                                                    <p className='flex items-center gap-2'>
                                                        Favourite
                                                    </p>
                                                </DropdownItem>
                                            </>
                                             )} 

                                            <DropdownItem
                                                key='logout'
                                                color='danger'
                                                onPress={handleLogout}>
                                                Log Out
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </>
                            ) : (
                                <>
                                    <Button
                                        color='primary'
                                        size='md'
                                        className='font-bold'
                                        onPress={handleSigninClick}>
                                        Sign in
                                    </Button>
                                    {/* <Button
                                    color='primary'
                                    size='md'
                                    className='font-bold'
                                    onPress={() => handleSigninAsArtistClick(true)}>
                                    Sign in as an Artist
                                </Button> */}
                                </>
                            )}
                        </>
                    )}
                </NavbarContent>
            </Navbar>
        </>
    )
}

export default Header
