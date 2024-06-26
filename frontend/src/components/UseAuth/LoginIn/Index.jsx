import React, { useState, useEffect } from 'react'
import { useAuthModal } from '../../../hooks/UseAuthModal';
import { AUTH_MODAL_TABS } from '../../../constant';
import LoginEmail from './LoginEmail';

function LoginTab({ track }) {
    const { authModalObject } = useAuthModal()
    const [logon, setLogOn] = useState(true);
    useEffect(() => {
        if (authModalObject.selectedTab === AUTH_MODAL_TABS.LOG_IN) {
            setLogOn(true)
        }
    }, [track]);
    return (

        <div
            className=" fade show active"
        >
            {
                logon ? (

                    <LoginEmail
                        setLogOn={setLogOn}
                        logon={logon}

                    />

                ) : <></>
            }

        </div>
    )
}

export default LoginTab