'use client'

import { useEffect, useMemo, useState } from 'react'
import { getArtistDashboardItemList } from '@/services/api/artist-api'
import { useQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'

import SkeletonRow from './SleletonRow'

const SongsList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const { data, isFetching, status } = useQuery({
        queryKey: [queryConstants.artistDashboardItemList, { type: 'song' }],
        queryFn: () =>
            getArtistDashboardItemList({ page: 1, limit: 3, type: 'song' }),
        placeholderData: (previousData) => previousData,
    })

    useEffect(() => {
        if (data?.total) {
            setTotalPages(Math.ceil(data.total / 10))
        }
    }, [data])

    const songs = useMemo(() => {
        return data?.data ?? []
    }, [data])
    console.log('songs list', songs)

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
        <>
            <div className='rounded-2xl bg-[#2A2929] p-4'>
                <h3 className='mb-4 text-[0.938rem] font-medium'>Song</h3>
                <div className='overflow-x-auto'>
                    <table className='w-full text-left text-sm'>
                        <thead className='rounded-[0.688rem] border-0 bg-[#535353]'>
                            <tr className='text-[0.688rem] text-[#FFFFFF]'>
                                <th className='py-2'>Song</th>
                                <th className='py-2'>Download</th>
                                <th className='py-2'>Earning</th>
                            </tr>
                        </thead>
                        <tbody className='text-[0.75rem]'>
                            {status === 'pending' &&
                                [...Array(2)].map((_, i) => (
                                    <SkeletonRow key={i} />
                                ))}

                            {status === 'success' && songs?.length > 0 ? (
                                songs?.map((song) => (
                                    <tr
                                        key={song?._id}
                                        className="w-full bg-[url('/img/artist-dashboard/border.png')] bg-bottom bg-no-repeat">
                                        <td className='py-2'>{song?.title}</td>
                                        <td className='py-2'>
                                            {song?.download}
                                        </td>
                                        <td className='py-2'>
                                            ${song?.earning}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p className='text-center text-sm text-white'>
                                    No song available
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
        </>
    )
}

export default SongsList
