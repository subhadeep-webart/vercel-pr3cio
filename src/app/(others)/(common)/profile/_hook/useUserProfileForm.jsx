import { useMemo, useState } from 'react'
import { saveSession } from '@/redux/slices/auth-slice'
import { useAppDispatch } from '@/redux/store'
import { getUserAlbums } from '@/services/api/album-ep'
// import { updateUserProfile, resetPassword } from '@/services/api/user-api'
import { updateUserProfile } from '@/services/api/user-api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

import queryConstants from '@/constants/query-constants'
// import { getUserSongs } from '@/services/api/song-api'

import useAuth from '@/hooks/useAuth'

export default function useUserProfileForm() {
    const [isOpenAvatarUpload, setIsOpenAvatarUpload] = useState(false)

    console.log('isOpenAvatarUpload', isOpenAvatarUpload)

    const queryClient = useQueryClient()
    const router = useRouter()
    const { user } = useAuth()
    const dispatch = useAppDispatch()

    const initialValues = {
        avatar: user?.avatar || '',
        name: user?.name || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        bio: user?.bio || [],
    }

    const { mutateAsync: updateUserProfileAsync } = useMutation({
        mutationKey: [queryConstants.updateUserProfile],
        mutationFn: updateUserProfile,
    })

    // const { mutateAsync: resetPasswordAsync } = useMutation({
    //     mutationKey: [queryConstants.resetPassword],
    //     mutationFn: resetPassword,
    // })

    const { data: albumsData } = useQuery({
        queryKey: [queryConstants.getUserAlbum],
        queryFn: getUserAlbums,
    })

    // const { data: songsData } = useQuery({
    //     queryKey: [queryConstants.getUserSongs],
    //     queryFn: getUserSongs,
    // })

    const handleUpdateProfile = async (values, { resetForm }) => {
        console.log('values', values)
        let updatedBio
        if (values.bio.length) {
            updatedBio = values.bio.map((section, index) => ({
                ...section,
                key: section.title,
            }));
        }
        
        try {
            const updatedUser = await updateUserProfileAsync({
                name: values.name,
                avatar: values.avatar,
                bio: updatedBio,
            })
            console.log('hellooo', values.avatar)

            toast.success('Profile updated successfully!')
            dispatch(saveSession(updatedUser.user))
            router.push('/artists/biography');
        } catch (error) {
            toast.error(error?.message || 'Failed to update profile.')
        }
    }

    const handleResetPassword = async (values) => {
        if (values.newPassword !== values.confirmPassword) {
            toast.error('Passwords do not match.')
            return
        }

        try {
            // await resetPasswordAsync({
            //     currentPassword: values.currentPassword,
            //     newPassword: values.newPassword,
            // })
            toast.success('Password reset successful!')
        } catch (error) {
            toast.error(error?.message || 'Failed to reset password.')
        }
    }

    const validationSchema = useMemo(
        () =>
            Yup.object().shape({
                name: Yup.string().required('Name is required'),
                avatar: Yup.string().required('Avatar is required'),
                currentPassword: Yup.string(),
                newPassword: Yup.string().min(6, 'Minimum 6 characters'),
                confirmPassword: Yup.string().oneOf(
                    [Yup.ref('newPassword'), null],
                    'Passwords must match'
                ),
                // bio: Yup.string().required('Bio is required'),
            }),
        []
    )

    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit: handleUpdateProfile,
    })

    const handleAvatarUpload = async (filePath) => {
        formik.setFieldValue('avatar', filePath)
        // Immediately submit with updated avatar
        await handleUpdateProfile(
            { ...formik.values, avatar: filePath },
            formik
        )
    }

    const handleOpenAvatarUpload = () => setIsOpenAvatarUpload(true)
    const handleCloseAvatarUpload = () => setIsOpenAvatarUpload(false)
    const handleRemoveAvatar = () => formik.setFieldValue('avatar', '')

    return {
        ...formik,
        isOpenAvatarUpload,
        handleOpenAvatarUpload,
        handleCloseAvatarUpload,
        handleAvatarUpload,
        handleRemoveAvatar,
        handleResetPassword,
        albums: albumsData?.albums || [],
        // songs: songsData?.songs || [],
    }
}
