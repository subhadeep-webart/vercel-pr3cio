const GalleryImageCard = ({ image, handleClick, selectedImage }) => {
    return (
        <div
            className={`bg-[#282828] border border-solid rounded-[0.75rem] flex justify-center items-center p-2
    ${selectedImage === image ? 'outline-2 border-[#676767] scale-110' : 'outline-1'} outline-[#676767] outline-offset-2
    transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(image)}
        >
            <img
                src={image}
                alt="skipBack"
                loading="lazy"
                className="rounded-full h-[4.67rem] object-cover"
            />
        </div>
    )
}

export default GalleryImageCard;