import { useEffect, useRef, useState } from 'react'

interface UseInfiniteScrollProps {
    callback: () => void
    threshold?: number
    root?: Element | null
    rootMargin?: string
}

export function useInfiniteScroll({
    callback,
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
}: UseInfiniteScrollProps) {
    const observerRef = useRef<HTMLDivElement | null>(null)
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        if (!observerRef.current) return

        const element = observerRef.current

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry.isIntersecting !== isIntersecting) {
                    setIsIntersecting(entry.isIntersecting)
                }
                if (entry.isIntersecting) {
                    callback()
                }
            },
            { root, rootMargin, threshold }
        )

        observer.observe(observerRef.current)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [callback, isIntersecting, root, rootMargin, threshold])

    return { observerRef, isIntersecting }
}
