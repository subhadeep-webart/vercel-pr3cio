import queryConstants from "@/constants/query-constants";
import httpService from "../http-service";
import { HttpStatusCode } from "axios";

export const addPlaylist = async (payload) => {
    try {
        const response = await httpService.post(`${queryConstants.addPlaylist}`, payload);
        console.log("Response Object=====>", response?.data);

        if (
            response.status === HttpStatusCode.Ok ||
            response.status === HttpStatusCode.Created
        ) {
            return response.data; // ✅ return, not throw
        }

        // Only throw if it's actually an error status
        throw new Error(response.data?.message || 'Something went wrong');
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err);
        throw new Error(errorMessage);
    }
};


export const getAllPlayLists = async () => {
    try {
        const response = await httpService.get(`${queryConstants.getAllPlayListsByUser}`)
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

export const getPlaylistDetailsById = async (id) => {
    try {
        const response = await httpService.get(`/play-list/${id}`);
        console.log("Playlist Details Response ====>", response?.data);

        if (response.status === HttpStatusCode.Ok) {
            return response.data;
        }

        throw new Error(response.data.message);
    } catch (err) {
        const errorMessage = httpService.getErrorMessage(err);
        throw new Error(errorMessage);
    }
};


