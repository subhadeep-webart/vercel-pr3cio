import { FileUploadResponse } from '@/models/responses/file-upload-data'
import queryConstants from '@/constants/query-constants'

import httpService from '../http-service'

export const fileUpload = async (
    file: File,
    onProgress?: (progress: number) => void
) => {
    try {
        const formData = new FormData()
        formData.append('file', file)
        const response = await httpService.put<FileUploadResponse>(
            queryConstants.fileUpload,
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

        if (response.status === 200) {
            return response.data
        }
        throw new Error(response.data?.message ?? 'Failed to upload file')
    } catch (error: any) {
        throw new Error(error?.message ?? 'Failed to upload file')
    }
}
