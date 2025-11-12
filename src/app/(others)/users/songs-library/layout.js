"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const SongsLibraryLayout = ({ children }) => {
    const pathname=usePathname();
    return (
        <>
            <div className="flex items-start flex-wrap w-full justify-end">
                <div className="bg-[#2B2B2B] rounded-[0.75rem] p-6 md:w-[calc(100%-1rem)] md:float-right w-full ml-2 md:ml-0">
                    <div className="flex justify-between">
                        <h1 className="text-base md:text-[1.56rem] font-semibold mb-5">My Songs</h1>
                        <ul className="flex">
                            <li>
                                <Link href="/users/songs-library/favourites" className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300 ${pathname === "/users/songs-library/favourites" ? "bg-gradient-to-r from-[#D344C9] to-[#2D2694]" : ""}`}>
                                    Liked
                                </Link>
                            </li>
                            <li>
                                <Link href="/users/songs-library/downloads" className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300 ${pathname === "/users/songs-library/downloads" ? "bg-gradient-to-r from-[#D344C9] to-[#2D2694]" : ""}`}>
                                    Download
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default SongsLibraryLayout;