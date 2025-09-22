import { Track } from '@/models/player'
import queryConstants from '@/constants/query-constants'

import { config } from './app-config'

export const buildURL = (
    endPoint: string,
    fields: Record<string, string>
): string => {
    let url = endPoint
    Object.entries(fields).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value)
    })

    return url
}

export const formatTrackTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return '00:00'

    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)

    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export const arePlayListEqual = (oldTracks: Track[], newTracks: Track[]) => {
    if (oldTracks.length !== newTracks.length) return false

    return oldTracks.every((track, index) => track._id === newTracks[index]._id)
}

export const getSongUrl = (songId: string): string => {
    const baseURL = config.env.API_BASE_URL
    const url = buildURL(queryConstants.songStream, { id: songId })
    return baseURL + url
}
export function formatPlayCount(count: number): string {
    if (count < 1000) return `${count}`
    if (count < 1_000_000) return `${(count / 1000).toFixed(1)}K`
    if (count < 1_000_000_000) return `${(count / 1_000_000).toFixed(1)}M`
    return `${(count / 1_000_000_000).toFixed(1)}B`
}


export function convertSecondsToTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let result = '';
    if (hours > 0) result += `${hours}h `;
    if (minutes > 0 || hours > 0) result += `${minutes}min `;
    result += `${remainingSeconds}sec`;

    return result.trim();
}

export function formatDateToCustom(dateString: string) {
    const date = new Date(dateString);

    // Array of month abbreviations
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = date.getUTCDate();            // Get day of month (1-31)
    const month = months[date.getUTCMonth()]; // Get month abbreviation
    const year = date.getUTCFullYear();       // Get full year (e.g., 2024)

    return `${day} ${month}, ${year}`;
}