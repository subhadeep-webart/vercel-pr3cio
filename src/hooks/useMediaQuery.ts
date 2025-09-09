import { useEffect, useState } from 'react'

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface MediaQueryResult {
    screenSize: ScreenSize
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    isLargeDesktop: boolean
}

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
}

const getScreenSize = (width: number): ScreenSize => {
    if (width >= breakpoints.xl) return 'xl'
    if (width >= breakpoints.lg) return 'lg'
    if (width >= breakpoints.md) return 'md'
    if (width >= breakpoints.sm) return 'sm'
    return 'xs'
}

export const useMediaQuery = (): MediaQueryResult => {
    const [width, setWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    )

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const screenSize = getScreenSize(width)

    return {
        screenSize,
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg && width < breakpoints.xl,
        isLargeDesktop: width >= breakpoints.xl,
    }
}
