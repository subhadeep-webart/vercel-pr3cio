import httpService from '../http-service'
import queryConstants from '@/constants/query-constants'
import { HttpStatusCode } from 'axios'

export const updateUserProfile = async (payload) => {
    try {
        const response = await httpService.patch(queryConstants.updateUser, payload)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getPrivateSongList = async ({ page = 1, limit = 10, isPublic } = {}) => {
    try {
        const response = await httpService.get(queryConstants.privateSongList, {
            params: {
                is_public: isPublic,
                page,
                limit,
            },
        });

        if (response.status === HttpStatusCode.Ok) {
            return response.data;

        }

        throw new Error(response?.statusText || 'Failed to fetch songs');
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err);
        throw new Error(errorMessage);
    }
};

export const postToAddSongToPublish = async (id) => {
    try {
        const response = await httpService.post(`${queryConstants.addSongToPublish}/${id}`)
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const createStripeAccount = async () => {
    try {
        const response = await httpService.post(`${queryConstants.addToStripeAccount}`)
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}


export const getAllGenreCategory = async () => {
    try {
        const response = await httpService.get(queryConstants.getAllGenres);

        if (response.status === HttpStatusCode.Ok) {
            return response.data;

        }

        throw new Error(response?.statusText || 'Failed to fetch genres');
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err);
        throw new Error(errorMessage);
    }
};

export const postCategory = async (payload) => {
    try {
        const response = await httpService.post(`${queryConstants.postCategory}`, payload)
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const uploadGallery = async (formData) => {
    try {
        const response = await httpService.post(`${queryConstants.uploadGallery}`, formData)
        console.log("Response Object=====>", response?.data);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const uploadProductImages = async (formData) => {
    try {
        const response = await httpService.put(`${queryConstants.uploadProductImage}`, formData)
        console.log("Response Object=====>", response?.data);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const addProuct = async (productPayload) => {
    try {
        const response = await httpService.post(`${queryConstants.productUpload}`, formData)
        console.log("Response Object=====>", response?.data);
        if (response.status === HttpStatusCode.Ok) {

            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const deleteGallery = async (payload) => {
    try {
        const response = await httpService.delete(`${queryConstants.deleteGallery}`, { data: payload })
        console.log("Response Object=====>", response?.data);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>", err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getDownloadedProduct = async (type) => {
    try {
        const response = await httpService.get(queryConstants.dow + "/" + productId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const commonImgDelete = async (payload) => {
    try {
        const response = await httpService.delete(`${queryConstants.commonImgDelete}`, { data: payload })
        console.log("Response Object=====>",response?.data);
        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        console.log("Error=====>",err);
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}