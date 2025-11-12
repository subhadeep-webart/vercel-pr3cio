"use client";

import queryConstants from "@/constants/query-constants";
import { getAccountData } from "@/services/api/artist-api";
import { useQuery } from "@tanstack/react-query";

const CardDetails=()=>{
     const { data, status } = useQuery({
            queryKey: [queryConstants.getAccountData],
            queryFn: () => getAccountData(),
        })

        console.log("account data",data)

    return(
        <>
         <div className="bg-[#2E2E2E] rounded-[0.876rem] col-span-12 md:col-span-9 p-5">
                    <h6 className="font-semibold text-[1.11rem] mb-4">Card Details</h6>
                    <div className="grid grid-cols-12 sm:grid-cols-12 gap-4">
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-12 md:col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Bank Name</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">{data?.data?.bankName}</p>
                        </div>
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-12 md:col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Branch Name</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">Branch Name</p>
                        </div>
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-12 md:col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Account Number</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">{data?.data?.accountNumber}</p>
                        </div>
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-12 md:col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Account Name</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">{data?.data?.accountName ?? "N/A"}</p>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-12 sm:grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-9 mt-5 flex gap-4 justify-start items-center">
                            <a href="#"
                                className="h-[2.5rem] leading-[1.5rem] md:leading-[2.5rem] text-center  flex justify-center items-center rounded-full px-4 border-1 border-solid border-[#666] text-xs text-[#A5A5A5] transition-colors delay-300 hover:bg-[#666] hover:text-white mr-2">
                                    Edit Card
                            </a>
                            <a href="#"
                                className="h-[2.5rem] leading-[1.5rem] md:leading-[2.5rem] text-center  flex justify-center items-center rounded-full px-4 border-1 border-solid border-[#666] text-xs text-[#A5A5A5] transition-colors delay-300 hover:bg-[#666] hover:text-white mr-2">
                                    View Saved Card
                            </a>
                        </div>
                        <div className="col-span-12 md:col-span-3 mt-5 text-end">
                            <a href="#"
                                className="w-auto h-[2.5rem] leading-[2.5rem] bg-[#C6FF00] text-center rounded-full px-5 text-black text-xs cursor-pointer inline-block hover:bg-[#afe200] ">Add
                                New Card
                            </a>
                        </div>
                    </div> */}
                </div>
        </>
    )
}

export default CardDetails;