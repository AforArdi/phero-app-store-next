import AppCard from "@/components/ui/AppCard";
import { PropagateLoader } from "react-spinners";
import useAppsData from "@/app/hooks/useAppsData";
import Link from "next/link";

const appsParams = async ()=>{
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

const TrendingApps = async ({from}) => {
    // const {apps, loading} = useAppsData();
    const apps = await appsParams();
    return ( 
        <div className="container mx-auto mt-10 space-y-8">
            <div className="text-center space-y-2">
                <h2 className="font-bold text-5xl">
                    {from === 'apps' ? 'All Apps' : 'Trending Apps'}
                </h2>
                <p className="text-[16px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    apps.slice(0, from === 'apps' ? apps.length - 1 : 9).map(app=>{
                        return (
                            <AppCard key={app.id} app={app}></AppCard>
                        )
                    })
                }
            </div>

            <div className="flex justify-center">
                <Link href={'/apps'} className="btn bg-purple-500 text-white mb-10">View All</Link>
            </div>
        </div>
     );
}
 
export default TrendingApps;