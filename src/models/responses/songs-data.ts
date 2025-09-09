export interface Song {
    _id: string
    title: string
    description: string
    url: string
    artwork: string
    artist: string
    album: string
    duration: number
    category: string
    tags: string[]
    artist_id: string
    created_at: string
    updated_at: string
    __v: number
    likes: number
    liked: boolean
    play_count: number
    isSongDownLoad: boolean
    inAppDownload: boolean
}
