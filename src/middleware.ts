import { jwtDecode } from 'jwt-decode'
import { NextRequest, NextResponse } from 'next/server'

import { cookieConstants } from './constants/cookie-constants'
import { AccessToken } from './models/access-token'

const protectedRoutes = [
    '/profile',
    '/albums',
    '/publish-song',
    '/songs',
    '/library',
    '/store',
    '/artists',
    '/users/songs-library',
    '/users/songs/latests',
    '/users/songs/trendings',
    '/users/purchase-library/albums',
    '/users/purchase-library/songs',
    '/users/albums-library/latest',
    '/users/albums-library/trendings',
    '/users/song-library/favourite',
    '/users/song-library/downloads'
]

const authRoutes = ['/signin', '/signup', '/user-signup', '/artist-signup']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.some((route) =>
        path.startsWith(route)
    )
    const isAuthRoute = authRoutes.includes(path)
    const isDiscoverGenreRoute = path === '/discover-your-genre'

    const cookies = req.cookies
    const cookie = cookies.get(cookieConstants.accessToken)?.value

    let hasSession = false
    let isCategorySelected = true

    try {
        if (cookie) {
            const decoded = jwtDecode<AccessToken>(cookie);
            console.log("Decoded=======>", decoded);
            hasSession = decoded?.user?.is_verified ?? false

            // 🔑 Fetch fresh user data if session exists
            if (hasSession) {
                console.log("Is entered======> inside middleware");
                const res = await fetch(`https://adminpr3cio.dwstaging.link/api/v1/users/me`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${cookie}`,
                    },
                    cache: 'no-store', // avoid stale data
                })

                console.log("Response======>", res);

                if (res.ok) {
                    const user = await res.json()
                    console.log("User=======>", user);
                    isCategorySelected =
                        Array.isArray(user?.userWithDetails?.categories) && user.userWithDetails?.categories?.length > 0
                    console.log("Is category selected====>", isCategorySelected);
                } else {
                    // fallback to false if API fails
                    isCategorySelected = false
                }
            }
        }
    } catch (err) {
        hasSession = false
    }

    // 1. Redirect to login if protected route and not logged in
    if (isProtectedRoute && !hasSession) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    // 2. Redirect to home if logged in and trying to access auth routes
    if (isAuthRoute && hasSession) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    // 3. Redirect to /discover-your-genre if logged in, has no categories selected, and not already on that route
    if (hasSession && !isCategorySelected && !isDiscoverGenreRoute) {
        return NextResponse.redirect(new URL('/discover-your-genre', req.url))
    }

    // 4. If user is on /discover-your-genre but already selected categories, send to home
    if (hasSession && isCategorySelected && isDiscoverGenreRoute) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}

// Exclude static assets, API routes, etc.
export const config = {
    matcher: [
        '/((?!api|_next|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|js|css|woff2?|ttf)).*)',
    ],
}
