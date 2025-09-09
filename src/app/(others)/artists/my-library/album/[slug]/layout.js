import Link from "next/link";
import { notFound } from "next/navigation";

const MyLibraryLayout = async ({ params, children }) => {
    const { slug } = await params;
    console.log("Sluyg====>", slug);
    // if (slug !== "draft-song" || slug !== "published_song") {
    //     return notFound();
    // }
    return (
        <div className="py-4 px-4">
            <div className="flex justify-between">
                <h1 className="text-[1.56rem] font-semibold mb-5">My Library</h1>
                <ul className="flex">
                    <li><Link href="/artists/my-library/album/draft-album"
                        className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300 ${slug === "draft-album" ?
                            "bg-gradient-to-r from-[#D344C9] to-[#2D2694]"
                            : ""}`}>Draft</Link>
                    </li>
                    <li><Link href="/artists/my-library/album/published-album"
                        className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300  ${slug === "published-album" ?
                            "bg-gradient-to-r from-[#D344C9] to-[#2D2694]"
                            : ""}`}>Published</Link>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    )
}

export default MyLibraryLayout;