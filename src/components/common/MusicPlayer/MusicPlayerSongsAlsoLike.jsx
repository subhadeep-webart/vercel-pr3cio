'use client';

const MusicPlayerSongsAlsoLike = () => {
    return (
        <>
            <div className='group relative mb-3 cursor-pointer md:mb-5'>
                <div className='relative h-40 w-full overflow-hidden rounded-2xl'>
                    <img
                        src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
                        alt='Artist'
                        loading='lazy'
                        className='h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105'
                    />

                    <button className='absolute bottom-3 right-3 z-10 hidden rounded-full  h-[2.63rem] w-[2.63rem] cursor-pointer bg-[#C6FF00] p-3 shadow-lg transition-all duration-300 hover:scale-105 group-hover:block group-hover:opacity-100'>
                         <svg
                                width='15'
                                height='15'
                                viewBox='0 0 10 10'
                                fill='none'
                                className='fill-current text-black'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z' />
                            </svg>
                    </button>

                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='mt-3 block text-sm font-semibold text-white'>
                            User
                        </p>
                        <p className='w-full truncate text-xs text-gray-400'>
                            Album
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayerSongsAlsoLike
