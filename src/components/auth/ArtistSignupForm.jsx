'use client'

import { signup } from '@/services/api/user-ep'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import ReactPhoneInput from 'react-phone-input-2'

import queryConstants from '@/constants/query-constants'
import { signupValidationSchema } from '@/utils/formValidation'

import ErrorText from '../ui/ErrorText'
import Loader from '../ui/Loader'
import SignupToggle from './SignupToggle'

import 'react-phone-input-2/lib/style.css'

import GoogleLoginButton from './goole-login'

const ArtistSignupForm = () => {
    const router = useRouter()
    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.signup],
        mutationFn: signup,
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: signupValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            const { confirmPassword, ...payload } = values

            console.log('Values', values)
            if (payload.phone && !payload.phone.startsWith('+')) {
                payload.phone = `+${payload.phone}`
            }
            console.log('Values', values)
            try {
                await mutateAsync({ ...payload, is_artist: true })
                toast.success('Verify email to complete signup!')
                sessionStorage.setItem('email', payload.email)
                router.push('/verify-email')
                resetForm()
            } catch (err) {
                toast.error(err?.message)
            } finally {
                setSubmitting(false)
            }
        },
    })
    return (
        <section className='login'>
            <div className="flex min-h-screen w-full justify-center bg-[url('/img/login-bg.png')] bg-cover bg-bottom bg-no-repeat">
                <div className='gradient-bg-2 relative mb-20 flex w-full items-center justify-center p-4 md:mb-0 md:w-[45%]'>
                    <SignupToggle />

                    <div className='m-auto mt-36 w-full max-w-[27.38rem] md:mt-0'>
                        <center>
                            <h1 className='mb-2 text-xl font-semibold md:text-4xl'>
                                Let’s Get Started
                            </h1>
                        </center>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='relative mb-4'>
                                <label className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                    Email
                                </label>
                                <input
                                    type='text'
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                    placeholder='Enter Email or Number'
                                />
                                {formik.touched.email &&
                                    formik.errors.email && (
                                        <ErrorText
                                            errorMessage={formik.errors.email}
                                        />
                                    )}
                            </div>

                            <div className='relative mb-4'>
                                <label className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                    Phone
                                </label>
                                {/* <input
                                    type="text"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Number"
                                /> */}
                                <ReactPhoneInput
                                    country={'us'} // default country
                                    value={formik.values.phone}
                                    onChange={(phone) =>
                                        formik.setFieldValue('phone', phone)
                                    }
                                    onBlur={() =>
                                        formik.setFieldTouched('phone', true)
                                    }
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        className:
                                            'w-full rounded-md pl-12 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] text-white',
                                    }}
                                    containerClass='w-full'
                                    inputClass='!bg-[#2E2E2E] !border !border-[rgba(255,255,255,0.15)] !text-white'
                                    dropdownStyle={{
                                        backgroundColor: '#2E2E2E',
                                    }}
                                    buttonClass='!bg-[#2E2E2E]'
                                    placeholder='Enter Number'
                                />
                                {formik.touched.phone &&
                                    formik.errors.phone && (
                                        <ErrorText
                                            errorMessage={formik.errors.phone}
                                        />
                                    )}
                                {formik.touched.phone &&
                                    formik.errors.phone && (
                                        <ErrorText
                                            errorMessage={formik.errors.phone}
                                        />
                                    )}
                            </div>

                            <div className='relative mb-4'>
                                <label className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                    placeholder='Enter Password'
                                />
                                {formik.touched.password &&
                                    formik.errors.password && (
                                        <ErrorText
                                            errorMessage={
                                                formik.errors.password
                                            }
                                        />
                                    )}
                            </div>

                            <div className='relative mb-4'>
                                <label className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                    Confirm Password
                                </label>
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                    placeholder='Enter Password'
                                />
                                {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword && (
                                        <ErrorText
                                            errorMessage={
                                                formik.errors.confirmPassword
                                            }
                                        />
                                    )}
                            </div>

                            <div className='relative mt-6'>
                                <button
                                    disabled={formik.isSubmitting}
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
                        <center>
                            <h6 className='mb-2 mt-2 text-sm font-semibold'>
                                Already have an account?{' '}
                                <Link
                                    href='/login'
                                    className='text-[#4D41FA] underline'>
                                    Sign In
                                </Link>
                            </h6>
                            <p className='text-sm text-[#B5B5B5]'>OR</p>
                            {/* <a href="#"
                                className="border-1 mt-2 border-[rgba(255,255,255,0.15)] w-full text-sm text-[#9D9D9D] h-[3.5rem] leading-[3.5rem] text-center rounded-4xl cursor-pointer hover:bg-white transition-colors flex justify-center items-center"><span><img
                                    src="/images/login/google.webp" alt="pr3cio-logo" loading="lazy"
                                    className="mr-3" /></span> Log in to continue</a> */}
                            <GoogleLoginButton
                                onSuccess={() =>
                                    router.push('/discover-your-genre')
                                }
                                isArtist={true}
                            />
                        </center>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistSignupForm
