'use client'

import { useState } from 'react'
import { login } from '@/services/api/user-ep'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import { loginValidationSchema } from '@/utils/formValidation'
import useAuth from '@/hooks/useAuth'

import ErrorText from '../ui/ErrorText'
import Loader from '../ui/Loader'
import GoogleLoginButton from './goole-login'
import LoginToggle from './LoginType'
import { publicImages } from '@/utils/publicImages'

const LoginForm = () => {
    const [isArtist, setIsArtist] = useState(null)
   const [showPassword,setShowPassword]=useState(false)
    const router = useRouter()
    const { saveSession } = useAuth()
    const { mutateAsync: loginMutate } = useMutation({
        mutationKey: [queryConstants.login],
        mutationFn: login,
    })

    console.log('isArtist', isArtist)

    const formik = useFormik({
        initialValues: {
            loginId: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const data = await loginMutate(values)
                toast.success('Login successful!')
                resetForm()
                console.log('Data======>', data)
                saveSession(data.user)
                // if (data?.user?.is_artist) {
                //     if (data?.user?.categories && data?.user?.categories.length) {
                //         router.push("/artists/dashboard");
                //     } else {
                //         router.push("/discover-your-genre");
                //     }
                // } else {
                //     if (data?.user?.categories && data?.user?.categories.length) {
                //         router.push("/");
                //     } else {
                //         router.push("/discover-your-genre");
                //     }
                // }
                if (data?.user?.is_artist) {
                    if (data?.user?.categories?.length) {
                        window.location.href = '/artists/dashboard'
                    } else {
                        window.location.href = '/discover-your-genre'
                    }
                } else {
                    if (data?.user?.categories?.length) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/discover-your-genre'
                    }
                }
            } catch (err) {
                toast.error(err?.message || 'Login failed')
            } finally {
                setSubmitting(false)
            }
        },
    })

    return (
        <section className='login' style={{
            backgroundImage: `url(${publicImages.bodyBackground})`,
        }}>
            {/* <div className="flex flex-col md:flex-row ">
                <div className="w-[50%] h-screen">
                    <Image
                        height={700}
                        width={400}
                        src="/images/login/login.webp"
                        alt=""
                        className="h-full 2xl:h-screen w-full object-cover"
                        quality={50}
                    />
                </div>
                <div className="w-[50%] bg-[#191919] relative bg-[url('/images/login/wave.webp')] bg-no-repeat bg-top-right flex justify-center items-center p-4">
                    <div className="max-w-[27.38rem] w-full m-auto">
                        <center>
                            <h1 className="font-semibold text-[2.25rem]">
                                Sign In To Continue
                            </h1>
                            <p className="text-base text-[#A3A3A3] mb-8">
                                Access Your Account in Just a Few Clicks
                            </p>
                        </center>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-5 relative">
                                <label
                                    htmlFor="loginId"
                                    className="text-base font-medium text-[#D1CAD5] mb-2 block"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="loginId"
                                    name="loginId"
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Email or Number"
                                    value={formik.values.loginId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.loginId && formik.errors.loginId ? (
                                    <ErrorText errorMessage={formik.errors.loginId} />
                                ) : null}
                            </div>

                            <div className="mb-5 relative">
                                <label
                                    htmlFor="password"
                                    className="text-base font-medium text-[#D1CAD5] mb-2 block"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <span className="absolute right-[1rem] top-[2.7rem] text-[#9D9D9D]">
                                    <i className="bi bi-eye"></i>
                                </span>
                                {formik.touched.password && formik.errors.password ? (
                                    <ErrorText errorMessage={formik.errors.password} />
                                ) : null}

                                <small className="block text-right mt-3">
                                    <a
                                        href="#"
                                        className="text-[#4D41FA] underline text-xs"
                                    >
                                        Forgot Password?
                                    </a>
                                </small>
                            </div>

                            <div className="mb-5 relative">
                                <button
                                    type="submit"
                                    className="bg-[#C6FF00] w-full text-sm text-black h-[3rem] leading-[3rem] text-center rounded-4xl cursor-pointer hover:bg-[#afe200] transition-colors"
                                >
                                    {formik.isSubmitting ? <Loader size="sm" /> : "Submit"}
                                </button>
                            </div>
                        </form>

                        <center>
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
                        </center>
                    </div>
                </div>
            </div> */}

            <div className="flex min-h-screen w-full justify-center bg-cover bg-bottom bg-no-repeat">
                <div className='gradient-bg-2 bg-top-right relative mb-5 flex h-screen w-full items-center justify-center p-4 md:mb-0 md:w-[45%]'>
                    <LoginToggle
                        setIsArtist={setIsArtist}
                        isArtist={isArtist}
                    />
                    <div className='m-auto w-full max-w-[27.38rem]'>
                        <center>
                            <h1 className='text-xl font-semibold md:text-4xl'>
                                Sign In To Continue
                            </h1>
                            <p className='mb-8 mt-2 text-sm text-[#A3A3A3] md:text-base'>
                                Access Your Account in Just a Few Clicks
                            </p>
                        </center>

                        <form onSubmit={formik.handleSubmit}>
                            <div className='relative mb-5'>
                                <label
                                    htmlFor='loginId'
                                    className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                    Email
                                </label>
                                <input
                                    type='text'
                                    id='loginId'
                                    name='loginId'
                                    className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                    placeholder='Enter Email or Number'
                                    value={formik.values.loginId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.loginId &&
                                    formik.errors.loginId ? (
                                    <ErrorText
                                        errorMessage={formik.errors.loginId}
                                    />
                                ) : null}
                            </div>

                            <div className='relative mb-5'>
                                <label
                                    htmlFor='password'
                                    className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                    Password
                                </label>
                                <input
                                    type={showPassword ? 'text' :'password'}
                                    id='password'
                                    name='password'
                                    className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                    placeholder='Enter Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute right-[1rem] top-[2.7rem] text-[#9D9D9D]'>
                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </button>
                                {formik.touched.password &&
                                    formik.errors.password ? (
                                    <ErrorText
                                        errorMessage={formik.errors.password}
                                    />
                                ) : null}

                                <small className='mt-3 block text-right'>
                                    <a
                                        href='/forgot-password'
                                        className='text-xs text-[#4D41FA] underline'>
                                        Forgot Password?
                                    </a>
                                </small>
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

                        <center>
                            <h6 className='mb-6 mt-6 text-sm font-semibold'>
                                {"Don't have an account?"}{' '}
                                <Link
                                    href='/user-signup'
                                    className='text-[#4D41FA] underline'>
                                    Sign Up
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
                                isArtist={isArtist}
                            />
                        </center>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm
