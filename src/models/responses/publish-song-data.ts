import { ApiResponse } from '../common'
import { Song } from './songs-data'

export interface PublishSongData extends ApiResponse {
    song: Song
}
