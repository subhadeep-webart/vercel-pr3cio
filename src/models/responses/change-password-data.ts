import { ApiResponse } from '../common'

export interface ChangePasswordData extends ApiResponse {
    status: string
    message: string
}
