import { HttpStatusCode } from 'axios'
import toast from 'react-hot-toast'
import queryConstants from '@/constants/query-constants'
import { buildURL } from '@/utils/func-utils'
import httpService from '../http-service'

export const getSongDataByID = async (songId) => {
    try {
        const response = await httpService.get(`${queryConstants.getSongById}${songId}`)
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const editSongs = async (songId, reqObj) => {
    try {
        const response = await httpService.put(
            `${queryConstants.editSong}${songId}`,
            reqObj
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        console.log("ERROROORO===>",err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const deleteSongById = async (songId) => {
    try {
        const response = await httpService.delete(queryConstants.getSongs + "/" + songId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}

export const downloadSongById = async (songId) => {
    try {
        const response = await httpService.get(queryConstants.downloadSong + "/" + songId, { responseType: 'blob' })

        if (response.status === HttpStatusCode.Ok) {
            return response
        }
        throw new Error(response.data.message)
    } catch (error) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}


export const postInAppDownload = async (songDetail) => {
    try {
        const response = await httpService.post(queryConstants.inAppDownLoad, songDetail)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}
