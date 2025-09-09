import { AccountUser } from '../account-user'
import { ApiResponse } from '../common'
import { Song } from './songs-data'

export interface Album {
    _id: string
    user: AccountUser
    name: string
    thumbnail: string
    created_at: string
    updated_at: string
    __v: 0
}
export interface AlbumsData extends ApiResponse {
    albums: Album[]
}

export interface AlbumDetails extends ApiResponse {
    album: Album
    songs: Song[]
}
