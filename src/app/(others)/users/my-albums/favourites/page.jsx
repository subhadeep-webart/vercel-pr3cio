"use client"

import MusicCardSkeleton from "@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton"
import AlbumCard from "@/components/common/AlbumCard"
import NoDataFound from "@/components/NoDataFound"
import queryConstants from "@/constants/query-constants"
import { getFavoritesList } from "@/services/api/song-api"
import { useQuery } from "@tanstack/react-query"
import NoAlbumFoundComponent from "../_components/NoAlbumFoundComponent"

const Favourites = () => {
    const {
        data: albumData,
        isLoading: albumsLoading,
        error: albumsError,
        status
    } = useQuery({
        queryKey: [queryConstants.getFavoriteSongsList, { type: 'album' }],
        queryFn: () => getFavoritesList({ type: 'album' }),
    })

    const albumList = (albumData?.album || []).filter((album) => album !== null)

    console.log("Albums List======>", albumList);

    if (status === "success" && !albumList.length) {
        return <NoDataFound component={<NoAlbumFoundComponent message={"Your favorites list is feeling a little lonely. 💔 Start adding albums you love and we’ll keep them right here for you! ❤️🎶"}/>} />
    }

    return (
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
    )
}

export default Favourites