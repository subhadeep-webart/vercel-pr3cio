"use client";

import AddImage from "@/components/artist/my-upload/AddImage";
import { useState } from "react";

const UploadPage=()=>{
const [openAddImage,setOpenAddImage]=useState(false);

    return(
        <>
      
            <div
                class="py-8 px-8 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 bg-[#2A2929] rounded-[0.876rem]">
                <div class="bg-[#333333] border-2 border-[#3c3c3c] border-dashed flex justify-center items-center">
                    <button onClick={() => setOpenAddImage(true)}
                        class="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-full px-5 text-black text-sm cursor-pointer">
                        Add Image
                    </button>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/8.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/9.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
                <div class="">
                    <img src="/images/artist/10.webp" alt="skipBack" loading="lazy"
                        class="rounded-[0.75rem] w-full h-[10.13rem] object-cover"/>
                </div>
            </div>

{
    openAddImage && (
        <AddImage 
        openAddImage={openAddImage}
        setOpenAddImage={setOpenAddImage}
        />
    )
}
        
        </>
    )
};

export default UploadPage;