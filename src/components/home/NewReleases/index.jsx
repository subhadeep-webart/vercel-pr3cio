import { Button } from '@heroui/react'

const NewReleases = () => {
    return (
        <>
            <h1 className='mb-2 text-base font-semibold text-white sm:mb-5'>
                New releases
            </h1>
            <div className='flex flex-col gap-4 sm:gap-4 md:flex-row md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-8'>
                <div className='relative flex-1'>
                    <img
                        src='/images/home/1.webp'
                        alt='signs'
                        loading='lazy'
                        className='w-full rounded-2xl'
                    />
                    <span className='absolute bottom-6 left-0 right-0 m-auto text-center md:bottom-6 lg:bottom-6 xl:bottom-6 2xl:bottom-12'>
                        <a
                            href='#'
                            className='inline-block h-[1.8rem] rounded-[27px] bg-[#F9FF45] px-3 text-xs font-semibold leading-[1.8rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.)] hover:bg-[rgba(249,255,69,0.82)] sm:px-4 sm:leading-[2rem] md:h-[2rem] md:px-4 md:leading-[2rem] lg:h-[2rem] lg:px-4 lg:px-8 lg:leading-[2rem] xl:h-[2rem] xl:px-4 xl:leading-[2rem] 2xl:h-[2.5rem] 2xl:px-8 2xl:leading-[2.5rem]'>
                            Open play list
                        </a>
                    </span>
                </div>
                <div className='relative flex-1'>
                    <img
                        src='/images/home/2.webp'
                        alt='signs'
                        loading='lazy'
                        className='w-full rounded-2xl'
                    />
                    <span className='absolute bottom-6 left-6 text-center sm:left-6 md:bottom-6 md:left-6 lg:bottom-6 xl:bottom-6 xl:left-6 2xl:bottom-12 2xl:left-10'>
                        <a
                            href='#'
                            className='inline-block h-[1.8rem] rounded-[27px] bg-[#F9FF45] px-3 text-xs font-semibold leading-[1.8rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.82)] sm:px-4 sm:leading-[2rem] md:h-[2rem] md:px-4 md:leading-[2rem] lg:h-[2rem] lg:px-4 lg:leading-[2rem] xl:h-[2rem] xl:px-4 xl:leading-[2rem] 2xl:px-8 2xl:leading-[2.5rem]'>
                            Open play list
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default NewReleases
