"use client"

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

const MainPlayer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    };
    return (
        <>
            <div className="flex flex-wrap gap-3">
                <div class="mx-1">
                    <button onClick={handleOpen}>
                        <i class="bi bi-arrows-fullscreen"></i>
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                            <ModalBody>
                                <div id="default-modal" tabIndex="-1" aria-hidden="true"
                                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div class="relative p-4 w-full max-w-screen max-h-full">
                                        <div class="relative shadow-sm dark:bg-gray-700">
                                            <div class="space-y-4">
                                                <div
                                                    class=" w-full m-auto border-[#878787] border-1 border-solid rounded-[1.75rem] px-15 py-10 bg-cover bg-no-repeat  bg-[url('/images/player-bg.webp')] relative">

                                                    <button type="button"
                                                        class="text-gray-400 w-[2.38rem] flex-[0_0_2.38rem] h-[2.38rem] rounded-full flex justify-center items-center border-[#878787] border-1 border-solid absolute top-10 right-10 cursor-pointer"
                                                        data-modal-hide="default-modal">
                                                        <span class="clodePopup ">
                                                            <img src="/images/player/close.webp" alt="cover" loading="lazy"
                                                                class="inline-block" />
                                                        </span>
                                                        <span class="sr-only">Close modal</span>
                                                    </button>


                                                    <div
                                                        class="musicPlayer md:inline-flex justify-between items-center hidden sm:hidden md:ml-4 xl:ml-8 2xl:ml-12">
                                                        <span class="w-[3.25rem] flex-[0_0_3.25rem]"><a href="#"><img
                                                            src="/images/player-icon/thumb.webp" alt="pr3cio-logo" loading="lazy"
                                                            class="w-full rounded-[0.56rem]" /></a></span>
                                                        <div class="songInfo sm:hidden md:hidden lg:block lg:px-2 xl:px-3 2xl:px-5">
                                                            <p class="m-0"><strong
                                                                class="font-semibold md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-white">love
                                                                me
                                                                like you
                                                                do</strong></p>
                                                            <p
                                                                class="font-normal md:text-xs lg:text-xs xl:text-[0.75rem] 2xl:text-[0.75rem] text-[#A8A8A8]">
                                                                By
                                                                Jonsan Doe</p>
                                                            <span class="inline-block"><a href="#"
                                                                class="text-[#C6FF00] md:text-xs lg:text-xs xl:text-[0.75rem] 2xl:text-[0.75rem]">Follow</a></span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="mainPlayer w-full relative text-center after:content-[''] after:absolute after:w-full after:max-w-[46.00rem] after:h-[14.88rem] after:w-full after:bottom-[-3rem] after:left-0 after:right-0 after:z-0 after:rounded-[100%]  after:border-[rgba(255,255,255,0.7)] after:border-[0.16rem] after:border-solid after:m-auto after:shadow-[0_4px_15px_rgba(255,255,255,0.3)] mb-20 mt-10">

                                                        <span
                                                            class="rotate-[3.86deg]  absolute left-[20%] top-[25%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]"><img
                                                                src="/images/player/2.webp" alt="cover" loading="lazy"
                                                                class="max-w[8.50rem] h-[9.75rem] object-cover " /></span>
                                                        <span
                                                            class="rotate-[-3.86deg]  absolute right-[15%] top-[25%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]"><img
                                                                src="/images/player/3.webp" alt="cover" loading="lazy"
                                                                class=" max-w[8.50rem] h-[9.75rem] object-cover " /></span>
                                                        <span
                                                            class="rotate-[3.86deg]  absolute left-[1%] top-[45%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]"><img
                                                                src="/images/player/4.webp" alt="cover" loading="lazy"
                                                                class=" max-w[7.31rem] h-[9.75rem] object-cover " /></span>
                                                        <span
                                                            class="rotate-[-2.86deg]  absolute right-[-2%] top-[40%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]"><img
                                                                src="/images/player/5.webp" alt="cover" loading="lazy"
                                                                class=" max-w[8.50rem] h-[9.75rem] object-cover " /></span>
                                                        <span
                                                            class="rotate-[2.86deg]  absolute left-[15%] top-[95%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]"><img
                                                                src="/images/player/6.webp" alt="cover" loading="lazy"
                                                                class="max-w[5.78rem] h-[7.01rem] object-cover " /></span>
                                                        <span
                                                            class="rotate-[-2.86deg]  absolute right-[15%] top-[95%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]">
                                                            <img src="/images/player/7.webp" alt="cover" loading="lazy"
                                                                class=" max-w[ 5.78rem] h-[7.01rem] object-cover" /></span>
                                                        <span
                                                            class="rotate-[19.86deg]  absolute left-[11%] top-0 z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]">
                                                            <img src="/images/player/8.webp" alt="cover" loading="lazy"
                                                                class=" max-w[4.60rem] h-[5.10rem] object-cover" /></span>

                                                        <span
                                                            class="rotate-[-19.86deg]  absolute left-[33%] top-[-25%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]">
                                                            <img src="/images/player/9.webp" alt="cover" loading="lazy"
                                                                class=" max-w[5.42rem] h-[6.40rem] object-cover" /></span>
                                                        <span
                                                            class="rotate-[19.86deg]  absolute right-[33%] top-[-25%] z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]">
                                                            <img src="/images/player/10.webp" alt="cover" loading="lazy"
                                                                class=" max-w[5.42rem] h-[6.40rem] object-cover" /></span>

                                                        <span
                                                            class="rotate-[-19.86deg]  absolute right-[10%] top-1 z-1 after:content-[''] after:absolute after:w-full after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-0 after:bg-[rgba(0,0,0,0.5)] after:opacity-0 after:transition-colors after:delay-300 active:after:opacity-100 cursor-pointer overflow-hidden rounded-[0.50rem]">
                                                            <img src="/images/player/11.webp" alt="cover" loading="lazy"
                                                                class=" max-w[4.60rem] h-[5.10rem] object-cover" /></span>

                                                        <div class="innerWap w-full max-w-[15.63rem] m-auto relative player  z-1">
                                                            <img src="/images/player/1.webp" alt="cover" loading="lazy"
                                                                class="m-auto rounded-[0.75rem] max-w[12.50rem] h-[15.63rem] object-cover" />
                                                            <h2 class="text-sm font-semibold mt-3">Maecenas biben</h2>
                                                            <p class="truncate text-xs w-[12.25rem] m-auto text-[#C3C3C3]">Quisque isus laoreet,
                                                                risus </p>
                                                            <div class="w-full relative overflow-hidden bg-white h-0.5 mt-4">
                                                                <span class="absolute left-0 top-0 w-30 bg-[#ff2663]  h-0.5"></span>
                                                            </div>
                                                            <div class="flex justify-between w-full mt-1">
                                                                <span class="text-xs text-[#C3C3C3]">1.25</span>
                                                                <span class="text-xs text-[#C3C3C3]">4.18</span>
                                                            </div>
                                                            <ul
                                                                class="flex justify-center items-center absolute left-0 right-0 m-auto top-[calc(100%+1.25rem)]">
                                                                <li class="px-2 sm:px-2 md:px-2 xl:px-1 2xl:px-2">
                                                                    <a href="#"
                                                                        class="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs"><img
                                                                            src="/images/player-icon/repeat-big.png" alt="shuffle"
                                                                            loading="lazy" /></a>
                                                                </li>
                                                                <li class="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2"><a href="#"
                                                                    class="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs"><img
                                                                        src="/images/player-icon/skipBack-big.webp" alt="skipBack"
                                                                        loading="lazy" src="/images/player-icon/pause.webp" alt="play"
                                                                        loading="lazy" class="w-[1.19rem]" /></a>
                                                                </li>
                                                                <li class="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2"><a href="#" id="playBtn2"
                                                                    class="w-[3.00rem] h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center  flex justify-center items-center rounded-full playBtn"><img
                                                                        src="/images/player-icon/play.webp" alt="play" loading="lazy"
                                                                        class="playIcon" id="playIcon2" /></a>
                                                                </li>

                                                                <li class="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2"><a href="#"
                                                                    class="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs"><img
                                                                        src="/images/player-icon/skipFwd-big.png" alt="skipFwd"
                                                                        loading="lazy" class="w-[1.19rem]" /></a></li>
                                                                <li class="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2 pr-0"><a href="#"
                                                                    class="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs"><img
                                                                        src="/images/player-icon/repeat-big.png" alt="repeat"
                                                                        loading="lazy" /></a>
                                                                </li>
                                                            </ul>
                                                            <audio id="myAudio2" class="hidden myAudio" src="/music.mp3"></audio>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            {/* <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>


    )
}

export default MainPlayer;