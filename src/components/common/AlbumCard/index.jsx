"use client";

import Image from 'next/image'
import Link from 'next/link'

const AlbumCard = ({ albumDetails }) => {
    return (
        <Link className='mb-3 md:mb-5 cursor-pointer' href={`/albums/album-details/${albumDetails?._id}`}>
            <div className="relative z-0 w-full h-40 overflow-hidden rounded-2xl after:absolute after:right-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:content-['']">
                {/* <div href="/albums/album-details"> */}
                    <img
                        src={albumDetails?.thumbnail}
                        alt="Artist"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                {/* </div> */}

                {/* <Image
                    src={thumbnail}
                    alt='signs'
                    // height={200}
                    // width={200}
                    fill
                    className='block w-full rounded-2xl absolute'
                /> */}
                {/* <span className='playNow z-1 absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border-1 border-solid border-white bg-[rgba(255,255,255,0.3)] text-center leading-[2rem] lg:h-[2.76rem] lg:w-[2.76rem] lg:leading-[2.76rem] xl:h-[3.76rem] xl:w-[3.76rem] xl:leading-[3.76rem] 2xl:h-[3.76rem] 2xl:w-[3.76rem] 2xl:leading-[3.76rem]'>
                    <img
                        src='/images/player-icon/play-big.webp'
                        alt='play'
                        loading='lazy'
                        className='relative inline-block w-[0.5rem] sm:w-auto'
                    />
                </span> */}
                {/* <span className='wishList z-1 absolute right-3 top-3 flex h-[1.88rem] w-[1.88rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center leading-[1.88rem] transition-colors hover:bg-[rgba(200,255,0,0.8)]'>
                    <img
                        src='/images/icons/union.webp'
                        alt='play'
                        loading='lazy'
                        className='relative inline-block'
                    />
                </span> */}
                {/* <span className='wishList z-1 top-13 absolute right-3 flex h-[1.88rem] w-[1.88rem] cursor-pointer items-center justify-center rounded-full bg-white text-center leading-[1.88rem] transition-colors hover:bg-[#ddd]'>
                    <img
                        src='/images/icons/cart.webp'
                        alt='play'
                        loading='lazy'
                        className='relative inline-block'
                    />
                </span> */}
            </div>
            <h3>
                <p
                    className='mt-3 block text-sm font-semibold text-white'>
                    {albumDetails?.user?.name ?? ''}
                </p>
            </h3>
            <p className='w-full truncate text-xs text-white'>{albumDetails?.name}</p>
            <h3 className='mt-1 block text-sm font-semibold text-white'>
                ${albumDetails?.amount}
            </h3>
        </Link>
    )
}

export default AlbumCard