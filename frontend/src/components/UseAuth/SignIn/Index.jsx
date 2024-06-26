import React, { useState, useEffect } from 'react'
import { useAuthModal } from '../../../hooks/UseAuthModal';
import { AUTH_MODAL_TABS } from '../../../constant';
import RegisterAccount from './RegisterAccount';

function SignUpTab({ track }) {
    const { authModalObject } = useAuthModal()
    const [logon, setLogOn] = useState(true);
    useEffect(() => {
        if (authModalObject.selectedTab === AUTH_MODAL_TABS.SIGN_UP) {
            setLogOn(true)
        }
    }, [track]);
    return (

        <div
            className=" fade show active"
        >
            {
                logon ? (

                    <RegisterAccount
                        logon={logon}
                    />

                ) : <></>
            }

        </div>
    )
}

export default SignUpTab