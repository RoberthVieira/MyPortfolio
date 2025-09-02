import type { ProjectPropType } from "../types";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({id, title, description, github, demo, img}: ProjectPropType){
    return(
        <div key={id} className="flex gap-6 items-center max-w-7xl mx-auto p-6 h-96">
            <div className="w-1/3 h-full flex justify-start items-center">
                <figure className="flex justify-center items-center bg-stone-200 rounded-2xl shadow-lg p-6 w-full h-full">
                    <img 
                        src={img} 
                        alt={title} 
                        className="w-4/4 rounded-2xl object-contain"    
                    />
                </figure>
            </div>
            <div className="w-1/2 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-200">
                    {title}
                </h3>
                <p className="text-gray-600 mt-4 mb-4 text-justify h-36 flex items-center">
                    {description}
                </p>
                <div className="flex border-t py-2 gap-4">
                    <a href={github}
                        target="_blank"
                        className="flex bg-gray-800 rounded-full px-6 py-2 hover:bg-gray-700 items-center gap-3 text-white"
                    >
                        Ver Projeto <FaGithub/>
                    </a>
                    <a href={demo}
                        target="_blank"
                        className="bg-gray-800 rounded-full px-6 py-2 hover:bg-gray-700 text-white"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}