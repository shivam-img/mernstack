import React, { useEffect, useState } from 'react';
import { TOKEN_NAME } from '../constant';

export const AuthContext = React.createContext(null)

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        const storeToken = localStorage.getItem(TOKEN_NAME);
        return storeToken
    });

    useEffect(() => {

        if (token) {
            localStorage.setItem(TOKEN_NAME, token)
        }

    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
