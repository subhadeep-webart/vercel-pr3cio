import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'

import 'swiper/css'
import 'swiper/css/navigation'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { publicImages } from '@/utils/publicImages'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import SideBar from '@/components/layout/sidebar'

// import Security from '@/components/security'

import Providers from './providers'
import { headers } from 'next/headers'

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--poppins',
    weight: ['400', '700'],
})

export const metadata = {
    metadataBase: new URL('https://pr3cio.com'),
    title: 'PR3CIO',
    description:
        'People Reimagining Communication Collaboration Creativity Input Output',
    openGraph: {
        title: 'PR3CIO',
        description:
            'People Reimagining Communication Collaboration Creativity Input Output',
        images: ['/img/open-graph.png'],
    },
}
export default async function RootLayout({ children }) {

 
    return (
        <html lang='en'>
            <body
                className={`${poppins.className} w-auto bg-[#222222] bg-cover bg-no-repeat text-white`}
                style={{
                    // backgroundImage: `url(${publicImages.bodyBackground})`,
                }}>
                <Script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7018968711857572'
                    crossOrigin='anonymous'
                />
                <Providers>
                    {/* <div className='flex items-start'>
                        <div className='sticky top-0 hidden h-screen md:block'>
                            <SideBar />
                        </div>
                        <div className='flex w-full flex-1 flex-col'>
                            <Header />
                            <main className='min-h-screen'>{children}</main>
                            <Footer />
                        </div>
                    </div> */}
                    {children}
                    {/* <Security /> */}
                </Providers>
            </body>
        </html>
    )
}
