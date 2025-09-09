const AlbumsLibrary=()=>{
    return(
        <>
          <div class="flex items-start flex-wrap w-full justify-end">
            <div class="bg-[#2B2B2B] rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                <div class="flex justify-between">
                    <h1 class="text-[1.56rem] font-semibold mb-5">My Albums</h1>
                    <ul class="flex">
                        <li><a href="#"
                                class="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300">Liked</a>
                        </li>
                        <li><a href="#"
                                class="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300">Download</a>
                        </li>
                    </ul>
                </div>
                <div
                    class="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8 overflow-y-auto overflow-x-hidden h-[40rem] [scrollbar-width:none]">
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/1.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/2.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/3.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/1.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/2.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/1.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/2.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/3.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/1.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 md:mb-0 transition-colors duration-300  rounded-[0.75rem]">
                        <div class="relative mb-2">
                            <img src="/images/album/2.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D] truncate w-full">Quisque isus laoreet, risus Quisque isus
                            laoreet, risus </p>
                        <div class="flex justify-between mt-2 items-center">
                            <span class=" text-[#F844B0] text-xs">
                                7 Track
                            </span>
                            <ul class="flex text-center">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] ">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                            class="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                                fill="#2F2F2F" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-current text-[#4D41FA] group-hover:text-black">
                                            <path
                                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
};

export default AlbumsLibrary;