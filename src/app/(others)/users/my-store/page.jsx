import ArtistCard from '@/components/common/ArtistCard'
import SongsCard from '@/components/common/SongsCard'

const MyStore = () => {
    return (
        <>
            <div className='w-full p-5'>
                <div className='grid grid-cols-12 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-4'>
                    <div className='relative col-span-12 md:col-span-8'>
                        <img
                            src='/images/store/1.webp'
                            alt='signs'
                            loading='lazy'
                            className='w-full rounded-2xl'
                        />
                        <span className='absolute bottom-6 left-[2.5rem] m-auto text-center md:bottom-10 lg:bottom-10 xl:bottom-10 2xl:bottom-10'>
                            <a
                                href='#'
                                className='rounded-4xl inline-block h-[2.38rem] bg-[#F9FF45] px-3 text-xs font-semibold leading-[2.38rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.)] hover:bg-[rgba(249,255,69,0.82)] sm:px-4 sm:leading-[2.38rem] md:h-[2.38rem] md:px-4 md:leading-[2.38rem] lg:h-[2.38rem] lg:px-4 lg:px-8 lg:leading-[2.38rem] xl:h-[2.38rem] xl:px-6 xl:leading-[2.38rem] 2xl:h-[2.38rem] 2xl:px-6 2xl:leading-[2.38rem]'>
                                Explore Your Vibe{' '}
                                <img
                                    src='/images/store/ic_round-send.webp'
                                    alt='signs'
                                    loading='lazy'
                                    className='relative top-[-0.1rem] ml-1 inline-block'
                                />
                            </a>
                        </span>
                    </div>
                    <div className='relative col-span-12 md:col-span-4'>
                        <div className="bg-size-[100%] rounded-2xl bg-[rgba(42,41,41,.34)] bg-[url('/images/store/bg3.webp')] bg-bottom bg-no-repeat px-4 py-2 text-center">
                            <h2 className='mb-3 text-left text-base font-semibold'>
                                Vibe of the Day
                            </h2>
                            <div className='grid grid-cols-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4'>
                                <div className='group'>
                                    <img
                                        src='/images/store/2.webp'
                                        alt='cover'
                                        loading='lazy'
                                        className='h-[6.69rem] w-full rounded-lg object-cover'
                                    />
                                    <div className='relative top-[-1.5rem] text-center opacity-0 transition-all delay-300 group-hover:opacity-100'>
                                        <img
                                            src='/images/artist/3.webp'
                                            alt='user'
                                            loading='lazy'
                                            className='inline-block h-[3.25rem] w-[3.25rem] rounded-[100%] border-1 border-solid border-white object-cover'
                                        />
                                        <h5 className='mt-2 text-xs font-semibold'>
                                            Lillian Sanchez
                                        </h5>
                                        <p className='text-[0.69rem] text-[#878787]'>
                                            Artist
                                        </p>
                                    </div>
                                </div>
                                <div className='group relative top-2 scale-110'>
                                    <img
                                        src='/images/store/3.webp'
                                        alt='cover'
                                        loading='lazy'
                                        className='h-[8.5rem] w-full rounded-lg object-cover'
                                    />
                                    <div className='relative top-[-1.5rem] text-center opacity-100 transition-all delay-300'>
                                        <img
                                            src='/images/artist/3.webp'
                                            alt='user'
                                            loading='lazy'
                                            className='inline-block h-[3.25rem] w-[3.25rem] rounded-[100%] border-1 border-solid border-white object-cover'
                                        />
                                        <h5 className='mt-2 text-xs font-semibold'>
                                            Lillian Sanchez
                                        </h5>
                                        <p className='text-[0.69rem] text-[#878787]'>
                                            Artist
                                        </p>
                                    </div>
                                </div>
                                <div className='group'>
                                    <img
                                        src='/images/store/4.webp'
                                        alt='cover'
                                        loading='lazy'
                                        className='h-[6.69rem] w-full rounded-lg object-cover'
                                    />
                                    <div className='relative top-[-1.5rem] text-center opacity-0 transition-all delay-300 group-hover:opacity-100'>
                                        <img
                                            src='/images/artist/3.webp'
                                            alt='user'
                                            loading='lazy'
                                            className='inline-block h-[3.25rem] w-[3.25rem] rounded-[100%] border-1 border-solid border-white object-cover'
                                        />
                                        <h5 className='mt-2 text-xs font-semibold'>
                                            Lillian Sanchez
                                        </h5>
                                        <p className='text-[0.69rem] text-[#878787]'>
                                            Artist
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-3 mt-4 w-full'>
                    <h2 className='text-base font-semibold text-white'>
                        Albums That Shaped Music History
                    </h2>
                </div>

                <div className='grid grid-cols-2 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/7.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store-album.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex text-xs text-[#F844B0]'>
                                7 Track
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/8.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store-album.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex text-xs text-[#F844B0]'>
                                7 Track
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/9.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store-album.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex text-xs text-[#F844B0]'>
                                7 Track
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/7.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store-album.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex text-xs text-[#F844B0]'>
                                7 Track
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/8.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store-album.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex text-xs text-[#F844B0]'>
                                7 Track
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-8 2xl:gap-8'>
                    <div className='col-span-12 md:col-span-8'>
                        <div className='mt-5 rounded-2xl bg-[#2A2929] px-5 py-5'>
                            <h2 className='mb-5 text-base font-semibold text-white'>
                                Most Downloaded Songs
                            </h2>
                            <div className='h-[31.5rem] w-full overflow-y-auto overflow-x-hidden [scrollbar-width:none]'>
                                <SongsCard
                                    showAmount={false}
                                    showDownload={false}
                                    showBuy={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mt-5 rounded-2xl bg-[#2A2929] px-5 py-5'>
                            <h2 className='mb-5 text-base font-semibold text-white'>
                                Featured Artists of the Month
                            </h2>
                            <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-2'>

                                {Array.from({ length: 6 }).map((_, index) => (
                        <ArtistCard key={index} maxSizeDiv="6.56rem" maxSizeImg="6.19rem"/>
                    ))}

                                {/* <div className='group mb-3 transition-colors duration-300 md:mb-0'>
                                    <a href='artist-bio.html'>
                                        <center>
                                            <div className='relative mb-2 max-h-[6.56rem] max-w-[6.56rem] rounded-full border-1 border-[#585858] p-2 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                                <img
                                                    src='/images/artist/5.webp'
                                                    alt='skipBack'
                                                    loading='lazy'
                                                    className='max-h-[6.19rem] w-full max-w-[6.19rem] rounded-full'
                                                />
                                            </div>
                                            <h3 className='text-sm font-semibold'>
                                                Maecenas biben
                                            </h3>
                                            <small className='text-xs text-[#9D9D9D]'>
                                                Artist
                                            </small>
                                        </center>
                                    </a>
                                </div>
                                <div className='group mb-3 transition-colors duration-300 md:mb-0'>
                                    <a href='artist-bio.html'>
                                        <center>
                                            <div className='relative mb-2 max-h-[6.56rem] max-w-[6.56rem] rounded-full border-1 border-[#585858] p-2 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                                <img
                                                    src='/images/artist/6.webp'
                                                    alt='skipBack'
                                                    loading='lazy'
                                                    className='max-h-[6.19rem] w-full max-w-[6.19rem] rounded-full'
                                                />
                                            </div>
                                            <h3 className='text-sm font-semibold'>
                                                Maecenas biben
                                            </h3>
                                            <small className='text-xs text-[#9D9D9D]'>
                                                Artist
                                            </small>
                                        </center>
                                    </a>
                                </div>
                                <div className='group mb-3 transition-colors duration-300 md:mb-0'>
                                    <a href='artist-bio.html'>
                                        <center>
                                            <div className='relative mb-2 max-h-[6.56rem] max-w-[6.56rem] rounded-full border-1 border-[#585858] p-2 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                                <img
                                                    src='/images/artist/7.webp'
                                                    alt='skipBack'
                                                    loading='lazy'
                                                    className='max-h-[6.19rem] w-full max-w-[6.19rem] rounded-full'
                                                />
                                            </div>
                                            <h3 className='text-sm font-semibold'>
                                                Maecenas biben
                                            </h3>
                                            <small className='text-xs text-[#9D9D9D]'>
                                                Artist
                                            </small>
                                        </center>
                                    </a>
                                </div>
                                <div className='group mb-3 transition-colors duration-300 md:mb-0'>
                                    <a href='artist-bio.html'>
                                        <center>
                                            <div className='relative mb-2 max-h-[6.56rem] max-w-[6.56rem] rounded-full border-1 border-[#585858] p-2 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                                <img
                                                    src='/images/artist/5.webp'
                                                    alt='skipBack'
                                                    loading='lazy'
                                                    className='max-h-[6.19rem] w-full max-w-[6.19rem] rounded-full'
                                                />
                                            </div>
                                            <h3 className='text-sm font-semibold'>
                                                Maecenas biben
                                            </h3>
                                            <small className='text-xs text-[#9D9D9D]'>
                                                Artist
                                            </small>
                                        </center>
                                    </a>
                                </div>
                                <div className='group mb-3 transition-colors duration-300 md:mb-0'>
                                    <a href='artist-bio.html'>
                                        <center>
                                            <div className='relative mb-2 max-h-[6.56rem] max-w-[6.56rem] rounded-full border-1 border-[#585858] p-2 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                                <img
                                                    src='/images/artist/5.webp'
                                                    alt='skipBack'
                                                    loading='lazy'
                                                    className='max-h-[6.19rem] w-full max-w-[6.19rem] rounded-full'
                                                />
                                            </div>
                                            <h3 className='text-sm font-semibold'>
                                                Maecenas biben
                                            </h3>
                                            <small className='text-xs text-[#9D9D9D]'>
                                                Artist
                                            </small>
                                        </center>
                                    </a>
                                </div> */}

                                {/* <div className='group mb-3 transition-colors duration-300 md:mb-0'>
                                    <a href='artist-bio.html'>
                                        <center>
                                            <div className='relative mb-2 max-h-[6.56rem] max-w-[6.56rem] rounded-full border-1 border-[#585858] p-2 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                                <img
                                                    src='/images/artist/6.webp'
                                                    alt='skipBack'
                                                    loading='lazy'
                                                    className='max-h-[6.19rem] w-full max-w-[6.19rem] rounded-full'
                                                />
                                            </div>
                                            <h3 className='text-sm font-semibold'>
                                                Maecenas biben
                                            </h3>
                                            <small className='text-xs text-[#9D9D9D]'>
                                                Artist
                                            </small>
                                        </center>
                                    </a>
                                </div>  */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10 grid grid-cols-12 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-6'>
                    <div className='relative col-span-12 md:col-span-8'>
                        <img
                            src='/images/store/new-release.webp'
                            alt='signs'
                            loading='lazy'
                            className='w-full rounded-2xl'
                        />
                        <span className='absolute bottom-6 left-0 right-0 m-auto text-center md:bottom-10 lg:bottom-10 xl:bottom-10 2xl:bottom-10'>
                            <a
                                href='#'
                                className='rounded-4xl inline-block h-[2.38rem] bg-[#F9FF45] px-6 text-xs font-semibold leading-[2.38rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.)] hover:bg-[rgba(249,255,69,0.82)] sm:leading-[2.38rem] md:h-[2.38rem] md:leading-[2.38rem] lg:h-[2.38rem] lg:leading-[2.38rem] xl:h-[2.38rem] xl:leading-[2.38rem] 2xl:h-[2.38rem] 2xl:leading-[2.38rem]'>
                                Explore Now{' '}
                                <img
                                    src='/images/store/ic_round-send.webp'
                                    alt='signs'
                                    loading='lazy'
                                    className='relative top-[-0.1rem] ml-1 inline-block'
                                />
                            </a>
                        </span>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className="overflow-hidden rounded-2xl bg-[#2A2929] bg-[url('/images/store/glow.webp')] bg-cover bg-center bg-no-repeat py-5">
                            <h2 className='mb-5 px-5 text-base font-semibold text-white'>
                                Albums of the Week
                            </h2>
                            <div className='w-xl relative left-[-31.111%] grid grid-cols-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4'>
                                <img
                                    src='/images/songs/8.webp'
                                    alt='skipBack'
                                    loading='lazy'
                                    className='h-[13.13rem] w-full rounded-[0.75rem] object-cover'
                                />
                                <img
                                    src='/images/songs/9.webp'
                                    alt='skipBack'
                                    loading='lazy'
                                    className='h-[13.13rem] w-full rounded-[0.75rem] object-cover'
                                />
                                <img
                                    src='/images/songs/10.webp'
                                    alt='skipBack'
                                    loading='lazy'
                                    className='h-[13.13rem] w-full rounded-[0.75rem] object-cover'
                                />
                            </div>
                            <center>
                                <span className='my-4.5 inline-block text-center'>
                                    <a
                                        href='#'
                                        className='rounded-4xl inline-block h-[2.38rem] bg-[#F9FF45] px-4 text-xs font-semibold leading-[2.38rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.)] hover:bg-[rgba(249,255,69,0.82)] sm:leading-[2.38rem] md:h-[2.38rem] md:leading-[2.38rem] lg:h-[2.38rem] lg:leading-[2.38rem] xl:h-[2.38rem] xl:leading-[2.38rem] 2xl:h-[2.38rem] 2xl:leading-[2.38rem]'>
                                        Dive In
                                        <img
                                            src='/images/store/ic_round-send.webp'
                                            alt='signs'
                                            loading='lazy'
                                            className='relative top-[-0.1rem] ml-1 inline-block'
                                        />
                                    </a>
                                </span>
                            </center>
                        </div>
                    </div>
                </div>

                <div className='mb-3 mt-4 w-full'>
                    <h2 className='text-base font-semibold text-white'>
                        Songs That Defined an Era
                    </h2>
                </div>
                <div className='grid grid-cols-2 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/7.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/8.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/9.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/7.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/8.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='mb-3 mt-4 w-full'>
                    <h2 className='text-base font-semibold text-white'>
                        Most Popular Songs
                    </h2>
                </div>
                <div className='grid grid-cols-2 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/7.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/8.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/9.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/7.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <div className="z-1 after:content[''] relative mb-2 after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[0.9rem] after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                            <img
                                src='/images/songs/8.webp'
                                alt='skipBack'
                                loading='lazy'
                                className='w-full rounded-[0.75rem]'
                            />

                            <div className='absolute bottom-[1rem] z-10 flex w-full items-end justify-between px-4 opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <h6 className='text-sm font-semibold'>
                                    $ 1.30
                                </h6>
                                <a
                                    href='#'
                                    className='group inline-block inline-flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z'
                                            fill='#191919'></path>
                                        <rect
                                            x='5.33301'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                        <rect
                                            x='12.1904'
                                            y='14.8491'
                                            width='0.00773998'
                                            height='0.00795653'
                                            stroke='#191919'
                                            stroke-width='2'
                                            stroke-linejoin='round'></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5>
                            <a
                                href='store.html'
                                className='text-sm font-semibold'>
                                Maecenas biben
                            </a>
                        </h5>
                        <p className='text-xs text-[#9D9D9D]'>John Doe</p>
                        <div className='mt-2 flex items-center justify-between'>
                            <span className='group flex rounded-full border-1 border-solid border-[#484848] bg-[#2A2929] px-2 py-1 text-xs font-semibold text-white'>
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
                                1.5K
                            </span>
                            <ul className='flex'>
                                <li className='ml-2'>
                                    <a
                                        href='#'
                                        className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                                        <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='fill-current text-[#4D41FA]'>
                                            <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z'></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mb-3 mt-4 w-full'>
                    <h2 className='text-base font-semibold text-white'>
                        Top 10 Artist
                    </h2>
                </div>
                <div className='grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ArtistCard key={index} maxSizeDiv="9.38rem" maxSizeImg="9.38rem"/>
                    ))}

                    {/* <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <a href='artist-bio.html'>
                            <center>
                                <div className='relative mb-2 max-h-[9.38rem] max-w-[9.38rem] rounded-full border-1 border-[#585858] p-3 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                    <img
                                        src='/images/artist/5.webp'
                                        alt='skipBack'
                                        loading='lazy'
                                        className='max-h-[9.38rem] w-full max-w-[9.38rem] rounded-full'
                                    />

                                    <span className='absolute bottom-[1rem] right-0 flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                        <svg
                                            width='20'
                                            height='18'
                                            viewBox='0 0 20 18'
                                            fill='none'
                                            className='stroke-current text-black'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z'
                                                stroke-width='2'></path>
                                        </svg>
                                    </span>
                                </div>
                                <h3 className='text-sm font-semibold'>
                                    Maecenas biben
                                </h3>
                                <small className='text-xs text-[#9D9D9D]'>
                                    Artist
                                </small>
                            </center>
                        </a>
                    </div> */}
                    {/* <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <a href='artist-bio.html'>
                            <center>
                                <div className='relative mb-2 max-h-[9.38rem] max-w-[9.38rem] rounded-full border-1 border-[#585858] p-3 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                    <img
                                        src='/images/artist/6.webp'
                                        alt='skipBack'
                                        loading='lazy'
                                        className='max-h-[9.38rem] w-full max-w-[9.38rem] rounded-full'
                                    />

                                    <span className='absolute bottom-[1rem] right-0 flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                        <svg
                                            width='20'
                                            height='18'
                                            viewBox='0 0 20 18'
                                            fill='none'
                                            className='stroke-current text-black'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z'
                                                stroke-width='2'></path>
                                        </svg>
                                    </span>
                                </div>
                                <h3 className='text-sm font-semibold'>
                                    Maecenas biben
                                </h3>
                                <small className='text-xs text-[#9D9D9D]'>
                                    Artist
                                </small>
                            </center>
                        </a>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <a href='artist-bio.html'>
                            <center>
                                <div className='relative mb-2 max-h-[9.38rem] max-w-[9.38rem] rounded-full border-1 border-[#585858] p-3 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                    <img
                                        src='/images/artist/7.webp'
                                        alt='skipBack'
                                        loading='lazy'
                                        className='max-h-[9.38rem] w-full max-w-[9.38rem] rounded-full'
                                    />

                                    <span className='absolute bottom-[1rem] right-0 flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                        <svg
                                            width='20'
                                            height='18'
                                            viewBox='0 0 20 18'
                                            fill='none'
                                            className='stroke-current text-black'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z'
                                                stroke-width='2'></path>
                                        </svg>
                                    </span>
                                </div>
                                <h3 className='text-sm font-semibold'>
                                    Maecenas biben
                                </h3>
                                <small className='text-xs text-[#9D9D9D]'>
                                    Artist
                                </small>
                            </center>
                        </a>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <a href='artist-bio.html'>
                            <center>
                                <div className='relative mb-2 max-h-[9.38rem] max-w-[9.38rem] rounded-full border-1 border-[#585858] p-3 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                    <img
                                        src='/images/artist/5.webp'
                                        alt='skipBack'
                                        loading='lazy'
                                        className='max-h-[9.38rem] w-full max-w-[9.38rem] rounded-full'
                                    />

                                    <span className='absolute bottom-[1rem] right-0 flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                        <svg
                                            width='20'
                                            height='18'
                                            viewBox='0 0 20 18'
                                            fill='none'
                                            className='stroke-current text-black'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z'
                                                stroke-width='2'></path>
                                        </svg>
                                    </span>
                                </div>
                                <h3 className='text-sm font-semibold'>
                                    Maecenas biben
                                </h3>
                                <small className='text-xs text-[#9D9D9D]'>
                                    Artist
                                </small>
                            </center>
                        </a>
                    </div>
                    <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                        <a href='artist-bio.html'>
                            <center>
                                <div className='relative mb-2 max-h-[9.38rem] max-w-[9.38rem] rounded-full border-1 border-[#585858] p-3 transition-colors duration-300 group-hover:border-[#D344C9]'>
                                    <img
                                        src='/images/artist/6.webp'
                                        alt='skipBack'
                                        loading='lazy'
                                        className='max-h-[9.38rem] w-full max-w-[9.38rem] rounded-full'
                                    />

                                    <span className='absolute bottom-[1rem] right-0 flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                        <svg
                                            width='20'
                                            height='18'
                                            viewBox='0 0 20 18'
                                            fill='none'
                                            className='stroke-current text-black'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z'
                                                stroke-width='2'></path>
                                        </svg>
                                    </span>
                                </div>
                                <h3 className='text-sm font-semibold'>
                                    Maecenas biben
                                </h3>
                                <small className='text-xs text-[#9D9D9D]'>
                                    Artist
                                </small>
                            </center>
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default MyStore;
