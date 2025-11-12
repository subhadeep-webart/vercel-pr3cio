import axios, { HttpStatusCode } from 'axios'

import { ForgotPasswordParam } from '@/models/params/forgot-password-params'
import { GoogleLoginParams } from '@/models/params/google-login-params'
import {
    ForgetPasswordParam,
    ResetPasswordParam,
    SigninParam,
} from '@/models/params/signin-param'
import { SignupParam } from '@/models/params/signup-param'
import {
    VerifyEmailParam,
    VerifyOtpParam,
} from '@/models/params/verify-email.param'
import { ForgotPasswordData } from '@/models/responses/forgot-password-data'
import { ProfileResponse } from '@/models/responses/profile-data'
import { SigninData } from '@/models/responses/signin-data'
import { SignupData } from '@/models/responses/signup-data'
import { VerifyEmailData } from '@/models/responses/verify-email-data'
import queryConstants from '@/constants/query-constants'
import { config } from '@/utils/app-config'
import { setAccessTokenInCookie, setEmailInCookie } from '@/utils/auth-utils'

import httpService from '../http-service'
import { ChangePasswordParam } from '@/models/params/change-password-params'
import { ChangePasswordData } from '@/models/responses/change-password-data'

export const login = async (data: SigninParam) => {
    try {
        const response = await httpService.post<SigninData>(
            queryConstants.login,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            setAccessTokenInCookie(response.data.token)
            httpService.injectAuthToken(response.data.token)
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const signup = async (data: SignupParam) => {
    try {
        const response = await httpService.post<SignupData>(
            queryConstants.signup,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            setEmailInCookie(data.email)
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const verifyEmail = async (data: VerifyEmailParam) => {
    try {
        const response = await httpService.post<VerifyEmailData>(
            queryConstants.verifyEmail,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            setAccessTokenInCookie(response.data.token)
            httpService.injectAuthToken(response.data.token)
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const forgotPassword = async (data: ForgotPasswordParam) => {
    try {
        const response = await httpService.post<ForgotPasswordData>(
            queryConstants.forgotPassword,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            setEmailInCookie(data.email)
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const changePassword = async (data: ChangePasswordParam) => {
    try {
        const response = await httpService.post<ChangePasswordData>(
            queryConstants.changePassword,
            data
        )

        if (response.status === HttpStatusCode.Ok) {
            // setEmailInCookie(data.email)
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getUserProfile = async () => {
    try {
        const response = await httpService.get<ProfileResponse>(
            queryConstants.getProfile
        )
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data?.message ?? 'Failed to get user profile')
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const googleLogin = async (data: GoogleLoginParams) => {
    try {
        const response = await httpService.post<SigninData>(
            queryConstants.googleLogin,
            data
        )
        if (response.status === HttpStatusCode.Ok) {
            setAccessTokenInCookie(response.data.token)
            httpService.injectAuthToken(response.data.token)
            return response.data
        }
        throw new Error(response.data?.message ?? 'Failed to get user profile')
    } catch (err: any) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const forgetPassword = async (data: ForgetPasswordParam) => {
    try {
        const response = await axios.post<any>(
            `${config.env.API_BASE_URL}${queryConstants.getForgetPassword}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
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

export const resetPassword = async (data: ResetPasswordParam) => {
    try {
        const response = await httpService.patch<any>(
            queryConstants.getResetPassword,
            data
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
export const verifyOtp = async (data: VerifyOtpParam) => {
    try {
        const response = await httpService.post<any>(
            queryConstants.verifyOTP,
            data,
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json',
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
