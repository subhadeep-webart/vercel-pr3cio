import Image from "next/image";
import usePlayer from "@/hooks/usePlayer";
import { PAUSE_ICON } from "@/utils/icons";

const TrendingSongCard = ({ song,songs, index }) => {
    const player = usePlayer();

    const handleSongPlay = (song) => {
        if (!songs) return
        player.clearCachedState()
        if (player.isCurrentSong(song._id)) {
            player.togglePlayback()
        } else {
            player.playTrack({ track: song, tracks: songs })
        }
    }

    return (
        <div className="songlist relative mt-5 flex items-center justify-between pb-5 after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[0.06rem] after:w-full after:bg-[url('/images/artist/line2.webp')] after:content-['']">
            <span className='pr-3 text-[0.81rem]'>
                {index + 1}
            </span>
            <span className=''>
                <img
                    src={song.artwork}
                    alt='play'
                    loading='lazy'
                    className='relative inline-block h-[2.19rem] w-[2.19rem] object-cover'
                />
            </span>
            <div className='flex-1 px-3'>
                <h6 className='text-[0.81rem] font-semibold line-clamp-1'>
                    {song.title}
                </h6>
                <p className='text-[0.63rem] line-clamp-1'>
                    {song.artist}
                </p>
            </div>
            <span className='mr-3 flex h-[1.31rem] w-[1.31rem] cursor-pointer items-center justify-center rounded-full bg-[#D3D7E4] leading-[1.31rem]'>
                <button
                    onClick={() =>
                        handleSongPlay(
                            song
                        )
                    }
                    className='group flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full bg-white'>
                    {player.isCurrentSong(
                        song?._id
                    ) &&
                        player.status ===
                        'playing' ? (
                        <Image
                            src={
                                PAUSE_ICON?.src
                            }
                            height={10}
                            width={10}
                            alt='Click to Pause'
                        />
                    ) : (

                        <img
                            src='/images/player-icon/play2.webp'
                            alt='play'
                            loading='lazy'
                            className=''
                        />

                    )}
                </button>
                {/* <img
                                        src='/images/player-icon/play2.webp'
                                        alt='play'
                                        loading='lazy'
                                        className=''
                                    /> */}
            </span>
            <span className='pl-3 text-sm font-semibold w-14'>
                $ {song.amount?.toFixed(2)}
            </span>
        </div>
    )
}

export default TrendingSongCard;