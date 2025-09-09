import httpService from '@/services/http-service'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

import { AccessToken } from '@/models/access-token'
import { AccountUser } from '@/models/account-user'
import { cookieConstants } from '@/constants/cookie-constants'
import { getAccessTokenFromCookie } from '@/utils/auth-utils'
import { deleteCookie } from '@/utils/cookie-utils'

interface InitialState {
    user: AccountUser | null
    isLoading: boolean
    isError: boolean
    errorMessage: string
}
const initialState: InitialState = {
    user: null,
    isLoading: true,
    isError: false,
    errorMessage: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.isError = false
            state.errorMessage = ''
        },
        saveSession: (state, action: PayloadAction<AccountUser>) => {
            state.isLoading = false
            state.user = action.payload
        },
        verifySession: (state) => {
            const accessToken = getAccessTokenFromCookie()

            state.user = accessToken
                ? jwtDecode<AccessToken>(accessToken)?.user
                : null
            state.isLoading = false
            if (accessToken) {
                httpService.injectAuthToken(accessToken)
            }
        },
        logout: (state) => {
            deleteCookie(cookieConstants.accessToken)
            httpService.removeAuthToken()
            state.isLoading = false
            state.user = null
        },
    },
})

export default authSlice.reducer

export const { clearError, verifySession, saveSession, logout } =
    authSlice.actions
