'use client'

import { getArtistDashboardCard } from '@/services/api/artist-api'
import { useQuery } from '@tanstack/react-query'

import queryConstants from '@/constants/query-constants'
import { DASHBOARD_CARD_CONTENT } from '@/utils/constant'

const DashboardCard = () => {
    const { data, status } = useQuery({
        queryKey: [
            queryConstants.artistDashboardCard,
            { page: 'dashboard', type: 'song' },
        ],
        queryFn: () =>
            getArtistDashboardCard({ page: 'dashboard', type: 'song' }),
    })

    const cards = data?.data ?? []
    console.log('cards', cards)
    const dynamicCards = DASHBOARD_CARD_CONTENT?.map((item) => ({
        ...item,
        value: cards[item.key] ?? 0,
    }))
    console.log('dynamicCards', dynamicCards)

    return (
        <>
        {dynamicCards?.map((card)=>(
        <div className="z-1 relative grid cursor-pointer grid-cols-2 gap-8 rounded-[0.625rem] border-1 border-[rgba(193,209,238,0.18)] bg-[linear-gradient(to_right,rgba(65,151,250,0.18)_0%,rgba(218,70,16,0.18)_100%)] p-3 after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[0.3rem] after:content-['']">
            <div>
                <h4 className='text-lg'>{card?.value}</h4>
                <p className='text-sm text-[#BDBDBD]'>{card?.label}</p>
            </div>

            <span className='grid h-[1.7rem] w-[1.7rem] items-center justify-center rounded-full border border-white'>
                <img
                    src={card?.imgSrc ?? '/img/artist-dashboard/earning.svg'}
                    alt='Earning'
                    className='h-[0.938rem] w-[0.938rem]'
                />
            </span>
        </div>
        ))}
        </>
    )
}

export default DashboardCard
