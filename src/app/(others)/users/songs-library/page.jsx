"use client";

import { CircularProgress, cn } from "@heroui/react";
import { useMemo, useEffect } from "react";
import MusicCard from "../../artists/my-library/song/_components/MusicCard";
import { useQuery } from "@tanstack/react-query";
import queryConstants from '@/constants/query-constants';
import { getSongs } from '@/services/api/song-api';

const SongsLibrary = () => {
    // Use useQuery to fetch songs for page 1 with limit 10
    const { data, status, refetch } = useQuery({
        queryKey: [queryConstants.getSongs, true],
        queryFn: () =>
            getSongs({
                page: 1,
                limit: 50,
                is_trending: true,
            }),
        keepPreviousData: true, // Optional: helps keep old data while fetching new
    });

    // Extract songs list from data
    const musics = useMemo(() => {
        return data?.data ?? [];
    }, [data]);

    // Refetch when trending changes
    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleRefetch = () => {
        refetch();
    };

    return (
        <div className="flex items-start flex-wrap w-full justify-end">
            <div className="bg-[#2B2B2B] rounded-[0.75rem] p-6 sm:w-[calc(100%-1rem)] float-right">
                <div className="flex justify-between">
                    <h1 className="text-[1.56rem] font-semibold mb-5">My Songs</h1>
                    <ul className="flex">
                        <li>
                            <a
                                href="#"
                                className="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-6 py-2 transition-colors duration-300"
                            >
                                Liked
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="bg-[#373437] ml-2 hover:bg-gradient-to-r hover:from-[#D344C9] hover:to-[#2D2694] rounded-[0.50rem] font-medium text-xs text-white px-5 py-2 transition-colors duration-300"
                            >
                                Download
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    {status === "loading" && <CircularProgress />}

                    {status === "success" &&
                        musics.map((song) => (
                            <MusicCard
                                key={song._id}
                                track={song}
                                tracks={musics}
                                onActionComplete={handleRefetch}
                                showing={false}
                            />
                        ))}

                    {status === "error" && (
                        <p className="text-red-500">Failed to load songs.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SongsLibrary;
