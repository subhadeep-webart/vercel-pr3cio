"use client"

import NoDataFound from "@/components/NoDataFound";
import queryConstants from "@/constants/query-constants";
import { getPurchasedList } from "@/services/api/song-api";
import { useQuery } from "@tanstack/react-query";
import NoAlbumFoundComponent from "../../my-albums/_components/NoAlbumFoundComponent";
import MusicCardSkeleton from "@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton";
import AlbumCard from "@/components/common/AlbumCard";

const PurchaseAlbum = () => {
    const {
        data: albumData,
        isLoading: albumsLoading,
        error: albumsError,
        status
    } = useQuery({
        queryKey: [queryConstants.downloadMusicProduct, { type: 'album' }],
        queryFn: () => getPurchasedList({ type: 'album' }),
    })

    if (status === "success" && !albumData?.data?.length) {
        return <NoDataFound component={<NoAlbumFoundComponent message={"Oops! Looks like you haven’t downloaded any albums yet. 🎵 Go ahead and grab your favorite tracks — or treat yourself to something new! 💿✨"} />} />
    }

    const albumList = albumData?.data ?? []
    console.log("Albums Lists=====>", albumList);

    return (
        <>

            {status === "pending" && Array.from({ length: 5 }).map((_, i) => (
                <MusicCardSkeleton key={`skeleton-${i + 1}`} />
            ))}
            {status === "success" &&
                albumList.map((album) => (
                    <AlbumCard
                        key={album._id}
                        albumDetails={album}
                    />
                ))}

            {status === "error" && (
                <p className="text-red-500">Failed to load albums.</p>
            )}
        </>
    )
}

export default PurchaseAlbum;