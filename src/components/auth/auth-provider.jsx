'use client'

import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import { saveSession, verifySession } from '@/redux/slices/auth-slice'
import { useAppDispatch } from '@/redux/store'
import { getUserProfile } from '@/services/api/user-ep'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

import { ModalType } from '@/models/modal'
import { config } from '@/utils/app-config'
import useApp from '@/hooks/useApp'
import useAuth from '@/hooks/useAuth'

import SigninModal from './signin-modal'
import SignupModal from './signup-modal'
import VerifyAccountModal from './verify-accoutn-modal'

const AuthProvider = ({ children }) => {
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const { setModal } = useApp()
    const { isLoggedIn, isLoading } = useAuth()
    const modal = searchParams.get('modal')

    useLayoutEffect(() => {
        dispatch(verifySession())
    }, [dispatch])

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getUserProfile()
                dispatch(saveSession(data.userWithDetails))
            } catch (err) {
                toast.error('Unable to refresh user session')
            }
        }

        if (isLoggedIn) {
            fetchUserProfile()
        }
    }, [dispatch, isLoggedIn])

    useEffect(() => {
        if (!isLoading && !isLoggedIn && modal === 'signin') {
            setModal('signin')
        }
    }, [isLoading, isLoggedIn, modal, setModal])

    return (
        <GoogleOAuthProvider clientId={config.env.GOOGLE_CLIENT_ID ?? ''}>
            <SigninModal />
            <SignupModal />
            <VerifyAccountModal />
            {children}
        </GoogleOAuthProvider>
    )
}

export default AuthProvider
