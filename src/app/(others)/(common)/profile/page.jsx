'use client'

// import { getUserProfile } from '@/services/api/user-ep'

// import { injectAuthTokenInServerSide } from '@/utils/next-server-utils'

// import UserDetails from './_components/user-details.jsx'
import { Card, CardBody, Image, Skeleton } from '@heroui/react'
import Link from 'next/link'
import {
    FaAngleRight,
    FaCalendarAlt,
    FaDollarSign,
    FaHeadphones,
    FaImage,
    FaMusic,
    FaTshirt,
    FaUser,
} from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { LiaCommentDollarSolid } from 'react-icons/lia'
import { MdSpaceDashboard } from 'react-icons/md'

import { AFTER_LOGIN_USER } from '@/utils/constant'
import useAuth from '@/hooks/useAuth'
import PageCommonBg from '@/components/artist/PageCommonBg'
import { withAuthProtection } from '@/components/auth/protected-component'
import Container from '@/components/ui/container';
import ProfileItem from "./_components/ProfileItem";

const ProfilePage = () => {
    // await injectAuthTokenInServerSide()
    // const data = await getUserProfile()
    // return <div>{data && <UserDetails data={data.user} />}</div>
    const { user, isLoading } = useAuth()
    const plan = user?.packageData
    console.log('plan', plan)

    return (
        <>
            <div class='planBox'>
                <div class="bg-size-[100%] mb-6 min-h-[30rem] bg-[url('/images/user/bg2.webp')] bg-bottom bg-no-repeat px-8 py-10">
                    <div class="relative z-0 grid auto-cols-auto grid-cols-12 justify-between rounded-[0.75rem] bg-[linear-gradient(0deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)] p-8 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[url('/images/user/bg.webp')] after:bg-cover after:bg-center after:bg-top after:bg-no-repeat after:content-[''] sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-4">
                        <span class='absolute left-8 top-[-1rem] h-[2.00rem] w-[8.00rem] rounded-[0.4rem] border-1 border-solid border-[#424242] bg-black text-center leading-[2.00rem]'>
                            {plan === null ? 'No Active Plan' : 'Current Plan'}
                        </span>
                        <div class='col-span-5'>
                            <h2 class='text-[1.75rem]'>
                                {' '}
                                {plan === null
                                    ? 'You currently have no active plans.'
                                    : '6 Months'}
                            </h2>
                            <p class='text-sm text-[#9D9D9D]'>
                                Porem ipsum dolor sit amet, consectetur
                                adipiscing amet, consectetur elit.
                            </p>
                            {plan === null ? (
                                <Link
                                    href='#'
                                    class='my-3 flex text-sm text-[#C6FF00]'>
                                    Update Now
                                    <FaAngleRight size={20} />
                                </Link>
                            ) : (
                                ''
                            )}
                        </div>
                        <div class='col-span-7'>
                            <h1 class='text-right text-[2.75rem]'>
                                $ {plan === null ? '0.00' : '10.99'}
                            </h1>
                        </div>
                    </div>
                    <div class='my-8 grid auto-cols-auto grid-cols-12 rounded-[0.63rem] bg-[linear-gradient(to_right,rgba(77,65,250,1)_0%,rgba(255,38,99,1)_100%)] p-8 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-4'>
                        <div class='md:col-span-9'>
                            <h3 class='text-lg font-bold text-white'>
                                Discover the Premium Experience
                            </h3>
                            <p class='text-[0.94rem] text-base text-white'>
                                Unlock exclusive features, content, and benefits
                                designed just for our premium members..
                            </p>
                        </div>
                        <span class='md:col-span-3 md:text-right'>
                            <a
                                href='#'
                                class='rounded-4xl inline-block h-[3rem] bg-white px-4 text-sm font-semibold leading-[3rem] text-black transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black lg:px-9'>
                                <img
                                    src='/images/user/1.webp'
                                    alt='icon'
                                    class='mr-1 inline-block'
                                />
                                Access Premium
                            </a>
                        </span>
                    </div>
                    <h2 class='mb-4 text-2xl font-semibold'>Account</h2>
                    {AFTER_LOGIN_USER.map((item, index) => (
                        <div key={index} class='w-full'>
                            <Link
                                href={`/profile${item.path}`}
                                class='group grid auto-cols-auto grid-cols-12 items-center border-b-1 border-solid border-[#393A39] p-5 transition-colors delay-300 hover:rounded-[0.4rem] hover:border-transparent hover:bg-[#484848] sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-4'>
                                <div class='col-span-10'>
                                    <span class='mr-2 inline-flex h-[2.25rem] w-[2.38rem] items-center justify-center rounded-[0.63rem] border-1 border-solid border-[#848484]'>
                                        {item.icon}
                                    </span>
                                    <strong class='relative top-[-0.4rem] inline-block text-base font-semibold leading-[0.8]'>
                                        {item.label}
                                    </strong>
                                </div>
                                <div class='col-span-2 text-right'>
                                    <i class='bi bi-chevron-right'></i>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default withAuthProtection(ProfilePage)


