import { createContext } from "react";

const authContext = createContext()

const authProvider = ({ children }) => {
    return (
        <authContext.Provider value={{}}>
            {children}
        </authContext.Provider>
    )
}