import { ApiResponse } from '../common'

export interface UploadSongData extends ApiResponse {
    url: string
    duration: number
}
