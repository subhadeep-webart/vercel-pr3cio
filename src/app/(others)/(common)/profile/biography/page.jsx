'use client'

import { Button, Card, CardBody, Image, Input, Tooltip } from '@heroui/react'
import Link from 'next/link'
import { CiCircleRemove } from 'react-icons/ci'
import { FaPencilAlt } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'

import { withAuthProtection } from '@/components/auth/protected-component'
import Container from '@/components/ui/container'

import FileUploader from '../_components/file-uploader'
import useUserProfileForm from '../_hook/useUserProfileForm'
import styles from '../profile.module.scss'

const BiographyPage = () => {
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

    if (!values?.avatar && !isOpenAvatarUpload) {
        return (
            <div className='flex min-h-screen items-center justify-center text-white'>
                Loading...
            </div>
        )
    }

    return (
        <>
            <div class='planBox'>
                <div class="bg-size-[100%] mb-6 min-h-[30rem] bg-[url('/images/user/bg2.webp')] bg-bottom bg-no-repeat px-8 py-10">
                    <h2 class='text-[1.56rem] font-semibold'>
                        {' '}
                        <span class='mr-2 inline-block h-[2.25rem] w-[2.38rem] rounded-[0.75rem] border-1 border-solid border-[#848484] text-center text-[1rem] leading-[2.25rem]'>
                            <Link href='/profile'>
                                <IoIosArrowBack size={30} />
                            </Link>
                        </span>{' '}
                        Edit Profile Information
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div class='grid auto-cols-auto grid-cols-12 gap-4 md:gap-x-10'>
                            <div class='col-span-6 mt-6'>
                                <label class='text-base text-[#D1CAD5]'>
                                    Name
                                </label>
                                <Input
                                    placeholder='Your name'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.name && !!errors.name}
                                    errorMessage={errors.name}
                                    className='md:col-span-2'
                                />
                            </div>
                            <div class='col-span-12 mt-6'>
                                <label for='' class='text-base text-[#D1CAD5]'>
                                    Biography
                                </label>
                                <div className='rounded-xl border border-white/20 bg-[#1E1E1E] px-4 py-3'>
                                    <textarea
                                        id='bio'
                                        name='bio'
                                        placeholder='Tell us about yourself...'
                                        value={values.bio}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows={6}
                                        className='w-full resize-none bg-transparent text-white placeholder:text-white/50 focus:outline-none'
                                    />
                                </div>
                                {touched.bio && errors.bio && (
                                    <p className='mt-1 text-sm text-red-500'>
                                        {errors.bio}
                                    </p>
                                )}
                            </div>
                            <div class='col-span-6 mt-6 text-right'>
                                <button
                                    isLoading={isSubmitting}
                                    class='mt-6 inline-block h-[2.5rem] w-full max-w-[8.06rem] cursor-pointer rounded-full bg-[#C6FF00] px-5 text-center text-sm leading-[2.5rem] text-black transition-all duration-300'>
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Container className='hidden'>
                <Card className='w-full space-y-10 rounded-[36px] bg-[#2A2F2C] p-6 text-white'>
                    <CardBody className='space-y-10 p-0'>
                        <img
                            src='/img/profile/biography-timeline-image.webp'
                            alt='user timeline'
                        />
                        <FileUploader
                            isOpen={isOpenAvatarUpload}
                            onClose={handleCloseAvatarUpload}
                            onSuccess={handleAvatarUpload}
                            accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
                        />
                        <form
                            onSubmit={handleSubmit}
                            className={`relative mt-20 grid grid-cols-1 gap-6 py-12 ${styles.formWithBefore}`}>
                            {values.avatar ? (
                                <div className='absolute left-1/2 -translate-x-1/2 -translate-y-full'>
                                    <Image
                                        src={values.avatar}
                                        alt='Avatar'
                                        className='aspect-[1/1] h-[244px] w-[275px] rounded-[28px] border-[4px] border-white object-cover'
                                    />
                                    <Tooltip content='Edit Avatar'>
                                        <Button
                                            isIconOnly
                                            variant='flat'
                                            className='absolute -bottom-0 -right-[9px] z-10 h-[49px] w-[49px] rounded-full bg-[#4D41FA] !opacity-100 transition-colors duration-200 hover:bg-[#372fd0]'
                                            onPress={handleOpenAvatarUpload}
                                            isPressable>
                                            <FaPencilAlt className='text-xl text-white' />
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
                                label='Name'
                                placeholder='Your name'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.name && !!errors.name}
                                errorMessage={errors.name}
                                className='md:col-span-2'
                            />
                            <div className='space-y-1 md:col-span-2'>
                                <label
                                    htmlFor='bio'
                                    className='text-sm font-medium text-white'>
                                    Biography
                                </label>
                                <div className='rounded-xl border border-white/20 bg-[#1E1E1E] px-4 py-3'>
                                    <textarea
                                        id='bio'
                                        name='bio'
                                        placeholder='Tell us about yourself...'
                                        value={values.bio}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows={6}
                                        className='w-full resize-none bg-transparent text-white placeholder:text-white/50 focus:outline-none'
                                    />
                                </div>
                                {touched.bio && errors.bio && (
                                    <p className='mt-1 text-sm text-red-500'>
                                        {errors.bio}
                                    </p>
                                )}
                            </div>
                            <Button
                                type='submit'
                                color='primary'
                                isLoading={isSubmitting}
                                className='mx-auto min-w-[246px] max-w-[246px] rounded-[50px] font-bold'>
                                Save
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default withAuthProtection(BiographyPage)
