import NavBar from "./NavBar";
import Button from "./Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();

    function scrollToTop(){
        window.scroll({top: 0, behavior:"smooth"})
    }

    return(
        <header 
        className="fixed top-0 z-50 bg-[rgba(10,15,26,0.4)] backdrop-blur-md shadow-sm w-full">
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
                <div>
                    <Link
                        to='/'
                        onClick={() => location.pathname === "/" && scrollToTop()}
                        className="text-2xl font-bold text-gray-200 tracking-tight"
                    >
                        Roberth Vieira
                    </Link>
                </div>
                <div className="flex-grow flex justify-center mr-6">
                    <NavBar/>
                </div>
                <div className="flex space-x-4 mr-6">
                    <a 
                        href="https://www.linkedin.com/in/roberth-vieira-501490211/" 
                        target="_blank"
                        className="transition-transform transform hover:scale-110"
                    >
                        <Button icon={<FaLinkedin className="h-6 w-6"/>}/>
                    </a>
                    <a 
                        href="https://github.com/RoberthVieira" 
                        target="_blank"
                        className="transition-transform transform hover:scale-110"
                    >
                        <Button icon={<FaGithub className="h-6 w-6"/>}/>
                    </a>
                </div>
            </div>
        </header>
    )
}