import { HttpStatusCode } from 'axios'
import toast from 'react-hot-toast'

import {
    ApiResponse,
    fevSongParams,
    PageParams,
    PaginatedApiResponse,
} from '@/models/common'
import { PublishSongParam } from '@/models/params/publish-song-param'
import { UploadSongParam } from '@/models/params/upload-song-param'
import { UploadThumbnailParam } from '@/models/params/upload-thumbnail-param'
import { PublishSongData } from '@/models/responses/publish-song-data'
import { Song } from '@/models/responses/songs-data'
import { UploadSongData } from '@/models/responses/upload-song-data'
import { uploadThumbnailData } from '@/models/responses/upload-thumbnail'
import queryConstants from '@/constants/query-constants'
import { buildURL } from '@/utils/func-utils'

import httpService from '../http-service'

export const publishSong = async (param: PublishSongParam) => {
    try {
        const response = await httpService.post<PublishSongData>(
            queryConstants.publishSong,
            param
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const uploadSong = async (param: UploadSongParam) => {
    try {
        const formData = new FormData()
        formData.append('song', param.song)

        const response = await httpService.put<UploadSongData>(
            queryConstants.uploadSong,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const uploadThumbnail = async (param: UploadThumbnailParam) => {
    try {
        const formData = new FormData()
        formData.append('thumbnail', param.thumbnail)

        const response = await httpService.put<uploadThumbnailData>(
            queryConstants.uploadSongThumbnail,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getSongs = async (params: PageParams) => {
    try {
        const response = await httpService.get<PaginatedApiResponse<Song[]>>(
            queryConstants.getSongs,
            {
                params: {
                    page: params.page ?? 1,
                    limit: params.limit ?? 20000,
                    is_trending: params.is_trending ?? false,
                },
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const updateSongPlayCount = async (songId: string) => {
    try {
        const url = buildURL(queryConstants.songCount, { id: songId })
        const response = await httpService.patch<ApiResponse>(url)
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const updateUserSongPlayCount = async (songId: string) => {
    try {
        const response = await httpService.get<
            ApiResponse & { limitReached?: boolean; reason?: string }
        >(queryConstants.userSongCount + '/' + songId)

        if (response.status === HttpStatusCode.Ok) {
            if (response.data.limitReached) {
                return {
                    limitReached: true,
                    reason: response.data.reason || 'Free limit reached',
                    data: response.data,
                }
            }
            return { limitReached: false }
        }

        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getSongHistory = async (songId: string) => {
    try {
        const response = await httpService.get<ApiResponse>(
            queryConstants.playHistory
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getFavoritesList = async (params: fevSongParams) => {
    try {
        const response = await httpService.get<PaginatedApiResponse<Song[]>>(
            queryConstants.getFavoriteSongsList,
            {
                params: {
                    type: params.type,
                    page: params.page ?? 1,
                    limit: params.limit ?? 20000,
                },
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}


export const getInAppDownloadList = async (params: fevSongParams) => {
    try {
        const response = await httpService.get<PaginatedApiResponse<Song[]>>(
            queryConstants.getInAppDownload,
            {
                params: {
                    type: params.type,
                    page: params.page ?? 1,
                    limit: params.limit ?? 20000,
                },
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getPurchasedList = async (params: { type: "song" | "album" }) => {
    try {
        const response = await httpService.get(
            queryConstants.downloadMusicProduct,
            {
                params: {
                    type: params.type,
                },
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}



export const getAllTagLists = async () => {
    try {
        const response = await httpService.get(queryConstants.getAllTagLists)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}


