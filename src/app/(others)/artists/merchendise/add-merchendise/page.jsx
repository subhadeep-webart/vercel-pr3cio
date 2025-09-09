const AddMerchendise = () => {
    return (
        <>
            <div class='grid grid-cols-12 justify-center rounded-[0.876rem] bg-[#2A2929] px-4 py-7'>
                <button class="z-1 relative col-span-4 col-start-5 mb-12 cursor-pointer rounded-[0.3rem] border-1 border-solid border-[#666] bg-[#494848] p-3 text-center after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[0.3rem] after:bg-[linear-gradient(to_right,rgba(45,38,148,0.18)_0%,rgba(211,68,201,0.18)_100%)] after:content-['']">
                    <div class='grid grid-flow-col items-center justify-center gap-4'>
                        <span class='xxl:text-[1.05rem] col-span-auto font-bold xl:text-[0.9rem]'>
                            Upload product image
                        </span>
                        <span class='col-span-auto h-[2.40rem] w-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] text-center leading-[2.40rem]'>
                            <svg
                                width='26'
                                height='24'
                                viewBox='0 0 26 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='m-auto h-[2.40rem] stroke-current text-[#fff] transition-colors'>
                                <path
                                    d='M7.06083 2.63172L10.6625 1.67722C10.6683 1.6753 10.6745 1.67468 10.6807 1.6754C10.6868 1.67613 10.6927 1.67817 10.6979 1.6814C10.7032 1.68463 10.7077 1.68897 10.7111 1.69411C10.7145 1.69924 10.7167 1.70506 10.7176 1.71116C10.8499 2.18612 11.134 2.6047 11.5267 2.90292C11.9193 3.20114 12.3987 3.36259 12.8918 3.36259C13.3848 3.36259 13.8643 3.20114 14.2569 2.90292C14.6495 2.6047 14.9336 2.18612 15.0659 1.71116C15.0668 1.70506 15.0691 1.69924 15.0725 1.69411C15.0759 1.68897 15.0804 1.68463 15.0856 1.6814C15.0909 1.67817 15.0968 1.67613 15.1029 1.6754C15.109 1.67468 15.1152 1.6753 15.1211 1.67722L19.0578 2.63172C19.1466 2.65475 19.2273 2.70171 19.2912 2.76747L24 7.4721L21.2256 10.2465L19.1045 8.1254C19.0967 8.11925 19.0874 8.11532 19.0776 8.11401C19.0677 8.11271 19.0577 8.11408 19.0486 8.11799C19.0395 8.1219 19.0316 8.1282 19.0257 8.13622C19.0199 8.14425 19.0163 8.1537 19.0154 8.16358L19.1936 22.7314H6.82751V7.77329C6.82678 7.76381 6.82341 7.75471 6.81778 7.74704C6.81215 7.73938 6.80449 7.73344 6.79565 7.7299C6.78682 7.72637 6.77717 7.72538 6.7678 7.72705C6.75844 7.72872 6.74973 7.73299 6.74266 7.73936L4.43489 10.0471L1.99985 7.61209L6.85296 2.76323C6.91023 2.70279 6.98168 2.65758 7.06083 2.63172Z'
                                    stroke-width='2'
                                    stroke-linecap='round'></path>
                            </svg>
                        </span>
                    </div>
                </button>

                <form
                    action=''
                    class='col-span-12 md:col-span-10 md:col-start-2'>
                    <div class='grid grid-cols-12 gap-4'>
                        <div class='col-span-12 mt-6 md:col-span-6'>
                            <label class='text-base text-[#D1CAD5]'>
                                Product Name
                            </label>
                            <input
                                type='text'
                                class='mt-2 h-[2.5rem] w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 text-sm dark:text-[#9D9D9D] dark:placeholder-[#9D9D9D]'
                                placeholder='Song title'
                                required
                            />
                        </div>

                        <div class='col-span-12 mt-6 md:col-span-3'>
                            <label class='text-base text-[#D1CAD5]'>
                                Product Price
                            </label>
                            <input
                                type='text'
                                class='mt-2 h-[2.5rem] w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 text-sm dark:text-[#9D9D9D] dark:placeholder-[#9D9D9D]'
                                placeholder='Enter Price'
                                required
                            />
                        </div>

                        <div class='col-span-12 mt-6 md:col-span-3'>
                            <label class='text-base text-[#D1CAD5]'>
                                Product Quantity
                            </label>
                            <input
                                type='text'
                                class='mt-2 h-[2.5rem] w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 text-sm dark:text-[#9D9D9D] dark:placeholder-[#9D9D9D]'
                                placeholder='Enter Quantity'
                                required
                            />
                        </div>

                        <div class='col-span-12 mt-6'>
                            <label class='text-base text-[#D1CAD5]'>
                                Add Product Size
                            </label>
                            <select
                                class='mt-2 w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 py-3 text-sm dark:text-[#9D9D9D] dark:placeholder-[#9D9D9D]'
                                required>
                                <option value=''>Choose Size</option>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                                <option value='XXL'>XXL</option>
                            </select>
                        </div>

                        <div class='col-span-12 mt-6'>
                            <label class='text-base text-[#D1CAD5]'>
                                Description
                            </label>
                            <textarea
                                rows='4'
                                class='mt-2 w-full resize-none rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 py-3 text-sm dark:text-[#9D9D9D] dark:placeholder-[#9D9D9D]'
                                placeholder='Song category'
                                required></textarea>
                        </div>

                        <div class='col-span-12 mt-6 text-center'>
                            <button class='mt-6 inline-block h-[2.5rem] w-full max-w-[15.438rem] cursor-pointer rounded-full bg-[#C6FF00] px-5 text-center text-sm leading-[2.5rem] text-black transition-all duration-300'>
                                Save & Upload
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddMerchendise
