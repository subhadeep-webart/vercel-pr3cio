'use client'

import { useEffect, useState } from 'react'
import { getArtistDetails } from '@/services/api/artist-api'
import { Card, CardBody, Image, Tab, Tabs } from '@heroui/react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { ARTIST_PROFILE_NAVIGATION } from '@/utils/constant'
import BioTab from '@/components/artist/bio/BioTab'
import PageCommonBg from '@/components/artist/PageCommonBg'
import { withAuthProtection } from '@/components/auth/protected-component'
import Container from '@/components/ui/container'

import ArtistDetailsSkeleton from '../../_components/artist-details-skeleton'
import DatesTab from '../../_components/DatesTab'
import FlowTab from '../../_components/FlowTab'
import ImageGallery from '../../_components/ImageGallery'
import MerchandiseTab from '../../_components/MerchandiseTab'
import MusicTab from '../../_components/MusicTab'

const fakeData = {
    name: 'Justin Bieber',
    role: 'Pop Singer',
    image: 'https://thecsrjournal.in/wp-content/uploads/2025/04/62a53848ccce6.jpg',
    totalAlbums: 52,
    totalSongs: 305,
    bio: `Morbi ornare at dolor at faucibus. Nullam non placerat nibh. Fusce dapibus, nulla quis gravida pharetra, massa est ultrices velit, sit amet faucibus ex sapien quis felis. Etiam gravida ligula vitae est congue, at malesuada leo lacinia. Donec pulvinar pretium nulla eget viverra. Nunc vitae ultrices augue.`,
    sections: {
        earlyLife: `Justin Bieber was born in Tottenham, North London, and raised primarily by her mother after her parents separated. From an early age, Adele showed a passion for music, often mimicking singers like the Spice Girls and Gabrielle. She attended the BRIT School for Performing Arts and Technology, where she honed her vocal talent and songwriting skills alongside classNamemates like Leona Lewis and Jessie J.`,
        breakthrough: `Justin’s breakthrough came after she posted demos on MySpace, catching the attention of XL Recordings, who signed her in 2006. Her debut album, 19 (2008), received critical acclaim and commercial success, earning her two Grammy Awards, including Best New Artist.`,
        globalSuccess: `Her second album, 21 (2011), catapulted her to international stardom. Hits like “Rolling in the Deep,” “Someone Like You,” and “Set Fire to the Rain” topped charts worldwide. 21 became one of the best-selling albums of the 21st century and earned her six Grammy Awards in a single night in 2012. She continued her success with 25 (2015), which featured the hit single “Hello,” and 30 (2021), a deeply personal album reflecting on divorce and motherhood.`,
        awards: `Justin is one of the world’s best-selling music artists, with over 120 million records sold. She has received numerous accolades, including:`,
        personalLife: `Justin is known for her soulful voice, emotional ballads, and down-to-earth personality. She has one son and has spoken publicly about mental health, body image, and the challenges of fame.`,
    },
    awardsList: [
        '16 Grammy Awards',
        'An Academy Award',
        'A Golden Globe Award',
        'Multiple Brit Awards',
    ],
}

const ArtistDetailsPage = () => {
    const pathname = usePathname()
    const artist = useSelector((state) => state.artist.data)

    console.log('artist data=====>', artist?.bio)

    return (
        <>
            <div class='flex w-full justify-between px-16 py-11'>
                <BioTab bioDetails={artist?.bio || []} />
            </div>
        </>
    )
}

const Section = ({ title, content, list }) => (
    <div classNameName='mb-6'>
        <h2 classNameName='mb-2 text-xl font-semibold'>{title}</h2>
        <p classNameName='text-sm leading-relaxed'>{content}</p>
        {list && (
            <ul classNameName='mt-2 list-disc space-y-1 pl-5 text-sm'>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        )}
    </div>
)

export default withAuthProtection(ArtistDetailsPage)
