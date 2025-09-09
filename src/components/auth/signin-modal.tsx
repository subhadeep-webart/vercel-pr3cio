'use client'

import { useState } from 'react'
import { forgetPassword, login, resetPassword, verifyEmail, verifyOtp } from '@/services/api/user-ep'
import {
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    Image,
    Input,
    InputOtp,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import * as yup from 'yup'

import {
    SigninParam,
    // ForgotPasswordParam,
    // ResetPasswordParam,
    // SigninData,
    // ForgotPasswordData,
    // ResetPasswordData,
} from '@/models/params/signin-param'
import queryConstants from '@/constants/query-constants'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'

import GoogleLoginButton from './goole-login'
import { getAccessTokenFromCookie } from '@/utils/auth-utils'

const SigninModal = () => {
    const [accessToken, setAccessToken] = useState<any>("")
    const [eyeOpen, setEyeOpen] = useState(false)
    const [eyeOpen1, setEyeOpen1] = useState(false)
    const [eyeOpen2, setEyeOpen2] = useState(false)
    const [userId, setUserId] = useState("")
    const [showDiv, setShowDiv] = useState<'Login' | 'Forgot' | 'Reset' | 'OtpVerification'>('Login')
    const { modal, setModal } = useApp()
    const router = useRouter()
    const { saveSession } = useAuth()

    const handleClose = () => {
        setModal('none')
        router.replace('/')
    }

    // Login Mutation
    const { mutateAsync: loginMutate } = useMutation<any, Error, SigninParam>({
        mutationKey: [queryConstants.login],
        mutationFn: login,
    })

    const loginFormik = useFormik({
        initialValues: {
            loginId: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            loginId: yup.string().label('User Id').required(),
            password: yup.string().label('Password').required(),
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            loginMutate(values)
                .then((data) => {
                    toast.success('Login successful!')
                    handleClose()
                    resetForm()
                    saveSession(data.user)
                })
                .catch((err) => {
                    toast.error(err?.message || 'Login failed')
                })
                .finally(() => {
                    setSubmitting(false)
                })
        },
    })

    // Forgot Password Formik
    const forgotFormik = useFormik({
        initialValues: {
            loginId: '',
        },
        validationSchema: yup.object().shape({
            loginId: yup
                .string()
                .label('User Id')
                .email('Invalid email') // Assuming loginId is an email
                .required(),
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            forgetPassword({ userId: values.loginId })
                .then((data) => {
                    setUserId(values.loginId)
                    toast.success(data.message)
                    setShowDiv('OtpVerification')
                    resetForm()
                })
                .catch((err) => {
                    toast.error(err?.message || 'Failed to send reset link')
                })
                .finally(() => {
                    setSubmitting(false)
                })
        },
    })
    const otpFormik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: yup.object().shape({
            otp: yup
                .string()
                .label('OTP')
                .matches(/^\d{4,6}$/, 'OTP must be 4-6 digits')
                .required(),
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            verifyOtp({ userId: userId, otp: values.otp })
                .then((data) => {
                    setShowDiv('Reset')
                    setAccessToken(data.token)
                    toast.success(data.message || 'OTP verified!')
                    resetForm()
                })
                .catch((err) => {
                    toast.error(err?.message || 'Invalid OTP')
                })
                .finally(() => {
                    setSubmitting(false)
                })
        },
    })

    // Reset Password Formik
    const resetFormik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: yup.object().shape({
            password: yup
                .string()
                .label('Password')
                .min(6, 'Password too short')
                .required(),
            confirmPassword: yup
                .string()
                .label('Confirm Password')
                .oneOf([yup.ref('password')], 'Passwords must match')
                .required(),

        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            resetPassword({ ...values, userId: userId, token: accessToken })
                .then((data) => {
                    toast.success(data.message || 'Password reset successful!')
                    setShowDiv('Login') // Go back to Login
                    resetForm()
                })
                .catch((err) => {
                    toast.error(err?.message || 'Failed to reset password')
                })
                .finally(() => {
                    setSubmitting(false)
                })
        },
    })

    return (
        <Drawer
            isOpen={modal === 'signin'}
            onClose={handleClose}
            size='full'
            scrollBehavior='outside'
            classNames={{
                closeButton: 'text-2xl',
            }}
        >
            <DrawerContent>
                <DrawerBody>
                    <div className='mx-auto flex w-full flex-col items-center justify-center py-4 sm:w-1/3'>
                        <Image
                            src='/img/logo/favicon.png'
                            alt='PR3CIO LOGO'
                            className='h-20'
                        />

                        {showDiv === 'Login' && (
                            <>
                                <h1 className='text-h2 mt-2'>Signin To Continue</h1>
                                <form
                                    className='mt-10 flex w-full flex-col gap-5'
                                    onSubmit={loginFormik.handleSubmit}
                                    onReset={loginFormik.handleReset}
                                >
                                    <Input
                                        label='Username'
                                        placeholder='Email or Phone'
                                        variant='faded'
                                        {...loginFormik.getFieldProps('loginId')}
                                        isInvalid={
                                            loginFormik.touched.loginId && !!loginFormik.errors.loginId
                                        }
                                        errorMessage={loginFormik.errors.loginId}
                                    />
                                    <Input
                                        label='Password'
                                        placeholder='Your Password'
                                        type={eyeOpen ? 'text' : 'password'}
                                        variant='faded'
                                        endContent={
                                            <span
                                                className='cursor-pointer'
                                                onClick={() => setEyeOpen((prev) => !prev)}
                                                aria-label={eyeOpen ? 'Hide password' : 'Show password'}
                                            >
                                                {eyeOpen ? <LuEye /> : <LuEyeClosed />}
                                            </span>
                                        }
                                        {...loginFormik.getFieldProps('password')}
                                        isInvalid={
                                            loginFormik.touched.password &&
                                            !!loginFormik.errors.password
                                        }
                                        errorMessage={loginFormik.errors.password}
                                    />
                                    <Button
                                        isLoading={loginFormik.isSubmitting}
                                        type='submit'
                                        className='w-full font-bold'
                                        size='lg'
                                        color='primary'
                                    >
                                        Login
                                    </Button>
                                </form>
                                <p
                                    className='my-5 cursor-pointer text-primary'
                                    onClick={() => setShowDiv('Forgot')}
                                >
                                    Forgot Password
                                </p>
                            </>
                        )}

                        {showDiv === 'Forgot' && (
                            <>
                                <h1 className='text-h2 mt-2'>Forgot Password</h1>
                                <form
                                    className='mt-10 flex w-full flex-col gap-5'
                                    onSubmit={forgotFormik.handleSubmit}
                                >
                                    <Input
                                        label='Username'
                                        placeholder='Email'
                                        variant='faded'
                                        {...forgotFormik.getFieldProps('loginId')}
                                        isInvalid={
                                            forgotFormik.touched.loginId &&
                                            !!forgotFormik.errors.loginId
                                        }
                                        errorMessage={forgotFormik.errors.loginId}
                                    />
                                    <Button
                                        isLoading={forgotFormik.isSubmitting}
                                        type='submit'
                                        className='w-full font-bold'
                                        size='lg'
                                        color='primary'
                                    >
                                        Submit
                                    </Button>
                                </form>
                                <p
                                    className='my-5 cursor-pointer text-primary'
                                    onClick={() => setShowDiv('Login')}
                                >
                                    Go Back To Login
                                </p>
                            </>
                        )}

                        {showDiv === 'OtpVerification' && (
                            <>
                                <h1 className='text-h2 mt-2'>Verify OTP</h1>
                                <p className='text-body2 text-gray-500 dark:text-gray-200'>
                                    We have sent an code to{' '}
                                    <span className='font-semibold text-primary'>
                                        {userId}
                                    </span>
                                </p>
                                <form
                                    className='mt-10 flex w-full flex-col items-center  gap-5'
                                    onSubmit={otpFormik.handleSubmit}
                                >

                                    <InputOtp
                                        length={6}
                                        value={otpFormik.values.otp}
                                        onValueChange={(value) => {
                                            otpFormik.setFieldValue('otp', value)
                                        }}
                                        autoFocus
                                        size='lg'
                                        variant='faded'
                                        classNames={{
                                            segmentWrapper: 'lg:gap-3',
                                        }}
                                        isInvalid={!!otpFormik.errors.otp && otpFormik.touched.otp}
                                        errorMessage={otpFormik.errors.otp}
                                    />
                                    <Button
                                        isLoading={otpFormik.isSubmitting}
                                        type='submit'
                                        className='w-full font-bold'
                                        size='lg'
                                        color='primary'
                                    >
                                        Verify OTP
                                    </Button>
                                </form>
                                <p
                                    className='my-5 cursor-pointer text-primary'
                                    onClick={() => setShowDiv('Forgot')}
                                >
                                    Resend OTP
                                </p>
                            </>
                        )}
                        {showDiv === 'Reset' && (
                            <>
                                <h1 className='text-h2 mt-2'>Reset Password</h1>
                                <form
                                    className='mt-10 flex w-full flex-col gap-5'
                                    onSubmit={resetFormik.handleSubmit}
                                >

                                    <Input
                                        label='New Password'
                                        placeholder='New Password'
                                        type={eyeOpen1 ? 'text' : 'password'}
                                        variant='faded'
                                        endContent={
                                            <span
                                                className='cursor-pointer'
                                                onClick={() => setEyeOpen1((prev) => !prev)}
                                                aria-label={eyeOpen1 ? 'Hide password' : 'Show password'}
                                            >
                                                {eyeOpen1 ? <LuEye /> : <LuEyeClosed />}
                                            </span>
                                        }
                                        {...resetFormik.getFieldProps('password')}
                                        isInvalid={
                                            resetFormik.touched.password &&
                                            !!resetFormik.errors.password
                                        }
                                        errorMessage={resetFormik.errors.password}
                                    />
                                    <Input
                                        label='Confirm Password'
                                        placeholder='Confirm Password'
                                        type={eyeOpen2 ? 'text' : 'password'}
                                        variant='faded'
                                        endContent={
                                            <span
                                                className='cursor-pointer'
                                                onClick={() => setEyeOpen2((prev) => !prev)}
                                                aria-label={eyeOpen2 ? 'Hide password' : 'Show password'}
                                            >
                                                {eyeOpen2 ? <LuEye /> : <LuEyeClosed />}
                                            </span>
                                        }
                                        {...resetFormik.getFieldProps('confirmPassword')}
                                        isInvalid={
                                            resetFormik.touched.confirmPassword &&
                                            !!resetFormik.errors.confirmPassword
                                        }
                                        errorMessage={resetFormik.errors.confirmPassword}
                                    />
                                    <Button
                                        isLoading={resetFormik.isSubmitting}
                                        type='submit'
                                        className='w-full font-bold'
                                        size='lg'
                                        color='primary'
                                    >
                                        Reset Password
                                    </Button>
                                </form>
                                <p
                                    className='my-5 cursor-pointer text-primary'
                                    onClick={() => setShowDiv('Login')}
                                >
                                    Go Back To Login
                                </p>
                            </>
                        )}

                        <p className='mb-10 mt-2'>
                            Don&apos;t have an account?{' '}
                            <span
                                onClick={() => setModal('signup')}
                                className='cursor-pointer text-primary'
                            >
                                Sign up
                            </span>
                        </p>

                        <div className='relative w-full'>
                            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-default-50 px-2'>
                                OR
                            </span>
                            <Divider className='h-0.5' />
                        </div>

                        <GoogleLoginButton onSuccess={handleClose} />
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default SigninModal