import { projectsData } from "../data/ProjetctsData";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const tituloRef = useRef<HTMLHeadingElement | null>(null);
    const tituloVisivel = useScrollAnimation(tituloRef);


    return (
        <section className="w-full py-16 bg-neutral-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 mb-22">
                <div className="mb-12">
                    <h2
                        ref={tituloRef}
                        className={`text-neutral-900 text-4xl font-extrabold tracking-tight
                            transition-all duration-700 ease-out
                            ${tituloVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        Alguns dos meus melhores projetos front end
                    </h2>
                    <p className={`mt-2 text-ms text-gray-600 w-2/3
                        transition-all duration-700 ease-out
                        ${tituloVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        Aqui você encontra alguns projetos que fiz colocando criatividade e código lado a lado. Cada um mostra minha evolução e paixão por criar interfaces que funcionam e encantam.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-14 max-w-7xl mx-auto">
                {projectsData.map((projetos) => (
                    <ProjectCard
                        id={projetos.id}
                        title={projetos.title}
                        description={projetos.description}
                        github={projetos.github}
                        demo={projetos.demo}
                        img={projetos.img}
                    />
                ))}
            </div>
        </section>
    )
}