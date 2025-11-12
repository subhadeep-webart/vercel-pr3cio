'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import queryConstants from '@/constants/query-constants'
import { useQuery } from '@tanstack/react-query'
import { getProductsDetails } from '@/services/api/product-api'
import SizeCard from './_components/SizeCard'
import SimilarProducts from './_components/SimilarProducts'
import ProductGallery from './_components/ProductGallery'
import { productPurchase } from '@/services/api/packages-api'
import toast from 'react-hot-toast'

const images = [
    '/images/marchendise/big.webp',
    '/images/marchendise/1.webp',
    '/images/marchendise/2.webp',
    '/images/marchendise/3.webp',
]

const sizes = ['M', 'L', 'XL']

const ProductDetails = () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product_id") || "";

    const {
        data: productDetails,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: [queryConstants.productDetailById, productId],
        queryFn: () => getProductsDetails(productId),
        enabled: !!productId,
    })

      console.log("P[roduct Details", productDetails);

    const { description = "", price = 0, name = "", variant = [],imageUrl=[] } = productDetails?.data ?? {};

    const [mainImage, setMainImage] = useState(images[0])
    const [selectedSize, setSelectedSize] = useState('M')

  

     const router = useRouter();
        const handelBuyProduct = (productId) => {
            console.log("product Id coming from products merchandise====>", productId);
            productPurchase(productId)
                .then((res) => {
                    console.log("res",res)
                    // router.push(res.paymentUrl)
                })
                .catch((error) => {
                    toast.error(error.message)
                })
        }

    return (
        <>
            <div className='flex w-full flex-wrap items-start justify-end pl-6 pr-10'>
                <div className='w-full rounded-[0.75rem] bg-[#333232]'>
                    <div className='mb-6'>

                        <div
                            className="py-4 px-8 w-full grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-8  overflow-y-auto overflow-x-hidden h-[40rem] [scrollbar-width:none] items-start">
                            <ProductGallery imageUrl={imageUrl}/>

                            <div className=''>
                                <h2 className='text-base md:text-2xl font-bold line-clamp-2'>
                                    {name}
                                </h2>
                                <p className='mb-6 mt-3 text-xs md:text-sm font-medium text-[#A8A8A8] line-clamp-5'>
                                    {description}
                                </p>
                                <hr className='mb-3 opacity-20' />
                                <h6 className='my-1 text-sm font-bold text-white'>
                                    Price
                                </h6>
                                <h3 className='my-1 text-base md:text-xl font-bold text-white'>
                                    ${price}
                                </h3>
                                <div className='mt-6 flex'>
                                    <div className='w-full sm:w-2/3'>
                                        <h6 className='text-xs font-bold'>
                                            Select size
                                        </h6>
                                        <ul className='flex'>
                                            {variant.map((variantDetails) => (
                                                <li
                                                    className='mx-1 my-2'
                                                    key={variantDetails?._id}>
                                                    <SizeCard size={variantDetails?.variantValue} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <span className='mt-5 block'>
                                    <button onClick={()=>handelBuyProduct(productDetails?.data?._id)} disabled
                                        className='block rounded-full border-1 border-[#C6FF00] bg-[#C6FF00] px-8 py-3 text-center text-sm text-black transition-colors duration-300 hover:bg-[#C6FF00]'>
                                        Buy Now
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <SimilarProducts />
                </div>
            </div >
        </>
    )
}

export default ProductDetails
