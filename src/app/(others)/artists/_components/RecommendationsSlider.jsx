'use client'

import { Image } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const RecommendationsSlider = ({ recommendations }) => {
    const router = useRouter()

    return (
        <div className='relative w-full max-w-[1200px]'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                    1536: {
                        slidesPerView: 5,
                    },
                }}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                onInit={(swiper) => {
                    swiper.on('slideChange', () => {
                        const { isBeginning, isEnd } = swiper
                        document
                            .querySelector('.prev-btn')
                            ?.classList.toggle('opacity-50', isBeginning)
                        document
                            .querySelector('.next-btn')
                            ?.classList.toggle('opacity-50', isEnd)
                    })
                }}>
                {recommendations.map((rec) => (
                    <SwiperSlide key={rec.id}>
                        <>
                            <div
                                className='relative aspect-[330/301] w-full cursor-pointer overflow-hidden rounded-[27px]'
                                onClick={() =>
                                    router.push(`/albums/${rec._id}`)
                                }>
                                <Image
                                    src={rec.thumbnail}
                                    alt={rec.name}
                                    classNames={{
                                        wrapper:
                                            'aspect-[330/301] relative w-full h-full',
                                    }}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='mt-2 text-sm text-white'>
                                <p>{rec.name}</p>
                                <span className='text-xs text-white/60'>
                                    {new Date(rec.created_at).getUTCFullYear()}
                                </span>
                            </div>
                        </>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className='prev-btn absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#6156E2] text-white opacity-50 transition-opacity duration-200'>
                &#8592;
            </button>
            <button className='next-btn absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#6156E2] text-white transition-opacity duration-200'>
                &#8594;
            </button>
        </div>
    )
}

export default RecommendationsSlider
