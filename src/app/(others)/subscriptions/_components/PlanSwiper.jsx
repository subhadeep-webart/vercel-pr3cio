import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './swiper-custom.scss'

import { addSubscriptionPackage, cancelSubscription, updateUserSubscription } from '@/services/api/packages-api'
import { useRouter } from 'next/navigation'

import useAuth from '@/hooks/useAuth'
import useApp from '@/hooks/useApp'
import toast from 'react-hot-toast'

function PlanSwiper({ plans }) {
    //const [activePlan, setActivePlan] = useState('idle');
    const router = useRouter()
    const { user, isLoggedIn } = useAuth()
    //const activePlan = user?.subscriptionId;
    const { setModal } = useApp()
    const activePlan = user?.packageData?._id

    const proceedToPay = (item) => {
        if (!isLoggedIn) {
            return setModal('signin')
        }
        addSubscriptionPackage(item._id)
            .then((res) => {
                router.push(res.paymentUrl)
            })
            .catch(() => {

            })
    }
    const updateUserPackage = async (id) => {
        try {
            const resp = await updateUserSubscription(id);
            if (resp.success === 'success') {
                toast.success(resp.message)
            } else {
                // Handle unexpected cases if needed

            }
        } catch (error) {
            // Handle the error case
            toast.error(error.message)

        }
    }
    const cancelUserSubscription = async () => {
        try {
            const resp = await cancelSubscription();
            if (resp.success === 'success') {
                toast.success(resp.message)
            } else {
                // Handle unexpected cases if needed

            }
        } catch (error) {
            // Handle the error case
            toast.error(error.message)

        }
    }
    return (
        <div className='relative w-full max-w-[990px]'>
            <Swiper
                modules={[Navigation]}
                className='plan-swiper'
                spaceBetween={12}
                slidesPerView={1}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                }}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                onInit={(swiper) => {
                    swiper.on('slideChange', () => {
                        const { isBeginning, isEnd } = swiper
                        document
                            .querySelector('.prev-btn')
                            ?.classList.toggle('opacity-50', isBeginning)
                        document
                            .querySelector('.next-btn')
                            ?.classList.toggle('opacity-50', isEnd)
                    })
                }}>

                {plans.map((plan) => (
                    <SwiperSlide key={plan._id}>
                        <div className='each-slide relative h-[417px] rounded-2xl border border-[#695CFF] bg-[#3C31BA] p-7 text-white'>
                            {activePlan === plan?._id && (
                                <div className='absolute right-[30px] top-[0]'>
                                    <img
                                        src='/img/price-selected.png'
                                        alt='seleted sticker'
                                    />
                                </div>
                            )}
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
                            <div className='flex justify-between space-x-2'>
                                {activePlan === plan._id ? (
                                    <>

                                        <button
                                            className='mt-6 w-full rounded-full bg-white/30 py-2 text-sm font-semibold text-white'
                                            disabled>
                                            Active Plan
                                        </button>

                                    </>

                                ) : (
                                    <button
                                        className='mt-6 w-full rounded-full bg-white/30 py-2 text-sm font-semibold text-white hover:bg-white/50'
                                        onClick={() => proceedToPay(plan)}>
                                        Choose Plan
                                    </button>
                                )}
                                { }
                                <button
                                    className='mt-6 w-full rounded-full bg-white/30 py-2 text-sm font-semibold text-white'
                                    onClick={() => updateUserPackage(plan._id)}
                                >
                                    Update Plan
                                </button>
                            </div>
                            <div className='flex justify-between space-x-2'>
                                {user?.subscriptionStatus != 'canceled' && activePlan === plan._id &&
                                    <button
                                        className='mt-6 w-full rounded-full bg-white/30 py-2 text-sm font-semibold text-white hover:bg-white/50'
                                        onClick={() => cancelUserSubscription()}
                                    >
                                        Cancel Plan
                                    </button>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className='prev-btn absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#6156E2] text-white opacity-50 transition-opacity duration-200'>
                &#8592;
            </button>
            <button className='next-btn absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#6156E2] text-white transition-opacity duration-200'>
                &#8594;
            </button>
        </div>
    )
}

export default PlanSwiper
