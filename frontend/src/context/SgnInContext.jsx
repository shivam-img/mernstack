import React, { useState } from "react";
export const SignInModalContext = React.createContext(null);

const SignInModalContextProvider = ({ children }) => {

    const [isSignInOpen, setIsSignInOpen] = useState(false);

    return <SignInModalContext.Provider value={{ isSignInOpen, setIsSignInOpen }}>
        {children}
    </SignInModalContext.Provider>;
};

export default SignInModalContextProvider;
