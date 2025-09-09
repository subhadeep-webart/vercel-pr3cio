import { useCallback } from 'react'
import {
    setModal as setModalAction,
    setSidebar as setSidebarAction,
    toggleSidebar as toggleSidebarAction,
} from '@/redux/slices/app-slice'
import { useAppDispatch, useAppSelector } from '@/redux/store'

import { ModalType } from '@/models/modal'

const useApp = () => {
    const { modal, isSidebarOpen } = useAppSelector((state) => state.app)
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

    return {
        modal,
        isSidebarOpen,
        toggleSidebar,
        setModal,
        setSidebar,
        closeAllModals,
    }
}

export default useApp
