'use client'

import { musicCategories } from '@/data/music-data'
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
import { CiCircleRemove } from 'react-icons/ci'

import { Album } from '@/models/responses/albums-data'
import { withAuthProtection } from '@/components/auth/protected-component'
import FileUploader from '@/components/file-uploader'
import Container from '@/components/ui/container'

import usePublishSongForm from '../_hook/usePublishSongForm'
import Loader from '@/components/ui/Loader'
import CreditDrawer from './CreditDrawer'
import { useQuery } from '@tanstack/react-query'
import queryConstants from '@/constants/query-constants'
import { getAllCrews } from '@/services/api/artist-api'
import { useState } from 'react'

function PublishSongForm() {
    const { data: crewsData, isLoading: crewLoading } = useQuery({
        queryKey: ["crews"],
        queryFn: getAllCrews,
    })

    const [selectedName, setSelectedName] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

    // Whenever both are chosen → push into credits
    const tryAddCredit = (nameId, roleId) => {
        if (nameId && roleId) {
            const nameObj = crewName.find((c) => c._id === nameId);
            const roleObj = crewRole.find((r) => r._id === roleId);

            const newCredit = {
                credit_user_id: nameId ?? null,
                name: nameObj?.name ?? "",
                credit_role_id: roleId ?? null,
                role: roleObj?.role ?? ""
            };

            setFieldValue("credits", [...values.credits, newCredit]);

            // reset local selects
            setSelectedName(null);
            setSelectedRole(null);
        }
    };

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
        setFieldValue
    } = usePublishSongForm();

    if (crewLoading) return null;

    const { crewName = [], crewRole = [] } = crewsData;


    console.log("Values======>", values);

    return (
        <>
            <div className="grid grid-cols-12 bg-[#2A2929] rounded-[0.876rem] py-7">
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
                <form action="" className="col-span-12 md:col-span-10 md:col-start-2" onSubmit={handleSubmit}
                    onReset={handleReset}>
                    <div className="grid grid-cols-12 gap-4 items-end mb-6">
                        {values.url ? (
                            <div className='flex items-center gap-1 col-span-4'>
                                <audio controls src={`https://d13hus0rdpxu56.cloudfront.net/${values.url}`} className='h-8' />
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
                                onClick={handleOpenMusicUpload}
                                className="bg-[#494848] rounded-[0.3rem] border-1 border-[#666] border-solid p-3 col-span-4 z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(45,38,148,0.18)_0%,rgba(211,68,201,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1] text-center cursor-pointer">
                                <div className="grid grid-flow-col gap-4 justify-center items-center">
                                    <span className="xl:text-[0.9rem] xxl:text-[1.05rem] font-bold col-span-auto">Upload song</span>
                                    <span
                                        className="w-[2.40rem] h-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] leading-[2.40rem] text-center col-span-auto">
                                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                            className="m-auto h-[2.40rem]" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.25 18.5459C8.25 20.0807 7.01878 21.3248 5.5 21.3248C3.98122 21.3248 2.75 20.0807 2.75 18.5459C2.75 17.0111 3.98122 15.767 5.5 15.767C7.01878 15.767 8.25 17.0111 8.25 18.5459Z"
                                                stroke="white" stroke-width="1.86904" />
                                            <path
                                                d="M19.25 16.6933C19.25 18.2281 18.0188 19.4722 16.5 19.4722C14.9812 19.4722 13.75 18.2281 13.75 16.6933C13.75 15.1585 14.9812 13.9144 16.5 13.9144C18.0188 13.9144 19.25 15.1585 19.25 16.6933Z"
                                                stroke="white" stroke-width="1.86904" />
                                            <path d="M8.24976 18.5459V8.35657" stroke="white" stroke-width="1.86904" />
                                            <path
                                                d="M18.5625 11.5986C18.5625 11.9823 18.8703 12.2933 19.25 12.2933C19.6297 12.2933 19.9375 11.9823 19.9375 11.5986H18.5625ZM19.9375 11.5986V6.50395H18.5625V11.5986H19.9375Z"
                                                fill="white" />
                                            <path
                                                d="M14.4236 4.4241L10.7569 5.65917C9.54693 6.06676 8.94187 6.27055 8.59582 6.75572C8.24976 7.24089 8.24976 7.88534 8.24976 9.17425V12.0615L19.2498 8.35628V7.93917C19.2498 5.59334 19.2498 4.42043 18.4884 3.86591C17.727 3.31138 16.6259 3.68229 14.4236 4.4241Z"
                                                stroke="white" stroke-width="1.86904" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                </div>
                            </button>
                            // <Button variant='faded' onPress={handleOpenMusicUpload}>
                            //     Upload Song
                            // </Button>
                        )}

                        {values.artwork ? (
                            <div className='relative w-fit col-span-4'>
                                <Image
                                    src={values.artwork || '/img/open-graph.png'}
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
                                onClick={handleOpenThumbnailUpload}
                                type='button'
                                className="bg-[#494848] rounded-[0.3rem] border-1 border-[#666] border-solid p-3 col-span-4 z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(45,38,148,0.18)_0%,rgba(211,68,201,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1] text-center cursor-pointer">
                                <div className="grid grid-flow-col gap-4 justify-center items-center">
                                    <span className="xl:text-[0.9rem] xxl:text-[1.05rem] font-bold col-span-auto">Upload Album Artwork</span>
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

                        <div className="col-span-4 text-center cursor-pointer pl-5">
                            <button type="button"
                                onClick={() => handleChangeUploadMode(!singleUpload)}
                                className="inline-flex gap-2 justify-center items-center rounded-full border border-[#666] px-4 py-3 w-auto"
                            >
                                <span
                                    className={`${singleUpload ? 'bg-[#00FF00]' : 'bg-[#FF0000]'
                                        } xl:w-[1rem] xl:h-[1rem] xxl:w-[1.46rem] xxl:h-[1.46rem] rounded-full`}
                                ></span>

                                <span className="xl:text-[0.9rem] xxl:text-[1.05rem] font-medium">
                                    Upload mode
                                </span>

                                <span
                                    className={`xl:text-[0.9rem] xxl:text-[1.05rem] font-medium ${singleUpload ? 'text-success-500' : 'text-danger-500'
                                        }`}
                                >
                                    {singleUpload ? 'Single' : 'Inside Album'}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-5">
                            <label htmlFor="category" className="text-base text-[#D1CAD5] mb-2 block">
                                Category
                            </label>
                            <select
                                id="category"
                                {...getFieldProps('category')}
                                className={`w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                ${touched.category && errors.category ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                bg-[#2E2E2E] text-[#929292]`}
                            >
                                <option value="">Song category</option>
                                {musicCategories.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                            {touched.category && errors.category && (
                                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                            )}
                        </div>

                        {/* Album Select + Add Button (if not singleUpload) */}
                        {!singleUpload && (
                            <>
                                <div className="mb-2 relative col-span-12 md:col-span-4">
                                    <label htmlFor="album_id" className="text-base text-[#D1CAD5] mb-2 block">
                                        Choose Album
                                    </label>
                                    <select
                                        id="album_id"
                                        {...getFieldProps('album_id')}
                                        className={`w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                        ${touched.album_id && errors.album_id ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                        bg-[#2E2E2E] text-[#929292]`}
                                    >
                                        <option value="">Select album</option>
                                        {(albums ?? []).map((album: Album) => (
                                            <option key={album._id} value={album._id}>
                                                {album.name}
                                            </option>
                                        ))}
                                    </select>
                                    {touched.album_id && errors.album_id && (
                                        <p className="text-red-500 text-xs mt-1">{errors.album_id}</p>
                                    )}
                                </div>

                                <div className="mb-2 relative col-span-12 md:col-span-3 text-end">
                                    <button
                                        type="button"
                                        onClick={handleAddAlbum}
                                        className="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-xl px-5 text-black text-sm cursor-pointer"
                                    >
                                        Add Album
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-12">
                            <label htmlFor="title" className="text-base text-[#D1CAD5] mb-2 block">
                                Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.title && errors.title
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Song title"
                                {...getFieldProps('title')}
                            />

                            {touched.title && errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-12">
                            <label htmlFor="description" className="text-base text-[#D1CAD5] mb-2 block">
                                Description
                            </label>

                            <textarea
                                id="description"
                                rows={4}
                                className={`w-full rounded-md px-3 py-2 text-sm border bg-[#2E2E2E] resize-none ${touched.description && errors.description
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Song description"
                                {...getFieldProps('description')}
                            />

                            {touched.description && errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-6">
                            <Select
                                className="w-full"
                                label="Credit Name"
                                placeholder="Select a credit name"
                                selectionMode="single"
                                labelPlacement={"outside"}
                                classNames={{
                                    trigger: `bg-transparent w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                ${touched.credits && errors.credits ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                bg-[#2E2E2E] text-[#929292]`,
                                    label: "text-base text-[#D1CAD5] mb-2 block"
                                }}
                                selectedKeys={selectedName ? [selectedName] : []}
                                onSelectionChange={(key) => {
                                    const id = Array.from(key)[0];
                                    setSelectedName(id);
                                    tryAddCredit(id, selectedRole);
                                }}
                            >
                                {crewName.map((crew) => (
                                    <SelectItem key={crew._id}>{crew.name}</SelectItem>
                                ))}
                            </Select>
                            {touched.credits && errors?.credits?.name && (
                                <p className="text-red-500 text-sm mt-1">{errors?.credits?.name}</p>
                            )}
                        </div>
                        <div className="mb-2 relative col-span-12 md:col-span-5">
                            <Select
                                className="w-full"
                                label="Credit Role"
                                placeholder="Select a credit role"
                                selectionMode="single"
                                labelPlacement={"outside"}
                                classNames={{
                                    trigger: `bg-transparent w-full rounded-md px-3 h-[3rem] text-[0.82rem] border 
                ${touched.credits && errors.credits ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} 
                bg-[#2E2E2E] text-[#929292]`,
                                    label: "text-base text-[#D1CAD5] mb-2 block"
                                }}
                                selectedKeys={selectedRole ? [selectedRole] : []}
                                onSelectionChange={(key) => {
                                    const id = Array.from(key)[0];
                                    setSelectedRole(id);
                                    tryAddCredit(selectedName, id);
                                }}
                            >
                                {crewRole.map((role) => (
                                    <SelectItem key={role._id}>{role.role}</SelectItem>
                                ))}
                            </Select>
                            {touched.credits && errors?.credits?.role && (
                                <p className="text-red-500 text-sm mt-1">{errors?.credits?.role}</p>
                            )}
                        </div>
                        <div className="mb-2 relative col-span-12 md:col-span-1 text-end">
                            <CreditDrawer />
                        </div>
                    </div>

                    {values.credits.map((c, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 items-end">
                            {/* Credit Name */}
                            <div className="mb-2 relative col-span-12 md:col-span-6">
                                <label className="text-base text-[#D1CAD5] mb-2 block">Credits Name :- <span className='font-bold'>{c.name}</span></label>
                            </div>

                            {/* Credit Role */}
                            <div className="mb-2 relative col-span-12 md:col-span-5">
                                <label className="text-base text-[#D1CAD5] mb-2 block">Credits Role :- <span className='font-bold'>{c.role}</span></label>
                            </div>

                            {/* Delete button */}
                            <div className="mb-2 relative col-span-12 md:col-span-1 text-end">
                                <button
                                    type="button"
                                    onClick={() => {
                                        const updated = values.credits.filter((_, i) => i !== index);
                                        setFieldValue("credits", updated);
                                    }}
                                    className="w-auto h-[2.88rem] leading-[2.88rem] text-center px-5 text-[#FF2663] text-base cursor-pointer"
                                >
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>
                        </div>
                    ))}


                    {/* <div className="grid grid-cols-12 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-5">
                            <label htmlFor="" className="text-base text-[#D1CAD5] mb-2 block">Credits Name</label>
                            <input type="text"
                                className="w-full rounded-md px-3 h-[3rem] text-sm  border-1 border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                placeholder="Song category" />
                        </div>
                        <div className="mb-2 relative col-span-12 md:col-span-6">
                            <label htmlFor="" className="text-base text-[#D1CAD5] mb-2 block">Credits Role</label>
                            <input type="text"
                                className="w-full rounded-md px-3 h-[3rem] text-sm  border-1 border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                placeholder="Select" />
                        </div>
                        <div className="mb-2 relative col-span-12 md:col-span-1 text-end">
                            <button
                                className="w-auto h-[2.88rem] leading-[2.88rem] text-center px-5 text-[#FF2663] text-base cursor-pointer">
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-auto gap-4 mt-10 justify-center">
                        <button
                            className="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-full px-20 text-black text-sm cursor-pointer" disabled={isSubmitting}>
                            {isSubmitting ? <Loader /> : 'Submit Song'}
                        </button>
                    </div>
                </form >
            </div >
        </>
    )
}

export default withAuthProtection(PublishSongForm)
