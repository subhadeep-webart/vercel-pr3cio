import React from 'react'

const Advertisement = () => {
    return (
        <>
            <div className='mt-5 w-full pl-3 pr-3 sm:w-[calc(100%-11.63rem)]'>
                <div className='flex flex-wrap items-center justify-between rounded-[0.63rem] bg-[linear-gradient(to_right,rgba(77,65,250,1)_0%,rgba(255,38,99,1)_100%)] p-8 md:flex-nowrap'>
                    <div className='md:w-[70%] lg:grow'>
                        <h3 className='text-base font-bold text-white'>
                            Your Music Journey Starts Here
                        </h3>
                        <p className='mb-4 text-[0.94rem] text-base text-white'>
                            Create an account and unlock unlimited tracks &
                            playlists.
                        </p>
                    </div>
                    <span className='inline-block text-center'>
                        <a
                            href='#'
                            className='rounded-4xl inline-block h-[2.50rem] bg-white px-4 text-xs font-semibold leading-[2.50rem] text-black transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black lg:px-9'>
                            Sign up now
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Advertisement
