'use client'

import React, { useMemo, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { CiCircleRemove } from 'react-icons/ci'
import FileUploader from '@/components/file-uploader'
import { Button, Image, Input, Textarea, Tooltip } from '@heroui/react'
import Container from '@/components/ui/container'
import { postProductsDetails } from '@/services/api/product-api'
import { useRouter } from 'next/navigation'
import { withAuthProtection } from '@/components/auth/protected-component'


const AddMerchandise = () => {
    const [isOpenImageUpload, setIsOpenImageUpload] = useState(false)
    const router = useRouter()
    const initialValues = {
        name: '',
        description: '',
        price: '',
        imageUrl: '',
    }

    const validationSchema = useMemo(() =>
        Yup.object().shape({
            name: Yup.string().required('Product name is required'),
            description: Yup.string().required('Description is required'),
            price: Yup.number()
                .typeError('Price must be a number')
                .required('Price is required')
                .min(0, 'Price must be at least 0'),
            imageUrl: Yup.string().required('Image is required'),
        }), [])

    const onSubmit = async (values, { resetForm }) => {
        const payload = {
            name: values.name,
            description: values.description,
            price: parseFloat(values.price),
            imageUrl: values.imageUrl,
        }

        try {
            const resp = await postProductsDetails(payload)
            if (resp.status) {
                toast.success('Product submitted successfully!')
                router.push("/merchandise")
                resetForm()
            }
        } catch (error) {
            toast.error('Submission failed.')
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
        setFieldValue,
    } = formik

    const handleImageUpload = (url) => {
        setFieldValue('imageUrl', url)
    }

    const handleRemoveImage = () => {
        setFieldValue('imageUrl', '')
    }

    return (
        <Container>
            <div className='text-center mb-10 text-2xl font-bold text-primary'>Upload Product</div>
            <FileUploader
                isOpen={isOpenImageUpload}
                onClose={() => setIsOpenImageUpload(false)}
                onSuccess={handleImageUpload}
                accept={{
                    'image/*': ['.jpg', '.jpeg', '.png'],
                }}
            />

            <div className='space-y-12'>
                <form
                    className='mx-auto flex flex-col gap-6 lg:w-2/3'
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                >
                    {values.imageUrl ? (
                        <div className='relative w-fit'>
                            <Image
                                src={values.imageUrl}
                                alt='product thumbnail'
                                className='h-40 w-40 object-cover'
                                radius='sm'
                            />
                            <Tooltip content='Remove Image'>
                                <Button
                                    isIconOnly
                                    variant='light'
                                    className='absolute -right-8 -top-6'
                                    onPress={handleRemoveImage}
                                >
                                    <CiCircleRemove className='text-2xl text-danger-500' />
                                </Button>
                            </Tooltip>
                        </div>
                    ) : (
                        <Button variant='faded' onPress={() => setIsOpenImageUpload(true)}>
                            Upload Product Image
                        </Button>
                    )}

                    <Input
                        type='text'
                        name='name'
                        label='Product Name'
                        placeholder='Enter product name'
                        variant='faded'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                        errorMessage={errors.name}
                    />

                    <Textarea
                        name='description'
                        label='Description'
                        placeholder='Enter product description'
                        variant='faded'
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.description && !!errors.description}
                        errorMessage={errors.description}
                    />

                    <Input
                        type='number'
                        name='price'
                        label='Price'
                        placeholder='Enter product price'
                        variant='faded'
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.price && !!errors.price}
                        errorMessage={errors.price}
                    />

                    <Button
                        type='submit'
                        size='lg'
                        isLoading={isSubmitting}
                        className='mb-6 w-full font-bold md:col-span-2'
                        color='primary'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Product'}
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default withAuthProtection(AddMerchandise)