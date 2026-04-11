'use client'

import { useContext } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { AppInstallContext } from "@/context/AppInstallContext";

const Installation = () => {
    const {installed, setInstalled} = useContext(AppInstallContext);
    

    const handleUninstall=(app)=>{
        const filteredApps = installed.filter(item=> item.id != app.id);
        setInstalled(filteredApps);
        toast.warning(`Uninstalled ${app.title}!`);
    }

    return ( 
        <div className="container mx-auto mt-5 space-y-5">
            { installed.length === 0 ?
            <h2 className="font-bold text-4xl text-center my-5">
                No installed apps found!
            </h2>
            : 
            installed.map(item=>{
                return (
                    <div key={item.id} className="card card-side bg-base-100 shadow-sm p-3">
                        <figure>
                            <Image
                            src={item.image}
                            alt={item.title}
                            height={200}
                            width={250}
                            className="h-20 w-auto"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                        </div>
                        <div className="flex items-center">
                            <button onClick={()=>handleUninstall(item)} className="btn bg-purple-500 text-white">Uninstall</button>
                        </div>
                    </div>
                )
            })
            }
        </div>
     );
}
 
export default Installation;