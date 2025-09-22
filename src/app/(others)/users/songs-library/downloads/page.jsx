import MusicCard from '@/app/(others)/artists/my-library/song/_components/MusicCard';
import MusicCardSkeleton from "@/app/(others)/artists/my-library/song/_components/MusicCardSkeleton";
import NoDataFound from '@/components/NoDataFound';
import queryConstants from "@/constants/query-constants";
import { getInAppDownloadList } from "@/services/api/song-api";
import { useQuery } from "@tanstack/react-query";
import NoSongFoundComponent from '../_components/NoSongFoundComponent';

const DownloadSongs = () => {
    const {
        data: songData,
        isLoading: songsLoading,
        error: songsError,
    } = useQuery({
        queryKey: [queryConstants.inAppDownload, { type: 'song' }],
        queryFn: () => getInAppDownloadList({ type: 'song' }),
    })
    const songList = (songData?.song || []).filter((song) => song !== null)

    if (status === "success" && !songList.length) {
        return <NoDataFound component={<NoSongFoundComponent message={"Your favorites list is feeling a little lonely. 💔 Start adding songs you love and we’ll keep them right here for you! ❤️🎶"} />} />
    }


    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
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
            </div>
        </>
    )
}

export default DownloadSongs;