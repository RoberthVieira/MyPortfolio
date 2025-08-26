import NavBar from "./NavBar";
import Button from "./Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header(){
    return(
        <header 
        className="fixed top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm w-full">
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                        Roberth Vieira
                    </h1>
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