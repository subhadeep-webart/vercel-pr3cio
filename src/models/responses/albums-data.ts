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
    totalSongs: number
    liked: boolean
    __v: 0
    inAppDownload: boolean
    isAlbumDownLoad: boolean
}
export interface AlbumsData extends ApiResponse {
    albums: Album[],
    currentPage: number;
    totalPages: number;
    totalAlbums: number
}

export interface AlbumDetails extends ApiResponse {
    album: Album
    songs: Song[]
}
