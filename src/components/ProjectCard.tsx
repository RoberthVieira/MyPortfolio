import type { ProjectPropType } from "../types";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ProjectCard({ id, title, description, github, demo, img }: ProjectPropType) {

    const cardRef = useRef<HTMLDivElement | null>(null);
    const cardVisivel = useScrollAnimation(cardRef);

    return (
        <div 
            key={id}
            ref={cardRef} 
            className={`flex flex-col md:flex-row gap-6 items-center max-w-7xl mx-auto p-6 md:h-96
                transition-all duration-700 ease-out
                ${cardVisivel ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
            <div className="w-full md:w-1/3 h-auto md:h-full flex justify-center items-center">
                <figure className="flex justify-center items-center bg-stone-200 rounded-2xl shadow-lg p-6 w-full h-full">
                    <img
                        src={img}
                        alt={title}
                        className="w-4/4 rounded-2xl object-contain"
                    />
                </figure>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start text-center md:items-start md:text-left">
                <h3 className="text-2xl font-bold text-white border-b border-gray-600 py-4">
                    {title}
                </h3>
                <p className="text-gray-400 mt-4 mb-4 text-justify md:text-justify h-auto md:auto">
                    {description}
                </p>
                <div className="flex justify-center md:justify-start border-t border-gray-600 py-4 gap-4 w-full">
                    <a href={github}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                    >
                        Ver Projeto <FaGithub />
                    </a>
                    <a href={demo}
                        target="_blank"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}