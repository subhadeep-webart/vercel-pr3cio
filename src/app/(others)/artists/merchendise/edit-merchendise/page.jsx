const EditMerchendise=()=>{
    return(
        <>
     
            <div class="grid grid-cols-12 bg-[#2A2929] rounded-[0.876rem] py-7 px-4 justify-center">
                <button
                    class="bg-[#494848] rounded-[0.3rem] border-1 border-[#666] border-solid p-3 col-span-4 col-start-5 z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(45,38,148,0.18)_0%,rgba(211,68,201,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1] text-center cursor-pointer mb-12">
                    <div class="grid grid-flow-col gap-4 justify-center items-center">
                        <span class="xl:text-[0.9rem] xxl:text-[1.05rem] font-bold col-span-auto">Upload product
                            image</span>
                        <span
                            class="w-[2.40rem] h-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] leading-[2.40rem] text-center col-span-auto">
                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="stroke-current text-[#fff] transition-colors h-[2.40rem] m-auto">
                                <path
                                    d="M7.06083 2.63172L10.6625 1.67722C10.6683 1.6753 10.6745 1.67468 10.6807 1.6754C10.6868 1.67613 10.6927 1.67817 10.6979 1.6814C10.7032 1.68463 10.7077 1.68897 10.7111 1.69411C10.7145 1.69924 10.7167 1.70506 10.7176 1.71116C10.8499 2.18612 11.134 2.6047 11.5267 2.90292C11.9193 3.20114 12.3987 3.36259 12.8918 3.36259C13.3848 3.36259 13.8643 3.20114 14.2569 2.90292C14.6495 2.6047 14.9336 2.18612 15.0659 1.71116C15.0668 1.70506 15.0691 1.69924 15.0725 1.69411C15.0759 1.68897 15.0804 1.68463 15.0856 1.6814C15.0909 1.67817 15.0968 1.67613 15.1029 1.6754C15.109 1.67468 15.1152 1.6753 15.1211 1.67722L19.0578 2.63172C19.1466 2.65475 19.2273 2.70171 19.2912 2.76747L24 7.4721L21.2256 10.2465L19.1045 8.1254C19.0967 8.11925 19.0874 8.11532 19.0776 8.11401C19.0677 8.11271 19.0577 8.11408 19.0486 8.11799C19.0395 8.1219 19.0316 8.1282 19.0257 8.13622C19.0199 8.14425 19.0163 8.1537 19.0154 8.16358L19.1936 22.7314H6.82751V7.77329C6.82678 7.76381 6.82341 7.75471 6.81778 7.74704C6.81215 7.73938 6.80449 7.73344 6.79565 7.7299C6.78682 7.72637 6.77717 7.72538 6.7678 7.72705C6.75844 7.72872 6.74973 7.73299 6.74266 7.73936L4.43489 10.0471L1.99985 7.61209L6.85296 2.76323C6.91023 2.70279 6.98168 2.65758 7.06083 2.63172Z"
                                    stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </span>
                    </div>
                </button>



                <form action="" class="col-span-12 md:col-span-10 md:col-start-2">
                    <div class="grid grid-cols-12 gap-4">
                     
                        <div class="col-span-12 md:col-span-8 mt-6">
                            <label class="text-base text-[#D1CAD5]">Product Name</label>
                            <input type="text"
                                class="bg-[#2E2E2E] border border-[#404040] w-full h-[2.5rem] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[1rem] px-5 text-sm mt-2"
                                placeholder="Song title" required />
                        </div>

               
                        <div class="col-span-12 md:col-span-4 mt-6">
                            <label class="text-base text-[#D1CAD5]">Product Price</label>
                            <input type="text"
                                class="bg-[#2E2E2E] border border-[#404040] w-full h-[2.5rem] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[1rem] px-5 text-sm mt-2"
                                placeholder="Enter Price" required />
                        </div>

                     
                        <div class="col-span-12 mt-6">
                            <label class="text-base text-[#D1CAD5]">Description</label>
                            <textarea rows="4"
                                class="bg-[#2E2E2E] border border-[#404040] w-full dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[1rem] px-5 py-3 text-sm mt-2 resize-none"
                                placeholder="Song category" required></textarea>
                        </div>

                   
                        <div class="col-span-12 mt-6 text-center">
                            <button
                                class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[15.438rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer">
                                Update Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
};

export default EditMerchendise;