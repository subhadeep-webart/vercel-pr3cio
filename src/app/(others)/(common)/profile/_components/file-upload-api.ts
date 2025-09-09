import { log } from 'node:console'
import httpService from '@/services/http-service'

import { FileUploadResponse } from '@/models/responses/file-upload-data'
import queryConstants from '@/constants/query-constants'

export const fileUpload = async (
    file: File,
    onProgress?: (progress: number) => void
) => {
    try {
        console.log('file', file)

        const formData = new FormData()
        formData.append('avatar', file)
        const response = await httpService.put<FileUploadResponse>(
            queryConstants.avatarUpload,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    if (onProgress && progressEvent?.total) {
                        onProgress(
                            Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            )
                        )
                    }
                },
            }
        )
        console.log('avatarUpload', response)

        if (response.status === 200) {
            return response.data
        }
        throw new Error(response.data?.message ?? 'Failed to upload file')
    } catch (error: any) {
        throw new Error(error?.message ?? 'Failed to upload file')
    }
}
