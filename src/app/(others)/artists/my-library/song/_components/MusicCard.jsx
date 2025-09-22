"use client"

import { useMemo } from "react";
import { DELETE_ICON, EDIT_ICON, PAUSE_ICON, PUBLISH_ICON } from "@/utils/icons";
import Image from "next/image";
import ActionModal from "./ActionModal";
import Link from "next/link";
import { postToAddSongToPublish } from "@/services/api/user-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import usePlayer from "@/hooks/usePlayer";
import queryConstants from "@/constants/query-constants";
import { addToFavorite } from '@/services/api/album-ep'
import BuySongButton from "./BuySongButton";
import { downloadSongById, postInAppDownload } from "@/services/api/song-api-service";

const MusicCard = ({ track, tracks, likable = true, drift, publish, onActionComplete, showing = true }) => {
    const player = usePlayer()
    const queryClient = useQueryClient()
    const router = useRouter()
    const { user } = useAuth();

    console.log("Music Card====>", track);

    const handleSongPlay = () => {
        player.clearCachedState();
        if (player.isCurrentSong(track?._id)) {
            player.togglePlayback()
        } else {
            player.playTrack({ track, tracks })
        }
    }

    const isLoading = useMemo(() => {
        return player.isCurrentSong(track?._id) && player.status === 'loading'
    }, [player, track?._id])

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus } =
        useMutation({
            mutationKey: [queryConstants.addToFavorite],
            mutationFn: addToFavorite,
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: [queryConstants.getSongs],
                })
                toast.success(data?.message ?? "Song added to favourite successfully")
            },
            onError: (error) => {
                toast.error(error?.message)
            },
        })

    const handleLike = () => {
        addToFavoriteMutate({ type: 'song', id: track._id })
    }

    const publishSongById = async (id) => {
        const resp = await postToAddSongToPublish(id)
        if (resp.status === "success") {
            toast.success(resp.message)
            onActionComplete?.()
        } else {
            toast.error("Error publishing song.")
        }
    }

    const handelInAppDownload = async (id) => {
        const reqObj = {
            id: id,
            type: "song"
        }
        postInAppDownload(reqObj).then((res) => {
            toast.success(res.message)
            onActionComplete?.()
        })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const handelDownloadSong = async (id) => {
        const resp = await downloadSongById(id)
        if (resp.status === 200) {
            const contentDisposition = resp.headers['content-disposition'];
            let fileName = track?.title || 'download.mp3'; // Use fileName from JSON or fallback
            if (contentDisposition && contentDisposition.includes('attachment')) {
                const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                if (filenameMatch && filenameMatch[1]) {
                    fileName = filenameMatch[1]; // Prefer Content-Disposition filename
                }
            }

            // Convert file response to Blob and trigger download
            const contentType = resp.headers['content-type'] || 'audio/mpeg';
            const blob = new Blob([resp.data], { type: contentType });
            const url = window.URL.createObjectURL(blob);
            downloadFile(url, fileName);
            window.URL.revokeObjectURL(url);
        }
    }

    const downloadFile = (url, fileName) => {
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <div className="mb-3 md:mb-0 hover:bg-[#484848] transition-colors duration-300 p-3 rounded-[0.75rem] cursor-pointer">
                <div className="relative mb-2">
                    <img src={track?.artwork} alt="skipBack" loading="lazy"
                        className="rounded-[0.75rem] w-full h-[170px]" />
                    <div className="absolute bottom-[1rem] px-4 flex justify-between items-end w-full">
                        <h6 className="text-sm font-semibold">$ {track?.amount ?? 0}</h6>
                        <BuySongButton songId={track?._id} />
                    </div>
                </div>
                <h5><a href="#" className="text-sm font-semibold">{track?.title}</a></h5>
                <p className="text-xs text-[#9D9D9D]">{track?.artist}</p>
                <div className="flex justify-between mt-2">
                    <span
                        className="bg-[#2A2929] px-2 py-1 group rounded-full text-white font-semibold text-xs flex">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                            className="stroke-current text-[#4D41FA] mr-1" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="6.68408" cy="7.81589" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <ellipse cx="10.4741" cy="5.92112" rx="1.26319" ry="1.26316" stroke-width="1.2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M8.77994 2.53034C8.13148 2.27302 7.42442 2.13159 6.68434 2.13159C3.54496 2.13159 1 4.6765 1 7.8158C1 10.9551 3.54496 13.5 6.68434 13.5C9.30635 13.5 11.5137 11.7248 12.1701 9.31069"
                                stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.7373 5.92105V1.5L13.0005 2.76316" stroke-width="1.2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        {track?.play_count}
                    </span>
                    <ul className="flex">
                        <li className="ml-2">
                            <button
                                onClick={handleSongPlay}
                                className="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">

                                {player.isCurrentSong(track?._id) &&
                                    player.status === 'playing' ? (
                                    <Image src={PAUSE_ICON?.src} height={10} width={10} alt="Click to Pause" />
                                ) : (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fill-current text-[#4D41FA] group-hover:text-black">
                                        <path
                                            d="M2.38357 0.57942C1.09896 1.01023 0.875 3.31888 0.875 4.99793C0.875 6.67698 1.09896 8.93045 2.38357 9.41649C3.66821 9.90253 9.125 6.88687 9.125 4.99793C9.125 3.109 3.75071 0.115472 2.38357 0.57942Z" />
                                    </svg>
                                )}
                            </button>
                        </li>
                        {track?.isSongDownLoad && <li className="ml-2">
                            <button
                                onClick={() => handelDownloadSong(track._id)}
                                className="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group"
                            >
                                <svg
                                    width={9}
                                    height={12}
                                    viewBox="0 0 9 12"
                                    fill="none"
                                    className="stroke-current text-[#4D41FA] group-hover:text-white transition-colors duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.04883 10.4878H7.48785"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </li>}
                        {!showing && <li className="ml-2">
                            <button
                                className="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] " onClick={handleLike}
                            >
                                <svg
                                    width={11}
                                    height={9}
                                    viewBox="0 0 11 9"
                                    fill="none"
                                    className="stroke-current text-[#F844B0] group-hover:text-white transition-colors duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.7998 5.37535L6.58936 7.58579C5.80831 8.36684 4.54199 8.36684 3.76094 7.58579L1.5505 5.37535C0.549575 4.37442 0.549574 2.75161 1.5505 1.75069C2.55142 0.74977 4.17423 0.74977 5.17515 1.75069C6.17607 0.74977 7.79888 0.74977 8.7998 1.75069C9.80073 2.75161 9.80073 4.37442 8.7998 5.37535Z"
                                        fill={track?.liked ? "#F844B0" : "#2F2F2F"}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </li>}
                        {!publish && showing && <li className="ml-2">
                            <button
                                className="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group" onClick={() => publishSongById(track?._id)}>
                                <Image src={PUBLISH_ICON?.src} alt="Click to publish song" height={10} width={10} />
                            </button>
                        </li>}
                        {showing && <li className="ml-2">
                            <Link href={`/artists/update-song/${track?._id}`}
                                className="bg-white w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group ">
                                <Image src={EDIT_ICON?.src} alt="Click to edit" height={10} width={10} />
                            </Link>
                        </li>}
                        {showing && <li className="ml-2">
                            <ActionModal trackId={track?._id} onActionComplete={onActionComplete} />
                        </li>}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MusicCard;