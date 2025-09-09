'use client'

import { useEffect } from 'react'
import { verifyEmail } from '@/services/api/user-ep'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    Image,
    InputOtp,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { VerifyEmailParam } from '@/models/params/verify-email.param'
import { VerifyEmailData } from '@/models/responses/verify-email-data'
import queryConstants from '@/constants/query-constants'
import { getEmailFromCookie } from '@/utils/auth-utils'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'

const VerifyAccountModal = () => {
    const { modal, setModal } = useApp()
    const { saveSession } = useAuth()

    const handleClose = () => {
        setModal('none')
    }

    const { mutateAsync } = useMutation<
        VerifyEmailData,
        Error,
        VerifyEmailParam
    >({
        mutationKey: [queryConstants.verifyEmail],
        mutationFn: verifyEmail,
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: '',
        },
        validationSchema: yup.object().shape({
            otp: yup.string().label('Otp').required(),
        }),
        onSubmit: (values, formikHelpers) => {
            mutateAsync({ ...values, email: getEmailFromCookie() })
                .then((data) => {
                    toast.success('Verify email successfully!')
                    saveSession(data.user)
                    formikHelpers.resetForm()
                    handleClose()
                })
                .catch((err) => {
                    toast.error(err?.message)
                })
                .finally(() => {
                    formikHelpers.setSubmitting(false)
                })
        },
    })

    const { errors, touched, setFieldValue } = formik

    useEffect(() => {
        setFieldValue('email', getEmailFromCookie())
    }, [setFieldValue])

    const handleOtpComplete = (otp?: string) => {
        formik.setFieldValue('otp', otp)
        formik.submitForm()
    }

    return (
        <Drawer
            isOpen={modal === 'verify-account'}
            onClose={handleClose}
            size='full'
            scrollBehavior='inside'>
            <DrawerContent>
                <DrawerBody>
                    <div className='mx-auto flex w-full flex-col items-center justify-center py-4 sm:w-2/3 lg:w-1/3'>
                        <Image
                            src='/img/logo/favicon.png'
                            alt='PR3CIO LOGO'
                            className='h-20'
                        />
                        <h1 className='text-h2 my-2'>
                            Please Check Your Email
                        </h1>
                        <p className='text-body2 text-gray-500 dark:text-gray-200'>
                            We have sent an code to{' '}
                            <span className='font-semibold text-primary'>
                                {formik.values.email}
                            </span>
                        </p>
                        <form
                            className='mt-6 flex w-full flex-col items-center gap-5'
                            onSubmit={formik.handleSubmit}
                            onReset={formik.handleReset}>
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
                                    segmentWrapper: 'lg:gap-3',
                                }}
                                isInvalid={!!errors.otp && touched.otp}
                                errorMessage={errors.otp}
                            />
                            <Button
                                isLoading={formik.isSubmitting}
                                type='submit'
                                className='w-full font-bold sm:w-2/3 lg:w-[80%]'
                                size='lg'
                                color='primary'>
                                Verify
                            </Button>
                        </form>
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default VerifyAccountModal
