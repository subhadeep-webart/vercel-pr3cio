import usePlayer from "@/hooks/usePlayer";
import { PAUSE_ICON } from "@/utils/icons";
import Image from "next/image";

const SongDetailsContainer = ({ song, handleLike }) => {
    const player = usePlayer();
    const handleSongPlay = (e) => {
        console.log("Song======>", song);
        e.preventDefault();
        e.stopPropagation();
        if (!song) return
        player.clearCachedState()
        if (player.isCurrentSong(song._id)) {
            player.togglePlayback()
        } else {
            player.playTrack({ track: song, tracks: [] })
        }
    }
    return (
        <>
            <span className="w-[13.19rem] flex-[0_0_13.19rem] block mr-6">
                <img src={song?.artwork ?? "/images/songs/10.webp"} alt="songs"
                    className="w-full h-[15.00rem] object-cover rounded-[0.75rem]" />
            </span>
            <div className="grow mt-14">
                <h3 className="md:text-2xl text-base font-semibold line-clamp-1">{song?.title}</h3>
                <small className="text-sm text-[#979797] line-clamp-3">{song?.description}</small>
                <p className="text-[#F844B0] text-xs mb-10">{song?.artist}</p>

                <button
                    onClick={handleSongPlay}
                    className="w-[2.63rem] h-[2.63rem] inline-flex justify-center items-center bg-[#C6FF00] rounded-full group cursor-pointer">
                    {player.isCurrentSong(song?._id) &&
                        player.status === 'playing' ? (
                        <Image src={PAUSE_ICON?.src} height={10} width={10} alt="Click to Pause" />
                    ) : (
                        <svg width="15" height="15" viewBox="0 0 10 10" fill="none" className="fill-current text-black"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                        </svg>
                    )}

                </button>
                <button
                    onClick={handleLike}
                    className="w-[1.75rem] h-[1.75rem] inline-flex justify-center items-center bg-[#2F2F2F] rounded-full group cursor-pointer border-1 border-[#989898] border-solid ml-2">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                            fill={song?.liked ? "#F844B0" : "#2F2F2F"} stroke="#F844B0" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default SongDetailsContainer;