import { jwtDecode } from 'jwt-decode'
import { NextRequest, NextResponse } from 'next/server'

import { cookieConstants } from './constants/cookie-constants'
import { AccessToken } from './models/access-token'

// 1. Specify protected and public routes
const protectedRoutes = [
    '/profile',
    '/albums',
    '/publish-song',
    '/songs',
    '/library',
    '/store',
]
const authRoutes = ['/signin', '/signup']

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.some((route) =>
        path.startsWith(route)
    )
    const isAuthRoute = authRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const cookies = await req.cookies
    const cookie = cookies.get(cookieConstants.accessToken)?.value

    const hasSession = cookie
        ? jwtDecode<AccessToken>(cookie)?.user?.is_verified
        : false

    // 4. Open the sign in modal if the user is not authenticated
    if (isProtectedRoute && !hasSession) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to the home page if the user is authenticated
    if (isAuthRoute && hasSession) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
