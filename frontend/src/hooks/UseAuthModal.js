import { useContext } from "react"
import { AuthModalContext } from "../context/AuthModalContext"


export const useAuthModal = () => {
    const { authModalObject, setAuthModalObject } = useContext(AuthModalContext)
    return {
        authModalObject,
        setAuthModalObject
    }
}