import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import appReducer from './slices/app-slice'
import artistReducer from './slices/artistSlice'
import authReducer from './slices/auth-slice'
import playerReducer from './slices/player-slice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        player: playerReducer,
        artist: artistReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
