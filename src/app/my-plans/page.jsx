'use client'

import UserNav from '@/app/(others)/subscriptions/_components/UserNav'
import { cancelUserPackages } from '@/services/api/packages-api'
import { Button, Card } from '@heroui/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import useAuth from '@/hooks/useAuth'
import { withAuthProtection } from '@/components/auth/protected-component'
import Container from '@/components/ui/container'

function MyPlansPage() {
    const { user } = useAuth()
    const router = useRouter()

    const plan = user?.packageData || {}
    const cancelUserSubscription = async () => {
        try {
            const resp = await cancelUserPackages()
            if (resp.success === 'success') {
                toast.success(resp.message)
                router.push('/subscriptions')
            } else {
                // Handle unexpected cases if needed
            }
        } catch (error) {
            // Handle the error case
            toast.error(error.message)
        }
    }

    return (
        <Container>
            <UserNav />

            <Card className='mt-4 w-full bg-[#2A2F2C] p-10 text-white'>
                <h2 className='mb-6 text-center text-3xl font-bold'>
                    My Active Plans
                </h2>

                {plan?.name ? (
                    <div
                        key={plan._id}
                        className='each-slide relative mx-auto w-full max-w-[400px] rounded-2xl border border-[#695CFF] bg-[#3C31BA] p-7 text-white'>
                        <h3 className='mb-2 text-xl font-semibold'>
                            {plan.name}
                        </h3>
                        <p className='flex items-center gap-1 text-4xl font-bold'>
                            ${plan.price}
                            <span className='text-base font-normal'>
                                /Per{' '}
                                {plan.billingIntervalCount > 1
                                    ? `${plan.billingIntervalCount} ${plan.billingInterval}s`
                                    : plan.billingInterval}
                            </span>
                        </p>
                        <ul className='mt-4 space-y-2 text-sm'>
                            {JSON.parse(plan.features || '[]').map(
                                (feature, idx) => (
                                    <li
                                        key={idx}
                                        className='flex items-center gap-2'>
                                        <span className='h-[12px] w-[12px] flex-shrink-0 rounded-full border border-white'></span>
                                        {feature}
                                    </li>
                                )
                            )}
                        </ul>
                        <div className='f-full mt-10 flex space-x-5'>
                            <Button
                                onClick={() => cancelUserSubscription()}
                                className='bg-[#d23845]'>
                                Cancel
                            </Button>
                        </div>
                    </div>
                ) : (
                    <p className='text-center text-lg text-gray-400'>
                        You currently have no active plans.
                    </p>
                )}
            </Card>
        </Container>
    )
}

export default withAuthProtection(MyPlansPage)
