'use client'

import { useEffect } from 'react'
import { verifyEmail } from '@/services/api/user-ep'
import { InputOtp } from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import { getEmailFromCookie } from '@/utils/auth-utils'
import { otpValidationSchema } from '@/utils/formValidation'
import useAuth from '@/hooks/useAuth'

import Loader from '../ui/Loader'

const EmailVerifyForm = () => {
    const router = useRouter()
    const email = sessionStorage.getItem('email') ?? ''
    const isForgotPassword = sessionStorage.getItem('isForgotPassword') ?? null
    console.log('isForgotPassword', isForgotPassword)
    console.log('email', email)
    const { saveSession } = useAuth()

    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.verifyEmail],
        mutationFn: verifyEmail,
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: '',
        },
        validationSchema: otpValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const payload = { ...values }
                console.log({ payload })
                const data = await mutateAsync(payload)
                console.log('Data cming from=======>', data)
                toast.success('Verify email successfully!')
                // saveSession(data.user);
                console.log('Data=======>', data.user)
                if (isForgotPassword == true) {
                    router.push('/create-new-password')
                } 
                else {
                    router.push('/discover-your-genre')
                }
                // if (data.user.is_artist) {
                //     router.push("/discover-your-genre");
                // } else {
                //     router.push("/");
                // }
                resetForm()
            } catch (err) {
                console.log('Error coming from', err)
                toast.error(err?.message)
            } finally {
                setSubmitting(false)
            }
        },
    })

    const { errors, touched, setFieldValue } = formik

    console.log('abc=====>', typeof getEmailFromCookie())
    useEffect(() => {
        const cookieEmail = getEmailFromCookie()
        const userEmail = cookieEmail === 'undefined' ? email : cookieEmail
        console.log('User Email======>', userEmail)
        setFieldValue('email', userEmail)
    }, [setFieldValue])

    const handleOtpComplete = (otp) => {
        formik.setFieldValue('otp', otp)
        formik.submitForm()
    }
    return (
        <section className='login'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-[50%]'>
                    <Image
                        height={700}
                        width={400}
                        src='/images/login/login.webp'
                        alt=''
                        className='h-full w-full object-cover 2xl:h-screen'
                        quality={50}
                    />
                </div>
                <div className="bg-top-right relative flex w-[50%] items-center justify-center bg-[#191919] bg-[url('/images/login/wave.webp')] bg-no-repeat p-4">
                    <div className='m-auto w-full max-w-[27.38rem]'>
                        <center>
                            <h1 className='text-[2.25rem] font-semibold'>
                                Please Check Your Email
                            </h1>
                            <p className='mb-8 text-base text-[#A3A3A3]'>
                                We have sent an code to{' '}
                                <span className='font-semibold text-primary'>
                                    {email}
                                </span>
                            </p>
                        </center>
                        <form
                            onSubmit={formik.handleSubmit}
                            onReset={formik.handleReset}>
                            <div className='relative mb-5 flex items-center justify-center'>
                                <InputOtp
                                    length={6}
                                    value={formik.values.otp}
                                    onValueChange={(value) => {
                                        formik.setFieldValue('otp', value)
                                    }}
                                    onComplete={handleOtpComplete}
                                    autoFocus
                                    size='lg'
                                    variant='faded'
                                    classNames={{
                                        segmentWrapper: 'lg:gap-6',
                                    }}
                                    isInvalid={!!errors.otp && touched.otp}
                                    errorMessage={errors.otp}
                                />
                            </div>

                            <div className='relative mb-5'>
                                <button
                                    type='submit'
                                    className='rounded-4xl h-[3rem] w-full cursor-pointer bg-[#C6FF00] text-center text-sm leading-[3rem] text-black transition-colors hover:bg-[#afe200]'>
                                    {formik.isSubmitting ? (
                                        <Loader size='sm' />
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </div>
                        </form>
                        {/* <center>
                            <h6 className="mt-6 mb-6 text-sm font-semibold">
                                {"Don't have an account?"}{" "}
                                <Link
                                    href="/user-signup"
                                    className="text-[#4D41FA] underline"
                                >
                                    Sign Up
                                </Link>
                            </h6>
                            <p className="text-sm text-[#B5B5B5]">OR</p>
                            <Link
                                href="#"
                                className="border border-[rgba(255,255,255,0.15)] w-full text-sm text-[#9D9D9D] h-[3.5rem] leading-[3.5rem] text-center rounded-4xl cursor-pointer hover:bg-white transition-colors flex justify-center items-center mt-7"
                            >
                                <span>
                                    <Image
                                        height={20}
                                        width={20}
                                        src="/images/login/google.webp"
                                        alt="google-login"
                                        loading="lazy"
                                        className="mr-3"
                                    />
                                </span>
                                Log in to continue
                            </Link>
                        </center> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmailVerifyForm
