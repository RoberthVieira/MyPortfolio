import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <Link to='/' className="hover:underline">Home</Link>
            <Link to='/about' className="hover:underline">About</Link>
            <Link to='/contact' className="hover:underline">Contact</Link>
        </nav>
    )
}