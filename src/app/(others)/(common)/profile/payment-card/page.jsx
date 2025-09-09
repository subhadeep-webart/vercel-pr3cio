import { IoIosArrowBack } from "react-icons/io";

const PaymentCard=()=>{
    return(
        <>
         <div class="flex items-start flex-wrap w-full  justify-end ">
            <div class="bg-[#333232] w-full rounded-[0.75rem]">
                {/* <div
                    class="bg-[#1C1919] rounded-[0.75rem] px-10 py-8 bg-cover bg-no-repeat bg-[url('/images/artist/bg.webp')] w-full bg-center flex items-center">
                    <span
                        class="w-[7.50rem] flex-[0_0_7.50rem] rounded-full  border-1 border-[#d3d3d3a1] border-solid block mr-6  mb-6">
                        <img src="/images/artist/6.webp" alt="artist"
                            class="w-[7.50rem] h-[7.50rem] rounded-full object-cover block p-2" />
                    </span>
                    <div class="grow mb-6">
                        <h3 class="text-base font-semibold">Maecenas biben</h3>
                        <p class="text-sm font-semibold text-[#9D9D9D]">Join Since 14 nov,2024</p>
                    </div>
                </div> */}
                <div class="planBox ">
                    <div
                        class="py-10 px-8 mb-6 bg-size-[100%] bg-no-repeat bg-[url('/images/user/bg2.webp')] bg-bottom min-h-[30rem]">
                        <div class="flex justify-between mb-5">
                            <h2 class="font-semibold text-[1.56rem] inline-block"> <a href="/profile"
                                    class="inline-block w-[2.38rem] h-[2.25rem] rounded-[0.75rem] border-1 border-[#848484] border-solid mr-2 leading-[2.25rem] text-center text-[1rem]">
                                        {/* <i class="bi bi-chevron-left"></i> */}
                                        <IoIosArrowBack size={30} />
                                        </a> Payment Card
                            </h2>
                            <a href="marchendise-details"
                                class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[8.06rem] w-full text-center transition-all duration-300 cursor-pointer">Add
                                Card
                            </a>
                        </div>

                        <div class="grid grid-cols-8 gap-4 md:gap-x-6 w-full md:w-4/5">
                            <div
                                class="col-span-4 bg-no-repeat bg-[url('/images/user/card1.webp')] bg-size-[100%_100%] py-8 px-8 ">
                                <h3 class="text-[1.75rem] font-semibold">Visa</h3>
                                <div class="grid grid-cols-4 gap-4 md:gap-x-6 text-[1.75rem] mt-4 mb-5 mr-9">
                                    <span>9874</span> <span>9854</span> <span>5247</span> <span>2541</span>
                                </div>
                                <div class="grid grid-cols-12 gap-4 md:gap-x-6 text-[1.75rem]">
                                    <div class="sm:col-span-7 md:col-span-8">
                                        <small class="text-sm">Card Holder</small>
                                        <p class="text-xl font-medium leading-[0.8]">Johansan Sharma</p>
                                    </div>
                                    <div class="sm:col-span-5 md:col-span-4">
                                        <small class="text-sm">Expiry</small>
                                        <p class="text-xl font-medium leading-[0.8]">07/2027</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-span-4 bg-no-repeat bg-[url('/images/user/card2.webp')] bg-size-[100%_100%] p-8 ">
                                <h3 class="text-[1.75rem] font-semibold">Master</h3>
                                <div class="grid grid-cols-4 gap-4 md:gap-x-6 text-[1.75rem] mt-4 mb-5 mr-9">
                                    <span>9874</span> <span>9854</span> <span>5247</span> <span>2541</span>
                                </div>
                                <div class="grid grid-cols-12 gap-4 md:gap-x-6 text-[1.75rem]">
                                    <div class="sm:col-span-7 md:col-span-8">
                                        <small class="text-sm">Card Holder</small>
                                        <p class="text-xl font-medium leading-[0.8]">Johansan Sharma</p>
                                    </div>
                                    <div class="sm:col-span-5 md:col-span-4">
                                        <small class="text-sm">Expiry</small>
                                        <p class="text-xl font-medium leading-[0.8]">07/2027</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
};

export default PaymentCard;