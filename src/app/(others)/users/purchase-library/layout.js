"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const PurchaseLayout = ({ children }) => {
    const pathname = usePathname();

    console.log("Route PathName=======>", pathname);
    return (
        <div className="flex items-start flex-wrap w-full justify-end">
            <div className="bg-[#2B2B2B] rounded-[0.75rem] p-6 md:w-[calc(100%-1rem)] md:float-right w-full ml-2 md:ml-0">
                <div className="flex justify-between">
                    <h1 className="text-base md:text-[1.56rem] font-semibold mb-5">My Purchases</h1>
                    <ul className="flex">
                        <li><Link href="/users/purchase-library/songs"
                            className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300 ${pathname === "/users/purchase-library/songs" ? "bg-gradient-to-r from-[#D344C9] to-[#2D2694]" : ""}`}>Songs</Link>
                        </li>
                        <li><Link href="/users/purchase-library/albums"
                            className={`bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300 ${pathname === "/users/purchase-library/albums" ? "bg-gradient-to-r from-[#D344C9] to-[#2D2694]" : ""}`}>Albums</Link>
                        </li>
                    </ul>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PurchaseLayout;