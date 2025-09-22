'use client'

import React, { useState } from 'react'
import { getArtistAllProduct } from '@/services/api/artist-api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import queryConstants from '@/constants/query-constants'
import useAuth from '@/hooks/useAuth'
import DeleteProductModal from './DeleteProductModal'

const MerchendiseCard = () => {
    const [openDelete, setOpenDelete] = useState(false)
    const [productId,setPRoductId]=useState(false)
    const { user } = useAuth()
    console.log('user', user)

    const { data, status } = useQuery({
        queryKey: [queryConstants.artistProductListing, true],
        queryFn: ({ pageParam = 1 }) =>
            getArtistAllProduct({
                page: pageParam,
                limit: 5,
                userId: user?._id,
            }),
    })

    console.log('data', data)

    const handleDelete = (id) => {
        setPRoductId(id);
        setOpenDelete(true);
    };

    return (
        <>
            {data?.data?.length > 0 &&
                data?.data?.map((product) => (
                    <div
                        key={product?._id}
                        className="flowBox group relative z-0 mb-3 h-[380px] w-full rounded-[0.75rem] bg-[linear-gradient(35deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
                        <img
                            src={product?.imageUrl?.[0]}
                            alt='skipBack'
                            loading='lazy'
                            className='mb-3 h-[15.13rem] w-full rounded-[0.75rem] object-cover'
                        />
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold'>
                                {product?.name}
                            </h3>
                            <h4 className='text-lg font-bold text-[#F844B0]'>
                                ${product?.price}
                            </h4>
                        </div>
                        <p className='mb-6 mt-1 line-clamp-3 text-xs text-[#9D9D9D]'>
                            {product?.description}
                        </p>
                        <div className='absolute bottom-[-1.5rem] left-0 right-0 m-auto w-full max-w-[13.06rem] text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                            <Link
                                href={`/artists/edit-merchendise/${product._id}`}
                                className='mr-1 inline-flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-[#fff] text-sm text-black hover:bg-[#FF2663]'>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 22 22'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='stroke-current text-[#000]'>
                                    <path
                                        d='M2.93955 15.7677L1.78613 20.3814L6.39979 19.2279L20.0077 5.62006C20.7734 4.85432 20.7734 3.6128 20.0077 2.84706L19.3204 2.15981C18.5547 1.39407 17.3132 1.39407 16.5474 2.15981L2.93955 15.7677Z'
                                        stroke-width='1.9608'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                    <path
                                        d='M14.4751 4.23331L17.9353 7.69355'
                                        stroke-width='1.9608'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                </svg>
                            </Link>

                            <button
                                onClick={()=> handleDelete(product?._id)}
                                className='inline-flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-[#fff] text-sm text-black hover:bg-[#FF2663]'>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 17 19'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='stroke-current text-[#000]'>
                                    <path
                                        d='M3.35742 5.28595V15.2859C3.35742 16.3905 4.25285 17.2859 5.35742 17.2859H11.6431C12.7477 17.2859 13.6431 16.3905 13.6431 15.2859V5.28595'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                    <path
                                        d='M1.64355 5.28595H15.3578'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                    <path
                                        d='M4.21484 5.28551L5.92913 1.85693H11.072L12.7863 5.28551'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

                {openDelete && (
                    <DeleteProductModal
                    openDelete={openDelete}
                    setOpenDelete={setOpenDelete}
                    productId={productId}
                    />
                )}
        </>
    )
}

export default MerchendiseCard;
