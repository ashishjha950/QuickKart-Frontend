import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false);
        }
    },[])

    const reqValues = {
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={reqValues}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;