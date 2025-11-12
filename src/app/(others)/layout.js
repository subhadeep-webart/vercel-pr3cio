'use client'

import { usePathname } from 'next/navigation'

import { publicImages } from '@/utils/publicImages'
import useAuth from '@/hooks/useAuth'
import Advertisement from '@/components/home/Advertisement/Advertisement'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import SideBar from '@/components/layout/sidebar'

const OthersPageLayout = ({ children }) => {
    const pathname = usePathname()

    const isAiPage = pathname === '/artists/create-song-with-ai'

    const { isLoggedIn } = useAuth()

    return (
        <div
            style={{
                backgroundImage: isAiPage
                    ? `url(${publicImages.aiBackground})`
                    : `url(${publicImages.bodyBackground})`,
            }}>
            <Header />
            <section className='homeBody flex flex-wrap items-start justify-end px-0 py-4 sm:px-5'>
                <SideBar />
                <div className='mr-3 flex w-full flex-wrap items-start sm:w-[calc(100%-11.63rem)] md:mr-0'>
                    {children}
                </div>
                {!isLoggedIn && <Advertisement />}
                {!isAiPage && <Footer />}
            </section>
        </div>
    )
}

export default OthersPageLayout
