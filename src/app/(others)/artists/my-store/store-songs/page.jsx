const StoreSongs=()=>{
    return(
        <>
          <div class="flex items-start flex-wrap w-full justify-end">

            <div class="sm:w-[calc(100%-1rem)] mb-6 mt-2">
                <ul class="inline-flex bg-[#2B2B2B] rounded-[0.75rem] py-2 w-auto  pr-2">
                    <li><a href="#"
                            class="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-4 py-1 transition-colors duration-300">All</a>
                    </li>
                    <li><a href="store.html"
                            class="ml-2 bg-gradient-to-r from-[#D344C9] to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-4 py-1 transition-colors duration-300">Songs</a>
                    </li>
                    <li><a href="store-album.html"
                            class="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-4 py-1 transition-colors duration-300">Albums</a>
                    </li>
                </ul>
            </div>

            <div class="bg-[#2B2B2B] rounded-[0.75rem] sm:w-[calc(100%-1rem)] p-6 float-right">
                <div class="flex justify-between">
                    <h1 class="text-[1.56rem] font-semibold mb-5">Songs</h1>
                    <ul class="flex">
                        <li><a href="#"
                                class="flex font-medium text-sm text-[#9D9D9D] transition-colors duration-300">Recently
                                Added
                                <span class="inline-block ml-2">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.4788 10.9999H8.15343M4.15584 10.9999H2.52051M4.15584 10.9999C4.15584 10.4699 4.36638 9.96167 4.74114 9.58691C5.1159 9.21214 5.62418 9.00161 6.15417 9.00161C6.68417 9.00161 7.19245 9.21214 7.56721 9.58691C7.94197 9.96167 8.15251 10.4699 8.15251 10.9999C8.15251 11.5299 7.94197 12.0382 7.56721 12.413C7.19245 12.7877 6.68417 12.9983 6.15417 12.9983C5.62418 12.9983 5.1159 12.7877 4.74114 12.413C4.36638 12.0382 4.15584 11.5299 4.15584 10.9999ZM19.4788 17.0564H14.2098M14.2098 17.0564C14.2098 17.5865 13.9988 18.0953 13.624 18.4702C13.2491 18.845 12.7407 19.0556 12.2106 19.0556C11.6806 19.0556 11.1723 18.8442 10.7976 18.4694C10.4228 18.0946 10.2123 17.5863 10.2123 17.0564M14.2098 17.0564C14.2098 16.5262 13.9988 16.0183 13.624 15.6435C13.2491 15.2686 12.7407 15.058 12.2106 15.058C11.6806 15.058 11.1723 15.2686 10.7976 15.6433C10.4228 16.0181 10.2123 16.5264 10.2123 17.0564M10.2123 17.0564H2.52051M19.4788 4.94352H16.6326M12.635 4.94352H2.52051M12.635 4.94352C12.635 4.41353 12.8455 3.90525 13.2203 3.53049C13.5951 3.15573 14.1034 2.94519 14.6333 2.94519C14.8958 2.94519 15.1556 2.99688 15.3981 3.0973C15.6405 3.19773 15.8608 3.34493 16.0464 3.53049C16.2319 3.71605 16.3791 3.93635 16.4796 4.17879C16.58 4.42124 16.6317 4.6811 16.6317 4.94352C16.6317 5.20595 16.58 5.4658 16.4796 5.70825C16.3791 5.9507 16.2319 6.171 16.0464 6.35656C15.8608 6.54212 15.6405 6.68932 15.3981 6.78974C15.1556 6.89017 14.8958 6.94186 14.6333 6.94186C14.1034 6.94186 13.5951 6.73132 13.2203 6.35656C12.8455 5.9818 12.635 5.47351 12.635 4.94352Z"
                                            stroke="#9D9D9D" stroke-width="1.2" stroke-miterlimit="10"
                                            stroke-linecap="round" />
                                    </svg>
                                </span></a>
                        </li>
                    </ul>
                </div>
                <div
                    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8 overflow-y-auto overflow-x-hidden h-[39rem] [scrollbar-width:none]">
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/7.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/8.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/9.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/7.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/8.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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

                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/7.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/8.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/9.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/7.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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
                    <div
                        class="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] group">
                        <div
                            class="relative z-1 mb-2 after:content[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[1] after:rounded-[0.9rem] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                            <img src="/images/songs/8.webp" alt="skipBack" loading="lazy"
                                class="rounded-[0.75rem] w-full" />

                            <div
                                class="absolute bottom-[1rem] px-4 flex justify-between items-end w-full transition-colors duration-300 opacity-0 group-hover:opacity-100 z-10">
                                <h6 class="text-sm font-semibold">$ 1.30</h6>
                                <a href="#"
                                    class="group inline-block w-[2.25rem] h-[2.25rem] rounded-full inline-flex justify-center items-center bg-[#C6FF00] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.14258 0.142822C0.590293 0.142822 0.142578 0.590537 0.142578 1.14282C0.142578 1.69511 0.590293 2.14282 1.14258 2.14282V1.14282V0.142822ZM2.66639 1.14282L3.6636 1.0682C3.62455 0.546324 3.18972 0.142822 2.66639 0.142822V1.14282ZM14.8569 3.49248L15.8511 3.59995C15.8816 3.31767 15.7907 3.03573 15.601 2.82445C15.4113 2.61317 15.1408 2.49248 14.8569 2.49248V3.49248ZM2.84221 3.49248L1.845 3.56711L2.84221 3.49248ZM5.42014 11.1784L5.34691 10.1811L5.42014 11.1784ZM1.14258 1.14282V2.14282H2.66639V1.14282V0.142822H1.14258V1.14282ZM5.42014 11.1784L5.49337 12.1758L12.5054 11.6609L12.4322 10.6636L12.3589 9.66625L5.34691 10.1811L5.42014 11.1784ZM14.2741 8.88386L15.2683 8.99132L15.8511 3.59995L14.8569 3.49248L13.8627 3.38502L13.2799 8.77639L14.2741 8.88386ZM2.66639 1.14282L1.66918 1.21744L1.845 3.56711L2.84221 3.49248L3.83942 3.41786L3.6636 1.0682L2.66639 1.14282ZM2.84221 3.49248L1.845 3.56711L2.28205 9.40767L3.27926 9.33305L4.27647 9.25843L3.83942 3.41786L2.84221 3.49248ZM14.8569 3.49248V2.49248H2.84221V3.49248V4.49248H14.8569V3.49248ZM12.4322 10.6636L12.5054 11.6609C13.9501 11.5548 15.1127 10.4315 15.2683 8.99132L14.2741 8.88386L13.2799 8.77639C13.228 9.25646 12.8405 9.63089 12.3589 9.66625L12.4322 10.6636ZM5.42014 11.1784L5.34691 10.1811C4.79665 10.2215 4.31764 9.80863 4.27647 9.25843L3.27926 9.33305L2.28205 9.40767C2.40556 11.0583 3.8426 12.297 5.49337 12.1758L5.42014 11.1784Z"
                                            fill="#191919" />
                                        <rect x="5.33301" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                        <rect x="12.1904" y="14.8491" width="0.00773998" height="0.00795653"
                                            stroke="#191919" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h5><a href="#" class="text-sm font-semibold">Maecenas biben</a></h5>
                        <p class="text-xs text-[#9D9D9D]">John Doe</p>
                        <div class="flex justify-between mt-2">
                            <span
                                class="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    class="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                1.5K
                            </span>
                            <ul class="flex">
                                <li class="ml-2">
                                    <a href="#"
                                        class="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group">
                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                            class="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1.04883 10.4878H7.48785" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
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

export default StoreSongs;