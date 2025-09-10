"use client"

import queryConstants from "@/constants/query-constants";
import { getAllGenreCategory } from "@/services/api/user-api";
import { useQuery } from "@tanstack/react-query";
const GenreTag = ({ genreDetails, handleGenreSelect }) => {
    console.log("Genre Details====>", genreDetails);
    const { _id = "", name = "" } = genreDetails;
    return (
        <>
            <label className=" mx-1 my-2  relative">
                <input
                    type="checkbox"
                    name="options"
                    className="peer absolute [clip-path:inset(50%)]"
                    defaultChecked=""
                    onChange={()=>handleGenreSelect(_id)}
                />
                <div className="peer-checked:border-[#C6FF00] peer-checked:text-[#C6FF00] peer-checked:bg-[#1A1A1A] border-1 border-[#5A5B58] rounded-full h-[2.31rem] text-[#9D9D9D] text-sm px-6 py-2 cursor-pointer">
                    {name}
                </div>
            </label>
        </>
    )
}

export default GenreTag;