import {
    logout as logoutAction,
    saveSession as saveSessionAction,
    verifySession as verifySessionAction,
} from '@/redux/slices/auth-slice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setArtist } from '@/redux/slices/app-slice'
import { useRouter } from 'next/navigation'

const useAuth = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const auth = useAppSelector((state) => state.auth)

    const saveSession = (user) => {
        dispatch(saveSessionAction(user))
        dispatch(setArtist(user?.is_artist ?? false))
    }

    const logout = () => {
        dispatch(logoutAction())
        dispatch(setArtist(false));
        router.push("/");
    }

    const verifySession = () => {
        dispatch(verifySessionAction())
    }

    return {
        ...auth,
        saveSession,
        logout,
        verifySession,
        isLoggedIn: !!auth.user,
    }
}

export default useAuth
