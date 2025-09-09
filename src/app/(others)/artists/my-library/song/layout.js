import Link from "next/link";
const SongLayout = ({ children }) => {
    return (
        <>
            <div className="flex justify-between py-2">
                {/* <h1 className="text-[1.56rem] font-semibold mb-5">My Library</h1> */}
                <ul className="flex">
                    <li><Link href="/artist/my-library/song/draft-song"
                        className={`bg-[#373437] ml-2 rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300 bg-gradient-to-r from-[#D344C9] to-[#2D2694]`}>Song</Link>
                    </li>
                    <li><Link href="/artists/my-library/album/draft-album"
                        className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300`}>Album</Link>
                    </li>
                </ul>
            </div>
            {children}
        </>
    )
}

export default SongLayout;