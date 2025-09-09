import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ModalType } from '@/models/modal'

interface AppState {
    isSidebarOpen: boolean
    modal: ModalType
    isArtist: boolean
}

const initialState: AppState = {
    isSidebarOpen: false,
    modal: 'none',
    isArtist: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        setSidebar: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload
        },
        setModal: (state, action: PayloadAction<ModalType>) => {
            state.modal = action.payload
        },
        setArtist: (state, action: PayloadAction<boolean>) => {
            state.isArtist = action.payload
        }
    },
})

export const { toggleSidebar, setModal, setSidebar, setArtist } = appSlice.actions

export default appSlice.reducer
