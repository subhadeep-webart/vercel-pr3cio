import { HttpStatusCode } from 'axios'

import queryConstants from '@/constants/query-constants'

import httpService from '../http-service'

export const getAllArtists = async ({ page = 1, limit = 10 }) => {
    try {
        const response = await httpService.get(queryConstants.getAllArtists, {
            params: {
                page,
                limit,
            },
        })
        console.log('response', response)

        // if (response.status === HttpStatusCode.Ok) {
        //     return response?.data ?? []
        // }
        if (response.status === HttpStatusCode.Ok) {
            const data = response.data
            console.log("Response======>", data);
            // ✅ Defensive normalization
            return {
                artist: Array.isArray(data?.artist) ? data.artist : [],
                total: typeof data?.total === 'number' ? data.total : 0,
            }
        }

        throw new Error(response?.statusText || 'Failed to fetch artists')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getArtistDetails = async (artistId) => {
    try {
        const response = await httpService.post('/users/artist-detail', {
            id: artistId, // ← This is the request body
        })

        if (response.status === HttpStatusCode.Ok) {
            return response.data.user
        }

        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getAllCrews = async () => {
    try {
        const response = await httpService.get(queryConstants.getAllCrews)
        console.log('Crews Response', response)

        // if (response.status === HttpStatusCode.Ok) {
        //     return response?.data ?? []
        // }
        if (response.status === HttpStatusCode.Ok) {
            const data = response.data
            console.log("Response======>", data);
            // ✅ Defensive normalization
            return data ?? { crewName: [], crewRole: [] }
        }

        throw new Error(response?.statusText || 'Failed to fetch artists')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}


