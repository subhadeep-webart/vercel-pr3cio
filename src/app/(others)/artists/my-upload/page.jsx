'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'

import useAuth from '@/hooks/useAuth'
import AddImage from '@/components/artist/my-upload/AddImage'
import DeleteImage from '@/components/artist/my-upload/DeleteImage'
import ImageCard from '@/components/artist/my-upload/ImageCard'

const UploadPage = () => {
    const [openAddImage, setOpenAddImage] = useState(false)
    const [openDeleteImage, setOpenDeleteImage] = useState(false)
    const [imgUrl, setImgUrl] = useState([])

    const { user } = useAuth()
    console.log('user', user)

    return (
        <>
            <div className='grid w-full grid-cols-2 gap-8 rounded-[0.876rem] bg-[#2A2929] px-8 py-8 sm:grid-cols-3 lg:grid-cols-5'>
                <div className='flex h-[8.13rem] md:h-[10.13rem] items-center justify-center border-2 border-dashed border-[#3c3c3c] bg-[#333333]'>
                    <button
                        onClick={() => setOpenAddImage(true)}
                        className='h-[1.88rem] md:h-[2.88rem] w-auto cursor-pointer rounded-full bg-[#C6FF00] px-5 text-center text-sm leading-[1.88rem] md:leading-[2.88rem] text-black'>
                        Add Image
                    </button>
                </div>

                {user?.gallery?.length > 0 &&
                    user?.gallery?.map((img, index) => (
                        <ImageCard
                            key={index}
                            index={index}
                            img={img}
                            setOpenDeleteImage={setOpenDeleteImage}
                            setImgUrl={setImgUrl}
                        />
                    ))}
            </div>

            {openAddImage && (
                <AddImage
                    openAddImage={openAddImage}
                    setOpenAddImage={setOpenAddImage}
                />
            )}

            {openDeleteImage && (
                <DeleteImage
                    openDeleteImage={openDeleteImage}
                    setOpenDeleteImage={setOpenDeleteImage}
                    imgUrl={imgUrl}
                />
            )}
        </>
    )
}

export default UploadPage
