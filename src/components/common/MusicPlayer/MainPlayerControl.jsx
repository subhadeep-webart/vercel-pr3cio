import VolumeControl from "@/app/(others)/artists/_components/VolumeControl";
import { PAUSE_ICON } from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";
const MainPlayerControl = ({
    isPlaying,
    isLoading,
    onPlayPause,
    onNext,
    onPrevious,
    playerStatus
}) => {
    const [isShuffleActive, setIsShuffleActive] = useState(false)
    const [isLoopActive, setIsLoopActive] = useState(false)
    return (
        <>
            <ul
                className="flex justify-center items-center absolute left-0 right-0 m-auto top-[calc(100%+1.25rem)] z-50">
                <li className="px-2 sm:px-2 md:px-2 xl:px-1 2xl:px-2">
                    <button
                        onClick={() => setIsShuffleActive(prevShuffleActive => !prevShuffleActive)}
                        className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs"><img
                            src="/images/player-icon/repeat-big.png" alt="shuffle"
                            loading="lazy" /></button>
                </li>
                <li className="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2"><button
                    onClick={onPrevious}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs"><img
                        src="/images/player-icon/skipBack-big.webp" alt="skipBack"
                        loading="lazy" className="w-[1.19rem]" /></button>
                </li>
                <li className="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2">
                    <button id="playBtn2"
                        className="w-[3.00rem] h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center  flex justify-center items-center rounded-full playBtn" onClick={onPlayPause} disabled={isLoading}>
                        {
                            isPlaying ? (
                                <Image src={PAUSE_ICON?.src} height={10} width={10} alt="Click to Pause" />
                            ) : (
                                <img
                                    src="/images/player-icon/play.webp" alt="play" loading="lazy"
                                    className="playIcon" id="playIcon2" />
                            )}
                    </button>
                </li>

                <li className="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2"><button
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs" onClick={onNext}><img
                        src="/images/player-icon/skipFwd-big.png" alt="skipFwd"
                        loading="lazy" className="w-[1.19rem]" /></button></li>
                {/* <li className="px-2 sm:px-2 md:px-1 xl:px-2 2xl:px-2 pr-0"><button
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] w-[1.88rem] h-[1.88rem] rounded-full backdrop-blur-xs" onClick={() => setIsLoopActive(!isLoopActive)}><img
                        src="/images/player-icon/repeat-big.png" alt="repeat"
                        loading="lazy" /></button>
                </li> */}
                <li>
                    <VolumeControl />
                </li>
            </ul>
        </>
    )
}

export default MainPlayerControl;