'use client'

import React, { useEffect, useState } from 'react'
import { getPlanHistory } from '@/services/api/packages-api'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

import { withAuthProtection } from '@/components/auth/protected-component'
import PaymentHistoryCard from './_components/PaymentHistoryCard'

const Page = () => {
    const [history, setHistory] = useState([])

    const getAllPlanHistory = async () => {
        const resp = await getPlanHistory()
        if (resp.status === 'success') {
            setHistory(resp.payments) // Assuming the response data has the history in a "payments" property
        }
    }

    useEffect(() => {
        getAllPlanHistory()
    }, [])

    console.log("Historey========>",history);

    return (
        <>
            <div class='planBox'>
                <div class="bg-size-[100%] mb-6 min-h-[30rem] bg-[url('/images/user/bg2.webp')] bg-bottom bg-no-repeat px-8 py-10">
                    <div class='mb-5 flex justify-between'>
                        <h2 class='flex text-[1.56rem] font-semibold'>
                            <Link
                                href='/profile'
                                class='mr-2 inline-block h-[2.25rem] w-[2.38rem] rounded-[0.75rem] border-1 border-solid border-[#848484] text-center text-[1rem] leading-[2.25rem]'>
                                <IoIosArrowBack size={30} />
                            </Link>{' '}
                            Order History
                        </h2>
                        <ul class='flex'>
                            <li>
                                <a
                                    href='#'
                                    class='flex text-sm font-medium text-[#9D9D9D] transition-colors duration-300'>
                                    Last 30 Days
                                    <span class='ml-2 inline-block'>
                                        <svg
                                            width='22'
                                            height='22'
                                            viewBox='0 0 22 22'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M19.4788 10.9999H8.15343M4.15584 10.9999H2.52051M4.15584 10.9999C4.15584 10.4699 4.36638 9.96167 4.74114 9.58691C5.1159 9.21214 5.62418 9.00161 6.15417 9.00161C6.68417 9.00161 7.19245 9.21214 7.56721 9.58691C7.94197 9.96167 8.15251 10.4699 8.15251 10.9999C8.15251 11.5299 7.94197 12.0382 7.56721 12.413C7.19245 12.7877 6.68417 12.9983 6.15417 12.9983C5.62418 12.9983 5.1159 12.7877 4.74114 12.413C4.36638 12.0382 4.15584 11.5299 4.15584 10.9999ZM19.4788 17.0564H14.2098M14.2098 17.0564C14.2098 17.5865 13.9988 18.0953 13.624 18.4702C13.2491 18.845 12.7407 19.0556 12.2106 19.0556C11.6806 19.0556 11.1723 18.8442 10.7976 18.4694C10.4228 18.0946 10.2123 17.5863 10.2123 17.0564M14.2098 17.0564C14.2098 16.5262 13.9988 16.0183 13.624 15.6435C13.2491 15.2686 12.7407 15.058 12.2106 15.058C11.6806 15.058 11.1723 15.2686 10.7976 15.6433C10.4228 16.0181 10.2123 16.5264 10.2123 17.0564M10.2123 17.0564H2.52051M19.4788 4.94352H16.6326M12.635 4.94352H2.52051M12.635 4.94352C12.635 4.41353 12.8455 3.90525 13.2203 3.53049C13.5951 3.15573 14.1034 2.94519 14.6333 2.94519C14.8958 2.94519 15.1556 2.99688 15.3981 3.0973C15.6405 3.19773 15.8608 3.34493 16.0464 3.53049C16.2319 3.71605 16.3791 3.93635 16.4796 4.17879C16.58 4.42124 16.6317 4.6811 16.6317 4.94352C16.6317 5.20595 16.58 5.4658 16.4796 5.70825C16.3791 5.9507 16.2319 6.171 16.0464 6.35656C15.8608 6.54212 15.6405 6.68932 15.3981 6.78974C15.1556 6.89017 14.8958 6.94186 14.6333 6.94186C14.1034 6.94186 13.5951 6.73132 13.2203 6.35656C12.8455 5.9818 12.635 5.47351 12.635 4.94352Z'
                                                stroke='#9D9D9D'
                                                stroke-width='1.2'
                                                stroke-miterlimit='10'
                                                stroke-linecap='round'></path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {history?.length > 0
                        ? history.map((item, index) => (
                            <PaymentHistoryCard paymentDetails={item} key={item?._id}/>
                        ))
                        : ''}
                </div>
            </div>

            {/* <div className='p-8'>
                <h1 className='mb-6 text-2xl font-semibold'>Payment History</h1>
                <div className='overflow-x-auto rounded-lg bg-white shadow-md'>
                    <table className='min-w-full table-auto'>
                        <thead className='bg-gray-600'>
                            <tr>
                                <th className='px-4 py-2 text-left text-lg font-semibold text-gray-100'>
                                    Service No
                                </th>
                                <th className='px-4 py-2 text-left text-lg font-semibold text-gray-100'>
                                    Package Name
                                </th>
                                <th className='px-4 py-2 text-left text-lg font-semibold text-gray-100'>
                                    Payment Status
                                </th>
                                <th className='px-4 py-2 text-left text-lg font-semibold text-gray-100'>
                                    Created At
                                </th>
                                <th className='px-4 py-2 text-left text-lg font-semibold text-gray-100'>
                                    Updated At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.length > 0 ? (
                                history.map((item) => (
                                    <tr
                                        key={item._id}
                                        className='border-t bg-gray-200 text-gray-600 hover:bg-gray-50'>
                                        <td className='border-b border-gray-400 px-4 py-3 text-lg'>
                                            {item._id}
                                        </td>
                                        <td className='border-b border-gray-400 px-4 py-3 text-lg'>
                                            {item.type}
                                        </td>
                                        <td className='border-b border-gray-400 px-4 py-3 text-lg'>
                                            {item.paymentStatus}
                                        </td>
                                        <td className='border-b border-gray-400 px-4 py-3 text-lg'>
                                            {new Date(
                                                item.created_at
                                            ).toLocaleString()}
                                        </td>
                                        <td className='border-b border-gray-400 px-4 py-3 text-lg'>
                                            {new Date(
                                                item.updated_at
                                            ).toLocaleString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className='bg-gray-100 py-5 text-center text-gray-600'>
                                        No data found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div> */}
        </>
    )
}

export default withAuthProtection(Page)
