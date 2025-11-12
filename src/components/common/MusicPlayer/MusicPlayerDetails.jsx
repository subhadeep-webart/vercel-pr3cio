'use client'

const MusicPlayerDetails = () => {
    return (
        <>
            <div className='relative w-full rounded-2xl'>
                <div className='relative h-[400px] overflow-hidden rounded-t-2xl'>
                    <img
                        src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
                        alt='Artist'
                        className='absolute inset-0 h-full w-full object-cover'
                    />

                    <div className='absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60' />

                    <div className='absolute left-0 top-0 z-10 flex flex-col items-start justify-start p-6 text-left text-white'>
                        <h2 className='text-lg font-bold drop-shadow-md'>
                            Maan Panu
                        </h2>
                    </div>

                    <div className='absolute bottom-0 left-0 right-0 z-10 p-5'>
                        <h3 className='truncate text-base font-semibold text-white'>
                            I’m Done. – I-Popstar: Vol.
                        </h3>
                        <p className='text-sm text-gray-300'>Maan Panu</p>
                    </div>
                </div>

                <div className='absolute left-0 right-0 top-[380px] h-20 rounded-b-2xl bg-gradient-to-b from-transparent to-[#1b1b1b]' />

                <div className='relative z-20 rounded-b-2xl px-5 pb-6 pt-8 text-white'>
                    <div className='group relative mb-3 cursor-pointer md:mb-5'>
                        <div className='relative h-40 w-full overflow-hidden rounded-2xl'>
                            <img
                                src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
                                alt='Artist'
                                loading='lazy'
                                className='h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105'
                            />
                            <div className='absolute left-3 top-3 z-10 font-bold text-white'>
                                About the artist
                            </div>
                            <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        </div>

                        <div className='flex flex-col space-y-4 p-4'>
                            <h3 className='text-xl font-semibold'>Maan Panu</h3>
                            <div className='flex justify-between'>
                                <p className='text-sm text-gray-400'>
                                    3,857,596 monthly listeners
                                </p>
                                <button className='rounded-full border border-white px-2 py-1 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105'>
                                    Follow
                                </button>
                            </div>
                            <p className='text-sm text-gray-400'>
                                you'll know me soon! ❤️
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayerDetails;
