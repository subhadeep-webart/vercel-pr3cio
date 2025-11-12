const CreditCard = ({ creditDetails }) => {
    return (
        <div
            className="songlist flex justify-between items-center mt-3 relative after:content-[''] after:absolute after:bg-[url('/images/artist/line2.webp')] after:w-full after:h-[0.06rem]  after:bottom-0  after:left-0 after:z-0 pb-3">
            {/* <span className="w-[2.63rem] flex-[0_0_2.63rem] relative">
                <img src="/images/songs/5.webp" alt="play" loading="lazy"
                    className=" inline-block relative w-[2.63rem] h-[2.63rem] object-cover rounded-full" />
            </span> */}
            <div className="px-2">
                <h6
                    className="font-semibold text-[0.81rem] truncate md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:-[6.25rem]">
                    {creditDetails?.name}</h6>
                <p
                    className="text-xs truncate w-[6.25rem] text-[#8E8E8E] md:w-[10rem] lg:w-[5rem] xl:w-[5rem] 2xl:w-[6.25rem]">
                    {creditDetails?.role}</p>
            </div>
            {/* <span
                className="text-xs text-[#C6FF00] px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 cursor-pointer">Follow</span> */}

        </div>
    )
}

export default CreditCard;