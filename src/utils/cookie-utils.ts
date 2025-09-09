/**
 * @author Ayan Ghosh
 * @param name Cookie Name
 * @param value Cookie Value
 * @param expires Expires Date
 * @returns void
 */
export const setCookie = (name: string, value: string, expires: Date) => {
    const cookieValue = encodeURIComponent(value)
    const domain = window.location.hostname
    const path = '/'
    const expiresAt = expires.toUTCString()
    document.cookie = `${name}=${cookieValue}; expires=${expires}; domain=${domain}; path=${path}`
}

/**
 * Retrieves the value of a specified cookie.
 * @author Ayan Ghosh
 * @param name The name of the cookie to retrieve.
 * @returns The value of the cookie if found, otherwise null.
 */

export const getCookie = (name: string) => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        if (cookie.startsWith(`${name}=`)) {
            return decodeURIComponent(cookie.substring(name.length + 1))
        }
    }
    return null
}

export const deleteCookie = (name: string) => {
    const domain = window.location.hostname
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/`
}
