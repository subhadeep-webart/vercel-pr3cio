'use client'

import { useEffect, useRef, useState } from 'react'
import { musicCategories } from '@/data/music-data'
import { getAllCrews } from '@/services/api/artist-api'
import {
    Button,
    cn,
    Image,
    Input,
    Select,
    SelectItem,
    Switch,
    Textarea,
    Tooltip,
} from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { CiCircleRemove } from 'react-icons/ci'

import { Album } from '@/models/responses/albums-data'
import queryConstants from '@/constants/query-constants'
import useAuth from '@/hooks/useAuth'
import { withAuthProtection } from '@/components/auth/protected-component'
import FileUploader from '@/components/file-uploader'
import Container from '@/components/ui/container'
import Loader from '@/components/ui/Loader'

import usePublishSongForm from '../_hook/usePublishSongForm'
import BankAccountAddAlertSmall from '../../_components/BankAccountAddAlertSmall'
import CreditDrawer from './CreditDrawer'

function PublishSongForm() {
    const pathname = usePathname()
    const { user } = useAuth()
    console.log('user', user?.bankAccountId)
    const [isBankAccountAlert, setIsBankAccountAlert] = useState(false)
    useEffect(() => {
        if (
            user?.is_artist &&
            !user?.bankAccountId &&
            pathname === '/artists/song-upload'
        ) {
            console.log('Executed===>')
            setIsBankAccountAlert(true)
        } else {
            setIsBankAccountAlert(false)
        }
    }, [user, pathname])

    const audioRef = useRef(null)
    const { data: crewsData, isLoading: crewLoading } = useQuery({
        queryKey: ['crews'],
        queryFn: getAllCrews,
    })

    const [selectedName, setSelectedName] = useState(null)
    const [selectedRole, setSelectedRole] = useState(null)

    // Whenever both are chosen → push into credits
    const tryAddCredit = (nameId, roleId) => {
        if (nameId && roleId) {
            const nameObj = crewName.find((c) => c._id === nameId)
            const roleObj = crewRole.find((r) => r._id === roleId)

            const newCredit = {
                credit_user_id: nameId ?? null,
                name: nameObj?.name ?? '',
                credit_role_id: roleId ?? null,
                role: roleObj?.role ?? '',
            }

            setFieldValue('credits', [...values.credits, newCredit])
            setSelectedName(null)
            setSelectedRole(null)
        }
    }

    const handleLoadedMetadata = () => {
        const audio = audioRef.current
        if (audio && audio.duration) {
            setFieldValue('duration', audio.duration)
        }
    }

    const {
        albums,
        errors,
        touched,
        values,
        isSubmitting,
        isOpenThumbnailUpload,
        isOpenMusicUpload,
        singleUpload,
        handleSubmit,
        handleReset,
        getFieldProps,
        handleAddAlbum,
        handleCloseMusicUpload,
        handleCloseThumbnailUpload,
        handleOpenMusicUpload,
        handleOpenThumbnailUpload,
        onMusicUpload,
        onThumbnailUpload,
        handleRemoveSong,
        handleRemoveThumbnail,
        handleChangeUploadMode,
        setFieldValue,
        tagListsData,
        isTagListError,
        isTagListLoading,
    } = usePublishSongForm()

    if (crewLoading) return null

    const { crewName = [], crewRole = [] } = crewsData

    console.log('Values======>', values)

    console.log('Fetched Tag Lists Data=======>', tagListsData)

    return (
        <>
            {/* {isBankAccountAlert && <BankAccountAddAlertSmall />} */}

            <div className='grid grid-cols-12 rounded-[0.876rem] bg-[#2A2929] px-5 py-7 md:px-0'>
                {isBankAccountAlert && (
                    <div className="fixed bottom-4 left-1/2 z-[9999] w-[90%]  -translate-x-1/2 transform">
                        <BankAccountAddAlertSmall />
                    </div>
                )}

                <FileUploader
                    isOpen={isOpenMusicUpload}
                    onClose={handleCloseMusicUpload}
                    onSuccess={onMusicUpload}
                    accept={{
                        'audio/mpeg': ['.mp3'],
                        'audio/mp4': ['.m4a', '.aac'],
                        'audio/ogg': ['.ogg', '.opus'],
                        'audio/flac': ['.flac'],
                        'audio/wav': ['.wav'],
                        'audio/x-aiff': ['.aiff', '.aif'],
                    }}
                />
                <FileUploader
                    isOpen={isOpenThumbnailUpload}
                    onClose={handleCloseThumbnailUpload}
                    onSuccess={onThumbnailUpload}
                    accept={{
                        'image/*': ['.jpg', '.jpeg', '.png'],
                    }}
                />
                <form
                    action=''
                    // className='col-span-12 md:col-span-10 md:col-start-2'
                    className={`col-span-12 transition-opacity duration-300 md:col-span-10 md:col-start-2 ${
                        isBankAccountAlert
                            ? 'pointer-events-none opacity-40'
                            : 'opacity-100'
                    }`}
                    onSubmit={handleSubmit}
                    onReset={handleReset}>
                    <div className='mb-6 grid grid-cols-12 items-end gap-4'>
                        {values.url ? (
                            <div className='col-span-12 flex items-center gap-1 md:col-span-4'>
                                <audio
                                    controls
                                    src={`https://d13hus0rdpxu56.cloudfront.net/${values.url}`}
                                    className='h-8'
                                    ref={audioRef}
                                    onLoadedMetadata={handleLoadedMetadata}
                                />
                                <Tooltip content='Remove Song'>
                                    <Button
                                        type='button'
                                        isIconOnly
                                        variant='light'
                                        onPress={handleRemoveSong}>
                                        <CiCircleRemove className='text-2xl text-danger-500' />
                                    </Button>
                                </Tooltip>
                            </div>
                        ) : (
                            <button
                                type='button'
                                className="z-1 relative col-span-12 cursor-pointer rounded-[0.3rem] border-1 border-solid border-[#666] bg-custom-gradient p-3 text-center after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[0.3rem] after:content-[''] md:col-span-4"
                                onClick={handleOpenMusicUpload}>
                                <div className='grid grid-flow-col items-center justify-center gap-4'>
                                    <span className='xxl:text-[1.05rem] col-span-auto text-xs font-bold xl:text-[0.9rem]'>
                                        Upload song
                                    </span>
                                    <span className='col-span-auto h-[2.40rem] w-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] text-center leading-[2.40rem]'>
                                        <svg
                                            width='22'
                                            height='24'
                                            viewBox='0 0 22 24'
                                            fill='none'
                                            className='m-auto h-[2.40rem]'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M8.25 18.5459C8.25 20.0807 7.01878 21.3248 5.5 21.3248C3.98122 21.3248 2.75 20.0807 2.75 18.5459C2.75 17.0111 3.98122 15.767 5.5 15.767C7.01878 15.767 8.25 17.0111 8.25 18.5459Z'
                                                stroke='white'
                                                stroke-width='1.86904'
                                            />
                                            <path
                                                d='M19.25 16.6933C19.25 18.2281 18.0188 19.4722 16.5 19.4722C14.9812 19.4722 13.75 18.2281 13.75 16.6933C13.75 15.1585 14.9812 13.9144 16.5 13.9144C18.0188 13.9144 19.25 15.1585 19.25 16.6933Z'
                                                stroke='white'
                                                stroke-width='1.86904'
                                            />
                                            <path
                                                d='M8.24976 18.5459V8.35657'
                                                stroke='white'
                                                stroke-width='1.86904'
                                            />
                                            <path
                                                d='M18.5625 11.5986C18.5625 11.9823 18.8703 12.2933 19.25 12.2933C19.6297 12.2933 19.9375 11.9823 19.9375 11.5986H18.5625ZM19.9375 11.5986V6.50395H18.5625V11.5986H19.9375Z'
                                                fill='white'
                                            />
                                            <path
                                                d='M14.4236 4.4241L10.7569 5.65917C9.54693 6.06676 8.94187 6.27055 8.59582 6.75572C8.24976 7.24089 8.24976 7.88534 8.24976 9.17425V12.0615L19.2498 8.35628V7.93917C19.2498 5.59334 19.2498 4.42043 18.4884 3.86591C17.727 3.31138 16.6259 3.68229 14.4236 4.4241Z'
                                                stroke='white'
                                                stroke-width='1.86904'
                                                stroke-linecap='round'
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </button>
                            // <Button variant='faded' onPress={handleOpenMusicUpload}>
                            //     Upload Song
                            // </Button>
                        )}

                        {values.artwork ? (
                            <div className='relative col-span-12 mx-auto w-fit md:col-span-4 md:mx-0'>
                                <Image
                                    src={
                                        values.artwork || '/img/open-graph.png'
                                    }
                                    alt='song thumbnail'
                                    className='h-20 w-20 object-cover'
                                    radius='sm'
                                />
                                <Tooltip content='Remove Thumbnail'>
                                    <Button
                                        type='button'
                                        isIconOnly
                                        variant='light'
                                        className='absolute -right-8 -top-6'
                                        onPress={handleRemoveThumbnail}>
                                        <CiCircleRemove className='text-2xl text-danger-500' />
                                    </Button>
                                </Tooltip>
                            </div>
                        ) : (
                            <button
                                type='button'
                                className="z-1 relative col-span-12 cursor-pointer rounded-[0.3rem] border-1 border-solid border-[#666] bg-custom-gradient p-3 text-center after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[0.3rem] after:content-[''] md:col-span-4"
                                onClick={handleOpenThumbnailUpload}>
                                <div className='grid grid-flow-col items-center justify-center gap-4'>
                                    <span className='xxl:text-[1.05rem] col-span-auto text-xs font-bold xl:text-[0.9rem]'>
                                        Upload Album Artwork
                                    </span>
                                    <span className='col-span-auto h-[2.40rem] w-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] text-center leading-[2.40rem]'>
                                        <svg
                                            width='24'
                                            height='26'
                                            viewBox='0 0 24 26'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='m-auto h-[2.40rem]'>
                                            <path
                                                d='M18.9988 18.1143C18.9867 20.3122 18.8902 21.5025 18.1218 22.2789C17.2431 23.1669 15.8289 23.1669 13.0005 23.1669H11.0005C8.17206 23.1669 6.75785 23.1669 5.87917 22.2789C5.00049 21.391 5.00049 19.9619 5.00049 17.1038V9.01971C5.00049 6.16155 5.00049 4.73247 5.87917 3.84455C6.75785 2.95663 8.17206 2.95663 11.0005 2.95663H13.0005C15.8289 2.95663 17.2431 2.95663 18.1218 3.84455C19.0005 4.73247 19.0005 6.16155 19.0005 9.01971V14.0723'
                                                stroke='white'
                                                stroke-width='1.98585'
                                                stroke-linecap='round'
                                            />
                                            <path
                                                d='M19.0005 20.6406C19.465 20.6406 19.6973 20.6406 19.8916 20.6095C20.9613 20.4383 21.8003 19.5905 21.9697 18.5095C22.0005 18.3132 22.0005 18.0785 22.0005 17.6091V8.51446C22.0005 8.04508 22.0005 7.81039 21.9697 7.61401C21.8003 6.53303 20.9613 5.68524 19.8916 5.51403C19.6973 5.48293 19.465 5.48293 19.0005 5.48293'
                                                stroke='white'
                                                stroke-width='1.98585'
                                            />
                                            <path
                                                d='M13.0005 15.0828V12.0513V9.01971'
                                                stroke='white'
                                                stroke-width='1.98585'
                                                stroke-linecap='round'
                                            />
                                            <path
                                                d='M11.0005 17.1038C12.1051 17.1038 13.0005 16.199 13.0005 15.0828C13.0005 13.9666 12.1051 13.0618 11.0005 13.0618C9.89592 13.0618 9.00049 13.9666 9.00049 15.0828C9.00049 16.199 9.89592 17.1038 11.0005 17.1038Z'
                                                stroke='white'
                                                stroke-width='1.98585'
                                            />
                                            <path
                                                d='M15.0005 11.0407C13.8959 11.0407 13.0005 10.1359 13.0005 9.01971'
                                                stroke='white'
                                                stroke-width='1.98585'
                                                stroke-linecap='round'
                                            />
                                            <path
                                                d='M5.00049 20.6406C4.53599 20.6406 4.30374 20.6406 4.1094 20.6095C3.03967 20.4383 2.2007 19.5905 2.03127 18.5095C2.00049 18.3132 2.00049 18.0785 2.00049 17.6091V8.51446C2.00049 8.04508 2.00049 7.81039 2.03127 7.61401C2.2007 6.53303 3.03967 5.68524 4.1094 5.51403C4.30374 5.48293 4.53599 5.48293 5.00049 5.48293'
                                                stroke='white'
                                                stroke-width='1.98585'
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        )}

                        <div className='col-span-12 cursor-pointer pl-5 text-center md:col-span-4'>
                            <button
                                type='button'
                                onClick={() =>
                                    handleChangeUploadMode(!singleUpload)
                                }
                                className='inline-flex w-auto items-center justify-center gap-2 rounded-full border border-[#666] px-4 py-3'>
                                <span
                                    className={`${
                                        singleUpload
                                            ? 'bg-[#00FF00]'
                                            : 'bg-[#FF0000]'
                                    } xxl:w-[1.46rem] xxl:h-[1.46rem] h-[1rem] w-[1rem] rounded-full`}></span>

                                <span className='xxl:text-[1.05rem] text-xs font-medium xl:text-[0.9rem]'>
                                    Upload mode
                                </span>

                                <span
                                    className={`xxl:text-[1.05rem] text-xs font-medium xl:text-[0.9rem] ${
                                        singleUpload
                                            ? 'text-success-500'
                                            : 'text-danger-500'
                                    }`}>
                                    {singleUpload ? 'Single' : 'Inside Album'}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='mt-5 grid grid-cols-12 items-end gap-4'>
                        {touched.url && errors.url && (
                            <p className='col-span-4 mt-1 text-xs text-red-500 md:col-span-4'>
                                {errors.url}
                            </p>
                        )}

                        {touched.artwork && errors.artwork && (
                            <p className='col-span-4 mt-1 text-xs text-red-500 md:col-span-4'>
                                {errors.artwork}
                            </p>
                        )}
                    </div>

                    <div className='mt-5 grid grid-cols-12 items-end gap-4'>
                        <div className='relative col-span-12 mb-2 md:col-span-5'>
                            <label
                                htmlFor='category'
                                className='mb-2 block text-sm text-[#D1CAD5] md:text-base'>
                                Category
                            </label>
                            <select
                                id='category'
                                {...getFieldProps('category')}
                                className={`h-[3rem] w-full rounded-md border px-3 text-[0.82rem] ${touched.category && errors.category ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} bg-[#2E2E2E] text-[#929292]`}>
                                <option value=''>Song category</option>
                                {musicCategories.map((category) => (
                                    <option
                                        key={category.value}
                                        value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                            {touched.category && errors.category && (
                                <p className='mt-1 text-xs text-red-500'>
                                    {errors.category}
                                </p>
                            )}
                        </div>

                        {/* Album Select + Add Button (if not singleUpload) */}
                        {!singleUpload && (
                            <>
                                <div className='relative col-span-12 mb-2 md:col-span-4'>
                                    <label
                                        htmlFor='album_id'
                                        className='mb-2 block text-base text-[#D1CAD5]'>
                                        Choose Album
                                    </label>
                                    <select
                                        id='album_id'
                                        {...getFieldProps('album_id')}
                                        className={`h-[3rem] w-full rounded-md border px-3 text-[0.82rem] ${touched.album_id && errors.album_id ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} bg-[#2E2E2E] text-[#929292]`}>
                                        <option value=''>Select album</option>
                                        {(albums ?? []).map((album) => (
                                            <option
                                                key={album._id}
                                                value={album._id}>
                                                {album.name}
                                            </option>
                                        ))}
                                    </select>
                                    {touched.album_id && errors.album_id && (
                                        <p className='mt-1 text-xs text-red-500'>
                                            {errors.album_id}
                                        </p>
                                    )}
                                </div>

                                <div className='relative col-span-12 mb-2 text-end md:col-span-3'>
                                    <button
                                        type='button'
                                        onClick={handleAddAlbum}
                                        className='h-[1.88rem] w-auto cursor-pointer rounded-xl bg-[#C6FF00] px-5 text-center text-sm leading-[1.88rem] text-black md:h-[2.88rem] md:leading-[2.88rem]'>
                                        Add Album
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='mt-5 grid grid-cols-12 items-end gap-4'>
                        <div className='relative col-span-12 mb-2 md:col-span-12'>
                            <label
                                htmlFor='title'
                                className='mb-2 block text-sm text-[#D1CAD5] md:text-base'>
                                Title
                            </label>

                            <input
                                id='title'
                                type='text'
                                className={`h-[3rem] w-full rounded-md border-1 bg-[#2E2E2E] px-3 text-sm ${
                                    touched.title && errors.title
                                        ? 'border-red-500'
                                        : 'border-[rgba(255,255,255,0.15)]'
                                }`}
                                placeholder='Song title'
                                {...getFieldProps('title')}
                            />

                            {touched.title && errors.title && (
                                <p className='mt-1 text-sm text-red-500'>
                                    {errors.title}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='mt-5 grid grid-cols-12 items-end gap-4'>
                        <div className='col-span-6 mt-6'>
                            <label className='text-sm text-[#D1CAD5] md:text-base'>
                                Song Amount
                            </label>
                            <input
                                id='amount'
                                type='text'
                                className={`h-[3rem] w-full rounded-md border-1 bg-[#2E2E2E] px-3 text-sm ${
                                    touched.amount && errors.amount
                                        ? 'border-red-500'
                                        : 'border-[rgba(255,255,255,0.15)]'
                                }`}
                                placeholder='Song amount'
                                {...getFieldProps('amount')}
                            />

                            {touched.amount && errors.amount && (
                                <p className='mt-1 text-sm text-red-500'>
                                    {errors.amount}
                                </p>
                            )}
                        </div>
                        <div className='col-span-6 mt-6'>
                            <label className='text-sm text-[#D1CAD5] md:text-base'>
                                Song Tag
                            </label>
                            <Select
                                name='tags'
                                selectionMode='multiple'
                                // selectedKeys={new Set(

                                //     values.tags
                                //         .map(tagName => tagListsData.find(t => t.name === tagName))
                                //         .filter(Boolean)
                                //         .map(t => t?._id)
                                // )}
                                // onSelectionChange={(keys) => {

                                //     const selectedNames = Array.from(keys).map(key => {
                                //         const tag = tagListsData.find(t => t._id === key);
                                //         return tag?.name || '';
                                //     }).filter(Boolean);

                                //     setFieldValue('tags', selectedNames);
                                // }}
                                selectedKeys={new Set(values.tags)}
                                onSelectionChange={(keys) => {
                                    setFieldValue('tags', Array.from(keys))
                                }}
                                placeholder='Select song tags'
                                className='mt-2 w-full max-w-full'
                                classNames={{
                                    trigger: `bg-transparent w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                ${touched.tags && errors.tags ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                bg-[#2E2E2E] text-[#929292]`,
                                    label: 'text-sm md:text-base text-[#D1CAD5] mb-2 block',
                                    popoverContent: 'bg-[#2E2E2E]',
                                }}>
                                {tagListsData.map((option) => (
                                    <SelectItem key={option._id}>
                                        {option.name}
                                    </SelectItem>
                                ))}
                            </Select>

                            {touched.tags && errors.tags && (
                                <p className='text-sm text-red-500'>
                                    {errors.tags}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='mt-5 grid grid-cols-12 items-end gap-4'>
                        <div className='relative col-span-12 mb-2 mt-6 md:col-span-5'>
                            <Select
                                className='w-full'
                                label='Credit Name'
                                placeholder='Select a credit name'
                                selectionMode='single'
                                labelPlacement={'outside'}
                                classNames={{
                                    trigger: `bg-transparent w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                ${touched.credits && errors.credits ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                bg-[#2E2E2E] text-[#929292]`,
                                    label: 'text-sm md:text-base text-[#D1CAD5] mb-2 block',
                                    popoverContent: 'bg-[#2E2E2E]',
                                }}
                                selectedKeys={
                                    selectedName ? [selectedName] : []
                                }
                                onSelectionChange={(key) => {
                                    const id = Array.from(key)[0]
                                    setSelectedName(id)
                                    tryAddCredit(id, selectedRole)
                                }}>
                                {crewName.map((crew) => (
                                    <SelectItem key={crew._id}>
                                        {crew.name}
                                    </SelectItem>
                                ))}
                            </Select>
                            {touched.credits && errors?.credits?.name && (
                                <p className='mt-1 text-sm text-red-500'>
                                    {errors?.credits?.name}
                                </p>
                            )}
                        </div>
                        <div className='relative col-span-12 mb-2 mt-6 md:col-span-5'>
                            <Select
                                className='w-full'
                                label='Credit Role'
                                placeholder='Select a credit role'
                                selectionMode='single'
                                labelPlacement={'outside'}
                                classNames={{
                                    trigger: `bg-transparent w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                ${touched.credits && errors.credits ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                bg-[#2E2E2E] text-[#929292]`,
                                    label: 'text-sm md:text-base text-[#D1CAD5] mb-2 block',
                                    popoverContent: 'bg-[#2E2E2E]',
                                }}
                                selectedKeys={
                                    selectedRole ? [selectedRole] : []
                                }
                                onSelectionChange={(key) => {
                                    const id = Array.from(key)[0]
                                    setSelectedRole(id)
                                    tryAddCredit(selectedName, id)
                                }}>
                                {crewRole.map((role) => (
                                    <SelectItem key={role._id}>
                                        {role.role}
                                    </SelectItem>
                                ))}
                            </Select>
                            {touched.credits && errors?.credits?.role && (
                                <p className='mt-1 text-sm text-red-500'>
                                    {errors?.credits?.role}
                                </p>
                            )}
                        </div>
                        <div className='relative col-span-12 mb-2 text-end md:col-span-2'>
                            <CreditDrawer />
                        </div>
                    </div>

                    {values.credits.map((c, index) => (
                        <div
                            key={index}
                            className='grid grid-cols-12 items-end gap-4'>
                            {/* Credit Name */}
                            <div className='relative col-span-12 mb-2 md:col-span-6'>
                                <label className='mb-2 block text-sm text-[#D1CAD5] md:text-base'>
                                    Credits Name :-{' '}
                                    <span className='font-bold'>{c.name}</span>
                                </label>
                            </div>

                            {/* Credit Role */}
                            <div className='relative col-span-12 mb-2 md:col-span-5'>
                                <label className='mb-2 block text-sm text-[#D1CAD5] md:text-base'>
                                    Credits Role :-{' '}
                                    <span className='font-bold'>{c.role}</span>
                                </label>
                            </div>

                            {/* Delete button */}
                            <div className='relative col-span-12 mb-2 text-end md:col-span-1'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        const updated = values.credits.filter(
                                            (_, i) => i !== index
                                        )
                                        setFieldValue('credits', updated)
                                    }}
                                    className='h-[2.88rem] w-auto cursor-pointer px-5 text-center text-base leading-[2.88rem] text-[#FF2663]'>
                                    <i className='bi bi-trash3'></i>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className='mt-5 grid grid-cols-12 items-end gap-4'>
                        <div className='relative col-span-12 mb-2 md:col-span-12'>
                            <label
                                htmlFor='description'
                                className='mb-2 block text-sm text-[#D1CAD5] md:text-base'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                rows={4}
                                className={`w-full resize-none rounded-md border bg-[#2E2E2E] px-3 py-2 text-sm ${
                                    touched.description && errors.description
                                        ? 'border-red-500'
                                        : 'border-[rgba(255,255,255,0.15)]'
                                }`}
                                placeholder='Song description'
                                {...getFieldProps('description')}
                            />

                            {touched.description && errors.description && (
                                <p className='mt-1 text-sm text-red-500'>
                                    {errors.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='grid-cols-auto mt-10 grid justify-center gap-4'>
                        <button
                            type='submit'
                            className='h-[2.88rem] w-auto cursor-pointer rounded-full bg-[#C6FF00] px-20 text-center text-sm leading-[2.88rem] text-black'
                            disabled={isSubmitting}>
                            {isSubmitting ? <Loader /> : 'Submit Song'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default withAuthProtection(PublishSongForm)
