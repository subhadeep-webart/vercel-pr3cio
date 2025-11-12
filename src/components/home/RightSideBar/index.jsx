import React from 'react'
import PopularAlbums from './_components/PopularAlbums'
import useAuth from '@/hooks/useAuth'
import Playlist from './_components/Playlist';

const RightSidebar = ({ albums, playlists, onActionComplete }) => {
    const { user, isLoggedIn } = useAuth();
    return (
        <>
            {
                isLoggedIn && <Playlist playlists={playlists} />
            }
            <div className='mt-5 rounded-2xl bg-[#2A2929] px-5 py-5'>
                <h6 className='text-[0.94rem] font-bold'>
                    The Most Popular Albums
                </h6>
                <hr className='mt-3 opacity-10' />
                <div className='playLists h-[18rem] overflow-y-auto overflow-x-hidden [scrollbar-width:none]'>
                    {albums?.length > 0 && albums?.map((album) => (
                        <PopularAlbums key={album?._id} album={album} onActionComplete={onActionComplete} />
                    ))}
                    {/* <div className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                        <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                            <img
                                src='/images/songs/5.webp'
                                alt='play'
                                loading='lazy'
                                className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                            />
                            <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small>
                        </span>
                        <div className='px-2'>
                            <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                                justin Bieber
                            </h6>
                            <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p>
                        </div>
                        <span className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                            <i className='bi bi-suit-heart'></i>
                        </span>
                    </div>
                    <div className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                        <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                            <img
                                src='/images/songs/5.webp'
                                alt='play'
                                loading='lazy'
                                className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                            />
                            <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small>
                        </span>
                        <div className='px-2'>
                            <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                                justin Bieber
                            </h6>
                            <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p>
                        </div>
                        <span className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                            <i className='bi bi-suit-heart'></i>
                        </span>
                    </div>
                    <div className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                        <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                            <img
                                src='/images/songs/5.webp'
                                alt='play'
                                loading='lazy'
                                className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                            />
                            <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small>
                        </span>
                        <div className='px-2'>
                            <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                                justin Bieber
                            </h6>
                            <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p>
                        </div>
                        <span className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                            <i className='bi bi-suit-heart'></i>
                        </span>
                    </div>
                    <div className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                        <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                            <img
                                src='/images/songs/5.webp'
                                alt='play'
                                loading='lazy'
                                className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                            />
                            <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small>
                        </span>
                        <div className='px-2'>
                            <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                                justin Bieber
                            </h6>
                            <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p>
                        </div>
                        <span className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                            <i className='bi bi-suit-heart'></i>
                        </span>
                    </div>
                    <div className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                        <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                            <img
                                src='/images/songs/5.webp'
                                alt='play'
                                loading='lazy'
                                className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                            />
                            <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small>
                        </span>
                        <div className='px-2'>
                            <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                                justin Bieber
                            </h6>
                            <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p>
                        </div>
                        <span className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                            <i className='bi bi-suit-heart'></i>
                        </span>
                    </div>
                    <div className="songlist relative mt-3 flex items-center justify-between pb-3 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
                        <span className='relative w-[2.63rem] flex-[0_0_2.63rem]'>
                            <img
                                src='/images/songs/5.webp'
                                alt='play'
                                loading='lazy'
                                className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-full object-cover'
                            />
                            <small className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.2rem] w-[0.56rem] cursor-pointer'>
                                <img
                                    src='/images/player-icon/play.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='inline-block brightness-[0] invert'
                                />
                            </small>
                        </span>
                        <div className='px-2'>
                            <h6 className='2xl:-[6.25rem] truncate text-[0.81rem] font-semibold md:w-[10rem] lg:w-[5rem] xl:w-[5rem]'>
                                justin Bieber
                            </h6>
                            <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]'>
                                Fusce sagittis...
                            </p>
                        </div>
                        <span className='cursor-pointer px-2 text-lg text-[#FF2663] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                            <i className='bi bi-suit-heart'></i>
                        </span>
                    </div> */}
                </div>
            </div>
            <div className='mt-5 rounded-2xl bg-[#2A2929] px-5 py-5'>
                <h6 className='text-[0.94rem] font-bold'>Mood</h6>
                <hr className='mt-3 opacity-10' />
                <div className='playLists mb-3 mt-3 h-[22rem] overflow-y-auto overflow-x-hidden [scrollbar-width:none]'>
                    <div className='moods'>
                        <a
                            href=''
                            className='rounded-full mt-5 flex items-center justify-between border-1 border-solid border-[#5a5a5a] bg-[#383737] px-5 py-1 pr-1'>
                            <div>
                                <h6 className='text-xs font-semibold'>Happy</h6>
                                <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E]'>
                                    Convallis vitae..
                                </p>
                            </div>
                            <span className='relative w-[3.44rem] flex-[0_0_3.44rem]'>
                                <img
                                    src='/images/songs/6.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='relative inline-block h-[3.44rem] w-[3.44rem] rounded-full object-cover'
                                />
                            </span>
                        </a>
                    </div>
                    <div className='moods'>
                        <a
                            href=''
                            className='rounded-full mt-5 flex items-center justify-between border-1 border-solid border-[#5a5a5a] bg-[#383737] px-5 py-1 pr-1'>
                            <div>
                                <h6 className='text-xs font-semibold'>Sad</h6>
                                <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E]'>
                                    Convallis vitae..
                                </p>
                            </div>
                            <span className='relative w-[3.44rem] flex-[0_0_3.44rem]'>
                                <img
                                    src='/images/songs/6.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='relative inline-block h-[3.44rem] w-[3.44rem] rounded-full object-cover'
                                />
                            </span>
                        </a>
                    </div>
                    <div className='moods'>
                        <a
                            href=''
                            className='rounded-full mt-5 flex items-center justify-between border-1 border-solid border-[#5a5a5a] bg-[#383737] px-5 py-1 pr-1'>
                            <div>
                                <h6 className='text-xs font-semibold'>Fun</h6>
                                <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E]'>
                                    Convallis vitae..
                                </p>
                            </div>
                            <span className='relative w-[3.44rem] flex-[0_0_3.44rem]'>
                                <img
                                    src='/images/songs/6.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='relative inline-block h-[3.44rem] w-[3.44rem] rounded-full object-cover'
                                />
                            </span>
                        </a>
                    </div>
                    <div className='moods'>
                        <a
                            href=''
                            className='rounded-full mt-5 flex items-center justify-between border-1 border-solid border-[#5a5a5a] bg-[#383737] px-5 py-1 pr-1'>
                            <div>
                                <h6 className='text-xs font-semibold'>Romance</h6>
                                <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E]'>
                                    Convallis vitae..
                                </p>
                            </div>
                            <span className='relative w-[3.44rem] flex-[0_0_3.44rem]'>
                                <img
                                    src='/images/songs/6.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='relative inline-block h-[3.44rem] w-[3.44rem] rounded-full object-cover'
                                />
                            </span>
                        </a>
                    </div>
                    <div className='moods'>
                        <a
                            href=''
                            className='rounded-full mt-5 flex items-center justify-between border-1 border-solid border-[#5a5a5a] bg-[#383737] px-5 py-1 pr-1'>
                            <div>
                                <h6 className='text-xs font-semibold'>Sad</h6>
                                <p className='w-[6.25rem] truncate text-xs text-[#8E8E8E]'>
                                    Convallis vitae..
                                </p>
                            </div>
                            <span className='relative w-[3.44rem] flex-[0_0_3.44rem]'>
                                <img
                                    src='/images/songs/6.webp'
                                    alt='play'
                                    loading='lazy'
                                    className='relative inline-block h-[3.44rem] w-[3.44rem] rounded-full object-cover'
                                />
                            </span>
                        </a>
                    </div>
                </div>
                <center>
                    <span className='inline-block text-center'>
                        <a
                            href='#'
                            className='rounded-full inline-block h-[2.50rem] border-1 border-solid border-[#d3d3d3a1] px-11 text-xs font-semibold leading-[2.50rem] text-white transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                            View all
                        </a>
                    </span>
                </center>
            </div>
        </>
    )
}

export default RightSidebar
