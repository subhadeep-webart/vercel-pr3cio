'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const Music = () => {
    const artist = useSelector((state) => state.artist.data)
    console.log('songs', artist.songs)

    return (
        <>
            <div class='w-full px-4 py-4'>
                {artist?.songs.map((item, index) => (
                    <div key={index} class='mb-3 flex w-full flex-wrap items-center justify-between rounded-[0.75rem] px-5 py-2 transition-colors duration-300 hover:bg-[#484848]'>
                        <div class='flex items-center'>
                            <span class='mr-4 w-[2.81rem] flex-[0_0_2.81rem]'>
                                <img
                                    src={item?.artwork}
                                    alt='artist'
                                    class='w-full rounded-[0.5rem]'
                                />
                            </span>
                            <div>
                                <h6 class='text-lg font-semibold text-white'>
                                    {item?.title}
                                </h6>
                                <p class='text-sm font-medium text-[#CFCFCF]'>
                                    {item?.artist}
                                </p>
                            </div>
                            <div class='flex items-center px-4'>
                                <span class='group mx-2 flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-sm font-semibold text-white'>
                                    <svg
                                        width='17'
                                        height='15'
                                        viewBox='0 0 17 15'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        class='mr-1 fill-current text-[#F844B0]'>
                                        <path d='M14.7851 8.88297L10.0869 13.7009C9.02938 14.7853 7.28605 14.7853 6.22852 13.7009L1.5303 8.88297C-0.299813 7.00625 -0.299813 3.96347 1.5303 2.08674C3.36041 0.210018 6.3276 0.210018 8.15771 2.08674C9.98783 0.210018 12.955 0.210018 14.7851 2.08674C16.6152 3.96347 16.6152 7.00625 14.7851 8.88297Z'></path>
                                    </svg>
                                    1K
                                </span>
                                <span class='group mx-2 flex items-center rounded-full bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
                                    <svg
                                        width='14'
                                        height='15'
                                        viewBox='0 0 14 15'
                                        fill='none'
                                        class='mr-1 stroke-current text-[#4D41FA]'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <ellipse
                                            cx='6.68408'
                                            cy='7.81589'
                                            rx='1.26319'
                                            ry='1.26316'
                                            stroke-width='1.2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'></ellipse>
                                        <ellipse
                                            cx='10.4741'
                                            cy='5.92112'
                                            rx='1.26319'
                                            ry='1.26316'
                                            stroke-width='1.2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'></ellipse>
                                        <path
                                            d='M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069'
                                            stroke-width='1.2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'></path>
                                        <path
                                            d='M11.7373 5.92105V1.5L13.0005 2.76316'
                                            stroke-width='1.2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'></path>
                                    </svg>
                                    {item?.play_count}
                                </span>
                                <span class='mx-2 text-base'>
                                    $ {item?.amount}
                                </span>
                            </div>
                        </div>
                        <div class='flex items-center'>
                            <span class='mx-2 text-lg'>5:14</span>
                            <ul class='mx-3 flex min-w-[8rem] items-center'>
                                <li class='ml-3'>
                                    <a
                                        href='#'
                                        class='group flex h-[2.00rem] w-[2.00rem] items-center justify-center rounded-full bg-[#191919]'>
                                        <svg
                                            width='15'
                                            height='15'
                                            viewBox='0 0 9 12'
                                            fill='none'
                                            class='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                                                stroke-width='2'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'></path>
                                            <path
                                                d='M1.04883 10.4878H7.48785'
                                                stroke-width='2'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'></path>
                                        </svg>
                                    </a>
                                </li>
                                <li class='ml-3'>
                                    <a
                                        href='#'
                                        class='group flex h-[2.00rem] w-[2.00rem] items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-[#4D41FA]'>
                                        <svg
                                            width='12'
                                            height='12'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            class='fill-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                                <li class='ml-6'>
                                    <a
                                        href='#'
                                        class='grou flex h-[2.63rem] w-[2.63rem] items-center justify-center rounded-full bg-[#C6FF00] transition-colors duration-300'>
                                        <svg
                                            width='18'
                                            height='19'
                                            viewBox='0 0 18 19'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            class='fill-current stroke-current text-black transition-colors duration-300 group-hover:text-white'>
                                            <path d='M1 0.5C0.447715 0.5 0 0.947715 0 1.5C0 2.05228 0.447715 2.5 1 2.5V1.5V0.5ZM2.77778 1.5L3.77499 1.42538C3.73594 0.903501 3.30111 0.5 2.77778 0.5V1.5ZM17 4.24127L17.9942 4.34873C18.0247 4.06646 17.9338 3.78451 17.7441 3.57324C17.5545 3.36196 17.2839 3.24127 17 3.24127V4.24127ZM2.98291 4.24127L1.98569 4.31589H1.98569L2.98291 4.24127ZM14.4483 12.5872L14.3751 11.5899L14.4483 12.5872ZM16.2903 10.8075L15.2961 10.7L16.2903 10.8075ZM3.51763 11.3872L2.52042 11.4618L3.51763 11.3872ZM1 1.5V2.5H2.77778V1.5V0.5H1V1.5ZM5.65852 13.2326L5.73175 14.2299L14.5215 13.5845L14.4483 12.5872L14.3751 11.5899L5.58529 12.2353L5.65852 13.2326ZM16.2903 10.8075L17.2845 10.9149L17.9942 4.34873L17 4.24127L16.0058 4.13381L15.2961 10.7L16.2903 10.8075ZM2.77778 1.5L1.78057 1.57462L1.98569 4.31589L2.98291 4.24127L3.98012 4.16665L3.77499 1.42538L2.77778 1.5ZM2.98291 4.24127L1.98569 4.31589L2.52042 11.4618L3.51763 11.3872L4.51484 11.3126L3.98012 4.16665L2.98291 4.24127ZM17 4.24127V3.24127H2.98291V4.24127V5.24127H17V4.24127ZM14.4483 12.5872L14.5215 13.5845C15.9663 13.4784 17.1288 12.3552 17.2845 10.9149L16.2903 10.8075L15.2961 10.7C15.2442 11.1801 14.8567 11.5545 14.3751 11.5899L14.4483 12.5872ZM5.65852 13.2326L5.58529 12.2353C5.03503 12.2757 4.55602 11.8628 4.51484 11.3126L3.51763 11.3872L2.52042 11.4618C2.64393 13.1124 4.08097 14.3511 5.73175 14.2299L5.65852 13.2326Z'></path>
                                            <rect
                                                x='5.88916'
                                                y='17.4907'
                                                width='0.00902998'
                                                height='0.00928262'
                                                stroke-width='2'
                                                stroke-linejoin='round'></rect>
                                            <rect
                                                x='13.8892'
                                                y='17.4907'
                                                width='0.00902998'
                                                height='0.00928262'
                                                stroke-width='2'
                                                stroke-linejoin='round'></rect>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Music
