import { HttpStatusCode } from 'axios'

import queryConstants from '@/constants/query-constants'

import httpService from '../http-service'
import { buildURL } from '@/utils/func-utils'

export const getAllArtists = async ({ page = 1, limit = 10, type }) => {
    try {
        const response = await httpService.get(queryConstants.getAllArtists, {
            params: {
                page,
                limit,
                ...(type && { type }),
            },
        })
        console.log('responseArt', response)

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

export const getArtistAllProduct = async ({ page = 1, limit = 10, userId }) => {
    try {
        const response = await httpService.get(queryConstants.artistProductListing)
        console.log('Artist Product Listing======>', response)

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

export const getProductDetailsById = async (productId) => {
    const url = buildURL(queryConstants.productDetailById, { id: productId })
    try {
        const response = await httpService.post(url);

        console.log("Response data=========>", response);

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const createEvent = async (eventDetails) => {
    try {
        const response = await httpService.post(queryConstants.postEvent, eventDetails)
        console.log("Event create=====>", response);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const addCrew = async (crewDetails) => {
    try {
        const response = await httpService.post(queryConstants.addCrew, crewDetails)
        console.log("Event create=====>", response);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}



export const eventListByArtists = async ({ id }) => {
    try {
        const response = await httpService.get(queryConstants.eventListByArtists, {
            params: {
                id
            },
        })
        console.log('Event Listing======>', response)

        if (response.status === HttpStatusCode.Ok) {
            const data = response.data.data
            console.log("Response======>", data);
            // ✅ Defensive normalization
            return data
        }

        throw new Error(response?.statusText || 'Failed to fetch events')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const deleteEvent = async ({ id }) => {
    try {
        const response = await httpService.delete(queryConstants.deleteEventById, {
            params: {
                id
            },
        })
        console.log('Delete Event ======>', response)

        if (response.status === HttpStatusCode.Ok) {
            const data = response.data
            console.log("Response======>", data);
            // ✅ Defensive normalization
            return data
        }

        throw new Error(response?.statusText || 'Failed to delete event')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getEventById = async ({ id }) => {
    try {
        const response = await httpService.get(`${queryConstants.getEventById}/${id}`)

        console.log('Event Details======>', response)

        if (response.status === HttpStatusCode.Ok) {
            const data = response.data.data
            console.log("Response======>", data)
            return data
        }

        throw new Error(response?.statusText || 'Failed to fetch event details')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const editEvent = async (eventId, payload) => {
    try {
        const response = await httpService.put(
            `${queryConstants.editEvent}?id=${eventId}`,
            payload
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const generateSongWithAI = async (songAIContext) => {
    try {
        const response = await httpService.post(queryConstants.generateSongWithAI, songAIContext)
        console.log("Event create=====>", response);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getSongsByTaskId = async (songAIContext) => {
    try {
        const response = await httpService.post(queryConstants.generateSongWithAI, songAIContext)
        console.log("Event create=====>", response);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const generateLyricsWithAI = async (promptDetails) => {
    try {
        const response = await httpService.post(queryConstants.generateLyricsWithAI, promptDetails)
        console.log("Event create=====>", response);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getSongHistoryAi = async (userId) => {
    try {
        const response = await httpService.get(`${queryConstants.getAiSongHistory}/${userId}`)
        console.log("Get All History======>", response);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const deleteArtistAlbumById = async (albumId) => {
    try {
        const response = await httpService.delete(queryConstants.deleteArtistAlbum + "/" + albumId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}


export const getArtistDashboardItemList = async ({ page, limit, type }) => {
    try {
        const response = await httpService.get(queryConstants.artistDashboardItemList, {
            params: {
                page,
                limit,
                ...(type && { type }),
            },
        })
        console.log('responseDash items', response)

        if (response.status === HttpStatusCode.Ok) {
            return response?.data ?? []
        }
       
        throw new Error(response?.statusText || 'Failed to fetch items')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getArtistDashboardCard = async ({ page , type }) => {
    try {
        const response = await httpService.get(queryConstants.artistDashboardCard, {
            params: {
                ...(page && { page }),
                ...(type && { type }),
            },
        })
        console.log('responseDash', response)

        if (response.status === HttpStatusCode.Ok) {
            return response?.data ?? []
        }
       
        throw new Error(response?.statusText || 'Failed to fetch card')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getPurchasedItems = async ({  type }) => {
    try {
        const response = await httpService.get(queryConstants.getPurchasedItems, {
            params: {
                ...(type && { type }),
            },
        })
        console.log('response purchased', response)

        if (response.status === HttpStatusCode.Ok) {
            return response?.data ?? []
        }
       
        throw new Error(response?.statusText || 'Failed to fetch items')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getAccountData = async () => {
    try {
        const response = await httpService.get(queryConstants.getAccountData)
        console.log('response account', response)

        if (response.status === HttpStatusCode.Ok) {
            return response?.data ?? []
        }
       
        throw new Error(response?.statusText || 'Failed to fetch data')
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}