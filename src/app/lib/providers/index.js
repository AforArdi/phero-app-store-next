'use client'
import AppInstallProvider from "@/context/AppInstallContext";

const Providers = ({children}) => {
    return <AppInstallProvider>
        {children}
    </AppInstallProvider>
}
 
export default Providers;