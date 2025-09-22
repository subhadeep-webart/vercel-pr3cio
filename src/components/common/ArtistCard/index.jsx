const ArtistCard = ({ maxSizeDiv, maxSizeImg }) => {
    return (
        <>
            <div className='group mb-3 rounded-[0.75rem] p-3 transition-colors duration-300 hover:bg-[#484848] md:mb-0'>
                <a href='/artists/bio'>
                    <center>
                        <div
                            className='relative mb-2 rounded-full border-1 border-[#585858] p-3 
                                transition-colors duration-300 group-hover:border-[#D344C9]'
                            style={{ maxWidth: maxSizeDiv, maxHeight: maxSizeDiv }}
                        >
                            <img
                                src='/images/artist/5.webp'
                                alt='skipBack'
                                loading='lazy'
                                className=' w-full  rounded-full'
                                style={{ maxWidth: maxSizeImg, maxHeight: maxSizeImg }}
                            />

                            <span className='absolute bottom-[1rem] right-0 flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-[#C6FF00] text-center opacity-0 transition-colors duration-300 group-hover:opacity-100'>
                                <svg
                                    width='20'
                                    height='18'
                                    viewBox='0 0 20 18'
                                    fill='none'
                                    className='stroke-current text-black'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M10.0002 16.5C5.8335 16.5 0.833496 12.3333 0.833496 9C0.833496 5.66667 5.8335 1.5 10.0002 1.5C14.1668 1.5 19.1668 5.66667 19.1668 9C19.1668 12.3333 14.1668 16.5 10.0002 16.5ZM10.0002 4.83333C8.89509 4.83333 7.83529 5.27232 7.05388 6.05372C6.27248 6.83512 5.8335 7.89493 5.8335 9C5.8335 10.1051 6.27248 11.1649 7.05388 11.9463C7.83529 12.7277 8.89509 13.1667 10.0002 13.1667C11.1052 13.1667 12.165 12.7277 12.9464 11.9463C13.7278 11.1649 14.1668 10.1051 14.1668 9C14.1668 7.89493 13.7278 6.83512 12.9464 6.05372C12.165 5.27232 11.1052 4.83333 10.0002 4.83333Z'
                                        stroke-width='2'></path>
                                </svg>
                            </span>
                        </div>
                        <h3 className='text-sm font-semibold'>
                            Maecenas biben
                        </h3>
                        <small className='text-xs text-[#9D9D9D]'>
                            Artist
                        </small>
                    </center>
                </a>
            </div>
        </>
    )
};

export default ArtistCard;

