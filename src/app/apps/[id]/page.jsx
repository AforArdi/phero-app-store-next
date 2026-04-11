import useAppsData from "../../hooks/useAppsData";
import { PropagateLoader } from "react-spinners";
import { useContext } from "react";
import { AppInstallContext } from "@/context/AppInstallContext";
import { toast } from "react-toastify";
import downloadIcon from '@/assets/images/icon-downloads.png'
import ratingIcon from '@/assets/images/icon-ratings.png'
import reviewIcon from '@/assets/images/icon-review.png'
import ChartRating from "@/components/ui/ChartRating";

const appsPromise = async ()=>{
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

const AppsDetailPage = async ({params}) => {
    // const {apps, loading} = useAppsData();
    const {id} = await params;
    const apps = await appsPromise();
    // console.log(apps);
    const expectedApp = apps.find(app=> app.id == id);

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
        <div className="bg-base-100">
            {loading ? 
            <div className="flex justify-center">
                <PropagateLoader color="#AD46FF"></PropagateLoader>
            </div>
            :
            <div className="container mx-auto my-10">
                {/* top div */}
                <div className="flex items-center gap-10">
                    <div className="border ">
                        <img src={expectedApp.image} alt={expectedApp.title}
                        className="h-60 w-60"
                        />
                    </div>

                    <div className="space-y-3 w-full">
                        <h2 className="font-bold text-3xl">{expectedApp.title}</h2>
                        <p className="text-[20px] text-gray-400">Developed By: <span className="text-purple-500">{expectedApp.companyName}</span></p>

                        <div className="divider"></div>

                        <div className="flex items-center gap-5">
                            <div className="flex flex-col">
                                <div>
                                    <img src={downloadIcon} alt="downloads icon" className="h-6" />
                                </div>
                                <p className="text-gray-400">Downloads</p>
                                <p className="text-3xl font-extrabold">{expectedApp.downloads}</p>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <img src={ratingIcon} alt="downloads icon" className="h-6" />
                                </div>
                                <p className="text-gray-400">Downloads</p>
                                <p className="text-3xl font-extrabold">{expectedApp.ratingAvg}</p>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <img src={reviewIcon} alt="downloads icon" className="h-6" />
                                </div>
                                <p className="text-gray-400">Downloads</p>
                                <p className="text-3xl font-extrabold">{expectedApp.reviews}</p>
                            </div>
                        </div>
                        <button onClick={handleInstalled} className="btn bg-purple-500">Install Now {expectedApp.size} MB</button>
                    </div>
                </div>

                <div className="divider"></div>

                {/* middle ratign div */}
                <ChartRating expectedApp={expectedApp}></ChartRating>

                <div className="divider"></div>

                {/* bottom description div */}

                <div className="space-y-2">
                    <h2 className="font-semibold text-2xl">Description</h2>
                    <p className="text-[20px] text-gray-500">{expectedApp.description}</p>
                </div>
            </div>
            }
        </div>
     );
}
 
export default AppsDetailPage;