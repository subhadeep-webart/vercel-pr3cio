'use client'

import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Merchandise = () => {
    const artist = useSelector((state) => state.artist.data)
    console.log('Merchandise', artist)

    const merchandise = [
        {
            id: 1,
            title: 'Tshirt',
            price: 20.0,
            image: '/images/marchendise/1.webp',
            alt: 'skipBack',
            description:
                'Etiam est leo, elementum at comm at comm elementum at comodo',
            link: {
                href: '/buy/tshirt',
                label: 'Buy Now',
            },
        },
        {
            id: 2,
            title: 'Hoodie',
            price: 35.0,
            image: '/images/marchendise/2.webp',
            alt: 'hoodie',
            description: 'Warm and comfy hoodie for everyday wear',
            link: {
                href: '/buy/hoodie',
                label: 'Buy Now',
            },
        },
    ]

    return (
        <>
            <div class='grid h-[40rem] w-full grid-cols-1 items-start gap-8 overflow-y-auto overflow-x-hidden px-8 py-4 [scrollbar-width:none] sm:grid-cols-2 lg:grid-cols-3'>
                {merchandise?.map((item, index) => (
                    <div key={index} class="flowBox group relative z-0 mb-3 w-full rounded-[0.75rem] bg-[linear-gradient(35deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
                        <img
                            src='/images/marchendise/1.webp'
                            alt='skipBack'
                            loading='lazy'
                            class='mb-3 h-[15.13rem] w-full rounded-[0.75rem] object-cover'
                        />
                        <div class='flex justify-between'>
                            <h3 class='text-xl font-semibold'>{item?.title}</h3>
                            <h4 class='text-lg font-bold text-[#F844B0]'>
                                $20.00
                            </h4>
                        </div>
                        <p class='mb-6 mt-1 text-xs text-[#9D9D9D]'>
                            Etiam est leo, elementum at comm at comm elementum
                            at comodo
                        </p>
                        <Link
                            href={`/artists/merchandise/product?id=${item.id}&artist=${artist._id}`}
                            class='absolute bottom-[-1.5rem] left-0 right-0 m-auto inline-block h-[3.00rem] w-full max-w-[13.06rem] rounded-full bg-[#C6FF00] px-10 text-center text-sm leading-[3.00rem] text-black opacity-0 transition-all duration-300 group-hover:opacity-100'>
                            Buy Now
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Merchandise
