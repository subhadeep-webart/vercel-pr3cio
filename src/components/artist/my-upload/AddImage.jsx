// import { LuDownload } from "react-icons/lu";

// const AddImage = ({ openAddImage, setOpenAddImage }) => {
//     if (!openAddImage) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-[#1F1F1F] rounded-2xl w-[22rem] p-6 shadow-lg relative">

//                 <button
//                     onClick={() => setOpenAddImage(false)}
//                     className="absolute top-3 right-4 text-white text-xl"
//                 >
//                     &times;
//                 </button>

//                 <h2 className="text-white text-lg font-semibold text-center mb-4">Add Image</h2>

//                 <div className="border border-dashed border-[#404040] rounded-xl h-48 flex flex-col items-center justify-center text-center text-white text-sm space-y-2">
//                     <LuDownload size={21}/>
//                     <p>Upload Image</p>
//                     <p className="text-[#9D9D9D] text-xs">
//                         Drag & Drop or <span className="text-[#C6FF00] cursor-pointer underline">Browse</span>
//                     </p>
//                 </div>

//                 <button className="mt-6 bg-[#C6FF00] text-black w-full py-2 rounded-full font-medium hover:opacity-90 transition">
//                     Save
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AddImage;

'use client'

import { useState } from 'react'
import { uploadGallery } from '@/services/api/user-api'
import { getUserProfile } from '@/services/api/user-ep'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { FiX } from 'react-icons/fi'
import { LuDownload } from 'react-icons/lu'

import useAuth from '@/hooks/useAuth'

const AddImage = ({ openAddImage, setOpenAddImage }) => {
    const [images, setImages] = useState([])
    const { saveSession } = useAuth()

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)

        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }))

        setImages((prev) => [...prev, ...newImages])
    }

    const handleRemoveImage = (index) => {
        setImages((prev) => {
            const updated = [...prev]
            URL.revokeObjectURL(updated[index].preview)
            updated?.splice(index, 1)
            return updated
        })
    }

    const { mutate, isPending } = useMutation({
        mutationFn: (formData) => uploadGallery(formData),
        onSuccess: async (data) => {
            setOpenAddImage(false)
            toast.success(data?.message)
            try {
                const profile = await getUserProfile()
                saveSession(profile.userWithDetails)
            } catch (err) {
                console.error('Error while refreshing user profile:', err)
                toast.error('Unable to refresh user session')
            }
        },
        onError: (error) => {
            toast.error(error?.message || 'Upload failed!')
        },
    })

    const handleSave = () => {
        if (images.length === 0) {
            toast.error('Please select images first!')
            return
        }

        const formData = new FormData()
        images.forEach((imgObj) => {
            formData.append('images', imgObj.file)
        })

        mutate(formData)
    }

    if (!openAddImage) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative w-[22rem] rounded-2xl bg-[#1F1F1F] p-6 shadow-lg'>
                <button
                    onClick={() => setOpenAddImage(false)}
                    className='absolute right-4 top-3 text-xl text-white'>
                    &times;
                </button>

                <h2 className='mb-4 text-center text-lg font-semibold text-white'>
                    Add Image
                </h2>

                <div className='relative flex h-48 flex-col items-center justify-center space-y-2 rounded-xl border border-dashed border-[#404040] text-center text-sm text-white'>
                    <LuDownload size={21} />
                    <p>Upload Image</p>
                    <p className='text-xs text-[#9D9D9D]'>
                        Drag & Drop or{' '}
                        <label
                            htmlFor='imageUpload'
                            className='cursor-pointer text-[#C6FF00] underline'>
                            Browse
                        </label>
                    </p>
                    <input
                        id='imageUpload'
                        type='file'
                        multiple
                        accept='image/*'
                        onChange={handleFileChange}
                        className='absolute inset-0 cursor-pointer opacity-0'
                    />
                </div>

                {images?.length > 0 && (
                    <div className='mt-4 grid grid-cols-3 gap-3'>
                        {images?.map((img, index) => (
                            <div key={index} className='group relative'>
                                <Image
                                    src={img?.preview}
                                    alt={`preview-${index}`}
                                    width={80}
                                    height={80}
                                    unoptimized
                                    className='rounded-md object-cover'
                                />
                                <button
                                    onClick={() => handleRemoveImage(index)}
                                    className='absolute right-[-8px] top-[-8px] rounded-full bg-black p-1 text-xs text-white transition hover:bg-red-600'>
                                    <FiX size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    onClick={handleSave}
                    disabled={isPending}
                    className={`mt-6 w-full rounded-full py-2 font-medium transition ${
                        isPending
                            ? 'cursor-not-allowed opacity-50'
                            : 'bg-[#C6FF00] text-black hover:opacity-90'
                    }`}>
                    {isPending ? 'Saving...' : 'Save'}
                </button>
            </div>
        </div>
    )
}

export default AddImage
