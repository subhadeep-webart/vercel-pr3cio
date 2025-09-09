import { Card, CardBody, Skeleton, Tab, Tabs } from '@heroui/react'
import Container from '@/components/ui/container'

const ArtistDetailsSkeleton = () => {
    return (
        <Container>
            <Card className='w-full space-y-10 bg-[#2A2F2C] p-3 text-white'>
                <CardBody className='space-y-10 p-0'>
                    {/* Top Section: Image + Info */}
                    <div className='flex flex-col lg:items-center gap-6 lg:flex-row'>
                        <div className='w-full flex-shrink-0 lg:w-auto'>
                            <Skeleton className='h-[308px] w-[397px] rounded-lg' />
                        </div>
                        <div className='flex flex-1 flex-col justify-between space-y-4'>
                            <div>
                                <Skeleton className='mb-2 h-6 w-1/2 rounded' />
                                <Skeleton className='h-4 w-1/3 rounded' />
                            </div>
                            <div className='flex flex-col flex-wrap gap-2 text-sm lg:flex-row lg:items-center lg:gap-6'>
                                <Skeleton className='h-4 w-40 rounded' />
                                <Skeleton className='h-4 w-40 rounded' />
                            </div>
                            <Skeleton className='h-20 w-full rounded' />
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <Tabs
                        aria-label='Artist Info Tabs Skeleton'
                        variant='underlined'
                        color='primary'
                        defaultSelectedKey='bio'>
                        <Tab key='bio' title='Bio'>
                            <SkeletonSection />
                            <SkeletonSection />
                            <SkeletonSection />
                            <SkeletonSection isList />
                            <SkeletonSection />
                        </Tab>
                        <Tab key='music' title='Music'>
                            <Skeleton className='h-6 w-1/4 rounded' />
                        </Tab>
                        <Tab key='pictures' title='Pictures'>
                            <Skeleton className='h-6 w-1/4 rounded' />
                        </Tab>
                        <Tab key='flow' title='Flow'>
                            <Skeleton className='h-6 w-1/4 rounded' />
                        </Tab>
                        <Tab key='merch' title='Merchandise'>
                            <Skeleton className='h-6 w-1/4 rounded' />
                        </Tab>
                        <Tab key='dates' title='Dates'>
                            <Skeleton className='h-6 w-1/4 rounded' />
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </Container>
    )
}

const SkeletonSection = ({ isList = false }) => (
    <div className='mb-6'>
        <Skeleton className='mb-2 h-5 w-1/3 rounded' />
        <Skeleton className='mb-2 h-4 w-full rounded' />
        <Skeleton className='mb-2 h-4 w-5/6 rounded' />
        <Skeleton className='mb-2 h-4 w-2/3 rounded' />
        {isList && (
            <div className='mt-2 space-y-2 pl-5'>
                <Skeleton className='h-3 w-1/2 rounded' />
                <Skeleton className='h-3 w-1/3 rounded' />
                <Skeleton className='h-3 w-1/4 rounded' />
                <Skeleton className='h-3 w-2/3 rounded' />
            </div>
        )}
    </div>
)

export default ArtistDetailsSkeleton
