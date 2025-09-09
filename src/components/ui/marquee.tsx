'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@heroui/react'

interface MarqueeProps {
    text?: string
    speed?: number
    pauseDuration?: number

    classNames?: {
        base?: string
        text?: string
    }
    children?: React.ReactNode
    [key: string]: any // Allow additional HTML attributes
}

const Marquee: React.FC<MarqueeProps> = ({
    text,
    speed = 1,
    pauseDuration = 500,
    classNames = {},
    children,
    ...props
}) => {
    const [direction, setDirection] = useState<'left' | 'right'>('left')
    const marqueeRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const marqueeElement = marqueeRef.current
        const contentElement = contentRef.current
        let animationFrameId: number

        const scrollText = () => {
            if (!marqueeElement || !contentElement || isPaused) return

            if (direction === 'left') {
                marqueeElement.scrollLeft += speed
                if (
                    marqueeElement.scrollLeft >=
                    contentElement.scrollWidth - marqueeElement.clientWidth
                ) {
                    setIsPaused(true)
                    setTimeout(() => {
                        setDirection('right')
                        setIsPaused(false)
                    }, pauseDuration)
                }
            } else {
                marqueeElement.scrollLeft -= speed
                if (marqueeElement.scrollLeft <= 0) {
                    setIsPaused(true)
                    setTimeout(() => {
                        setDirection('left')
                        setIsPaused(false)
                    }, pauseDuration)
                }
            }
            animationFrameId = requestAnimationFrame(scrollText)
        }

        animationFrameId = requestAnimationFrame(scrollText)

        return () => cancelAnimationFrame(animationFrameId)
    }, [direction, isPaused, speed, pauseDuration])

    return (
        <div
            ref={marqueeRef}
            className={cn(
                'flex w-full overflow-hidden whitespace-nowrap',
                classNames.base
            )}
            {...props} // Spread additional HTML attributes here
        >
            <div
                ref={contentRef}
                className={cn('inline-block min-w-max', classNames?.text)}>
                {text ?? children}
            </div>
        </div>
    )
}

export default Marquee
