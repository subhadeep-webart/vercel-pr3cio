import { publicImages } from "@/utils/publicImages";
import Link from "next/link";

const PlaylistCard = ({ playlistDetails }) => {
    const { title, thumbnail, _id } = playlistDetails;
    return (
        <Link className="songlist relative mt-4 flex items-center pb-4 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']" href={`/playlist/playlist-details/${_id}`}>
            <span className='w-[2.63rem] flex-[0_0_2.63rem] shadow-2xl'>
                <img
                    src={thumbnail ?? publicImages.noPlaylistImage}
                    alt='play'
                    loading='lazy'
                    className='relative inline-block h-[2.63rem] w-[2.63rem] rounded-[0.63rem] object-cover shadow-2xl'
                />
            </span>
            <div className='px-2 w-full'>
                <h6 className='truncate text-[0.81rem] font-semibold w-full'>
                    {title}
                </h6>
                <p className='truncate text-xs text-[#8E8E8E] w-full line-clamp-1'>
                    Playlist. sceleris Playlist. scelerisPlaylist.
                    sceleris...
                </p>
            </div>
            {/* <span className='cursor-pointer px-2 text-lg text-[#8E8E8E] sm:px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5'>
                <i className='bi bi-plus-circle'></i>
            </span> */}
        </Link>
    )
}

export default PlaylistCard;