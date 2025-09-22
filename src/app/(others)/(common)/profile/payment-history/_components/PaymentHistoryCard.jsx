import { formatDateToCustom } from "@/utils/func-utils";

const PaymentHistoryCard = ({ paymentDetails }) => {
    console.log("Payment Details======>", paymentDetails);

    const { songDesc = "", songArtist = "", amount = "", created_at = "" } = paymentDetails;
    return (
        <div className='group grid w-full grid-cols-12 items-center p-5 transition-colors delay-300 hover:rounded-[0.4rem] hover:border-transparent hover:bg-[#484848] sm:gap-x-4 md:gap-x-4 lg:gap-x-4 xl:gap-x-4 2xl:gap-x-4'>
            <div className='col-span-8'>
                <div className='flex items-center'>
                    <img
                        src='/images/user/2.webp'
                        alt='artist'
                        className='mr-2 inline-block h-[4.13rem] w-[3.25rem] flex-[0_0_3.25rem] rounded-[0.4rem] object-cover'
                    />
                    <div className=''>
                        <h6 className='text-sm font-semibold'>
                            {songDesc}
                        </h6>
                        <p className='my-1 text-xs text-[#9D9D9D]'>
                            {songArtist}
                        </p>
                        {/* <p className='my-1 text-xs text-[#9D9D9D]'>
                            Order ID: 254741
                        </p> */}
                    </div>
                </div>
            </div>
            <div className='col-span-4 text-right'>
                <p className='my-1 text-xs text-[#9D9D9D]'>
                    Purchased by {created_at && formatDateToCustom(created_at)}
                </p>
                <a
                    href='#'
                    className='group float-right mt-5 flex h-[1.63rem] w-[1.63rem] items-center justify-center rounded-full bg-[#191919]'>
                    <svg
                        width='9'
                        height='12'
                        viewBox='0 0 9 12'
                        fill='none'
                        className='stroke-current text-[#4D41FA] transition-colors duration-300 group-hover:text-white'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M1.58594 6.19527L4.26886 8.8782M4.26886 8.8782L6.95179 6.19527M4.26886 8.8782L4.26886 1.90259'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'></path>
                        <path
                            d='M1.04883 10.4878H7.48785'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'></path>
                    </svg>
                </a>
            </div>
            <div className='col-span-12'>
                <div className='group mt-3 grid grid-cols-2 items-center justify-between border-t-1 border-solid border-[rgba(255,255,255,0.2)] pt-2'>
                    <div className='col-auto text-sm'>
                        Total Billed
                    </div>
                    <div className='col-auto text-right text-base font-semibold'>
                        $ {amount.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentHistoryCard;