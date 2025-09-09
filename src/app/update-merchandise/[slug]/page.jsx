'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { CiCircleRemove } from 'react-icons/ci'
import FileUploader from '@/components/file-uploader'
import { Button, Image, Input, Textarea, Tooltip } from '@heroui/react'
import Container from '@/components/ui/container'
import { getProductDetailByID, updateProductDetailByID } from '@/services/api/product-api'
import useAuth from '@/hooks/useAuth'
import { withAuthProtection } from '@/components/auth/protected-component'

const UpdateMerchandise = ({ params }) => {
    const router = useRouter()
    const { user, isLoading } = useAuth()
    // Use the React.use hook to unwrap params
    const productId = React.use(params).slug;

    const [product, setProduct] = useState(null)
    const [isOpenImageUpload, setIsOpenImageUpload] = useState(false)

    // Fetch product data only when slug is available
    const fetchProduct = async () => {
        try {
            const response = await getProductDetailByID(productId) // Fetch the product using slug
            if (response.status === 'success') {
                setProduct(response.data)
            } else {
                toast.error('Failed to fetch product data')
            }
        } catch (error) {
            toast.error('Error fetching product data')
        }
    }

    useEffect(() => {
        if (productId) {
            fetchProduct() // Call fetchProduct when slug is available
        }
    }, [productId]) // Dependency on productId to ensure fetch is triggered only when slug is available

    // Formik setup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Product name is required'),
        description: Yup.string().required('Description is required'),
        price: Yup.number()
            .typeError('Price must be a number')
            .required('Price is required')
            .min(0, 'Price must be at least 0'),
        imageUrl: Yup.string().required('Image is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            imageUrl: '',
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const payload = {
                name: values.name,
                description: values.description,
                price: parseFloat(values.price),
                imageUrl: values.imageUrl,
            }
            try {
                // Uncomment and implement updateProductDetails API call
                const response = await updateProductDetailByID(productId, payload);
                if (response.status === 'success') {
                    toast.success('Product updated successfully!');
                    router.push("/merchandise")
                    resetForm();

                }
            } catch (error) {
                toast.error('Submission failed.')
            }
        },
    })
    const updateFormStart = () => {
        if (product) {
            formik.setValues({
                name: product.name || '',
                description: product.description || '',
                price: product.price || '',
                imageUrl: product.imageUrl[0] || '',
            })
        }
    }
    // Update form values when product data is fetched
    useEffect(() => {
        updateFormStart()
    }, [product])

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

    if (!product) {
        return <div>Loading...</div>
    }
    return (
        <Container>
            <div className="text-center mb-10 text-2xl font-bold text-primary">Edit Product</div>
            <FileUploader
                isOpen={isOpenImageUpload}
                onClose={() => setIsOpenImageUpload(false)}
                onSuccess={handleImageUpload}
                accept={{
                    'image/*': ['.jpg', '.jpeg', '.png'],
                }}
            />

            <div className="space-y-12">
                <form
                    className="mx-auto flex flex-col gap-6 lg:w-2/3"
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                >
                    {values.imageUrl ? (
                        <div className="relative w-fit">
                            <Image
                                src={values.imageUrl}
                                alt="product thumbnail"
                                className="h-40 w-40 object-cover"
                                radius="sm"
                            />
                            <Tooltip content="Remove Image">
                                <Button
                                    isIconOnly
                                    variant="light"
                                    className="absolute -right-8 -top-6"
                                    onPress={handleRemoveImage}
                                >
                                    <CiCircleRemove className="text-2xl text-danger-500" />
                                </Button>
                            </Tooltip>
                        </div>
                    ) : (
                        <Button variant="faded" onPress={() => setIsOpenImageUpload(true)}>
                            Upload Product Image
                        </Button>
                    )}

                    <Input
                        type="text"
                        name="name"
                        label="Product Name"
                        placeholder="Enter product name"
                        variant="faded"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                        errorMessage={errors.name}
                    />

                    <Textarea
                        name="description"
                        label="Description"
                        placeholder="Enter product description"
                        variant="faded"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.description && !!errors.description}
                        errorMessage={errors.description}
                    />

                    <Input
                        type="number"
                        name="price"
                        label="Price"
                        placeholder="Enter product price"
                        variant="faded"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.price && !!errors.price}
                        errorMessage={errors.price}
                    />

                    <Button
                        type="submit"
                        size="lg"
                        isLoading={isSubmitting}
                        className="mb-6 w-full font-bold md:col-span-2"
                        color="primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Update Product'}
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default withAuthProtection(UpdateMerchandise)
