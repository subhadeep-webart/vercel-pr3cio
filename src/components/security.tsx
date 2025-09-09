'use client'

import { useEffect } from 'react'

export default function Security() {
    useEffect(() => {
        if (!document.URL.includes('localhost')) {
            document.addEventListener('copy', (event) => event.preventDefault())
            document.addEventListener('cut', (event) => event.preventDefault())
            document.addEventListener('paste', (event) =>
                event.preventDefault()
            )
            document.addEventListener('selectstart', (event) =>
                event.preventDefault()
            )
            document.addEventListener('contextmenu', (event) =>
                event.preventDefault()
            )
        }
    }, [])

    return null
}
