'use client'

import React from 'react'
import FileUploader from '@/app/(others)/(common)/profile/_components/file-uploader'
import useUserProfileForm from '@/app/(others)/(common)/profile/_hook/useUserProfileForm'
import { Button, Image, Tooltip } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaPencilAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import { ARTIST_PROFILE_NAVIGATION } from '@/utils/constant'
import useAuth from '@/hooks/useAuth'

const PageCommonBg = ({ slug }) => {
    const pathname = usePathname()
    console.log('pathname', pathname.startsWith('/bio'))

    const artist = useSelector((state) => state.artist.data)
    const { user } = useAuth()

    const profile = artist || user || {}
    console.log('profile___concern', profile.is_artist)

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        handleOpenAvatarUpload,
        handleCloseAvatarUpload,
        isOpenAvatarUpload,
        handleAvatarUpload,
        handleRemoveAvatar,
        handleResetPassword,
        albums,
        songs,
    } = useUserProfileForm()

    return (
        <>
            <div
                style={{ backgroundImage: "url('/images/artist/bg.webp')" }}
                className='flex w-full items-center rounded-[0.75rem] bg-[#1C1919] bg-cover bg-center bg-no-repeat px-10 py-8'>
                <span className='relative mb-6 mr-6 block w-[7.50rem] flex-[0_0_7.50rem] rounded-full border-1 border-solid border-[#d3d3d3a1]'>
                    <img
                        src={profile?.avatar}
                        alt='artist'
                        className='block h-[7.50rem] w-[7.50rem] rounded-full object-cover p-2'
                    />
                    {!profile?.is_artist ? (
                        values.avatar ? (
                            <div className='absolute inset-0'>
                                {/* <Image
                                src={values.avatar}
                                alt='Avatar'
                                className='aspect-[1/1] h-[244px] w-[275px] rounded-[28px] border-[4px] border-white object-cover'
                            /> */}
                                <Tooltip content='Edit Avatar'>
                                    <Button
                                        isIconOnly
                                        variant='flat'
                                        className='absolute -bottom-0 -right-[9px] top-0 z-10 h-[25px] w-[25px] rounded-full bg-[#4D41FA] !opacity-100 transition-colors duration-200 hover:bg-[#372fd0]'
                                        onPress={handleOpenAvatarUpload}
                                        isPressable>
                                        <FaPencilAlt className='text-sm text-white' />
                                    </Button>
                                </Tooltip>
                            </div>
                        ) : (
                            <Button
                                variant='faded'
                                onPress={handleOpenAvatarUpload}>
                                Upload Avatar
                            </Button>
                        )
                    ) : null}
                    <FileUploader
                        isOpen={isOpenAvatarUpload}
                        onClose={handleCloseAvatarUpload}
                        onSuccess={handleAvatarUpload}
                        accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
                    />
                </span>
                <div className='mb-6 grow'>
                    <h3 className='text-base font-semibold'>{profile?.name}</h3>
                    <p className='mb-6 text-sm font-semibold text-[#9D9D9D]'>
                        {profile?.is_artist ? 'Artist' : profile?.email}
                    </p>
                    <span
                        className={
                            profile?.is_artist
                                ? 'mb-2 mr-8 inline-block rounded-[0.75rem] border-1 border-solid border-[#d3d3d3a1] px-4 py-2 text-sm font-medium'
                                : 'hidden'
                        }>
                        <svg
                            width='29'
                            height='29'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mr-1 inline-block fill-current text-white'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M8.99988 7.78955C9.34665 7.78955 9.62779 8.07068 9.62779 8.41745C9.62779 8.86837 9.89184 9.33888 10.3256 9.72375C10.7702 10.1182 11.2558 10.3012 11.5115 10.3012C11.8583 10.3012 12.1394 10.5823 12.1394 10.9291C12.1394 11.2759 11.8583 11.557 11.5115 11.557C10.8934 11.557 10.1889 11.2333 9.62779 10.7781V13.8593C9.62779 14.8997 8.78438 15.743 7.74407 15.743C6.70372 15.743 5.86035 14.8997 5.86035 13.8593C5.86035 12.819 6.70372 11.9756 7.74407 11.9756C7.96426 11.9756 8.17557 12.0133 8.37198 12.0828V8.41745C8.37198 8.07068 8.65311 7.78955 8.99988 7.78955ZM8.37198 13.8593C8.37198 13.5125 8.09084 13.2314 7.74407 13.2314C7.3973 13.2314 7.11616 13.5125 7.11616 13.8593C7.11616 14.2061 7.3973 14.4872 7.74407 14.4872C8.09084 14.4872 8.37198 14.2061 8.37198 13.8593Z'
                            />
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M6.23666 0.673346H11.7631C11.9472 0.673296 12.0883 0.673254 12.2117 0.68649C13.3453 0.808162 14.2131 1.73916 14.2658 2.86694C15.2627 3.16463 15.973 4.08706 15.9859 5.14502C16.4891 5.296 16.9231 5.53413 17.2783 5.91788C17.8242 6.50749 17.9934 7.23412 17.9998 8.08289C18.006 8.89892 17.8606 9.93011 17.68 11.2107L17.3125 13.8174C17.1713 14.8188 17.0566 15.6323 16.8782 16.2697C16.6915 16.9366 16.4164 17.4853 15.907 17.9072C15.4015 18.3256 14.8019 18.5061 14.0931 18.5911C13.4079 18.6733 12.5458 18.6733 11.4724 18.6733H6.5276C5.45423 18.6733 4.59209 18.6733 3.90681 18.5911C3.19808 18.5061 2.59846 18.3256 2.09304 17.9072C1.58359 17.4853 1.30844 16.9366 1.12177 16.2697C0.943331 15.6323 0.828659 14.8188 0.687497 13.8174L0.319971 11.2107C0.139402 9.93011 -0.00600445 8.89892 0.000190889 8.08289C0.00662902 7.23412 0.175787 6.50749 0.721638 5.91788C1.07682 5.53423 1.5107 5.29611 2.01372 5.14512C2.02653 4.08706 2.73697 3.16453 3.73399 2.86688C3.78665 1.73914 4.6544 0.808162 5.78811 0.68649C5.91148 0.673254 6.0526 0.673296 6.23666 0.673346ZM3.29778 4.92456C4.07286 4.85938 5.02302 4.85938 6.16682 4.85939H11.8331C12.9767 4.85938 13.9268 4.85938 14.7018 4.92453C14.587 4.41581 14.1326 4.02218 13.5726 4.02218H4.42705C3.86703 4.02218 3.41261 4.41582 3.29778 4.92456ZM12.0776 1.93514C12.5383 1.98457 12.9023 2.32794 12.9915 2.76637H5.00826C5.09744 2.32794 5.46148 1.98457 5.92212 1.93514C5.96923 1.93008 6.03638 1.92916 6.27152 1.92916H11.7283C11.9634 1.92916 12.0305 1.93008 12.0776 1.93514ZM1.64316 6.77103C1.89675 6.49712 2.27809 6.31543 3.01907 6.21688C3.77351 6.11653 4.78345 6.11521 6.21408 6.11521H11.7859C13.2165 6.11521 14.2264 6.11653 14.9809 6.21688C15.7218 6.31543 16.1032 6.49712 16.3568 6.77103C16.6045 7.03858 16.7388 7.40268 16.744 8.09244C16.7494 8.80415 16.6187 9.74266 16.4292 11.0868L16.0751 13.5984C15.9263 14.654 15.8221 15.3839 15.6689 15.9312C15.5213 16.4583 15.3477 16.7398 15.1061 16.9399C14.8604 17.1433 14.5304 17.2739 13.9435 17.3443C13.3418 17.4165 12.5552 17.4175 11.4317 17.4175H6.5682C5.44476 17.4175 4.65817 17.4165 4.05643 17.3443C3.46953 17.2739 3.13965 17.1433 2.89393 16.9399C2.65223 16.7398 2.47862 16.4583 2.3311 15.9312C2.17791 15.3839 2.07368 14.654 1.92485 13.5984L1.57073 11.0868C1.38123 9.74266 1.25056 8.80415 1.25596 8.09244C1.2612 7.40268 1.39547 7.03858 1.64316 6.77103Z'
                            />
                        </svg>
                        Total Albums : {profile?.albumCount}
                    </span>

                    <span
                        className={
                            profile?.is_artist
                                ? 'mb-2 mr-8 inline-block rounded-[0.75rem] border-1 border-solid border-[#d3d3d3a1] px-4 py-2 text-sm font-medium'
                                : 'hidden'
                        }>
                        <svg
                            width='30'
                            height='30'
                            viewBox='0 0 18 18'
                            fill='none'
                            className='inline-block stroke-current text-white'
                            xmlns='http://www.w3.org/2000/svg'>
                            <ellipse
                                cx='6.68408'
                                cy='7.81589'
                                rx='1.26319'
                                ry='1.26316'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'></ellipse>
                            <ellipse
                                cx='10.4741'
                                cy='5.92112'
                                rx='1.26319'
                                ry='1.26316'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'></ellipse>
                            <path
                                d='M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'></path>
                            <path
                                d='M11.7373 5.92105V1.5L13.0005 2.76316'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'></path>
                        </svg>
                        Total Songs : {profile?.songCount}
                    </span>
                </div>
            </div>
            <div className={profile?.is_artist ? 'mb-6' : 'hidden'}>
                <ul className='relative right-[2rem] top-[-1.3rem] float-right inline-flex w-auto rounded-[0.75rem] bg-[#2A2929] py-2 pr-2'>
                    {ARTIST_PROFILE_NAVIGATION.map((nav, index) => {
                        const isActive = pathname.endsWith(nav.path)
                        return (
                            <li key={`nav-item-${index}`}>
                                <Link
                                    href={`/artists${nav.path}?id=${slug}`}
                                    className={
                                        `ml-2 rounded-[0.50rem] px-4 py-1 text-xs font-medium text-white transition-colors duration-300 ` +
                                        (isActive
                                            ? 'bg-gradient-to-r from-[#D344C9] to-[#2D2694]'
                                            : 'bg-[#373437] hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694]')
                                    }>
                                    {nav.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default PageCommonBg
