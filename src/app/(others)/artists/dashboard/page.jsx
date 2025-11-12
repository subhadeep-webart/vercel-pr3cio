import Link from 'next/link'
import AlbumsList from './_components/AlbumsList'
import DashboardCard from './_components/DashboardCard'
import MerchendiseList from './_components/MerchendiseList'
import SongsList from './_components/SongsList'

const ArtistDashboard = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-4 md:gap-x-10'>
                <div className='col-span-12 md:col-span-4'>
                    <div className='rounded-[1.688rem] border-1 border-solid bg-[#2A2929] px-4 pb-10 pt-10 text-center text-sm font-medium md:pb-0'>
                        <span className='m-auto mb-5 grid h-[3.313rem] w-[3.313rem] items-center justify-center rounded-[50%] border-1 border-[#C5288C] md:h-[5.313rem] md:w-[5.313rem]'>
                            <img
                                src='/img/artist-dashboard/upload.svg'
                                alt='upload image'
                            />
                        </span>
                        <h3 className='text-base font-semibold md:text-lg'>
                            Select Music to upload
                        </h3>
                        <p className='mb-5 mt-4 text-sm text-[#979797]'>
                            Upload video from the below button or drag and drop
                        </p>
                        <span className='inline-block text-center'>
                            <Link
                                href='/artists/song-upload'
                                className='rounded-4xl inline-block h-[2.5rem] bg-[#C6FF00] px-8 text-sm font-semibold leading-[2.5rem] text-[#2A2F2C] transition-colors hover:bg-[rgba(249,255,69,0.82)]'>
                                Upload Song & Album
                            </Link>
                        </span>
                        <div className='relative mt-5 hidden flex-1 md:mt-10 md:flex'>
                            <img
                                src='/img/artist-dashboard/amico.png'
                                alt='Upload Song & Album'
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-8'>
                    <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
                        {/* {DASHBOARD_CARD_CONTENT.map(
                            (dashboardContent, index) => (
                                <DashboardCard
                                    value={dashboardContent.value}
                                    label={dashboardContent.label}
                                    imgSrc={dashboardContent.imgSrc}
                                    key={`dashboard-card-${index + 1}`}
                                />
                            )
                        )} */}
                        <DashboardCard/>
                    </div>
                    <div className='mt-7 grid grid-cols-1 gap-6 md:grid-cols-2'>
                        <div className='space-y-6'>
                            <SongsList />

                            <AlbumsList />
                        </div>

                        <div>
                            <MerchendiseList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistDashboard
