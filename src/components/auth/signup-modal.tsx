'use client'

import { useEffect, useState } from 'react'
import { signup } from '@/services/api/user-ep'
import {
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    Image,
    Input,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import * as yup from 'yup'
import { SignupParam } from '@/models/params/signup-param'
import queryConstants from '@/constants/query-constants'
import useApp from '@/hooks/useApp'
import Artist from "../../../public/img/signUp/Artist.png"
import Listner from "../../../public/img/signUp/Listner.png"
import GoogleLoginButton from './goole-login'
import { useAppSelector } from '@/redux/store'
import { FaCheckCircle } from 'react-icons/fa'


const SignupModal = () => {
    const [eyeOpen, setEyeOpen] = useState(false)
    const isArtist = useAppSelector((state) => state.app.isArtist)
    const { modal, setModal } = useApp()
    const handleClose = () => {
        setModal('none')
    }

    const { mutateAsync } = useMutation<any, Error, SignupParam>({
        mutationKey: [queryConstants.signup],
        mutationFn: signup,
    })

    useEffect(() => {
        formik.setFieldValue('is_artist', isArtist)
    }, [isArtist])

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            password: '',
            is_artist: isArtist,
        },
        validationSchema: yup.object().shape({
            email: yup.string().label('Email').required(),
            phone: yup.string().label('Phone').required(),
            password: yup.string().label('Password').required(),
        }),
        onSubmit: (values, formikHelpers) => {
            mutateAsync(values)
                .then(() => {
                    toast.success('Verify email to complete signup!')
                    setModal('verify-account')
                    formikHelpers.resetForm()
                })
                .catch((err) => {
                    toast.error(err?.message)
                })
                .finally(() => {
                    formikHelpers.setSubmitting(false)
                })
        },
    })

    const { errors, touched } = formik

    return (
        <Drawer
            isOpen={modal === 'signup'}
            onClose={handleClose}
            size='full'
            scrollBehavior='inside'
            classNames={{
                closeButton: 'text-2xl',
            }}>
            <DrawerContent>
                <DrawerBody>
                    <div className='mx-auto flex w-full flex-col items-center justify-center py-4 sm:w-2/3 lg:w-1/3'>
                        <Image
                            src='/img/logo/favicon.png'
                            alt='PR3CIO LOGO'
                            className='h-20'
                        />
                        <h1 className='text-h2 mt-2'>Let&apos;s get started</h1>
                        <form
                            className='mt-10 flex w-full flex-col gap-5'
                            onSubmit={formik.handleSubmit}
                            onReset={formik.handleReset}>
                            <div className="flex items-center justify-center gap-12 mt-6">
                                {/* Listener Avatar */}
                                <label className="relative cursor-pointer">
                                    <input
                                        type="radio"
                                        name="is_artist"
                                        checked={formik.values.is_artist === false}
                                        onChange={() => formik.setFieldValue('is_artist', false)}
                                        className="hidden"
                                    />
                                    <img
                                        src={Listner.src}
                                        alt="Listener"
                                        className="h-24 w-24 rounded-full    transition-all signUpCard  "
                                    />
                                    {formik.values.is_artist === false && (
                                        <FaCheckCircle className="absolute top-3 right-0 text-green-500 bg-white rounded-full text-md" />
                                    )}
                                    <div className='text-center mt-2'>Listener</div>
                                </label>

                                {/* Artist Avatar */}
                                <label className="relative cursor-pointer">
                                    <input
                                        type="radio"
                                        name="is_artist"
                                        checked={formik.values.is_artist === true}
                                        onChange={() => formik.setFieldValue('is_artist', true)}
                                        className="hidden"
                                    />
                                    <img
                                        src={Artist.src}
                                        alt="Artist"
                                        className="h-24 w-24 rounded-full  transition-all signUpCard "

                                    />
                                    {formik.values.is_artist === true && (
                                        <FaCheckCircle className="absolute top-3 right-0 text-green-500 bg-white rounded-full text-md" />
                                    )}
                                    <div className=' text-center mt-2'>Artist</div>
                                </label>
                            </div>
                            <Input
                                label='Email'
                                placeholder='Your Email'
                                variant='faded'
                                {...formik.getFieldProps('email')}
                                isInvalid={touched?.email && !!errors?.email}
                                errorMessage={errors?.email}
                            />
                            <Input
                                label='Phone'
                                placeholder='Your Phone'
                                variant='faded'
                                {...formik.getFieldProps('phone')}
                                isInvalid={touched?.phone && !!errors?.phone}
                                errorMessage={errors?.phone}
                            />
                            <Input
                                label='Password'
                                placeholder='Your Password'
                                type={eyeOpen ? 'text' : 'password'}
                                variant='faded'
                                endContent={
                                    <span
                                        className='cursor-pointer'
                                        onClick={() =>
                                            setEyeOpen((prev) => !prev)
                                        }>
                                        {eyeOpen ? <LuEye /> : <LuEyeClosed />}
                                    </span>
                                }
                                {...formik.getFieldProps('password')}
                                isInvalid={
                                    touched?.password && !!errors?.password
                                }
                                errorMessage={errors?.password}
                            />
                            <Button
                                isLoading={formik.isSubmitting}
                                type='submit'
                                className='w-full font-bold'
                                size='lg'
                                color='primary'>
                                Sign up
                            </Button>
                        </form>
                        <p className='my-10'>
                            have an account?{' '}
                            <span
                                onClick={() => setModal('signin')}
                                className='cursor-pointer text-primary'>
                                Sign in
                            </span>
                        </p>

                        <div className='relative w-full'>
                            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-default-50 px-2'>
                                OR
                            </span>
                            <Divider className='h-0.5' />
                        </div>

                        <GoogleLoginButton onSuccess={handleClose} isArtist={formik?.values?.is_artist} />
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default SignupModal
