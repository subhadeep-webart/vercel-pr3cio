const ArtistLibrary=()=>{
    return(
        <>
          <div class="flex items-start flex-wrap w-full justify-end">
            <div class="bg-[#2B2B2B] rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                <div class="flex justify-between">
                    <h1 class="text-[1.56rem] font-semibold mb-5">My Artist</h1>
                    {/* <ul class="flex">
                        <li><a href="#"
                                class="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300">Liked</a>
                        </li>
                        <li><a href="#"
                                class="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300">Download</a>
                        </li>
                    </ul> */}
                </div>
                <div
                    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/5.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/6.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/7.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/5.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/6.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>

                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/5.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/6.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/7.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/5.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                    <div
                        class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
                        <center>
                            <div
                                class="max-w-[9.38rem] max-h-[9.38rem] rounded-full p-3 border-1 border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative">
                                <img src="/images/artist/6.webp" alt="skipBack" loading="lazy"
                                    class="rounded-full max-w-[9.38rem] max-h-[9.38rem] rounded-full w-full" />

                                <span
                                    class=" w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                        class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                            stroke-width="2" />
                                    </svg>

                                </span>
                            </div>
                            <h3 class="text-sm font-semibold">Maecenas biben</h3>
                            <small class="text-xs text-[#9D9D9D]">Artist</small>
                        </center>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
};

export default ArtistLibrary;