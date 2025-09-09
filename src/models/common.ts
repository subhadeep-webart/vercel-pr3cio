export interface Category {
    _id: string
    name: string
}

export interface ApiResponse {
    status: string
    message?: string
}

interface ApiResponseWithData<T> extends ApiResponse {
    data: T
}

export interface PaginatedApiResponse<T> extends ApiResponseWithData<T> {
    total: number
}

export type StandardApiResponse<T> = ApiResponseWithData<T>

export type PageParams = {
    page: number
    limit: number
    is_trending?: boolean
}

export type fevSongParams = {
    type:string
    page: number
    limit: number
}
