import { Link } from "react-router-dom";

function HomePage(){
    const homePageImageUrl = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop';

    return (
        <div className="container mx-auto px-6 py-10 text-center gap-10 flex flex-col ">
            <h1 className="text-4xl font-extrabold">
                Discover Your Clubs!!
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
                Welcome to Campus Club Finder, you can find all of the university clubs in here
            </p>

            <img 
                src={homePageImageUrl} 
                alt="Student Collaboration"
                className="rounded-xl shadow-2xl mx-auto max-h-96 object-cover"
            />

            <Link to='/clubs'>
                <button className="text-lg font-medium bg-blue-300 p-3 rounded-full shadow-lg max-w-100 mx-auto hover:bg-blue-400 transition-transform hover:scale-105 duration-300 ease-in-out">
                    Explore All Clubs
                </button>
            </Link>
        </div>
    );
}

export default HomePage;