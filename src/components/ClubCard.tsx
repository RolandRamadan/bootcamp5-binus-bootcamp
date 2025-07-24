import { Link } from "react-router-dom";
import type { Club } from "../Datasource/ClubsData";

interface ClubCardProps{
    club: Club;
}

function ClubCard({club}: ClubCardProps){
    return(
        <div className="container bg-white rounded-2xl p-3 space-y-3 hover:shadow-xl transition-shadow duration-300 ">
            <h2 className="text-center font-bold text-xl">{club.name}</h2>
            <img 
                className="w-full h-48 object-cover rounded-xl"
                src={club.imageUrl} 
                alt="club image" />
            <p>{club.description}</p>
            <div className="mt-4">
                <Link
                    to={`/clubs/${club.id}`}
                    className="text-center block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                    View Details
                </Link>
        </div>
        </div>
    );
};

export default ClubCard;