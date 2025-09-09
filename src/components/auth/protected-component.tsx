'use client'

import { useLayoutEffect } from 'react'
import { CircularProgress } from '@heroui/react'
import { useRouter } from 'next/navigation'

import useAuth from '@/hooks/useAuth'

export function withAuthProtection<T extends object>(
    WrappedComponent: React.ComponentType<T>
) {
    return function ProtectedComponent(props: T) {
        const { isLoggedIn, isLoading } = useAuth()
        const router = useRouter()

        useLayoutEffect(() => {
            if (!isLoading && !isLoggedIn) {
                router.replace('/')
            }
        }, [isLoggedIn, isLoading, router])

        if (isLoading) {
            return (
                <div className='flex h-screen items-center justify-center'>
                    <CircularProgress size='lg' aria-label='Loading...' />
                </div>
            )
        }

        if (!isLoggedIn) {
            return null
        }

        return <WrappedComponent {...props} />
    }
}
