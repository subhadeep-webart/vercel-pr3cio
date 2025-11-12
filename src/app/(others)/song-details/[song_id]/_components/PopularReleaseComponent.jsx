import SongsCard from "@/app/(others)/albums/_components/SongsCard";
import MusicCard from "@/app/(others)/artists/my-library/song/_components/MusicCard";

const PopularReleaseComponent = ({ trendingSongByArtist }) => {
    console.log("trendingSongByArtist",trendingSongByArtist)
    return (
        <>
            <h3 className="md:text-2xl text-base font-semibold mb-4">Popular Songs by {trendingSongByArtist?.[0]?.artist}</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
                {
                    trendingSongByArtist.map((song) => (<MusicCard track={song}
                        tracks={trendingSongByArtist}
                        // onActionComplete={handleRefetch}
                        showing={false} key={song?._id} />))
                }
            </div>
        </>
    )
}

export default PopularReleaseComponent;