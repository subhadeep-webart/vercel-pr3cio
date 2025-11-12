'use client'

import { forgotPassword } from '@/services/api/user-ep'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import { forgotPasswordValidationSchema } from '@/utils/formValidation'

import ErrorText from '../ui/ErrorText'
import Loader from '../ui/Loader'

const ForgotPasswordForm = () => {
    const router = useRouter()
    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.forgotPassword],
        mutationFn: forgotPassword,
    })

    const formik = useFormik({
        initialValues: {
            userId: '',
        },
        validationSchema: forgotPasswordValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            // console.log('Values', values)
            const { ...payload } = values
            console.log('values', values)
            try {
                await mutateAsync({ ...payload })
                toast.success('Verify email to complete password change!')
                sessionStorage.setItem('email', payload.userId)
                sessionStorage.setItem('isForgotPassword', true)
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
        <>
            <section className='login'>
                <div className="flex min-h-screen w-full justify-center bg-[url('/img/login-bg.png')] bg-cover bg-bottom bg-no-repeat">
                    <div className='gradient-bg-2 bg-top-right relative mb-5 flex h-screen w-full items-center justify-center p-4 md:mb-0 md:w-[45%]'>
                        <div className='m-auto w-full max-w-[27.38rem]'>
                            <center>
                                <h1 className='text-xl font-semibold md:text-4xl'>
                                    Forgot Password?
                                </h1>
                                <p className='mb-8 mt-2 text-sm text-[#A3A3A3] md:text-base'>
                                    Please write your email to get a
                                    confirmation mail to set a new password
                                </p>
                            </center>

                            <form onSubmit={formik.handleSubmit}>
                                <div className='relative mb-5'>
                                    <label
                                        htmlFor='userId'
                                        className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                        Email
                                    </label>
                                    <input
                                        type='text'
                                        id='userId'
                                        name='userId'
                                        className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                        placeholder='Enter Email or Number'
                                        value={formik.values.userId}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.userId &&
                                    formik.errors.userId ? (
                                        <ErrorText
                                            errorMessage={formik.errors.userId}
                                        />
                                    ) : null}
                                </div>

                                <div className='relative mb-5'>
                                    <button
                                        type='submit'
                                        className='rounded-4xl h-[3rem] w-full cursor-pointer bg-[#C6FF00] text-center text-sm leading-[3rem] text-black transition-colors hover:bg-[#afe200]'>
                                        {formik.isSubmitting ? (
                                            <Loader size='sm' />
                                        ) : (
                                            'Confirm mail'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPasswordForm
