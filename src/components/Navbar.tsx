import {Link, NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <header className="bg-blue-300 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className='space-x-6 text-black cursor-pointer justify-between items-center'>
                    UniClubs
                </Link>

                <nav className='space-x-6 text-black'>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600')}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600')}>
                        About
                    </NavLink>
                    <NavLink to="/clubs" className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600')}>
                        Clubs
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;