import { HttpStatusCode } from 'axios'

import { ApiResponse } from '@/models/common'
import { CreateAlbumParams } from '@/models/params/create-album-params'
import { AlbumDetails, AlbumsData, Album } from '@/models/responses/albums-data'
import queryConstants from '@/constants/query-constants'
import { buildURL } from '@/utils/func-utils'

import httpService from '../http-service'
type PageParams = {
    page?: number;
    limit?: number;
    is_trending?: boolean;
};

interface PaginatedApiResponse<T> {
    data: T;
    currentPage: number;
    totalPages: number;
    total: number;
    albums: []
}


export const getAllAlbums = async (
    params: PageParams
): Promise<PaginatedApiResponse<Album[]>> => {
    try {
        const response = await httpService.get<PaginatedApiResponse<Album[]>>(
            queryConstants.getAlbums,
            {
                params: {
                    page: params.page ?? 1,
                    limit: params.limit ?? 10,
                    is_trending: params.is_trending ?? false,
                },
            }
        );

        if (response.status === HttpStatusCode.Ok) {
            return response.data;
        }
        throw new Error('Failed to fetch albums');
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err);
        throw new Error(errorMessage);
    }
};

export const getAlbumDetails = async (albumId: string) => {
    try {
        const url = buildURL(queryConstants.getOneAlbum, { id: albumId })
        const response = await httpService.get<AlbumDetails>(url)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getUserAlbums = async () => {
    try {
        const response = await httpService.get<AlbumsData>(
            queryConstants.getUserAlbum
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

export const createAlbum = async (data: CreateAlbumParams) => {
    try {
        const response = await httpService.post<ApiResponse>(
            queryConstants.createAlbum,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error: any) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}

export const addToFavorite = async ({ type, id }: any) => {
    try {
        const response = await httpService.post<ApiResponse>(
            queryConstants.addToFavorite,
            { type, id }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error: any) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}


export const deleteAlbum = async (albumId: string) => {
    try {
        const response = await httpService.delete<ApiResponse>(queryConstants.getAlbums + "/" + albumId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error: any) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}
export const purchaseAlbumById = async (data: any) => {
    try {
        const response = await httpService.post<any>(
            queryConstants.purchaseAlbum,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error: any) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}
export const downloadAlbumById = async (albumId: string) => {
    try {
        const response = await httpService.get(queryConstants.downloadAlbum + "/" + albumId, { responseType: 'blob' })

        if (response.status === HttpStatusCode.Ok) {
            return response
        }
        throw new Error(response.data.message)
    } catch (error: any) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}

export const editAlbumById = async (albumId: string, payload: any) => {
    try {
        const response = await httpService.put<ApiResponse>(queryConstants.editAlbum + "/" + albumId, payload)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error: any) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}