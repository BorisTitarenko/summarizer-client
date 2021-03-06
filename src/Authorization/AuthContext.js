import React, { createContext, useState, useContext } from 'react';


const authContext = createContext();


function useAuth() {
    return useContext(authContext);
}


function ProvideAuth({children}) {
    
    const [user, setUser] = useState(null);

    const login = (authUser) => setUser(authUser);
    const logout = () => setUser(null);

    return (
    <authContext.Provider value={{user, login, logout}}>
        {children}
    </authContext.Provider>)
}

export default ProvideAuth;

export {useAuth};