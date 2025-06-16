import { createContext, useState } from "react"

export const GlobalContext = createContext();

const GlobalProvider =({children})=>{

    const [theme,setTheme] = useState("light");
    const [loading, setLoading] = useState(false);
    const [interest,setInterest] = useState() 

    const [searchTerm, setSearchTerm] = useState("");

    const toggleTheme = () => {
        setTheme((prev)=> prev === "light"?"dark":"light")
    }

    const reqValues = {theme,toggleTheme,loading,setLoading,interest,setInterest,searchTerm, setSearchTerm}

    return(
        <GlobalContext.Provider value={reqValues}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;