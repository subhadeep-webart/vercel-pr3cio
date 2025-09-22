import { HttpStatusCode } from 'axios'
import toast from 'react-hot-toast'
import queryConstants from '@/constants/query-constants'
import { buildURL } from '@/utils/func-utils'
import httpService from '../http-service'

export const postProductsDetails = async (productDetail) => {
    try {
        const response = await httpService.post(queryConstants.productsCreate, productDetail)

        if (response.status === HttpStatusCode.Created) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getProductsDetails = async (productId) => {
    try {
        const response = await httpService.get(queryConstants.getProductUpload + "/" + productId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const updateProductsDetails = async (productId, productDetail) => {
    try {
        const endpoint = `${queryConstants.allProduct}/${productId}`
        console.log("Update Endpoint:", endpoint)

        const response = await httpService.patch(endpoint, productDetail)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }

        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const deleteProduct = async (productId) => {
    try {
        const response = await httpService.delete(queryConstants.deleteUploadedProduct + "/" + productId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}

export const deleteProductVarient = async (productId) => {
    try {
          const response = await httpService.delete(
            `${queryConstants.deleteProductVariant}?id=${variantId}`
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}


export const getAllProduct = async () => {
    try {
        const response = await httpService.get(queryConstants.allProduct)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}


export const deleteProductById = async (productId) => {
    try {
        const response = await httpService.delete(queryConstants.allProduct + "/" + productId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (error) {
        const errorMessage = httpService.getErrorMessage(error)
        throw new Error(errorMessage)
    }
}

export const getProductDetailByID = async (productId) => {
    try {
        const response = await httpService.get(queryConstants.allProduct + "/" + productId)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const updateProductDetailByID = async (productId, productDetail) => {
    try {
        const response = await httpService.patch(queryConstants.allProduct + "/" + productId, productDetail)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getAllOwnProduct = async ({ page = 1, limit = 3 } = {}) => {
    try {
        const response = await httpService.get(queryConstants.ownProduct, {
            params: {
                page,
                limit,
            },
        });

        if (response.status === HttpStatusCode.Ok) {
            return {
                products: response.data || [],
                total: response.data.total || 0,
            };
        }

        throw new Error(response?.statusText || 'Failed to fetch products');
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err);
        throw new Error(errorMessage);
    }
};