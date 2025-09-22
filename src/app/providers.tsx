'use client'

import { ReactNode, Suspense, useState } from 'react'
import store from '@/redux/store'
import { HeroUIProvider } from '@heroui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import { Provider as ReduxProver } from 'react-redux'

import AuthProvider from '@/components/auth/auth-provider'
import TabBar from '@/components/layout/tabbar'
import MobilePlayer from '@/components/player/mobile-player'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CreateAlbum from './(others)/artists/song-upload/_components/create-album'

const Providers = ({ children }: { children: ReactNode }) => {
    const { push: navigate } = useRouter()
    const [queryClient] = useState(() => new QueryClient())

    return (
        <HeroUIProvider navigate={navigate}>
            <QueryClientProvider client={queryClient}>
                <ReduxProver store={store}>
                    <Suspense>
                        <AuthProvider>
                            {children}
                            <Toaster />
                            <MobilePlayer />
                            <TabBar />
                            <CreateAlbum />
                        </AuthProvider>
                    </Suspense>
                </ReduxProver>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </HeroUIProvider>
    )
}

export default Providers
