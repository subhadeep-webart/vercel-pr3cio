import { HttpStatusCode } from 'axios'

import queryConstants from '@/constants/query-constants'

import httpService from '../http-service'

export const getUserPackages = async () => {
    try {
        const response = await httpService.get(queryConstants.getPackages)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}
export const addSubscriptionPackage = async (packageId) => {
    try {
        const response = await httpService.post(
            queryConstants.addSubscription,
            {
                packageId: packageId, // ← This is the request body
            }
        )

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const purchaseSong = async (songId) => {
    try {
        const response = await httpService.post(queryConstants.purchaseSong, {
            songId: songId,
        })

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const getPaymentStatus = async (sessionId) => {
    try {
        const response = await httpService.post(queryConstants.paymentStatus, {
            sessionId: sessionId, // ← This is the request body
        })
        if (response.status === HttpStatusCode.Ok) {
            return response
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const cancelUserPackages = async () => {
    try {
        const response = await httpService.get(queryConstants.cancelSubscription)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}
export const getPlanHistory = async () => {
    try {
        const response = await httpService.get(queryConstants.paymentHistory)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}
export const updateUserSubscription = async (id) => {
    try {
        const response = await httpService.post(queryConstants.updatePackage, {
            packageId: id,
        })

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}

export const cancelSubscription = async (id) => {
    try {
        const response = await httpService.get(queryConstants.cancelSubscription)

        if (response.status === HttpStatusCode.Ok) {
            return response.data
        }
        throw new Error(response.data.message)
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err)
        throw new Error(errorMessage)
    }
}