import ArtistCard from "@/app/(others)/artists/_components/artist-card"
import queryConstants from "@/constants/query-constants"
import { getAllArtists } from "@/services/api/artist-api"
import { useQuery } from "@tanstack/react-query"

const YouMayAlsoLikeComponent = () => {
    const { data, status } = useQuery({
        queryKey: [queryConstants.getAllArtists, { type: 'popular' }],
        queryFn: () => getAllArtists({ page: 1, limit: 4, type: "popular" }),
    })
    console.log('datatest', data)

    const artists = data?.artist || []
    console.log('artists', artists)
    return (
        <>
            <h3 className="md:text-2xl text-base font-semibold mb-4 mt-3">You may also like</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                {
                    artists.map((artist) => (<ArtistCard key={artist._id}
                        data={{
                            _id: artist._id,
                            name: artist.name,
                            image: artist.avatar,
                        }} key={artist?._id} />))
                }
            </div>
        </>
    )
}

export default YouMayAlsoLikeComponent;