'use client'

import { useEffect, useState } from 'react'
import { Button, Card, CardBody, Image, Skeleton } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { getAllProduct } from '@/services/api/product-api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';

// Fetch function for the products API
const fetchProducts = async () => {
    const resp = await getAllProduct()
    if (resp.status !== "success") {
        throw new Error('Failed to fetch products')
    }
    return resp.data
}

const MerchandiseTab = () => {
    const router = useRouter()

    const { data: items, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })



    if (isError) {
        toast.error(`Failed to fetch items: ${error.message}`)
    }

    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {(isLoading ? Array.from({ length: 9 }) : items).map(
                (item, index) => (
                    <Card key={index} className='bg-white shadow-md'>
                        <CardBody className='flex flex-col items-center space-y-3 p-4'>
                            {isLoading ? (
                                <>
                                    <>
                                        <Skeleton className='aspect-square w-full rounded-[21px] bg-[#999999]' />
                                        <Skeleton className='h-4 w-3/4 rounded bg-[#999999]' />
                                        <Skeleton className='h-3 w-4/5 rounded bg-[#999999]' />
                                        <Skeleton className='h-4 w-1/3 rounded bg-[#999999]' />
                                    </>
                                </>
                            ) : (
                                <>
                                    <div
                                        key={index}
                                        className='relative aspect-square w-full overflow-hidden rounded-[21px]'>
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.name}
                                            classNames={{
                                                wrapper:
                                                    'relative aspect-square w-full h-full bg-[#999999]',
                                            }}
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <h3 className='text-sm font-semibold text-black'>
                                            {item.name}
                                        </h3>
                                        <span className='text-sm font-bold text-black'>
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>

                                    <p className='text-xs text-gray-600'>
                                        {item.description}
                                    </p>

                                    <div className='flex justify-between w-full'>
                                        <Button className='bg-primary text-lg'>Buy Now</Button>

                                    </div>
                                </>
                            )}
                        </CardBody>
                    </Card>
                )
            )}
        </div>
    )
}

export default MerchandiseTab
