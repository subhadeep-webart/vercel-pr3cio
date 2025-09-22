const SimilarProducts = () => {
    return (
        <div className='mb-6 px-8'>
            <h3 className='text-2xl font-semibold'>Similar Products</h3>
            <div className='grid w-full grid-cols-1 items-start gap-8 py-4 sm:grid-cols-2 lg:grid-cols-3'>
                <div className="flowBox group relative z-0 mb-3 w-full rounded-[0.75rem] bg-[#676767] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
                    <img
                        src='/images/marchendise/1.webp'
                        alt='skipBack'
                        loading='lazy'
                        className='mb-3 h-[15.13rem] w-full rounded-[0.75rem] object-cover'
                    />
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-semibold'>
                            Tshirt
                        </h3>
                        <h4 className='text-lg font-bold text-[#F844B0]'>
                            $20.00
                        </h4>
                    </div>
                    <p className='mb-6 mt-1 text-xs text-[#9D9D9D]'>
                        Etiam est leo, elementum at comm at comm
                        elementum at comodo
                    </p>
                    <a
                        href='#'
                        className='absolute bottom-[-1.5rem] left-0 right-0 m-auto inline-block h-[3.00rem] w-full max-w-[13.06rem] rounded-full bg-[#C6FF00] px-10 text-center text-sm leading-[3.00rem] text-black opacity-0 transition-all duration-300 group-hover:opacity-100'>
                        Buy Now
                    </a>
                </div>
                <div className="flowBox group relative z-0 mb-3 w-full rounded-[0.75rem] bg-[#676767] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
                    <img
                        src='/images/marchendise/2.webp'
                        alt='skipBack'
                        loading='lazy'
                        className='mb-3 h-[15.13rem] w-full rounded-[0.75rem] object-cover'
                    />
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-semibold'>
                            Tshirt
                        </h3>
                        <h4 className='text-lg font-bold text-[#F844B0]'>
                            $20.00
                        </h4>
                    </div>
                    <p className='mb-6 mt-1 text-xs text-[#9D9D9D]'>
                        Etiam est leo, elementum at comm at comm
                        elementum at comodo
                    </p>
                    <a
                        href='#'
                        className='absolute bottom-[-1.5rem] left-0 right-0 m-auto inline-block h-[3.00rem] w-full max-w-[13.06rem] rounded-full bg-[#C6FF00] px-10 text-center text-sm leading-[3.00rem] text-black opacity-0 transition-all duration-300 group-hover:opacity-100'>
                        Buy Now
                    </a>
                </div>
                <div className="flowBox group relative z-0 mb-3 w-full rounded-[0.75rem] bg-[#676767] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
                    <img
                        src='/images/marchendise/3.webp'
                        alt='skipBack'
                        loading='lazy'
                        className='mb-3 h-[15.13rem] w-full rounded-[0.75rem] object-cover'
                    />
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-semibold'>
                            Tshirt
                        </h3>
                        <h4 className='text-lg font-bold text-[#F844B0]'>
                            $20.00
                        </h4>
                    </div>
                    <p className='mb-6 mt-1 text-xs text-[#9D9D9D]'>
                        Etiam est leo, elementum at comm at comm
                        elementum at comodo
                    </p>
                    <a
                        href='#'
                        className='absolute bottom-[-1.5rem] left-0 right-0 m-auto inline-block h-[3.00rem] w-full max-w-[13.06rem] rounded-full bg-[#C6FF00] px-10 text-center text-sm leading-[3.00rem] text-black opacity-0 transition-all duration-300 group-hover:opacity-100'>
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SimilarProducts;