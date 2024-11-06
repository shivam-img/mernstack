import React from 'react'
import { MainProvider } from '../context/Main.Context'
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import SignInModalContextProvider from '../context/SgnInContext';
import SignUpModalContextProvider from '../context/SgnInContext';
import AuthContextProvider from '../context/AuthContext';
import AuthModalContextProvider from '../context/AuthModalContext';


function Providers({ children }) {
    return (
        <>
            <BrowserRouter>
                <AuthContextProvider>
                    <AuthModalContextProvider>
                        <SignInModalContextProvider>
                            <SignUpModalContextProvider>
                                <MainProvider>
                                    {children}
                                </MainProvider>
                            </SignUpModalContextProvider>
                        </SignInModalContextProvider>
                        <ToastContainer />
                    </AuthModalContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
        </>
    )
}

export default Providers