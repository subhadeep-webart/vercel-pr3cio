// 'use client'

// import { useEffect, useMemo, useRef } from 'react'
// import { getArtistDashboardItemList } from '@/services/api/artist-api'
// import { useInfiniteQuery } from '@tanstack/react-query'

// import queryConstants from '@/constants/query-constants'

// const MerchandiseList=() =>{
//     //     //       const { data, status } = useQuery({
//     //     //         queryKey: [queryConstants.artistDashboardItemList, { type: 'product' }],
//     //     //         queryFn: () => getArtistDashboardItemList({ page: 1, limit: 10 , type:"product" }),
//     //     //     })

//     //     //     const products=data?.data ?? [];
//     //     //   console.log("products list",products)

//     //     const {
//     //         data,
//     //         hasNextPage,
//     //         fetchNextPage,
//     //         status,
//     //         refetch,
//     //         isFetchingNextPage,
//     //     } = useInfiniteQuery({
//     //         queryKey: [queryConstants.artistDashboardItemList, { type: 'product' }],
//     //         queryFn: ({ pageParam = 1 }) =>
//     //             getArtistDashboardItemList({
//     //                 page: pageParam,
//     //                 limit: 3,
//     //                 type: 'product',
//     //             }),
//     //         initialPageParam: 1,
//     //         getNextPageParam: (lastPage, allPages) => {
//     //             const totalFetched = allPages.reduce(
//     //                 (acc, page) => acc + (page?.data?.length ?? 0),
//     //                 0
//     //             )
//     //             return lastPage?.total > totalFetched
//     //                 ? allPages.length + 1
//     //                 : undefined
//     //         },
//     //     })

//     //     console.log('status', status)

//     //     const products = useMemo(() => {
//     //         return data?.pages.flatMap((page) => page?.data) ?? []
//     //     }, [data])

//     //     const { observerRef } = useInfiniteScroll({
//     //         callback: fetchNextPage,
//     //     })

//     const topRef = useRef(null)
//     const bottomRef = useRef(null)

//     const {
//         data,
//         fetchNextPage,
//         fetchPreviousPage,
//         hasNextPage,
//         hasPreviousPage,
//         isFetching,
//         isFetchingNextPage,
//         isFetchingPreviousPage,
//         status,
//     } = useInfiniteQuery({
//         queryKey: [queryConstants.artistDashboardItemList, { type: 'product' }],
//         queryFn: ({ pageParam = 1 }) =>
//             getArtistDashboardItemList({
//                 page: pageParam,
//                 limit: 10,
//                 type: 'product',
//             }),
//         initialPageParam: 1,
//         getNextPageParam: (lastPage, allPages) => {
//             const totalFetched = allPages.reduce(
//                 (acc, page) => acc + (page?.data?.length ?? 0),
//                 0
//             )
//             return lastPage?.total > totalFetched
//                 ? allPages.length + 1
//                 : undefined
//         },
//         getPreviousPageParam: (firstPage, allPages) => {
//             const firstPageNum = allPages?.[0]?.page ?? 1
//             return firstPageNum > 1 ? firstPageNum - 1 : undefined
//         },
//     })

//     const products = useMemo(
//         () => data?.pages.flatMap((page) => page?.data ?? []) ?? [],
//         [data]
//     )

//     useEffect(() => {
//         const el = bottomRef.current
//         if (!el) return
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (
//                     entries[0].isIntersecting &&
//                     hasNextPage &&
//                     !isFetchingNextPage
//                 ) {
//                     fetchNextPage()
//                 }
//             },
//             { threshold: 1 }
//         )
//         observer.observe(el)
//         return () => observer.disconnect()
//     }, [bottomRef, hasNextPage, isFetchingNextPage])

//     useEffect(() => {
//         const el = topRef.current
//         if (!el) return
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (
//                     entries[0].isIntersecting &&
//                     hasPreviousPage &&
//                     !isFetchingPreviousPage
//                 ) {
//                     fetchPreviousPage()
//                 }
//             },
//             { threshold: 1 }
//         )
//         observer.observe(el)
//         return () => observer.disconnect()
//     }, [topRef, hasPreviousPage, isFetchingPreviousPage])

//     const SkeletonRow = () => (
//         <tr className='animate-pulse'>
//             <td className='py-2'>
//                 <div className='h-4 w-24 rounded bg-gray-600' />
//             </td>
//             <td className='py-2'>
//                 <div className='h-4 w-16 rounded bg-gray-600' />
//             </td>
//             <td className='py-2'>
//                 <div className='h-4 w-12 rounded bg-gray-600' />
//             </td>
//         </tr>
//     )

//     return (
//         <div className='h-full rounded-2xl bg-[#2A2929] p-4 text-white'>
//             <h3 className='mb-4 text-[0.938rem] font-medium'>Merchandise</h3>

//             <div className='overflow-x-auto'>
//                 <table className='w-full text-left text-sm'>
//                     <thead className='rounded-[0.688rem] border-0 bg-[#535353]'>
//                         <tr className='text-[0.688rem] text-[#FFFFFF]'>
//                             <th className='py-2'>Product</th>
//                             <th className='py-2'>Download</th>
//                             <th className='py-2'>Earning</th>
//                         </tr>
//                     </thead>

//                     <tbody className='text-[0.75rem]'>

//                         <tr ref={topRef}>
//                             <td colSpan={3}></td>
//                         </tr>

//                         {status === 'loading' &&
//                             [...Array(4)].map((_, i) => (
//                                 <SkeletonRow key={i} />
//                             ))}

//                         {status === 'success' &&
//                             products.map((product) => (
//                                 <tr
//                                     key={product._id}
//                                     className="w-full bg-[url('/img/artist-dashboard/border.png')] bg-bottom bg-no-repeat">
//                                     <td className='py-2'>{product?.name}</td>
//                                     <td className='py-2'>
//                                         {product?.download}
//                                     </td>
//                                     <td className='py-2'>
//                                         ${product?.earning}
//                                     </td>
//                                 </tr>
//                             ))}

//                         {(isFetchingNextPage || isFetchingPreviousPage) &&
//                             [...Array(2)].map((_, i) => (
//                                 <SkeletonRow key={`loading-${i}`} />
//                             ))}

//                         <tr ref={bottomRef}>
//                             <td colSpan={3}></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default MerchandiseList;

'use client'

import { useEffect, useMemo, useState } from 'react'
import { getArtistDashboardItemList } from '@/services/api/artist-api'
import { useQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'

import SkeletonRow from './SleletonRow'

const MerchandiseList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const { data, isFetching, status } = useQuery({
        queryKey: [
            queryConstants.artistDashboardItemList,
            { type: 'product', page: currentPage },
        ],
        queryFn: () =>
            getArtistDashboardItemList({
                page: currentPage,
                limit: 10,
                type: 'product',
            }),
        placeholderData: (previousData) => previousData,
    })

    useEffect(() => {
        if (data?.total) {
            setTotalPages(Math.ceil(data.total / 10))
        }
    }, [data])

    const products = useMemo(() => {
        return data?.data ?? []
    }, [data])

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1)
        }
    }

    return (
        <div className='h-full rounded-2xl bg-[#2A2929] p-4 text-white'>
            <h3 className='mb-4 text-[0.938rem] font-medium'>Merchandise</h3>

            <div className='overflow-x-auto'>
                <table className='w-full text-left text-sm'>
                    <thead className='rounded-[0.688rem] border-0 bg-[#535353]'>
                        <tr className='text-[0.688rem] text-[#FFFFFF]'>
                            <th className='py-2'>Product</th>
                            <th className='py-2'>Download</th>
                            <th className='py-2'>Earning</th>
                        </tr>
                    </thead>

                    <tbody className='text-[0.75rem]'>
                        {status === 'pending' &&
                            [...Array(10)].map((_, i) => (
                                <SkeletonRow key={i} />
                            ))}

                        {status === 'success' && products?.length > 0 ? (
                            products?.map((product) => (
                                <tr
                                    key={product?._id}
                                    className="w-full bg-[url('/img/artist-dashboard/border.png')] bg-bottom bg-no-repeat">
                                    <td className='py-2'>{product?.name}</td>
                                    <td className='py-2'>
                                        {product?.download}
                                    </td>
                                    <td className='py-2'>
                                        ${product?.earning}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p className='text-center text-sm text-white'>
                                No product available
                            </p>
                        )}
                    </tbody>
                </table>
            </div>

            <div className='mt-4 flex items-center justify-between'>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1 || isFetching}
                    className='rounded bg-[#535353] px-2 disabled:opacity-50'>
                    &lt;
                </button>

                {/* <span className='text-xs text-white'>
                    {currentPage} / {totalPages}
                </span> */}

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages || isFetching}
                    className='rounded bg-[#535353] px-2 disabled:opacity-50'>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default MerchandiseList
