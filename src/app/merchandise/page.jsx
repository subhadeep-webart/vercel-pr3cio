'use client'

import { useEffect, useState } from 'react'
import { Button, Card, CardBody, Image, Skeleton } from '@heroui/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteProductById, getAllOwnProduct } from '@/services/api/product-api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { withAuthProtection } from '@/components/auth/protected-component'

// Fetch function for the products API
const fetchProducts = async () => {
    const resp = await getAllOwnProduct()
    if (resp.products.status !== "success") {
        throw new Error('Failed to fetch products')
    }
    return resp.products.data
}


const Merchandise = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const { data: items, isLoading, isError, error } = useQuery({
        queryKey: ['ownProducts'],
        queryFn: fetchProducts,
    })

    const handelProductDelete = async (id) => {
        try {
            const resp = await deleteProductById(id)
            if (resp.status === "success") {
                toast.success("Product deleted successfully.")
                queryClient.invalidateQueries(['ownProducts'])
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    if (isError) {
        toast.error(`Failed to fetch items: ${error.message}`)
    }

    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <h1 className='text-primary pb-6 text-4xl font-bold'>Product List</h1>
                <Button onClick={() => router.push("/merchandise/add-merchandise")} color='primary'>Add Product</Button>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {(isLoading ? Array.from({ length: 9 }) : items)?.map(
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
                                            <Button className='bg-primary' onClick={() => router.push(`/update-merchandise/${item._id}`)}>Edit</Button>
                                            <Button onClick={() => handelProductDelete(item._id)}>Delete</Button>
                                        </div>
                                    </>
                                )}
                            </CardBody>
                        </Card>
                    )
                )}
            </div>
        </div>
    )
}

export default withAuthProtection(Merchandise)
