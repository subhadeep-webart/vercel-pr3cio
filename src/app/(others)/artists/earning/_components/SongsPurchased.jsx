"use client";

import queryConstants from "@/constants/query-constants";
import { getPurchasedItems } from "@/services/api/artist-api";
import { useQuery } from "@tanstack/react-query";

const SongsPurchased=()=>{
      const { data, status } = useQuery({
        queryKey: [queryConstants.getPurchasedItems, { type: 'song' }],
        queryFn: () => getPurchasedItems({ type:"song" }),
    })
  
    const songs=data?.data ?? [];
  console.log("songs list",songs)
    return(
        <>
         <div className="bg-[#2E2E2E] rounded-[0.376rem] p-4 mt-4">
                        <h6 className="text-[0.83rem] mb-3">Songs purchase</h6>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#535353] rounded-[1rem] border-0 ">
                                    <tr className="text-[#FFFFFF] text-[0.688rem]">
                                        <th className="py-2 px-3 font-normal">Song</th>
                                        <th className="py-2 px-3 font-normal">Download</th>
                                        <th className="py-2 px-3 font-normal">Earning</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[0.67rem]">
                                    <tr
                                        className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
        </>
    )
}

export default SongsPurchased;