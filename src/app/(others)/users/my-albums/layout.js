"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyAlbumLayout = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            <div className="flex items-start flex-wrap w-full justify-end">
                <div className="bg-[#2B2B2B] rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                    <div className="flex justify-between">
                        <h1 className="text-[1.56rem] font-semibold mb-5">Albums</h1>
                        <ul className="flex">
                            <li><Link href="/users/my-albums/downloads"
                                className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300 ${pathname === "/users/albums-library/latest" ? "bg-gradient-to-r from-[#D344C9] to-[#2D2694]" : ""} `}>Downloads</Link>
                            </li>
                            <li><Link href="/users/my-albums/favourites"
                                className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300 ${pathname === "/users/albums-library/trending" ? "bg-gradient-to-r from-[#D344C9] to-[#2D2694]" : ""}`}>Favourites</Link>
                            </li>
                        </ul>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default MyAlbumLayout;