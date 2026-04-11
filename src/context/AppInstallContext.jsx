"use client";
import { createContext, useState } from "react";

export const AppInstallContext = createContext();

const AppInstallProvider = ({children}) => {
    const [installed, setInstalled] = useState([]);

    const data = {
        installed,
        setInstalled
    }

    return <AppInstallContext.Provider value={data}>
        {children}
    </AppInstallContext.Provider>
}
 
export default AppInstallProvider;