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
                            <div className='relative w-fit py-2'>
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
                                        className='absolute -right-5 -top-3 z-10'
                                        onPress={handleRemoveThumbnail}>
                                        <CiCircleRemove className='text-2xl text-danger-500' />
                                    </Button>
                                </Tooltip>
                            </div>
                        ) : (
                            <button
                                type='button'
                                className="bg-custom-gradient rounded-[0.3rem] border-1 border-[#666] border-solid p-3 col-span-4 z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:rounded-[0.3rem] after:z-[-1] text-center cursor-pointer" onClick={handleOpenThumbnailUpload}>
                                <div className="grid grid-flow-col gap-4 justify-center items-center">
                                    <span className="xl:text-[0.9rem] xxl:text-[1.05rem] font-bold col-span-auto">Upload
                                        thumbnail</span>
                                    <span
                                        className="w-[2.40rem] h-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] leading-[2.40rem] text-center col-span-auto">
                                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="m-auto h-[2.40rem]">
                                            <path
                                                d="M18.9988 18.1143C18.9867 20.3122 18.8902 21.5025 18.1218 22.2789C17.2431 23.1669 15.8289 23.1669 13.0005 23.1669H11.0005C8.17206 23.1669 6.75785 23.1669 5.87917 22.2789C5.00049 21.391 5.00049 19.9619 5.00049 17.1038V9.01971C5.00049 6.16155 5.00049 4.73247 5.87917 3.84455C6.75785 2.95663 8.17206 2.95663 11.0005 2.95663H13.0005C15.8289 2.95663 17.2431 2.95663 18.1218 3.84455C19.0005 4.73247 19.0005 6.16155 19.0005 9.01971V14.0723"
                                                stroke="white" stroke-width="1.98585" stroke-linecap="round" />
                                            <path
                                                d="M19.0005 20.6406C19.465 20.6406 19.6973 20.6406 19.8916 20.6095C20.9613 20.4383 21.8003 19.5905 21.9697 18.5095C22.0005 18.3132 22.0005 18.0785 22.0005 17.6091V8.51446C22.0005 8.04508 22.0005 7.81039 21.9697 7.61401C21.8003 6.53303 20.9613 5.68524 19.8916 5.51403C19.6973 5.48293 19.465 5.48293 19.0005 5.48293"
                                                stroke="white" stroke-width="1.98585" />
                                            <path d="M13.0005 15.0828V12.0513V9.01971" stroke="white" stroke-width="1.98585"
                                                stroke-linecap="round" />
                                            <path
                                                d="M11.0005 17.1038C12.1051 17.1038 13.0005 16.199 13.0005 15.0828C13.0005 13.9666 12.1051 13.0618 11.0005 13.0618C9.89592 13.0618 9.00049 13.9666 9.00049 15.0828C9.00049 16.199 9.89592 17.1038 11.0005 17.1038Z"
                                                stroke="white" stroke-width="1.98585" />
                                            <path d="M15.0005 11.0407C13.8959 11.0407 13.0005 10.1359 13.0005 9.01971"
                                                stroke="white" stroke-width="1.98585" stroke-linecap="round" />
                                            <path
                                                d="M5.00049 20.6406C4.53599 20.6406 4.30374 20.6406 4.1094 20.6095C3.03967 20.4383 2.2007 19.5905 2.03127 18.5095C2.00049 18.3132 2.00049 18.0785 2.00049 17.6091V8.51446C2.00049 8.04508 2.00049 7.81039 2.03127 7.61401C2.2007 6.53303 3.03967 5.68524 4.1094 5.51403C4.30374 5.48293 4.53599 5.48293 5.00049 5.48293"
                                                stroke="white" stroke-width="1.98585" />
                                        </svg>
                                    </span>
                                </div>
                            </button>
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
