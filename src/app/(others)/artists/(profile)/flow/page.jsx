import React from 'react'

const Flow = () => {
    return (
        <>
            <div className='grid w-full grid-cols-1 gap-8 px-8 py-4 sm:grid-cols-2 lg:grid-cols-3'>
                <div class="flowBox relative z-0 w-full overflow-hidden rounded-[0.75rem] bg-[linear-gradient(35deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
                    <div class='flex justify-between'>
                        <a class='userPart flex items-center' href='#'>
                            <span class='mr-3 w-[2.33rem] flex-[0_0_2.33rem]'>
                                <img
                                    src='./src/images/artist/user-small.webp'
                                    alt='skipBack'
                                    loading='lazy'
                                    class='block h-[2.33rem] w-[2.33rem] rounded-full'
                                />
                            </span>
                            <div>
                                <h6 class='text-[0.625rem] font-bold'>
                                    Justin Bieber
                                    <span>
                                        <img
                                            src='./src/images/artist/check.webp'
                                            alt='skipBack'
                                            loading='lazy'
                                            class='ml-2 inline-block'
                                        />
                                    </span>
                                </h6>
                                <p class='text-[0.5rem] text-[#909291]'>
                                    Just now
                                </p>
                            </div>
                        </a>
                        <a class='text-xl text-[#F84486]' href='#'>
                            <i class='bi bi-instagram'></i>
                        </a>
                    </div>
                    <div class='flex flex-col justify-between'>
                        <img
                            src='./src/images/artist/11.webp'
                            alt='image'
                            loading='lazy'
                            class='mt-3 block h-[9.25rem] w-full rounded-[0.75rem] object-cover'
                        />
                        <div class='mt-3'>
                            <h6>
                                <a
                                    href='#'
                                    class='text-xs font-bold text-white'>
                                    Join me tomorrow at boston
                                </a>
                            </h6>
                            <p class='my-2 mb-0 text-[0.5rem] text-[#909291]'>
                                Dapibus, nulla quis gravida pharetra, massa est
                                ultrices velit, sit amet faucibus ex sapien
                                <br />
                                <br />
                                Quis felis. Etiam gravida ligula vitae est
                                congue, at malesuada leo lacinia. Donec pulvinar
                                pretium nulla.
                                <br />
                                <a
                                    href='#'
                                    class='text-[0.5rem] text-[#6156E2]'>
                                    Read more
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class='mt-1 flex justify-between'>
                        <ul class='flex items-center'>
                            <li>
                                <a href='#'>
                                    <img
                                        src='./src/images/icons/1.webp'
                                        alt='icon'
                                        loading='lazy'
                                        class='h-[1.13rem] w-[1.13rem] rounded-full'
                                    />
                                </a>
                            </li>
                            <li class='ml-[-0.5rem]'>
                                <a href='#'>
                                    <img
                                        src='./src/images/icons/2.webp'
                                        alt='icon'
                                        loading='lazy'
                                        class='h-[1.13rem] w-[1.13rem] rounded-full'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    class='ml-1 text-[0.53rem] text-white'>
                                    James Deen and 12K others
                                </a>
                            </li>
                        </ul>
                        <ul class='flex items-center'>
                            <li>
                                <a
                                    href='#'
                                    class='ml-2 text-[0.53rem] text-white'>
                                    <img
                                        src='./src/images/icons/3.webp'
                                        alt='icon'
                                        loading='lazy'
                                        class='mr-1 inline-block'
                                    />{' '}
                                    500
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    class='ml-2 text-[0.53rem] text-white'>
                                    <img
                                        src='./src/images/icons/4.webp'
                                        alt='icon'
                                        loading='lazy'
                                        class='mr-1 inline-block'
                                    />{' '}
                                    120
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flow
