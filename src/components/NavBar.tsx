import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="flex gap-6 text-gray-600">
            <Link to='/' className="relative group">
                <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10 text-gray-600 hover:text-gray-800 transition duration-300">
                    Home
                </span>
            </Link>
            <Link to='/about' className="relative group">
                <span className="relative z-10 text-gray-600 hover:text-gray-800 transition duration-300">
                    About
                </span>
                <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
                href="#contact"
                className="relative group text-gray-600 hover:text-gray-800 transition duration-300">
                <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">Contact</span>
            </a>
        </nav>
    )
}