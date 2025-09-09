'use client'

import { deleteAlbum } from '@/services/api/album-ep'
import { Button, Image, Input, Textarea, Tooltip } from '@heroui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CiCircleRemove } from 'react-icons/ci'

import { withAuthProtection } from '@/components/auth/protected-component'
import Container from '@/components/ui/container'

import useUserProfileForm from '../_hook/useUserProfileForm'
import AlbumCard from './AlbumCard'
import FileUploader from './file-uploader'
import toast from 'react-hot-toast'
import queryConstants from '@/constants/query-constants'

function UserProfileForm() {
    const queryClient = useQueryClient()
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        handleOpenAvatarUpload,
        handleCloseAvatarUpload,
        isOpenAvatarUpload,
        handleAvatarUpload,
        handleRemoveAvatar,
        handleResetPassword,
        albums,
        songs,
    } = useUserProfileForm()

    const { mutateAsync: deleteAlbumAsync } = useMutation({
        mutationKey: ['deleteAlbum'],
        mutationFn: deleteAlbum,
    })

    const handleDeleteAlbum = async (albumId) => {
        try {
            await deleteAlbumAsync(albumId)
            toast.success('Album deleted successfully!')
        } catch (error) {
            toast.error(error?.message || 'Failed to delete album.')
        } finally {
            queryClient.refetchQueries({
                queryKey: [queryConstants.getUserAlbum],
            })
        }
    }

    return (
        <Container>
            <FileUploader
                isOpen={isOpenAvatarUpload}
                onClose={handleCloseAvatarUpload}
                onSuccess={handleAvatarUpload}
                accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
            />

            <div className='space-y-8'>
                <h2 className='text-xl font-semibold'>Edit Profile</h2>

                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-2/3'>
                    {values.avatar ? (
                        <div className='relative w-fit'>
                            <Image
                                src={values.avatar}
                                alt='Avatar'
                                className='h-20 w-20 rounded-full object-cover'
                            />
                            <Tooltip content='Remove Avatar'>
                                <Button
                                    isIconOnly
                                    variant='light'
                                    className='absolute -right-4 -top-4'
                                    onPress={handleRemoveAvatar}>
                                    <CiCircleRemove className='text-2xl text-danger-500' />
                                </Button>
                            </Tooltip>
                        </div>
                    ) : (
                        <Button
                            variant='faded'
                            onPress={handleOpenAvatarUpload}>
                            Upload Avatar
                        </Button>
                    )}

                    <Input
                        label='Display Name'
                        placeholder='Your name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                        errorMessage={errors.name}
                        className='md:col-span-2'
                    />

                    <Button
                        type='submit'
                        color='primary'
                        isLoading={isSubmitting}
                        className='md:col-span-2'>
                        Update Profile
                    </Button>
                </form>

                <div className='pt-8'>
                    <h3 className='mb-4 text-lg font-semibold'>
                        Reset Password
                    </h3>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-2/3'>
                        <Input
                            label='Current Password'
                            name='currentPassword'
                            type='password'
                            value={values.currentPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            label='New Password'
                            name='newPassword'
                            type='password'
                            value={values.newPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            label='Confirm Password'
                            name='confirmPassword'
                            type='password'
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.confirmPassword &&
                                !!errors.confirmPassword
                            }
                            errorMessage={errors.confirmPassword}
                        />
                        <Button
                            className='md:col-span-2'
                            onPress={() => handleResetPassword(values)}
                            color='warning'>
                            Reset Password
                        </Button>
                    </div>
                </div>

                <div className='pt-10'>
                    <h3 className='mb-2 text-lg font-semibold'>Your Albums</h3>
                    <div className='pt-10'>
                        <h3 className='mb-2 text-lg font-semibold'>
                            Your Albums
                        </h3>
                        {albums?.length ? (
                            <div className='grid grid-cols-[repeat(auto-fit,_minmax(0,_270px))] gap-4'>
                                {albums.map((album) => (
                                    <AlbumCard
                                        key={album._id}
                                        album={album}
                                        onDelete={() =>
                                            handleDeleteAlbum(album._id)
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className='text-muted-foreground text-sm'>
                                No albums yet.
                            </p>
                        )}
                    </div>
                </div>

                <div className='pt-8'>
                    <h3 className='mb-2 text-lg font-semibold'>Your Songs</h3>
                    <ul className='list-disc pl-5 text-sm'>
                        {songs?.length ? (
                            songs.map((song) => (
                                <li key={song._id}>{song.title}</li>
                            ))
                        ) : (
                            <p className='text-muted-foreground'>
                                No songs uploaded.
                            </p>
                        )}
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default withAuthProtection(UserProfileForm)
