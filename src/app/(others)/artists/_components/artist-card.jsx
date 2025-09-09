'use client'

import { Image } from '@heroui/react'
import { useRouter } from 'next/navigation'

import { withAuthProtection } from '@/components/auth/protected-component'

const ArtistCard = ({ data }) => {
    const router = useRouter()

    const handleClick = () => {
        if (!data?._id) return;

        router.push(`artists/bio?id=${data?._id}`)
    }

    return (
        // <div
        //     onClick={handleClick}
        //     className='flex cursor-pointer flex-col items-center space-y-2 transition-opacity hover:opacity-80'>
        //     <div className='h-[151px] w-[151px] overflow-hidden rounded-full'>
        //         <Image
        //             alt='Artist'
        //             src={data.image}
        //             className='h-full w-full object-cover'
        //             classNames={{
        //                 wrapper: 'relative aspect-square w-full h-full',
        //             }}
        //         />
        //     </div>
        //     <h3 className='text-center text-sm font-medium'>{data.name}</h3>
        // </div>
        <div
            class=" group mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem]">
            <center>
                <div className="w-[9.38rem] h-[9.38rem] rounded-full p-3 border border-[#585858] mb-2 group-hover:border-[#D344C9] transition-colors duration-300 relative overflow-hidden">
                    <img
                        src={data.image}
                        alt="Artist"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-full"
                    />

                    {/* <span className="w-[2.25rem] h-[2.25rem] rounded-full bg-[#C6FF00] flex justify-center items-center text-center transition-colors duration-300 cursor-pointer absolute right-0 bottom-[1rem] opacity-0 group-hover:opacity-100">
                        <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            className="stroke-current text-black"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z"
                                strokeWidth="2"
                            />
                        </svg>
                    </span> */}
                </div>
                <h3 class="text-sm font-semibold">{data?.name}</h3>
                <small class="text-xs text-[#9D9D9D]">Artist</small>
            </center>
        </div>

    )
}

export default withAuthProtection(ArtistCard)
