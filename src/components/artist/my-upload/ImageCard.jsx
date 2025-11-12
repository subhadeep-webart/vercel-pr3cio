const ImageCard=({img,index,setOpenDeleteImage,setImgUrl})=>{
      const handleDelete = (imgUrl) => {
        setImgUrl(imgUrl)
        setOpenDeleteImage(true)
    };

    return(
        <>
          <div className='group relative mb-2'>
                            <img
                                src={img}
                                alt={`uploaded-${index}`}
                                loading='lazy'
                                className='h-[8.13rem] md:h-[10.13rem] w-full rounded-[0.75rem] object-cover'
                            />

                            <button
                                onClick={() => handleDelete(img)}
                                className='absolute bottom-[-1.5rem] left-0 right-0 m-auto w-full max-w-[13.06rem] text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                                <div className='inline-flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-[#fff] text-sm text-black hover:bg-[#FF2663]'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 17 19'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='stroke-current text-[#000]'>
                                        <path
                                            d='M3.35742 5.28595V15.2859C3.35742 16.3905 4.25285 17.2859 5.35742 17.2859H11.6431C12.7477 17.2859 13.6431 16.3905 13.6431 15.2859V5.28595'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M1.64355 5.28595H15.3578'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M4.21484 5.28551L5.92913 1.85693H11.072L12.7863 5.28551'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
        </>
    )
};

export default ImageCard;