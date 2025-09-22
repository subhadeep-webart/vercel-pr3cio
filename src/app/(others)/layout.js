import Advertisement from '@/components/home/Advertisement/Advertisement'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import SideBar from '@/components/layout/sidebar'

const OthersPageLayout = ({ children }) => {
    return (
        <>
            <Header />
            <section className='homeBody flex flex-wrap items-start justify-end px-0 py-4 sm:px-5'>
                <SideBar />
                <div className='flex w-full flex-wrap items-start sm:w-[calc(100%-11.63rem)] '>
                    {children}
                </div>
                <Advertisement />
                <Footer />
            </section>
        </>
    )
}

export default OthersPageLayout
