'use client'

import React from 'react'
import { googleLogin } from '@/services/api/user-ep'
import { Button } from '@heroui/react'
import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'

import { GoogleLoginParams } from '@/models/params/google-login-params'
import { SigninData } from '@/models/responses/signin-data'
import queryConstants from '@/constants/query-constants'
import useAuth from '@/hooks/useAuth'

type GoogleLoginButtonProps = {
    onSuccess: () => void
    isArtist?: boolean
}

const GoogleLoginButton = ({ onSuccess, isArtist }: GoogleLoginButtonProps) => {
    const { saveSession } = useAuth()
    const { status, mutateAsync } = useMutation<
        SigninData,
        Error,
        GoogleLoginParams
    >({
        mutationKey: [queryConstants.googleLogin],
        mutationFn: googleLogin,
    })

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            mutateAsync({ access_token: tokenResponse.access_token, is_artist: isArtist ?? false })
                .then((data) => {
                    saveSession(data.user)
                    toast.success('login successfully!')
                    onSuccess()
                })
                .catch((err) => {
                    toast.error(err?.message)
                })
        },
    })

    return (
        <Button
            isLoading={status === 'pending'}
            onPress={() => login()}
            className='my-10 w-full'
            variant='faded'
            size='lg'
            startContent={<FcGoogle className='text-2xl' />}>
            Login With Google
        </Button>
    )
}

export default GoogleLoginButton
