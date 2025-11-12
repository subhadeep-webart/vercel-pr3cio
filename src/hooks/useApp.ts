import { useCallback } from 'react'
import {
    setModal as setModalAction,
    setSidebar as setSidebarAction,
    toggleSidebar as toggleSidebarAction,
    toggleIsCreateSongAISidebarOpen as toggleIsCreateSongAISidebarOpenAction,
    setSongAIContext as setSongAIContextAction,
    setAiGeneratedLyrics as setAiGeneratedLyricsAction,
    clearAiGeneratedLyrics as clearAiGeneratedLyricsAction,
    setAiGeneratedSongs as setAiGeneratedSongsAction,
    clearAiGeneratedSongs as clearAiGeneratedSongsAction,
    setIsCreateSongAISidebarOpen as setIsCreateSongAISidebarOpenAction,
    setSongGeneratedStatus as setSongGeneratedStatusAction,
    setSongGenerated as setSongGeneratedAction
} from '@/redux/slices/app-slice'
import { useAppDispatch, useAppSelector } from '@/redux/store'

import { ModalType } from '@/models/modal'

const useApp = () => {
    const { modal, isSidebarOpen, isCreateSongAISidebarOpen, songAIContext, aiGeneratedLyrics, aiGeneratedSongs, songGeneratedStatus, songGenerated } = useAppSelector((state) => state.app)
    const dispatch = useAppDispatch()

    const setModal = useCallback(
        (value: ModalType) => dispatch(setModalAction(value)),
        [dispatch]
    )
    const toggleSidebar = useCallback(
        () => dispatch(toggleSidebarAction()),
        [dispatch]
    )

    const setSidebar = useCallback(
        (value: boolean) => dispatch(setSidebarAction(value)),
        [dispatch]
    )

    const closeAllModals = useCallback(() => {
        dispatch(setModalAction('none'))
    }, [dispatch])

    const toggleIsCreateSongAISidebarOpen = useCallback(
        () => dispatch(toggleIsCreateSongAISidebarOpenAction()),
        [dispatch]
    )

    const setIsCreateSongAISidebarOpen = useCallback(
        (value: any) => dispatch(setIsCreateSongAISidebarOpenAction(value)),
        [dispatch]
    )


    const setSongAIContext = useCallback(
        (value: any) => dispatch(setSongAIContextAction(value)),
        [dispatch]
    )

    const setAiGeneratedLyrics = useCallback(
        (value: any) => dispatch(setAiGeneratedLyricsAction(value)),
        [dispatch]
    )

    const clearAiGeneratedLyrics = useCallback(
        () => dispatch(clearAiGeneratedLyricsAction()),
        [dispatch]
    )

    const setAiGeneratedSongs = useCallback(
        (value: any) => dispatch(setAiGeneratedSongsAction(value)),
        [dispatch]
    )

    const clearAiGeneratedSongs = useCallback(
        () => dispatch(clearAiGeneratedSongsAction()),
        [dispatch]
    )

    const setSongGeneratedStatus = useCallback((value: string) => dispatch(setSongGeneratedStatusAction(value)), [dispatch])

    const setSongGenerated = useCallback((value: boolean) => dispatch(setSongGeneratedAction(value)), [dispatch])


    return {
        modal,
        isSidebarOpen,
        toggleSidebar,
        songAIContext,
        aiGeneratedLyrics,
        aiGeneratedSongs,
        setModal,
        setSidebar,
        closeAllModals,
        toggleIsCreateSongAISidebarOpen,
        setIsCreateSongAISidebarOpen,
        isCreateSongAISidebarOpen,
        setSongAIContext,
        setAiGeneratedLyrics,
        clearAiGeneratedLyrics,
        setAiGeneratedSongs,
        clearAiGeneratedSongs,
        songGeneratedStatus,
        setSongGeneratedStatus,
        songGenerated,
        setSongGenerated
    }
}

export default useApp
