import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

const AppCard = ({app}) => {
    return ( 
        <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
            <figure>
                <img
                src={app.image}
                alt={app.title} className="h-50 w-auto" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {app.title}
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-soft badge-warning">
                        <IoMdDownload></IoMdDownload> {app.downloads}
                    </div>
                    <div className="badge badge-soft badge-warning">
                        <FaStar></FaStar> {app.ratingAvg}
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default AppCard;