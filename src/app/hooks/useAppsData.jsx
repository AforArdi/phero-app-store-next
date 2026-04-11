'use client'

import { useEffect, useState } from "react";

const useAppsData = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const dataFetch = async ()=>{
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            setTimeout(()=>{
                setApps(data);
                setLoading(false)
            }, 1000);
        }
        dataFetch();
    }, []);
    
    return {apps, loading};
}
 
export default useAppsData;