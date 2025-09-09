'use client'

import { useEffect, useState } from 'react'
import { Button, Card, CardBody, Image, Skeleton } from '@heroui/react'

const fakeEventData = [
    {
        id: 1,
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/297599640_1188601978647239_699_1200x768.jpeg?VersionId=0_oB0TSOAkzilkxxhlHbx7j6SDFXG39B&size=690:388',
        title: 'Vestibulum ut velit a enim ornare tempus.',
        description:
            'Dapibus, nulla quis gravida pharetra, massa est ultrices velit, sit amet faucibus ex sapienQuis felis. Etiam gravida ligula vitae est congue, at malesuada.',
        date: '06.05.2025',
        venue: '47 W 13th St, New York, NY 10 USA',
        state: 'Alabama',
        city: 'New York',
    },
    {
        id: 2,
        image: 'https://nypost.com/wp-content/uploads/sites/2/2021/04/justin-bieber-summer-tour-canceled-177-1.jpg?quality=75&strip=all',
        title: 'Vestibulum ut velit a enim ornare tempus.',
        description:
            'Dapibus, nulla quis gravida pharetra, massa est ultrices velit, sit amet faucibus ex sapienQuis felis. Etiam gravida ligula vitae est congue, at malesuada.',
        date: '06.05.2025',
        venue: '47 W 13th St, New York, NY 10 USA',
        state: 'Alabama',
        city: 'New York',
    },
    {
        id: 3,
        image: 'https://variety.com/wp-content/uploads/2021/01/1294032168.jpg?w=1000&h=562&crop=1',
        title: 'Vestibulum ut velit a enim ornare tempus.',
        description:
            'Dapibus, nulla quis gravida pharetra, massa est ultrices velit, sit amet faucibus ex sapienQuis felis. Etiam gravida ligula vitae est congue, at malesuada.',
        date: '06.05.2025',
        venue: '47 W 13th St, New York, NY 10 USA',
        state: 'Alabama',
        city: 'New York',
    },
    {
        id: 4,
        image: 'https://s1.ticketm.net/dam/a/15e/d2959961-cc88-4697-8aca-3911aeb8e15e_1557231_RETINA_PORTRAIT_3_2.jpg',
        title: 'Vestibulum ut velit a enim ornare tempus.',
        description:
            'Dapibus, nulla quis gravida pharetra, massa est ultrices velit, sit amet faucibus ex sapienQuis felis. Etiam gravida ligula vitae est congue, at malesuada.',
        date: '06.05.2025',
        venue: '47 W 13th St, New York, NY 10 USA',
        state: 'Alabama',
        city: 'New York',
    },
]

const DatesTab = () => {
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setEvents(fakeEventData)
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {(loading ? Array.from({ length: 4 }) : events).map(
                (event, idx) => (
                    <Card
                        key={idx}
                        className='rounded-xl bg-[#2b2b2b] p-3 text-white'>
                        <CardBody className='flex flex-col space-y-3'>
                            {loading ? (
                                <>
                                    <Skeleton className='aspect-[426/184] w-full rounded-[27px]' />
                                    <Skeleton className='h-5 w-3/4' />
                                    <Skeleton className='h-4 w-full' />
                                    <Skeleton className='h-3 w-1/2' />
                                    <Skeleton className='h-10 w-24 rounded-md' />
                                </>
                            ) : (
                                <>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        className='aspect-[426/184] w-full rounded-[27px] object-cover'
                                    />
                                    <h3 className='text-lg font-semibold'>
                                        {event.title}
                                    </h3>
                                    <p className='pb-3 text-sm text-gray-300'>
                                        {event.description}
                                    </p>
                                    <div className='border-t border-t-[1px] border-dashed border-t-[#5F605F] pt-6 text-sm'>
                                        <div className='flex flex-col gap-4 md:flex-row md:gap-8 mb-4'>
                                            {/* Left Column */}
                                            <div className='flex flex-1 flex-col'>
                                                <p>
                                                    <span className='font-bold'>
                                                        Date:
                                                    </span>{' '}
                                                    {event.date}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>
                                                        Venue:
                                                    </span>{' '}
                                                    {event.venue}
                                                </p>
                                            </div>

                                            {/* Divider */}
                                            <div className='hidden w-[1px] bg-[#464847] md:block'></div>

                                            {/* Right Column aligned to the right but with left-aligned text */}
                                            <div className='flex flex-1 flex-col items-start md:items-end'>
                                                <div className='flex flex-col text-left'>
                                                    <p>
                                                        <span className='font-bold'>
                                                            State:
                                                        </span>{' '}
                                                        {event.state}
                                                    </p>
                                                    <p>
                                                        <span className='font-bold'>
                                                            City:
                                                        </span>{' '}
                                                        {event.city}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        color='primary'
                                        className='min-w-[118px] max-w-[118px] rounded-[50px] font-bold'>
                                        Book now
                                    </Button>
                                </>
                            )}
                        </CardBody>
                    </Card>
                )
            )}
        </div>
    )
}

export default DatesTab
