import React, { useState } from 'react';
import { useContext } from "react";

const MyContext = React.createContext(null);


const MainProvider = ({ children }) => {
    const [usercredentials, setUserCredentials] = useState({});

    return (
        <MyContext.Provider value={{ usercredentials, setUserCredentials }}>
            {children}
        </MyContext.Provider>
    );
};

export { MainProvider, MyContext };