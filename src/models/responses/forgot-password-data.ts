import { ApiResponse } from '../common'

export interface ForgotPasswordData extends ApiResponse {
    status: string
    message: string
}
