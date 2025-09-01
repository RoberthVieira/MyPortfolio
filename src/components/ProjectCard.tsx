import type { ProjectPropType } from "../types";

export default function ProjectCard({id, title, description, github, demo, img}: ProjectPropType){
    return(
        <div key={id} className="flex gap-6 items-center max-w-7xl mx-auto px-6 h-96">
            <div className="w-1/2">
                <figure className="flex justify-center items-center bg-stone-200 rounded-2xl shadow-lg h-auto">
                    <img 
                        src={img} 
                        alt={title} 
                        className="w-3/4 h-auto rounded-2xl object-contain"    
                    />
                </figure>
            </div>
            <div className="w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">
                    {title}
                </h3>
                <p className="text-gray-600 mt-4 mb-4 text-justify h-36 flex items-center">
                    {description}
                </p>
                <div className="flex flex-col border-t py-2">
                    <a href={github}>Ver Projeto</a>
                    <a href={demo}>Live Demo</a>
                </div>
            </div>
        </div>
    )
}