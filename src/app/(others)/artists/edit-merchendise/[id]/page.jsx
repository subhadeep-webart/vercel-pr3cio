'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
    getProductsDetails,
    updateProductsDetails,
} from '@/services/api/product-api'
import { commonImgDelete, uploadProductImages } from '@/services/api/user-api'
import { Select, SelectItem } from '@heroui/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

import queryConstants from '@/constants/query-constants'
import { MERCENDISE_SIZE_OPTIONS } from '@/utils/constant'

const EditMerchendise = () => {
    const params = useParams()
    const productId = params.id
    console.log('product id', productId)

    const fileInputRef = useRef(null)
    const router = useRouter()

    const initialValues = {
        name: '',
        description: '',
        price: '',
        quantity: '',
        imageUrl: [],
        variant: [],
    }

    const [originalVariants, setOriginalVariants] = useState([])

    const {
        data: productData,
        isLoading: isProductLoading,
        isError,
    } = useQuery({
        queryKey: [queryConstants.getProductUpload, productId],
        queryFn: () => getProductsDetails(productId),
        enabled: !!productId,
    })

    console.log('productData', productData)
    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.uploadProductImage],
        mutationFn: uploadProductImages,
    })

    const validationSchema = useMemo(
        () =>
            Yup.object().shape({
                name: Yup.string().required('Product name is required'),
                description: Yup.string().required('Description is required'),
                price: Yup.number()
                    .typeError('Price must be a number')
                    .required('Price is required')
                    .min(0, 'Price must be at least 0'),
                quantity: Yup.number()
                    .typeError('Quantity must be a number')
                    .required('Quantity is required')
                    .min(1, 'Quantity must be at least 1'),
                imageUrl: Yup.array()
                    .min(1, 'At least one image is required')
                    .required('Image is required'),
                variant: Yup.array()
                    .min(1, 'At least one size is required')
                    .required('Sizes is required'),
            }),
        []
    )

    const onSubmit = async (values, { resetForm }) => {
        console.log('values', values)
        const payload = {
            name: values.name,
            description: values.description,
            price: parseFloat(values.price),
            quantity: parseInt(values.quantity),
            imageUrl: values.imageUrl,
            variant: values.variant.map((size) => {
                const existing = originalVariants.find(
                    (v) => v.variantValue === size
                )
                return {
                    _id: existing ? existing._id : null,
                    variantType: 'size',
                    variantValue: size,
                }
            }),
        }

        try {
            const resp = await updateProductsDetails(productId, payload)
            if (resp.status) {
                toast.success('Product updated successfully!')
                router.push('/artists/merchendise')
                resetForm()
            }
        } catch (error) {
            toast.error('Updation failed.')
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
        setFieldValue,
    } = formik

    useEffect(() => {
        if (productData) {
            setFieldValue('name', productData?.data?.name || '')
            setFieldValue('description', productData?.data?.description || '')
            setFieldValue('price', productData?.data?.price || '')
            setFieldValue('quantity', productData?.data?.quantity || '')
            setFieldValue('imageUrl', productData?.data?.imageUrl || [])

            const original = productData?.data?.variant || []
            setOriginalVariants(original)

            setFieldValue('variant', original.map((v) => v.variantValue) || [])
        }
    }, [productData, setFieldValue])

    const handleFileChange = async (event) => {
        const files = Array.from(event.target.files)
        const formData = new FormData()
        files.forEach((file) => formData.append('image', file))

        try {
            const response = await mutateAsync(formData)
            console.log('response', response)
            if (response?.data) {
                setFieldValue('imageUrl', [
                    ...values.imageUrl,
                    ...response.data,
                ])
            }
            toast.success('Image uploaded successfully')
        } catch (err) {
            toast.error('Upload Failed')
        }
    }

    const { mutate, isPending } = useMutation({
        mutationFn: (payload) => commonImgDelete(payload),

        onError: (error) => {
            toast.error(error?.message || 'Delete failed!')
        },
    })

    const handleDeleteImage = (url) => {
        console.log('url', url)
        const payload = {
            imageUrl: [url],
            type: 'artist',
        }

        mutate(payload, {
            onSuccess: (data) => {
                toast.success(data?.message || 'Image deleted successfully')

                const updatedImages = values.imageUrl.filter(
                    (img) => img !== url
                )
                setFieldValue('imageUrl', updatedImages)
            },
            onError: (error) => {
                toast.error(error?.message || 'Delete failed!')
            },
        })
    }

    const handleRemoveSize = (sizeToRemove) => {
        setFieldValue(
            'variant',
            values.variant.filter((size) => size !== sizeToRemove)
        )
    }

    return (
        <>
            <div className='grid grid-cols-12 justify-center rounded-[0.876rem] bg-[#2A2929] px-4 py-7'>
                <button
                    type='button'
                    onClick={() => fileInputRef.current.click()}
                    className='z-1 relative col-span-4 col-start-5 mb-12 cursor-pointer rounded-[0.3rem] border-1 border-dashed border-[#C1D1EE] bg-custom-gradient p-3 text-center'>
                    <div className='grid grid-flow-col items-center justify-center gap-4'>
                        <span className='xxl:text-[1.05rem] font-bold xl:text-[0.9rem]'>
                            Upload product image
                        </span>
                    </div>
                </button>

                <input
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    accept='image/*'
                />
                {touched.imageUrl && errors.imageUrl && (
                    <p className='col-span-12 text-sm text-red-500'>
                        {errors.imageUrl}
                    </p>
                )}

                <div className='col-span-12 col-start-4 mb-4 flex flex-wrap gap-4'>
                    {values.imageUrl.map((url, index) => (
                        <div
                            key={index}
                            className='group relative h-[80px] w-[80px] rounded border border-[#404040]'>
                            <img
                                src={url}
                                alt={`Uploaded ${index}`}
                                className='h-full w-full object-cover'
                            />
                            <button
                                type='button'
                                onClick={() => handleDeleteImage(url)}
                                className='absolute -right-3 -top-2 z-10 h-5 w-5 rounded-full text-xs text-white shadow-md hover:bg-red-600'>
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                <form
                    onSubmit={handleSubmit}
                    className='col-span-12 md:col-span-10 md:col-start-2'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 mt-6'>
                            <label className='text-base text-[#D1CAD5]'>
                                Description
                            </label>
                            <textarea
                                name='description'
                                rows='4'
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='mt-2 w-full resize-none rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 py-3 text-sm'
                                placeholder='Product description'
                            />
                            {touched.description && errors.description && (
                                <p className='text-sm text-red-500'>
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div className='col-span-12 mt-6 md:col-span-6'>
                            <label className='text-base text-[#D1CAD5]'>
                                Product Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='mt-2 h-[2.5rem] w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 text-sm'
                                placeholder='Product Name'
                            />
                            {touched.name && errors.name && (
                                <p className='text-sm text-red-500'>
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className='col-span-12 mt-6 md:col-span-3'>
                            <label className='text-base text-[#D1CAD5]'>
                                Product Price
                            </label>
                            <input
                                type='text'
                                name='price'
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='mt-2 h-[2.5rem] w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 text-sm'
                                placeholder='Enter Price'
                            />
                            {touched.price && errors.price && (
                                <p className='text-sm text-red-500'>
                                    {errors.price}
                                </p>
                            )}
                        </div>

                        <div className='col-span-12 mt-6 md:col-span-3'>
                            <label className='text-base text-[#D1CAD5]'>
                                Product Quantity
                            </label>
                            <input
                                type='text'
                                name='quantity'
                                value={values.quantity}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='mt-2 h-[2.5rem] w-full rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 text-sm'
                                placeholder='Enter Quantity'
                            />
                            {touched.quantity && errors.quantity && (
                                <p className='text-sm text-red-500'>
                                    {errors.quantity}
                                </p>
                            )}
                        </div>

                        <div className='col-span-12 mt-6'>
                            <label className='text-base text-[#D1CAD5]'>
                                Add Product Size
                            </label>
                            <Select
                                name='variant'
                                selectionMode='multiple'
                                selectedKeys={values.variant}
                                onSelectionChange={
                                    (keys) =>
                                        setFieldValue(
                                            'variant',
                                            Array.from(keys)
                                        ) // update Formik
                                }
                                placeholder='Select product sizes'
                                className='mt-2 w-full max-w-full'
                                classNames={{
                                    trigger:
                                        'rounded-[1rem] border border-[#404040] bg-[#2E2E2E] px-5 py-3 text-sm text-[#9D9D9D]',
                                }}>
                                {MERCENDISE_SIZE_OPTIONS.map(
                                    (option, index) => (
                                        <SelectItem key={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    )
                                )}
                            </Select>

                            {values.variant.length > 0 && (
                                <div className='mt-4 flex flex-wrap gap-3'>
                                    {values.variant.map((size) => (
                                        <div
                                            key={size}
                                            className='relative inline-flex items-center rounded-md bg-[#444] px-3 py-1 text-sm text-white'>
                                            <span>{size}</span>
                                            <button
                                                type='button'
                                                onClick={() =>
                                                    handleRemoveSize(size)
                                                }
                                                className='absolute -right-3 -top-2 h-5 w-5 rounded-full text-xs text-white shadow hover:bg-red-600'>
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {touched.variant && errors.variant && (
                                <p className='text-sm text-red-500'>
                                    {errors.variant}
                                </p>
                            )}
                        </div>

                        <div className='col-span-12 mt-6 text-center'>
                            <button
                                type='submit'
                                className='mt-6 inline-block h-[2.5rem] w-full max-w-[15.438rem] cursor-pointer rounded-full bg-[#C6FF00] px-5 text-center text-sm leading-[2.5rem] text-black transition-all duration-300'>
                                Save & Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditMerchendise
