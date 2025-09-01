import type { ProjectPropType } from "../types";

export default function ProjectCard({id, title, description, github, demo, img}: ProjectPropType){
    return(
        <div key={id} className="flex gap-6 items-center max-w-7xl mx-auto px-6 h-96">
            <div className="w-1/2">
                <figure className="">
                    <img src={img} alt={title} />
                </figure>
            </div>
            <div>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <div>
                    <a href={github}>Ver Projeto</a>
                    <a href={demo}>Live Demo</a>
                </div>
            </div>
        </div>
    )
}