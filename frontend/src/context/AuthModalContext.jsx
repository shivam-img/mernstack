import React, { useState } from "react";
import { AUTH_MODAL_TABS } from "../constant";
export const AuthModalContext = React.createContext(null);

const AuthModalContextProvider = ({ children }) => {

    const [authModalObject, setAuthModalObject] = useState({
        isAuthOpen: false,
        selectedTab: AUTH_MODAL_TABS.LOG_IN
    });

    return <AuthModalContext.Provider value={{ authModalObject, setAuthModalObject }}>
        {children}
    </AuthModalContext.Provider>;
};

export default AuthModalContextProvider;
