import AlbumCard from "@/components/common/AlbumCard";

const PopularAlbumComponent = ({ trendingAlbumByArtist }) => {
    console.log("trendingAlbumByArtist",trendingAlbumByArtist)
    return (
        <>
            <h3 className="md:text-2xl text-base font-semibold mb-4 mt-3">Popular Albums by Artist</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                {
                    trendingAlbumByArtist?.map((album) => (
                        <AlbumCard albumDetails={album} key={album?._id} />
                    ))
                }
            </div>
        </>
    )
}

export default PopularAlbumComponent;