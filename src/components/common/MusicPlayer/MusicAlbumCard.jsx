import { ALBUM_IMAGE_LAYOUT } from "@/utils/constant";

const MusicAlbumCard = ({ musicDetails, index }) => {
    const layout = ALBUM_IMAGE_LAYOUT[index];

    console.log("Layout=======>", layout);
    return (
        <>
            <span
                key={musicDetails._id || index}
                className={`
        absolute z-1 
        ${layout.rotate} ${layout.position} 
        after:content-[''] after:absolute after:w-full after:h-full 
        after:top-0 after:left-0 after:right-0 after:z-0 
        after:bg-[rgba(0,0,0,0.5)] after:opacity-0 
        after:transition-colors after:delay-300 
        active:after:opacity-100 
        cursor-pointer overflow-hidden rounded-[0.50rem]
      `}
            >
                <img
                    src={musicDetails?.artwork}
                    alt="cover"
                    loading="lazy"
                    className={`${layout.size} object-cover`}
                />
            </span>
        </>
    )
}

export default MusicAlbumCard;