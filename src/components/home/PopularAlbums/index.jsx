import AlbumCard from '@/components/common/AlbumCard'

const PopularAlbums = ({ albums }) => {
    return (
        <>
            <div className='mb-4 mt-4 flex items-center justify-between sm:justify-between md:mb-5 md:mt-8 md:justify-between lg:justify-between'>
                <h2 className='text-base font-semibold text-white'>
                    Popular albums
                </h2>
                <span className='inline-block text-center'>
                    <a
                        href='#'
                        className='inline-block h-[2.5rem] rounded-[27px] bg-[#F9FF45] px-8 text-xs font-semibold leading-[2.5rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.82)]'>
                        View all
                    </a>
                </span>
            </div>
            <div className='grid grid-cols-1 grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-4'>
                {albums.map((album) => (
                    <AlbumCard albumDetails={album} key={album._id} />
                ))}
                {/* <div className="mb-3 md:mb-5">
                    <div
                        className="w-full relative overflow-hidden z-0 after:content-[''] after:absolute after:bg-[rgba(0,0,0,0.5)] after:w-full after:h-full after:top-0 after:right-0 after:z-0 rounded-2xl">
                        <img src="/images/home/3.webp" alt="signs" loading="lazy"
                            className="w-full rounded-2xl block" />
                        <span
                            className="playNow absolute left-0 z-1 right-0 top-0 bottom-0 m-auto w-[2rem] h-[2rem] leading-[2rem] 
                                lg:w-[2.76rem] lg:h-[2.76rem] lg:leading-[2.76rem]
                                xl:w-[3.76rem] xl:h-[3.76rem] xl:leading-[3.76rem]
                                2xl:w-[3.76rem] 2xl:h-[3.76rem] 2xl:leading-[3.76rem]

                                text-center bg-[rgba(255,255,255,0.3)] border-1 border-white border-solid rounded-full flex justify-center items-center cursor-pointer">
                            <img src="/images/player-icon/play-big.webp" alt="play" loading="lazy"
                                className=" inline-block relative  w-[0.5rem] sm:w-auto" />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-3  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-[#C6FF00] rounded-full cursor-pointer hover:bg-[rgba(200,255,0,0.8)] transition-colors flex justify-center items-center">
                            <img src="/images/icons/union.webp" alt="play" loading="lazy"
                                className=" inline-block relative " />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-13  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-white rounded-full cursor-pointer hover:bg-[#ddd] transition-colors flex justify-center items-center">
                            <img src="/images/icons/cart.webp" alt="play" loading="lazy"
                                className=" inline-block relative" />
                        </span>
                    </div>
                    <h3><a href="#" className="text-white font-semibold text-sm mt-3 block">Maecenas bibendum</a>
                    </h3>
                    <p className="text-white text-xs truncate w-full">Quisque laoreet, risus ac Quisque laoreet,
                        risus ac
                    </p>
                    <h3 className="text-white font-semibold text-sm mt-1 block">$ 1.30</h3>
                </div>
                <div className="mb-3 md:mb-5">
                    <div
                        className="w-full relative overflow-hidden z-0 after:content-[''] after:absolute after:bg-[rgba(0,0,0,0.5)] after:w-full after:h-full after:top-0 after:right-0 after:z-0 rounded-2xl">
                        <img src="/images/home/3.webp" alt="signs" loading="lazy"
                            className="w-full rounded-2xl block" />
                        <span
                            className="playNow absolute left-0 z-1 right-0 top-0 bottom-0 m-auto w-[2rem] h-[2rem] leading-[2rem] 
                                                    lg:w-[2.76rem] lg:h-[2.76rem] lg:leading-[2.76rem]
                                                    xl:w-[3.76rem] xl:h-[3.76rem] xl:leading-[3.76rem]
                                                    2xl:w-[3.76rem] 2xl:h-[3.76rem] 2xl:leading-[3.76rem]
                    
                                                    text-center bg-[rgba(255,255,255,0.3)] border-1 border-white border-solid rounded-full flex justify-center items-center cursor-pointer">
                            <img src="/images/player-icon/play-big.webp" alt="play" loading="lazy"
                                className=" inline-block relative  w-[0.5rem] sm:w-auto" />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-3  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-[#C6FF00] rounded-full cursor-pointer hover:bg-[rgba(200,255,0,0.8)] transition-colors flex justify-center items-center">
                            <img src="/images/icons/union.webp" alt="play" loading="lazy"
                                className=" inline-block relative " />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-13  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-white rounded-full cursor-pointer hover:bg-[#ddd] transition-colors flex justify-center items-center">
                            <img src="/images/icons/cart.webp" alt="play" loading="lazy"
                                className=" inline-block relative" />
                        </span>
                    </div>
                    <h3><a href="#" className="text-white font-semibold text-sm mt-3 block">Maecenas bibendum</a>
                    </h3>
                    <p className="text-white text-xs truncate w-full">Quisque laoreet, risus ac Quisque laoreet,
                        risus ac
                    </p>
                    <h3 className="text-white font-semibold text-sm mt-1 block">$ 1.30</h3>
                </div>
                <div className="mb-3 md:mb-5">
                    <div
                        className="w-full relative overflow-hidden z-0 after:content-[''] after:absolute after:bg-[rgba(0,0,0,0.5)] after:w-full after:h-full after:top-0 after:right-0 after:z-0 rounded-2xl">
                        <img src="/images/home/3.webp" alt="signs" loading="lazy"
                            className="w-full rounded-2xl block" />
                        <span
                            className="playNow absolute left-0 z-1 right-0 top-0 bottom-0 m-auto w-[2rem] h-[2rem] leading-[2rem] 
                                                    lg:w-[2.76rem] lg:h-[2.76rem] lg:leading-[2.76rem]
                                                    xl:w-[3.76rem] xl:h-[3.76rem] xl:leading-[3.76rem]
                                                    2xl:w-[3.76rem] 2xl:h-[3.76rem] 2xl:leading-[3.76rem]
                    
                                                    text-center bg-[rgba(255,255,255,0.3)] border-1 border-white border-solid rounded-full flex justify-center items-center cursor-pointer">
                            <img src="/images/player-icon/play-big.webp" alt="play" loading="lazy"
                                className=" inline-block relative  w-[0.5rem] sm:w-auto" />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-3  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-[#C6FF00] rounded-full cursor-pointer hover:bg-[rgba(200,255,0,0.8)] transition-colors flex justify-center items-center">
                            <img src="/images/icons/union.webp" alt="play" loading="lazy"
                                className=" inline-block relative " />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-13  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-white rounded-full cursor-pointer hover:bg-[#ddd] transition-colors flex justify-center items-center">
                            <img src="/images/icons/cart.webp" alt="play" loading="lazy"
                                className=" inline-block relative" />
                        </span>
                    </div>
                    <h3><a href="#" className="text-white font-semibold text-sm mt-3 block">Maecenas bibendum</a>
                    </h3>
                    <p className="text-white text-xs truncate w-full">Quisque laoreet, risus ac Quisque laoreet,
                        risus ac
                    </p>
                    <h3 className="text-white font-semibold text-sm mt-1 block">$ 1.30</h3>
                </div>
                <div className="mb-3 md:mb-5">
                    <div
                        className="w-full relative overflow-hidden z-0 after:content-[''] after:absolute after:bg-[rgba(0,0,0,0.5)] after:w-full after:h-full after:top-0 after:right-0 after:z-0 rounded-2xl">
                        <img src="/images/home/3.webp" alt="signs" loading="lazy"
                            className="w-full rounded-2xl block" />
                        <span
                            className="playNow absolute left-0 z-1 right-0 top-0 bottom-0 m-auto w-[2rem] h-[2rem] leading-[2rem] 
                                                    lg:w-[2.76rem] lg:h-[2.76rem] lg:leading-[2.76rem]
                                                    xl:w-[3.76rem] xl:h-[3.76rem] xl:leading-[3.76rem]
                                                    2xl:w-[3.76rem] 2xl:h-[3.76rem] 2xl:leading-[3.76rem]
                    
                                                    text-center bg-[rgba(255,255,255,0.3)] border-1 border-white border-solid rounded-full flex justify-center items-center cursor-pointer">
                            <img src="/images/player-icon/play-big.webp" alt="play" loading="lazy"
                                className=" inline-block relative  w-[0.5rem] sm:w-auto" />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-3  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-[#C6FF00] rounded-full cursor-pointer hover:bg-[rgba(200,255,0,0.8)] transition-colors flex justify-center items-center">
                            <img src="/images/icons/union.webp" alt="play" loading="lazy"
                                className=" inline-block relative " />
                        </span>
                        <span
                            className="absolute wishList z-1 right-3 top-13  w-[1.88rem] h-[1.88rem] leading-[1.88rem] text-center bg-white rounded-full cursor-pointer hover:bg-[#ddd] transition-colors flex justify-center items-center">
                            <img src="/images/icons/cart.webp" alt="play" loading="lazy"
                                className=" inline-block relative" />
                        </span>
                    </div>
                    <h3><a href="#" className="text-white font-semibold text-sm mt-3 block">Maecenas bibendum</a>
                    </h3>
                    <p className="text-white text-xs truncate w-full">Quisque laoreet, risus ac Quisque laoreet,
                        risus ac
                    </p>
                    <h3 className="text-white font-semibold text-sm mt-1 block">$ 1.30</h3>
                </div> */}
            </div>
        </>
    )
}

export default PopularAlbums
