import SongsCard from "@/app/(others)/albums/_components/SongsCard"
import queryConstants from "@/constants/query-constants"
import { getSongs } from "@/services/api/song-api"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const LatestSongs = () => {
    const { data, status } = useQuery({
        queryKey: [queryConstants.getSongs, true],
        queryFn: ({ pageParam = 1 }) =>
            getSongs({
                page: pageParam,
                limit: 5,
                is_trending: false,
            }),
    })

    const songs = data?.data ?? []
    console.log("Data========>", songs);
    const total = data?.total
    return (
        <div className='mt-5 rounded-[27px] bg-[#2A2929] px-6 py-6'>
            <div className="w-full flex justify-between items-center">
                <h3 className="text-base md:text-xl font-semibold mb-4 mt-3">Latest Songs</h3>
                <span className='inline-block text-center'>
                    <Link
                        // href='/browse'
                        href='/users/songs/latests'
                        className='inline-block h-[1.88rem] rounded-[27px] border-1 border-solid border-[#d3d3d3a1] px-8 text-xs font-semibold leading-[1.88rem] text-[#F9FF45] transition-colors hover:bg-[rgba(249,255,69,0.82)] hover:text-black'>
                        View all {total}
                    </Link>
                </span>
            </div>
            <div className="mb-10 w-full">
                {
                    songs.map((song, index) => (<SongsCard track={song} tracks={data} key={index} />))
                }
            </div>
        </div>
    )
}

export default LatestSongs;