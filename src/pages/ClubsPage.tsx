import { useMemo, useState } from "react";
import ClubCard from "../components/Clubcard";
import { clubsData } from "../Datasource/ClubsData";
import { FaBars, FaThLarge } from "react-icons/fa";

function ClubsPage(){
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');

    const sortedClubs = useMemo(() => {
    return [...clubsData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [sortOrder]);
    
    const layoutClasses = layout === 'grid'
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
    : 'flex flex-col space-y-6'; 

    return (
        <div className="container px-3 py-5 space-y-5">
            <h1 className="text-4xl font-extrabold">Club List</h1>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white p-1 rounded-lg shadow-sm">
                    <button
                        onClick={() => setSortOrder('asc')}
                        className={`transition-all px-3 py-1 text-sm font-semibold rounded ${sortOrder === 'asc' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                    >
                        A-Z
                    </button>
                    <button
                        onClick={() => setSortOrder('desc')}
                        className={`transition-all px-3 py-1 text-sm font-semibold rounded ${sortOrder === 'desc' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                    >
                        Z-A
                    </button>
                </div>
                
                <div className="flex items-center space-x-2 bg-white p-1 rounded-lg shadow-sm">
                    <button onClick={() => setLayout('grid')} className={`transition-all p-2 rounded ${layout === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>
                        <FaThLarge />
                    </button>
                    <button onClick={() => setLayout('list')} className={`transition-all p-2 rounded ${layout === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>
                        <FaBars />
                    </button>
                </div>
            </div>

            <div className={layoutClasses}>
                {sortedClubs.map((club) => (
                    <ClubCard key={club.id} club={club}/>
                ))}
            </div>

        </div>
    );
}

export default ClubsPage;