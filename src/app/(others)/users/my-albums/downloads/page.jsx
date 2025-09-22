"use client"

import MusicCardSkeleton from "@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton"
import AlbumCard from "@/components/common/AlbumCard"
import queryConstants from "@/constants/query-constants"
import { getInAppDownloadList } from "@/services/api/song-api"
import { useQuery } from "@tanstack/react-query"
import SongPlayingAnimation from "@/components/animatedgif/SongPlayingAnimmation"
import NoDataFound from "@/components/NoDataFound"
import NoAlbumFoundComponent from "../_components/NoAlbumFoundComponent"

const DownloadsPage = () => {
    const {
        data: albumData,
        isLoading: albumsLoading,
        error: albumsError,
        status
    } = useQuery({
        queryKey: [queryConstants.inAppDownload, { type: 'album' }],
        queryFn: () => getInAppDownloadList({ type: 'album' }),
    })

    const albumList = (albumData?.album || []).filter((album) => album !== null);

    if (status === "success" && !albumList.length) {
        return <NoDataFound component={<NoAlbumFoundComponent message={"Oops! Looks like you haven’t downloaded any albums yet. 🎵 Go ahead and grab your favorite tracks — or treat yourself to something new! 💿✨"} />} />
    }
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                {status === "pending" && Array.from({ length: 5 }).map((_, i) => (
                    <MusicCardSkeleton key={`skeleton-${i + 1}`} />
                ))}
                {status === "success" &&
                    albumList.map((album) => (
                        <AlbumCard
                            key={album._id}
                            albumDetails={albumList}
                        />
                    ))}

                {status === "error" && (
                    <p className="text-red-500">Failed to load albums.</p>
                )}
            </div>
        </>
    )
}

export default DownloadsPage;