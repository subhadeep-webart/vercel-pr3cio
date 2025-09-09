export type RepeatMode = 'Off' | 'Track' | 'Queue'
export type PlayerStatus =
    | 'idle'
    | 'playing'
    | 'paused'
    | 'stopped'
    | 'loading'
    | 'error'

export interface Track {
    id?: string
    url: string
    title: string
    description?: string
    artist: string
    album?: string
    duration?: number
    artwork?: string
    [key: string]: any
}
