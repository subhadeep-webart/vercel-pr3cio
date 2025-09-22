import { deleteGallery } from '@/services/api/user-api'
import { getUserProfile } from '@/services/api/user-ep'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import useAuth from '@/hooks/useAuth'

const DeleteImage = ({ openDeleteImage, setOpenDeleteImage, imgUrl }) => {
    console.log(imgUrl, 'imgUrl')
    const { saveSession } = useAuth()

    const { mutate, isPending } = useMutation({
        mutationFn: (payload) => deleteGallery(payload),
        onSuccess: async (data) => {
            setOpenDeleteImage(false)
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
            toast.error(error?.message || 'Delete failed!')
        },
    })

    const onDelete = () => {
        const payload = {
            imageUrl: [imgUrl],
        }

        mutate(payload)
    }

    if (!openDeleteImage) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='w-[90%] max-w-md rounded-xl bg-[#1F1F1F] p-6 text-center text-white'>
                <h2 className='mb-4 text-lg font-semibold'>Delete Image</h2>
                <p className='mb-6 text-sm text-gray-300'>
                    Are you sure you want to delete this image? This action
                    cannot be undone.
                </p>

                <div className='flex justify-center space-x-4'>
                    <button
                        onClick={() => setOpenDeleteImage(false)}
                        className='rounded-full border border-gray-400 px-4 py-2 text-gray-300 hover:bg-gray-700'>
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        disabled={isPending}
                        className='rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700'>
                        {isPending ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteImage
