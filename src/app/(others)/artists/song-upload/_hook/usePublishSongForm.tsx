import { useMemo, useState } from 'react'
import { getUserAlbums } from '@/services/api/album-ep'
import { getAllTagLists, publishSong } from '@/services/api/song-api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FormikHelpers, useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

import queryConstants from '@/constants/query-constants'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'

export default function usePublishSongForm() {
    const [isOpenMusicUpload, setIsOpenMusicUpload] = useState(false)
    const [isOpenThumbnailUpload, setIsOpenThumbnailUpload] = useState(false)
    const [singleUpload, setSingleUpload] = useState(true)
    const { isLoggedIn } = useAuth()
    const { setModal } = useApp()
    const router = useRouter()
    const queryClient = useQueryClient()

    const {
        data: tagListsData,
        isLoading: isTagListLoading,
        isError: isTagListError,
    } = useQuery({
        queryKey: ['tagLists'],
        queryFn: getAllTagLists,
        retry: 1, // Optional: retry once on failure
    })

    const initialValues = {
        title: '',
        description: '',
        category: '',
        url: '',
        artwork: '',
        duration: 0,
        album_id: null,
        credits: [],
        tags: [],
        amount: 0,
    }

    type FormValues = typeof initialValues

    const { mutateAsync: publishSongAsync } = useMutation({
        mutationKey: [queryConstants.publishSong],
        mutationFn: publishSong,
    })

    const { data: albumsData } = useQuery({
        queryFn: getUserAlbums,
        enabled: isLoggedIn,
        queryKey: [queryConstants.getUserAlbum],
    })

    // const handlePublish = async (
    //     values: FormValues,
    //     formikHelpers: FormikHelpers<FormValues>
    // ) => {
    //     publishSongAsync(values)
    //         .then((data) => {
    //             toast.success('Song published successfully!')
    //             formikHelpers.resetForm()
    //             queryClient.refetchQueries({
    //                 queryKey: [queryConstants.getAlbums],
    //             })
    //             router.replace('/artists/my-library/song/draft-songs')
    //         })
    //         .catch((err) => {
    //             toast.error(err?.message || 'An error occurred')
    //         })
    // }
    const handlePublish = async (
        values: FormValues,
        formikHelpers: FormikHelpers<FormValues>
    ) => {
        console.log("Publish Data",values);
        try {
            await publishSongAsync(values)
            toast.success('Song published successfully!')
            formikHelpers.resetForm()
            await queryClient.refetchQueries({
                queryKey: [queryConstants.getAlbums],
            })
            router.replace('/artists/my-library/song/draft-songs')
        } catch (err: any) {
            toast.error(err?.message || 'An error occurred')
        }
    }

    const getValidationSchema = () => {
        if (singleUpload) {
            return Yup.object().shape({
                title: Yup.string().required('Title is required.'),
                description: Yup.string().required('Description is required.'),
                category: Yup.string().required('Category is required.'),
                url: Yup.string().required('Song is required.'),
                artwork: Yup.string().required('Thumbnail is required.'),
                credits: Yup.array()
                    .of(
                        Yup.object().shape({
                            name: Yup.string().required(
                                'Credit name is required.'
                            ),
                            role: Yup.string().required(
                                'Credit role is required.'
                            ),
                        })
                    )
                    .min(1, 'At least one credit is required.')
                    .required('Credits are required.'),

                amount: Yup.number()
                    .typeError('Amount must be a number')
                    .min(0, 'Amount cannot be negative')
                    .required('Amount is required'),

                tags: Yup.array()
                    .min(1, 'At least one tag is required')
                    .of(Yup.string().required())
                    .required('Tags are required'),
            })
        } else {
            return Yup.object().shape({
                title: Yup.string().required('Title is required.'),
                description: Yup.string().required('Description is required.'),
                category: Yup.string().required('Category is required.'),
                url: Yup.string().required('Song is required.'),
                artwork: Yup.string().required('Thumbnail is required.'),
                album_id: Yup.string().required('Album is required.'),
                credits: Yup.array()
                    .of(
                        Yup.object().shape({
                            name: Yup.string().required(
                                'Credit name is required.'
                            ),
                            role: Yup.string().required(
                                'Credit role is required.'
                            ),
                        })
                    )
                    .min(1, 'At least one credit is required.')
                    .required('Credits are required.'),
                amount: Yup.number()
                    .typeError('Amount must be a number')
                    .min(0, 'Amount cannot be negative')
                    .required('Amount is required'),

                tags: Yup.array()
                    .min(1, 'At least one tag is required')
                    .of(Yup.string().required())
                    .required('Tags are required'),
            })
        }
    }

    const validationSchema = useMemo(getValidationSchema, [singleUpload])

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handlePublish,
        validationSchema,
    })

    const handleAddAlbum = () => {
        setModal('create-album')
    }

    const handleOpenMusicUpload = () => {
        setIsOpenMusicUpload(true)
    }
    const handleOpenThumbnailUpload = () => {
        setIsOpenThumbnailUpload(true)
    }

    const handleCloseMusicUpload = () => {
        setIsOpenMusicUpload(false)
    }
    const handleCloseThumbnailUpload = () => {
        setIsOpenThumbnailUpload(false)
    }

    const onMusicUpload = (filePath: string) => {
        formik.setFieldValue('url', filePath)
    }
    const onThumbnailUpload = (filePath: string) => {
        formik.setFieldValue('artwork', filePath)
    }

    const handleRemoveSong = () => {
        formik.setFieldValue('url', '')
    }

    const handleRemoveThumbnail = () => {
        formik.setFieldValue('artwork', '')
    }

    const handleChangeUploadMode = (value: boolean) => {
        setSingleUpload(value)
        formik.setFieldValue('album_id', null)
    }

    const {
        errors,
        touched,
        handleSubmit,
        handleReset,
        handleChange,
        values,
        handleBlur,
        isSubmitting,
        getFieldProps,
        setFieldValue,
    } = formik

    return {
        albums: albumsData?.albums,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleReset,
        values,
        handleBlur,
        isSubmitting,
        getFieldProps,
        handleAddAlbum,
        handleOpenMusicUpload,
        handleOpenThumbnailUpload,
        handleCloseMusicUpload,
        handleCloseThumbnailUpload,
        onMusicUpload,
        onThumbnailUpload,
        isOpenMusicUpload,
        isOpenThumbnailUpload,
        handleRemoveSong,
        handleRemoveThumbnail,
        singleUpload,
        handleChangeUploadMode,
        setFieldValue,
        tagListsData: tagListsData?.data ?? [],
        isTagListLoading,
        isTagListError,
    }
}
