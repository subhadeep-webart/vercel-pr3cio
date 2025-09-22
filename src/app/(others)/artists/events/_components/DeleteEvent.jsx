import { deleteEvent } from '@/services/api/artist-api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import queryConstants from '@/constants/query-constants'

const DeleteEvent = ({ openDelete, setOpenDelete, eventId }) => {
    console.log('eventId', eventId)
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: deleteEvent,
        onSuccess: async (data) => {
            setOpenDelete(false)
            toast.success(data?.message)
            queryClient.invalidateQueries({
                queryKey: [queryConstants.eventListByArtists, true],
            })
        },

        onError: (error) => {
            toast.error(error?.message || 'Delete failed!')
        },
    })

    const onDelete = () => {
        mutate({ id: eventId })
    }

    if (!openDelete) return null

    return (
        <>
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                <div className='w-[90%] max-w-md rounded-xl bg-[#1F1F1F] p-6 text-center text-white'>
                    <h2 className='mb-4 text-lg font-semibold'>Delete Event</h2>
                    <p className='mb-6 text-sm text-gray-300'>
                        Are you sure you want to delete this event? This action
                        cannot be undone.
                    </p>

                    <div className='flex justify-center space-x-4'>
                        <button
                            onClick={() => setOpenDelete(false)}
                            className='rounded-full border border-gray-400 px-4 py-2 text-gray-300 hover:bg-gray-700'>
                            Cancel
                        </button>
                        <button
                            onClick={onDelete}
                            className='rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteEvent
