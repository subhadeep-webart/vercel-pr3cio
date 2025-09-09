'use client'

import { useState } from 'react'
import { Card, Tab, Tabs, User } from '@heroui/react'

import useSubscriptionPlans from '@/hooks/useSubscriptionPlans'
import Container from '@/components/ui/container'

import PlanSwiper from '../subscriptions/_components/PlanSwiper'
import UserNav from '../subscriptions/_components/UserNav'
import styles from '../subscriptions/subscriptions.module.scss'

function SubscriptionPlans() {
    const { data, isLoading, isError } = useSubscriptionPlans()
    const [selected, setSelected] = useState('monthly')

    const parseFeatures = (featuresString) => {
        try {
            return featuresString ? JSON.parse(featuresString) : []
        } catch {
            return []
        }
    }

    if (isLoading) return <div>Loading plans...</div>
    if (isError || !data) return <div>Failed to load plans</div>

    return (
        <Container>
            <UserNav />

            <Card className='mt-4 w-full bg-[#2A2F2C] p-10 text-white'>
                <h2 className='mb-2 text-center text-3xl font-bold'>
                    Subscription Plans
                </h2>

                <Tabs
                    aria-label='Payment options'
                    color='primary'
                    variant='underlined'
                    classNames={{
                        base: 'flex justify-center',
                        tabList: `gap-10 justify-content-center ${styles.divider}`,
                        tab: 'h-12 text-lg font-semibold',
                    }}>
                    <Tab key='monthly' title='Monthly'>
                        <PlanSwiper plans={data.monthly} />
                    </Tab>
                    <Tab key='yearly' title='Yearly'>
                        <PlanSwiper plans={data.yearly} />
                    </Tab>
                </Tabs>
            </Card>
        </Container>
    )
}

export default SubscriptionPlans
