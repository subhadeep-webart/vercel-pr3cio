'use client';

import BuySongButton from "@/app/(others)/artists/my-library/song/_components/BuySongButton"

const MusicPlayerSongsTable = () => {
    return (
        <>
            {/* <div className='mt-3 space-y-2'>
                <div className='grid cursor-pointer grid-cols-6 rounded-md px-2 py-2 text-sm text-gray-200 transition hover:bg-white/5'>
                    <div className='col-span-1'>1</div>
                    <div className='col-span-2 flex items-center gap-3'>
                        <img
                            src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
                            alt='song'
                            className='h-10 w-10 rounded-md'
                        />
                        <div>
                            <p className='font-medium'>Sahiba</p>
                            <p className='text-xs text-gray-400'>
                                Aditya Rikhari
                            </p>
                        </div>
                    </div>
                    <div className='col-span-1'>Sahiba</div>
                    <div className='col-span-1'>23 hours ago</div>
                    <div className='col-span-1 text-right'>3:10</div>
                </div>
            </div> */}

                <div
                className={`mb-3 flex w-full rounded-[0.75rem] px-4 py-3 transition-colors duration-300 hover:bg-[#2c2c2c] 
                md:flex-row md:items-center md:px-5`}>
         
                <div className='flex !w-40 items-start sm:items-center'>
                    <span className='mr-3 h-[2.81rem] w-[2rem] flex-shrink-0 md:h-[3.81rem] md:w-[3rem]'>
                        <img
                            src= '/images/album/4.webp'
                            alt='artist'
                            className='h-full w-full rounded-[0.5rem] object-cover'
                        />
                    </span>
                    <div className='flex-1'>
                        <h6 className='line-clamp-1 text-sm font-semibold text-white md:text-lg'>
                            Title
                        </h6>
                        <p className='line-clamp-1 text-xs font-medium text-[#CFCFCF]'>
                           Artist
                        </p>
                    </div>
                </div>

             
                <div className='mt-3 flex w-full flex-col md:mt-0 md:flex md:flex-row md:items-center md:justify-between md:ml-4'>
                 
                    <div className='flex w-full flex-wrap justify-end gap-2 md:ml-4 md:w-auto md:flex-nowrap md:items-center md:gap-4'>
                        <span className='group flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-sm font-semibold text-white'>
                            <svg
                                width='17'
                                height='15'
                                viewBox='0 0 17 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='mr-1 fill-current text-[#F844B0]'>
                                <path d='M14.7851 8.88297L10.0869 13.7009C9.02938 14.7853 7.28605 14.7853 6.22852 13.7009L1.5303 8.88297C-0.299813 7.00625 -0.299813 3.96347 1.5303 2.08674C3.36041 0.210018 6.3276 0.210018 8.15771 2.08674C9.98783 0.210018 12.955 0.210018 14.7851 2.08674C16.6152 3.96347 16.6152 7.00625 14.7851 8.88297Z'></path>
                            </svg>
                         Likes
                        </span>
                        <span className='group flex items-center rounded-full bg-[#2A2929] px-3 py-1 text-xs font-semibold text-white'>
                            <svg
                                width='14'
                                height='15'
                                viewBox='0 0 14 15'
                                fill='none'
                                className='mr-1 stroke-current text-[#4D41FA]'
                                xmlns='http://www.w3.org/2000/svg'>
                                <ellipse
                                    cx='6.68408'
                                    cy='7.81589'
                                    rx='1.26319'
                                    ry='1.26316'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <ellipse
                                    cx='10.4741'
                                    cy='5.92112'
                                    rx='1.26319'
                                    ry='1.26316'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M11.7373 5.92105V1.5L13.0005 2.76316'
                                    strokeWidth='1.2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            Play Count
                        </span>
                        <span className='text-sm font-medium text-white'>
                            $0
                        </span>
                    </div>

          
                    <div className='mt-2 flex w-full items-center justify-end gap-2 md:mt-0 md:w-auto md:gap-4'>
                        <span className='text-sm font-medium text-white sm:text-base'>
                         Duration
                        </span>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <button
                                  
                                    className='group flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-[#4D41FA]'>
                                   
                                        <svg
                                            width='12'
                                            height='12'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                
                                </button>
                            </li>

                          
                                <li className='w-[2.63rem] flex-[0_0_2.63rem]'>
                                    <BuySongButton songId={10} />
                                </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayerSongsTable
