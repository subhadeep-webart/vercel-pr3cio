'use client'

import React, { useEffect, useState } from 'react'
import { setArtistData, setStatus } from '@/redux/slices/artistSlice'
import { getArtistDetails } from '@/services/api/artist-api'
import { usePathname, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

import PageCommonBg from '@/components/artist/PageCommonBg'

import ArtistDetailsSkeleton from '../_components/artist-details-skeleton'

const Artist_layout = ({ children }) => {
    const params = useSearchParams()
    const url = usePathname()
    const slug = params.get('id');
    const dispatch = useDispatch()
    const status = useSelector((state) => state.artist.status)
    const artist = useSelector((state) => state.artist)
    console.log("artist", artist)

    useEffect(() => {
        if (!slug) return
        dispatch(setStatus('pending'))
        getArtistDetails(slug)
            .then((res) => {
                dispatch(setArtistData(res))
                dispatch(setStatus('success'))
            })
            .catch(() => {
                dispatch(setStatus('error'))
            })
    }, [slug])

    if (status === 'pending') return <ArtistDetailsSkeleton />
    if (status === 'error')
        return (
            <div classNameName='p-6 text-center'>
                Failed to load artist details.
            </div>
        )
    return (
        <>
            <div className='ml-3 w-full rounded-[0.75rem] bg-[#333232] md:ml-5'>
                {url !== '/artists' && <PageCommonBg slug={slug} />}

                {children}
            </div>
        </>
    )
}

export default Artist_layout
