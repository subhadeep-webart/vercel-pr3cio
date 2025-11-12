const OrderHistoryCard=()=>{
    return(
        <>
            <div
                            class="w-full hover:bg-[#484848] hover:rounded-[0.4rem] grid grid-cols-12 p-5 sm:gap-x-4 md:gap-x-4 lg:gap-x-4 xl:gap-x-4 2xl:gap-x-4 group items-center transition-colors delay-300 hover:border-transparent">
                            <div class="col-span-8">
                                <div class="flex items-center">
                                    <img src="/images/user/2.webp" alt="artist"
                                        class="w-[3.25rem] flex-[0_0_3.25rem] h-[4.13rem] rounded-[0.4rem] object-cover inline-block mr-2" />
                                    <div class="">
                                        <h6 class="text-sm font-semibold">Maecenas biben</h6>
                                        <p class="text-xs text-[#9D9D9D] my-1">John coleman</p>
                                        <p class="text-xs text-[#9D9D9D] my-1">Order ID: 254741</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4 text-right">
                                <p class="text-xs text-[#9D9D9D] my-1">Purchased by 20 nov, 2024</p>
                                <a href="#"
                                    class="bg-[#191919] w-[1.63rem] h-[1.63rem] rounded-full flex justify-center items-center group float-right mt-5">
                                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                        class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="col-span-12">
                                <div
                                    class="grid grid-cols-2 group items-center border-t-1 border-[rgba(255,255,255,0.2)] border-solid pt-2 justify-between mt-3">
                                    <div class="col-auto text-sm">
                                        Total Billed
                                    </div>
                                    <div class="col-auto text-base font-semibold text-right">
                                        $ 1.30
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
};

export default OrderHistoryCard;
