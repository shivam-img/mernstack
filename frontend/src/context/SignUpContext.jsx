import React, { useState } from 'react';

export const SignUpModalContext = React.createContext(null)

const SignUpModalContextProvider = ({ children }) => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false)

    return <SignUpModalContext.Provider value={{ isSignUpOpen, setIsSignUpOpen }}>
        {children}
    </SignUpModalContext.Provider>;
};

export default SignUpModalContextProvider;

