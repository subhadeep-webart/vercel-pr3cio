import httpService from '@/services/http-service'
import { cookies } from 'next/headers'

import { cookieConstants } from '@/constants/cookie-constants'

export const injectAuthTokenInServerSide = async () => {
    const allCookies = await cookies()
    const token = allCookies.get(cookieConstants.accessToken)?.value
    if (token) {
        httpService.injectAuthToken(token)
    }
}
