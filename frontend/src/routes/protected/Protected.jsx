import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { useAuthModal } from '../../hooks/UseAuthModal';
import { AUTH_MODAL_TABS } from '../../constant';

function Protected({ Component }) {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const { token } = useAuth();
    const { setAuthModalObject } = useAuthModal();
    useEffect(() => {

        if (!token) {

            setAuthModalObject({
                selectedTab: AUTH_MODAL_TABS.LOG_IN,
                isAuthOpen: true,
            })

        }
        else {
            setAuthModalObject({
                isAuthOpen: false,
            })
            setLoggedIn(true)
        }

    }, [token, setAuthModalObject]);
    return (
        isLoggedIn ? <Component /> : null
    )
    // return <div>Helllo</div>
}

export default Protected