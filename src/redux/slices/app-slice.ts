import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ModalType } from '@/models/modal'

interface AppState {
    isSidebarOpen: boolean
    modal: ModalType
    isArtist: boolean
    isCreateSongAISidebarOpen: boolean
    songAIContext: {
        "prompt": string,
        "style": string,
        "title": string,
        "customMode": boolean,
        "instrumental": boolean,
        "model": string,
        "vocalGender": "f" | "m",
        "styleWeight": number,
        "weirdnessConstraint": number,
        "audioWeight": number,
    },
    aiGeneratedLyrics: any[],
    aiGeneratedSongs: any[],
    songGeneratedStatus: string,
    songGenerated: boolean
}

const initialState: AppState = {
    isSidebarOpen: false,
    modal: 'none',
    isArtist: false,
    isCreateSongAISidebarOpen: false,
    songAIContext: {
        "prompt": "",
        "style": "",
        "title": "",
        "customMode": true,
        "instrumental": false,
        "model": "V4",
        "vocalGender": "f",
        "styleWeight": 0.65,
        "weirdnessConstraint": 0.65,
        "audioWeight": 0.65,
    },
    aiGeneratedLyrics: [],
    aiGeneratedSongs: [],
    songGeneratedStatus: "",
    songGenerated: false
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
        },
        toggleIsCreateSongAISidebarOpen: (state) => {
            state.isCreateSongAISidebarOpen = !state.isCreateSongAISidebarOpen
        },
        setIsCreateSongAISidebarOpen: (state, action) => {
            state.isCreateSongAISidebarOpen = action.payload;
        },
        setSongAIContext: (state, action) => {
            console.log("Song AI Context Payload======>", action.payload);
            const { type, typeState } = action.payload;
            state.songAIContext = { ...state.songAIContext, [type]: typeState }
        },
        setAiGeneratedLyrics: (state, action) => {
            state.aiGeneratedLyrics = action.payload;
        },
        clearAiGeneratedLyrics: (state) => {
            state.aiGeneratedLyrics = [];
        },
        setAiGeneratedSongs: (state, action) => {
            state.aiGeneratedSongs = action.payload;
        },
        clearAiGeneratedSongs: (state) => {
            state.aiGeneratedSongs = [];
        },
        setSongGeneratedStatus: (state, action) => {
            state.songGeneratedStatus = action.payload
        },
        setSongGenerated: (state, action) => {
            console.log("song generated call", action.payload);
            state.songGenerated = action.payload
        }
    },
})

export const { toggleSidebar, setModal, setSidebar, setArtist, toggleIsCreateSongAISidebarOpen, setSongAIContext, setAiGeneratedLyrics, clearAiGeneratedLyrics, setAiGeneratedSongs, clearAiGeneratedSongs, setIsCreateSongAISidebarOpen, setSongGeneratedStatus, setSongGenerated } = appSlice.actions

export default appSlice.reducer
