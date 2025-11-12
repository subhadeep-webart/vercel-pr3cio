'use client'

import React, { useEffect, useState } from 'react'
import { setArtistData, setStatus } from '@/redux/slices/artistSlice'
import { getArtistDetails } from '@/services/api/artist-api'
import { usePathname, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

import PageCommonBg from '@/components/artist/PageCommonBg'

import ArtistDetailsSkeleton from './_components/artist-details-skeleton'
import BankAccountAddDrawer from './_components/BankAccountAddDrawer'
import BankAccountAddAlert from './_components/BankAccountAddAlert'
import useAuth from '@/hooks/useAuth'


const Artist_layout = ({ children }) => {
    const pathname=usePathname();
    // const { user } = useAuth();
    // console.log("user",user?.bankAccountId)
    // const [isBankAccountAlert, setIsBankAccountAlert] = useState(false);
    // useEffect(() => {
    //     if (user?.is_artist && !user?.bankAccountId && pathname === '/artists/song-upload') {
    //         console.log("Executed===>");
    //         setIsBankAccountAlert(true);
    //     }else{
    //         setIsBankAccountAlert(false);
    //     }
    // }, [user,pathname]);

    const isAiPage=pathname==="/artists/create-song-with-ai";

    return (
        <>
            {/* {isBankAccountAlert && <BankAccountAddAlert />} */}
            {/* <BankAccountAddDrawer/> */}
            <div className={`ml-3 w-full rounded-[0.75rem]  md:ml-5 ${isAiPage ? 'bg-transparent' :'bg-[#333232]'}`}>
                {children}
            </div>
        </>
    )
}

export default Artist_layout
