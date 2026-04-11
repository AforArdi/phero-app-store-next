'use client'
import { AppInstallContext } from "@/context/AppInstallContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleBtn = ({expectedApp}) => {
    const {installed, setInstalled} = useContext(AppInstallContext);

    const handleInstalled=()=>{
        const appExist = installed.find(app=> app.id == expectedApp.id);
        if(!appExist){
            setInstalled(prev=>([
                ...prev,
                expectedApp
            ]));
            toast.success(`Installed ${expectedApp.title}!`);
        } else{
            toast.error(`${expectedApp.title} Already installed`);
        }
    }

    return ( 
        <button onClick={handleInstalled} className="btn bg-purple-500">Install Now {expectedApp.size} MB</button>
     );
}
 
export default InstallToggleBtn;