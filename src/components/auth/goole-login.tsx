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

import Loader from '../ui/Loader'

type GoogleLoginButtonProps = {
    onSuccess: () => void
    isArtist?: boolean
}

const GoogleLoginButton = ({ onSuccess, isArtist }: GoogleLoginButtonProps) => {
    const { saveSession } = useAuth()
    console.log('isArtist', isArtist)

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
            mutateAsync({
                access_token: tokenResponse.access_token,
                is_artist: isArtist ?? false,
            })
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
    const userTypeCheck = () => {
        toast.error('Oops! We need to know if you’re a User or an Artist.')
    }

    return (
        <>
            {isArtist === null ? (
                <button
                    onClick={userTypeCheck}
                    className='rounded-4xl mt-2 flex h-[3.5rem] w-full cursor-pointer items-center justify-center border-1 border-[rgba(255,255,255,0.15)] text-center text-sm leading-[3.5rem] text-[#9D9D9D] transition-colors hover:bg-white'>
                    <span>
                        <img
                            src='/images/login/google.webp'
                            alt='pr3cio-logo'
                            loading='lazy'
                            className='mr-3'
                        />
                    </span>{' '}
                    Log in to continue
                </button>
            ) : (
                <button
                    onClick={() => login()}
                    disabled={status === 'pending'}
                    className='rounded-4xl mt-2 flex h-[3.5rem] w-full cursor-pointer items-center justify-center border-1 border-[rgba(255,255,255,0.15)] text-center text-sm leading-[3.5rem] text-[#9D9D9D] transition-colors hover:bg-white'>
                    <span>
                        <img
                            src='/images/login/google.webp'
                            alt='pr3cio-logo'
                            loading='lazy'
                            className='mr-3'
                        />
                    </span>{' '}
                    {status === 'pending' ? <Loader /> : 'Log in to continue'}
                </button>
            )}
        </>
    )
}

export default GoogleLoginButton
