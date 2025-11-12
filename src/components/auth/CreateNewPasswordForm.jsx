'use client'

import { changePassword } from '@/services/api/user-ep'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'
import { changePasswordValidationSchema } from '@/utils/formValidation'

import ErrorText from '../ui/ErrorText'
import Loader from '../ui/Loader'

const CreateNewPasswordForm = () => {
    const router = useRouter()
    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.changePassword],
        mutationFn: changePassword,
    })

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: changePasswordValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            // console.log('Values', values)
            const { ...payload } = values
            console.log('values', values)
            try {
                await mutateAsync({ ...payload })
                toast.success('Password changed successfully!')
                sessionStorage.removeItem('isForgotPassword')
                router.push('/login')
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
                                    Create New Password
                                </h1>
                                <p className='mb-8 mt-2 text-sm text-[#A3A3A3] md:text-base'>
                                    Please provide proper password
                                </p>
                            </center>

                            <form onSubmit={formik.handleSubmit}>
                                <div className='relative mb-4'>
                                    <label className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                        New Password
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

                                <div className='relative mb-5'>
                                    <button
                                        type='submit'
                                        className='rounded-4xl h-[3rem] w-full cursor-pointer bg-[#C6FF00] text-center text-sm leading-[3rem] text-black transition-colors hover:bg-[#afe200]'>
                                        {formik.isSubmitting ? (
                                            <Loader size='sm' />
                                        ) : (
                                            'Update'
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

export default CreateNewPasswordForm
