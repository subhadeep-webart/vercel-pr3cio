import { IoIosArrowBack } from "react-icons/io";

const ChangePassword=()=>{
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
                            <h2 class="font-semibold text-[1.56rem]"> <a href="/profile"
                                    class="inline-block w-[2.38rem] h-[2.25rem] rounded-[0.75rem] border-1 border-[#848484] border-solid mr-2 leading-[2.25rem] text-center text-[1rem]">
                                        {/* <i  class="bi bi-chevron-left"></i> */}
                                        <IoIosArrowBack size={30} />
                                        </a> Change Password
                            </h2>
                         {/* <ul class="flex">
                                                        <li><a href="#"
                                                                class="flex font-medium text-sm text-[#9D9D9D] transition-colors duration-300">Last
                                                                30 Days
                                                                <span class="inline-block ml-2">
                                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M19.4788 10.9999H8.15343M4.15584 10.9999H2.52051M4.15584 10.9999C4.15584 10.4699 4.36638 9.96167 4.74114 9.58691C5.1159 9.21214 5.62418 9.00161 6.15417 9.00161C6.68417 9.00161 7.19245 9.21214 7.56721 9.58691C7.94197 9.96167 8.15251 10.4699 8.15251 10.9999C8.15251 11.5299 7.94197 12.0382 7.56721 12.413C7.19245 12.7877 6.68417 12.9983 6.15417 12.9983C5.62418 12.9983 5.1159 12.7877 4.74114 12.413C4.36638 12.0382 4.15584 11.5299 4.15584 10.9999ZM19.4788 17.0564H14.2098M14.2098 17.0564C14.2098 17.5865 13.9988 18.0953 13.624 18.4702C13.2491 18.845 12.7407 19.0556 12.2106 19.0556C11.6806 19.0556 11.1723 18.8442 10.7976 18.4694C10.4228 18.0946 10.2123 17.5863 10.2123 17.0564M14.2098 17.0564C14.2098 16.5262 13.9988 16.0183 13.624 15.6435C13.2491 15.2686 12.7407 15.058 12.2106 15.058C11.6806 15.058 11.1723 15.2686 10.7976 15.6433C10.4228 16.0181 10.2123 16.5264 10.2123 17.0564M10.2123 17.0564H2.52051M19.4788 4.94352H16.6326M12.635 4.94352H2.52051M12.635 4.94352C12.635 4.41353 12.8455 3.90525 13.2203 3.53049C13.5951 3.15573 14.1034 2.94519 14.6333 2.94519C14.8958 2.94519 15.1556 2.99688 15.3981 3.0973C15.6405 3.19773 15.8608 3.34493 16.0464 3.53049C16.2319 3.71605 16.3791 3.93635 16.4796 4.17879C16.58 4.42124 16.6317 4.6811 16.6317 4.94352C16.6317 5.20595 16.58 5.4658 16.4796 5.70825C16.3791 5.9507 16.2319 6.171 16.0464 6.35656C15.8608 6.54212 15.6405 6.68932 15.3981 6.78974C15.1556 6.89017 14.8958 6.94186 14.6333 6.94186C14.1034 6.94186 13.5951 6.73132 13.2203 6.35656C12.8455 5.9818 12.635 5.47351 12.635 4.94352Z"
                                                                            stroke="#9D9D9D" stroke-width="1.2" stroke-miterlimit="10"
                                                                            stroke-linecap="round"></path>
                                                                    </svg>
                                                                </span></a>
                                                        </li>
                                                    </ul>  */}
                        </div>
                        <form action="">
                            <div class="grid grid-cols-12 gap-4 md:gap-x-10 auto-cols-auto">
                                <div class="sm:col-span-6 lg:col-span-4 mt-6">
                                    <label for="" class="text-base text-[#D1CAD5]">Current Password</label>
                                    <input type="text" id=""
                                        class="bg-[#2E2E2E] border border-[#404040] w-full h-[2.50rem] d dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[0.45rem] px-5 text-sm mt-2"
                                        placeholder="Rony Coleman" required />
                                </div>
                                <div class="sm:col-span-6 lg:col-span-4 mt-6">
                                    <label for="" class="text-base text-[#D1CAD5]">New Password</label>
                                    <input type="text" id=""
                                        class="bg-[#2E2E2E] border border-[#404040] w-full h-[2.50rem] d dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[0.45rem] px-5 text-sm mt-2"
                                        placeholder="+91 9852114758" required />
                                </div>
                                <div class="sm:col-span-6 lg:col-span-4 mt-6">
                                    <label for="" class="text-base text-[#D1CAD5]">Confirm New Password</label>
                                    <input type="text" id=""
                                        class="bg-[#2E2E2E] border border-[#404040] w-full h-[2.50rem] d dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[0.45rem] px-5 text-sm mt-2"
                                        placeholder="1547@w88a" required />
                                </div>
                                <div class="col-span-12 text-right">
                                    <button
                                        class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[8.06rem] w-full text-center transition-all duration-300 mt-3 cursor-pointer">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
};

export default ChangePassword;