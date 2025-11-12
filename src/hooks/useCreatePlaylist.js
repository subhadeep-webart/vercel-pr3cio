// hooks/useCreatePlaylist.js
import { addPlaylist } from '@/services/api/playlist-api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
export function useCreatePlaylist() {
    const queryClient = useQueryClient();
    const {
        mutate: handleAddPlaylist,
        isPending: isLoading,
    } = useMutation({
        mutationFn: async (payload) => {
            const resp = await addPlaylist(payload)
            if (!resp.status) throw new Error('Failed to add playlist')
            return resp
        },
        onSuccess: (resp) => {
            queryClient.invalidateQueries({ queryKey: ['allPlaylists'] });
            toast.success('Playlist Added successfully!')
        },
        onError: (error) => {
            console.log("Error fine tune=====>", error);
            toast.error('Submission failed.')
        },
    })

    return { handleAddPlaylist, isLoading }
}
