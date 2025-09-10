"use client"

import Link from "next/link";

const TrackDetails = ({ trackDetails }) => {
    const { artwork, title, artist } = trackDetails;
    return (
        <>
            <span className='w-[3.25rem] flex-[0_0_3.25rem]'>
                <Link href='#'>
                    <img
                        src={artwork}
                        alt='pr3cio-logo'
                        loading='lazy'
                        className='w-full rounded-[0.56rem]'
                    />
                </Link>
            </span>
            <div className='songInfo sm:hidden md:hidden lg:block lg:px-2 xl:px-3 2xl:px-5'>
                <p className='m-0'>
                    <strong className='font-semibold text-white md:text-xs lg:text-xs xl:text-sm 2xl:text-sm'>
                        {title}
                    </strong>
                </p>
                <p className='font-normal text-[#A8A8A8] md:text-xs lg:text-xs xl:text-[0.75rem] 2xl:text-[0.75rem]'>
                    By {artist}
                </p>
                {/* <span className='inline-block'>
                    <a
                        href='#'
                        className='text-[#C6FF00] md:text-xs lg:text-xs xl:text-[0.75rem] 2xl:text-[0.75rem]'>
                        Follow
                    </a>
                </span> */}
            </div>
        </>
    )
}

export default TrackDetails;