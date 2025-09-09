'use client'

import { useState } from 'react'
import { createAlbum } from '@/services/api/album-ep'
import { uploadThumbnail } from '@/services/api/song-api'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Image,
    Tooltip,
    Input,
} from '@heroui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormikHelpers, useFormik } from 'formik'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import { CiCircleRemove } from 'react-icons/ci'

import queryConstants from '@/constants/query-constants'
import useApp from '@/hooks/useApp'
import FileUploader from '@/components/file-uploader'

export default function CreateAlbum() {
    const [isOpenThumbnailUpload, setIsOpenThumbnailUpload] = useState(false)
    const { modal, setModal } = useApp()
    const queryClient = useQueryClient()

    const { mutateAsync: uploadThumbnailAsync } = useMutation({
        mutationKey: [queryConstants.fileUpload],
        mutationFn: uploadThumbnail,
    })

    const { mutateAsync: createAlbumAsync } = useMutation({
        mutationKey: [queryConstants.createAlbum],
        mutationFn: createAlbum,
    })

    const initialValues = {
        name: '',
        artwork: '',
    }

    type FormValues = typeof initialValues

    const handleSubmit = (
        values: FormValues,
        formikHelpers: FormikHelpers<FormValues>
    ) => {
        const payload = {
            name: values.name,
            thumbnail: values.artwork, // Backend expects 'thumbnail'
        }

        createAlbumAsync(payload)
            .then(() => {
                toast.success('Album created successfully!')
                formikHelpers.resetForm()
                setModal('none')
                queryClient.refetchQueries({
                    queryKey: [queryConstants.getUserAlbum],
                })
            })
            .catch((err) => {
                toast.error(err?.message || 'An error occurred')
            })
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object().shape({
            name: Yup.string().label('Album Name').required('Album name is required'),
            artwork: Yup.string().label('Thumbnail').required('Thumbnail is required'),
        }),
        onSubmit: handleSubmit,
    })

    const handleRemoveThumbnail = () => {
        formik.setFieldValue('artwork', '')
    }

    const handleOpenThumbnailUpload = () => {
        setIsOpenThumbnailUpload(true)
    }

    const handleCloseThumbnailUpload = () => {
        setIsOpenThumbnailUpload(false)
    }

    const onThumbnailUpload = (filePath: string) => {
        formik.setFieldValue('artwork', filePath)
    }

    const handleClose = () => {
        setModal('none')
    }

    return (
        <Drawer
            isOpen={modal === 'create-album'}
            onClose={handleClose}
            classNames={{ closeButton: 'text-2xl' }}>
            <DrawerContent>
                <DrawerHeader>
                    <h1 className='text-h3'>Create Album</h1>
                </DrawerHeader>
                <DrawerBody>
                    <FileUploader
                        isOpen={isOpenThumbnailUpload}
                        onClose={handleCloseThumbnailUpload}
                        onSuccess={onThumbnailUpload}
                        accept={{
                            'image/*': ['.jpg', '.jpeg', '.png'],
                        }}
                    />

                    <form
                        id='create-album'
                        onSubmit={formik.handleSubmit}
                        onReset={formik.handleReset}
                        className='flex flex-col gap-4'>

                        <Input
                            type='text'
                            variant='faded'
                            label='Album Name'
                            {...formik.getFieldProps('name')}
                            isInvalid={formik.touched.name && !!formik.errors.name}
                            errorMessage={formik.errors.name}
                        />

                        {formik.values.artwork ? (
                            <div className='relative w-fit'>
                                <Image
                                    src={formik.values.artwork}
                                    alt='Album Thumbnail'
                                    className='h-20 w-20 object-cover'
                                    radius='sm'
                                />
                                <Tooltip content='Remove Thumbnail'>
                                    <Button
                                        isIconOnly
                                        variant='light'
                                        className='absolute -right-8 -top-6'
                                        onPress={handleRemoveThumbnail}>
                                        <CiCircleRemove className='text-2xl text-danger-500' />
                                    </Button>
                                </Tooltip>
                            </div>
                        ) : (
                            <Button variant='faded' onPress={handleOpenThumbnailUpload}>
                                Upload Thumbnail
                            </Button>
                        )}
                    </form>
                </DrawerBody>

                <DrawerFooter>
                    <Button type='reset' form='create-album'>
                        Cancel
                    </Button>
                    <Button type='submit' color='primary' form='create-album'>
                        Save
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
