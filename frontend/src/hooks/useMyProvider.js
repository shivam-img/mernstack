import { useContext } from 'react';
import { MyContext } from '../context/Main.Context';

const useMyProvider = () => {
    const { usercredentials, setUserCredentials } = useContext(MyContext);

    return {
        usercredentials,
        setUserCredentials
    };
};

export default useMyProvider;
