"use client"

import MusicCard from "@/app/(others)/artists/my-library/song/_components/MusicCard";
import MusicCardSkeleton from "@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton";
import queryConstants from "@/constants/query-constants";
import { getPurchasedList } from "@/services/api/song-api";
import { useQuery } from "@tanstack/react-query";

const PurchaseSong = () => {
    const {
        data: songsData,
        isLoading: songsLoading,
        error: songError,
        status
    } = useQuery({
        queryKey: [queryConstants.downloadMusicProduct, { type: 'song' }],
        queryFn: () => getPurchasedList({ type: 'song' }),
    })

    if (status === "success" && !songsData?.data?.length) {
        return <NoDataFound component={<NoSongFoundComponent message={"Your favorites list is feeling a little lonely. 💔 Start adding songs you love and we’ll keep them right here for you! ❤️🎶"} />} />
    }

    const songList = songsData?.data ?? [];

    return (
        <>

            {status === "pending" && Array.from({ length: 5 }).map((_, i) => (
                <MusicCardSkeleton key={`skeleton-${i + 1}`} />
            ))}

            {status === "success" &&
                songList.map((song) => (
                    <MusicCard
                        key={song._id}
                        track={song}
                        tracks={songList}
                        // onActionComplete={handleRefetch}
                        showing={false}
                    />
                ))}

            {status === "error" && (
                <p className="text-red-500">Failed to load songs.</p>
            )}

        </>
    )
}

export default PurchaseSong;
