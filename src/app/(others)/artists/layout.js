'use client'

import React, { useEffect, useState } from 'react'
import { setArtistData, setStatus } from '@/redux/slices/artistSlice'
import { getArtistDetails } from '@/services/api/artist-api'
import { usePathname, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

import PageCommonBg from '@/components/artist/PageCommonBg'

import ArtistDetailsSkeleton from './_components/artist-details-skeleton'
import BankAccountAddDrawer from './_components/BankAccountAddDrawer'

const Artist_layout = ({ children }) => {
    return (
        <>
            <BankAccountAddDrawer/>
            <div className='ml-3 w-full rounded-[0.75rem] bg-[#333232] md:ml-5'>
                {children}
            </div>
        </>
    )
}

export default Artist_layout
