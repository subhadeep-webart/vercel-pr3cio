import React from 'react'

const ProductDetails = () => {
    return (
        <>
            <div class='grid h-[40rem] w-full grid-cols-1 items-start gap-8 overflow-y-auto overflow-x-hidden px-8 py-4 [scrollbar-width:none] sm:grid-cols-1 lg:grid-cols-2'>
                <div class='slideermain'>
                    <div class='mb-5 flex items-center justify-center rounded-[0.75rem] border-1 border-solid border-[#676767] bg-[#282828] p-8'>
                        <img
                            src='./src/images/marchendise/big.webp'
                            alt='skipBack'
                            loading='lazy'
                            class='h-[24.31rem] rounded-full object-cover'
                        />
                    </div>
                    <div class='grid w-full grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4'>
                        <div class='flex items-center justify-center rounded-[0.75rem] border-1 border-solid border-[#676767] bg-[#282828] p-2'>
                            <img
                                src='./src/images/marchendise/big.webp'
                                alt='skipBack'
                                loading='lazy'
                                class='h-[4.67rem] rounded-full object-cover'
                            />
                        </div>
                        <div class='flex items-center justify-center rounded-[0.75rem] border-1 border-solid border-[#676767] bg-[#282828] p-2'>
                            <img
                                src='./src/images/marchendise/big.webp'
                                alt='skipBack'
                                loading='lazy'
                                class='h-[4.67rem] rounded-full object-cover'
                            />
                        </div>
                        <div class='flex items-center justify-center rounded-[0.75rem] border-1 border-solid border-[#676767] bg-[#282828] p-2'>
                            <img
                                src='./src/images/marchendise/big.webp'
                                alt='skipBack'
                                loading='lazy'
                                class='h-[4.67rem] rounded-full object-cover'
                            />
                        </div>
                        <div class='flex items-center justify-center rounded-[0.75rem] border-1 border-solid border-[#676767] bg-[#282828] p-2'>
                            <img
                                src='./src/images/marchendise/big.webp'
                                alt='skipBack'
                                loading='lazy'
                                class='h-[4.67rem] rounded-full object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div class=''>
                    <h2 class='text-2xl font-bold'>
                        Phasellus vel lectus dui. Nam sed efficitur felis
                    </h2>
                    <p class='mb-6 mt-3 text-sm font-medium text-[#A8A8A8]'>
                        Cras arcu mi, placerat sed risus ac, viverra
                        pellentesque urna. Phasellus efficitur non massa vel
                        fermentum. Phasellus vel lectus dui.
                    </p>
                    <hr class='mb-3 opacity-20' />
                    <h6 class='my-1 text-sm font-bold text-white'>Price</h6>
                    <h3 class='my-1 text-xl font-bold text-white'>$250.00</h3>
                    <div class='mt-6 flex'>
                        <div class='w-full sm:w-2/3'>
                            <h6 class='text-xs font-bold'>Select size</h6>
                            <ul class='flex'>
                                <li class='mx-1 my-2'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options'
                                            checked=''
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block w-[2.80rem] cursor-pointer rounded-[0.3rem] border-1 border-[#5A5B58] py-2 text-center text-sm text-[#9D9D9D] peer-checked:border-[#fff] peer-checked:text-[#fff]'>
                                            M
                                        </div>
                                    </label>
                                </li>
                                <li class='mx-1 my-2'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options'
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block w-[2.80rem] cursor-pointer rounded-[0.3rem] border-1 border-[#5A5B58] py-2 text-center text-sm text-[#9D9D9D] peer-checked:border-[#fff] peer-checked:text-[#fff]'>
                                            L
                                        </div>
                                    </label>
                                </li>
                                <li class='mx-1 my-2'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options'
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block w-[2.80rem] cursor-pointer rounded-[0.3rem] border-1 border-[#5A5B58] py-2 text-center text-sm text-[#9D9D9D] peer-checked:border-[#fff] peer-checked:text-[#fff]'>
                                            XL
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class='w-full sm:w-2/3'>
                            <h6 class='text-xs font-bold'>Color</h6>
                            <ul class='flex'>
                                <li class='my-2 mr-3'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options1'
                                            checked=''
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block flex h-[2rem] w-[2rem] cursor-pointer flex-col items-center justify-center rounded-full border-1 border-[#5A5B58] text-center text-sm text-[#9D9D9D] peer-checked:border-[#4D41FA] peer-checked:text-[#fff]'>
                                            <span class='block h-[1.40rem] w-[1.40rem] rounded-full bg-black'></span>
                                        </div>
                                    </label>
                                </li>
                                <li class='my-2 mr-3'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options1'
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block flex h-[2rem] w-[2rem] cursor-pointer flex-col items-center justify-center rounded-full border-1 border-[#5A5B58] text-center text-sm text-[#9D9D9D] peer-checked:border-[#F844B0] peer-checked:text-[#fff]'>
                                            <span class='block h-[1.40rem] w-[1.40rem] rounded-full bg-[#F844B0]'></span>
                                        </div>
                                    </label>
                                </li>
                                <li class='my-2 mr-3'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options1'
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block flex h-[2rem] w-[2rem] cursor-pointer flex-col items-center justify-center rounded-full border-1 border-[#5A5B58] text-center text-sm text-[#9D9D9D] peer-checked:border-[#52D875] peer-checked:text-[#fff]'>
                                            <span class='block h-[1.40rem] w-[1.40rem] rounded-full bg-[#52D875]'></span>
                                        </div>
                                    </label>
                                </li>
                                <li class='my-2 mr-3'>
                                    <label class='relative'>
                                        <input
                                            type='radio'
                                            name='options1'
                                            class='peer absolute [clip-path:inset(50%)]'
                                        />
                                        <div class='block flex h-[2rem] w-[2rem] cursor-pointer flex-col items-center justify-center rounded-full border-1 border-[#5A5B58] text-center text-sm text-[#9D9D9D] peer-checked:border-[#F9C638] peer-checked:text-[#fff]'>
                                            <span class='block h-[1.40rem] w-[1.40rem] rounded-full bg-[#F9C638]'></span>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class='mt-6 flex w-full'>
                        <div class='flex w-[8.69rem] flex-[0_0_8.69rem] items-center rounded-full border-1 border-[#5A5B58] px-6 py-2'>
                            <label for='' class='text-[0.81rem] text-[#A1A1A1]'>
                                Quantity:
                            </label>
                            <select name='' id='' class='ml-2'>
                                <option value=''>2</option>
                            </select>
                        </div>
                        <span class='grow pl-4'>
                            <a
                                href='#'
                                class='block rounded-full border-1 border-[#C6FF00] px-8 py-2 text-center text-[#C6FF00] transition-colors duration-300 hover:bg-[#C6FF00] hover:text-black'>
                                Add to Cart
                            </a>
                        </span>
                    </div>
                    <span class='mt-5 block'>
                        <a
                            href='#'
                            class='block rounded-full border-1 border-[#C6FF00] bg-[#C6FF00] px-8 py-3 text-center text-sm text-black transition-colors duration-300 hover:bg-[#C6FF00]'>
                            Book Now
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
