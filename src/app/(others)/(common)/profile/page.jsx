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

            <Container>
                <Card className='relative w-full space-y-10 rounded-[36px] bg-[#2A2F2C] p-12 text-white'>
                    <div className='absolute flex h-[80px] w-[100px] flex-col items-center justify-center'>
                        <div
                            className={`h-[65px] w-[65px] rounded-full border-2 border-dotted p-1 ${user?.is_artist ? 'border-[#8727aa]' : 'border-[#6156e2]'} `}>
                            <span
                                className={`inline-flex h-[53px] w-[53px] items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${user.is_artist ? 'bg-pink-100 text-[#8727aa]' : 'bg-blue-100 text-[#6156e2]'} `}>
                                {user.is_artist ? (
                                    <FaMusic className='text-3xl' />
                                ) : (
                                    <FaHeadphones className='text-3xl' />
                                )}
                            </span>
                        </div>
                        <div
                            className={`text-xl font-bold ${user.is_artist ? 'text-[#8727aa]' : 'text-[#6156e2]'}`}>
                            {user.is_artist ? 'Artist' : 'Listener'}
                        </div>
                    </div>
                    <CardBody className='space-y-10 p-0'>
                        <Card className='mt-[150px] w-full space-y-10 overflow-visible rounded-[36px] border border-[#39413C] bg-[#1F2421] p-3 text-white shadow-none'>
                            <CardBody className='relative space-y-10 overflow-visible p-0'>
                                <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <div className='flex h-[282px] w-[282px] items-center justify-center rounded-full bg-[#353A37]'>
                                        <div className='flex h-[236px] w-[236px] items-center justify-center rounded-full bg-[#444A46]'>
                                            <div className='relative h-[196px] w-[196px] overflow-hidden rounded-full'>
                                                {user ? (
                                                    <Image
                                                        src={user.avatar}
                                                        alt={
                                                            user.name ||
                                                            'User avatar'
                                                        }
                                                        className='h-full w-full object-cover'
                                                        classNames={{
                                                            wrapper:
                                                                'relative w-full h-full aspect-square',
                                                        }}
                                                    />
                                                ) : (
                                                    <Skeleton className='aspect-square h-full w-full rounded-full bg-gray-700' />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='!mt-[170px] flex flex-col items-center gap-4'>
                                    {user ? (
                                        <div className='text-center'>
                                            <h2 className='text-xl font-bold'>
                                                {user?.name}
                                            </h2>
                                            <p className='text-sm text-gray-300'>
                                                {user?.user_name}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className='text-center'>
                                            <Skeleton className='mx-auto h-6 w-40 rounded' />
                                            <Skeleton className='mx-auto mt-1 h-4 w-32 rounded' />
                                        </div>
                                    )}
                                </div>

                                <div className='mt-6 space-y-2 pb-6'>
                                    <Link href='/profile/biography'>
                                        <ProfileItem
                                            icon={<FaUser />}
                                            label='Biography'
                                        />
                                    </Link>
                                    {user.is_artist ? (
                                        <>
                                            <Link href='/publish-song'>
                                                <ProfileItem
                                                    icon={<FaMusic />}
                                                    label='Music upload'
                                                />
                                            </Link>
                                            {/* <Link href='/artists/dashboard'>
                                            <ProfileItem
                                                icon={<MdSpaceDashboard />}
                                                label='Dashboard'
                                            />
                                        </Link> */}
                                            <Link href='/merchandise'>
                                                <ProfileItem
                                                    icon={<FaTshirt />}
                                                    label='Merchandise'
                                                    // devStatus='Development is in process'
                                                />
                                            </Link>
                                            <div
                                            //  href='/profile/pictures'
                                            >
                                                <ProfileItem
                                                    icon={<FaImage />}
                                                    label='Pictures upload'
                                                    devStatus='Development is in process'
                                                />
                                            </div>

                                            <div
                                            // href='/profile/events'
                                            >
                                                <ProfileItem
                                                    icon={<FaCalendarAlt />}
                                                    label='Create events'
                                                    devStatus='Development is in process'
                                                />
                                            </div>
                                            <div
                                            // href='/profile/earning'
                                            >
                                                <ProfileItem
                                                    icon={<FaDollarSign />}
                                                    label='Earning'
                                                    noBorder
                                                    devStatus='Development is in process'
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* <Link href='/user/dashboard'>
                                            <ProfileItem
                                                icon={<MdSpaceDashboard />}
                                                label='Dashboard'
                                            />
                                        </Link> */}

                                            <Link href='/my-plans'>
                                                <ProfileItem
                                                    icon={
                                                        <LiaCommentDollarSolid />
                                                    }
                                                    label='My Plans'
                                                />
                                            </Link>
                                            <Link href='/payment-history'>
                                                <ProfileItem
                                                    icon={
                                                        <LiaCommentDollarSolid />
                                                    }
                                                    label='Payment History'
                                                />
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default withAuthProtection(ProfilePage)


