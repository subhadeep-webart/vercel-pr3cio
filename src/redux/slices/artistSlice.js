import { createSlice } from '@reduxjs/toolkit'

const artistSlice = createSlice({
    name: 'artist',
    initialState: {
        data: null,
        status: 'pending',
    },
    reducers: {
        setArtistData: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            console.log('action', action)
            state.status = action.payload
        },
    },
})

export const { setArtistData, setStatus } = artistSlice.actions
export default artistSlice.reducer
