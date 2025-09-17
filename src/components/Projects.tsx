import { projectsData } from "../data/ProjetctsData";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const tituloRef = useRef<HTMLHeadingElement | null>(null);
    const tituloVisivel = useScrollAnimation(tituloRef);


    return (
        <section className="w-full bg-transparent py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-22">
                <div className="mb-12">
                    <h2
                        ref={tituloRef}
                        className={`text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight
                            transition-all duration-700 ease-out
                            ${tituloVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        Alguns dos meus melhores projetos front end
                    </h2>
                    <p className={`mt-2 text-base sm:text-lg text-gray-300 w-full md:w-2/3
                        transition-all duration-700 ease-out
                        ${tituloVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        Aqui você encontra alguns projetos que fiz colocando criatividade e código lado a lado. Cada um mostra minha evolução e paixão por criar interfaces que funcionam e encantam.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-14 max-w-6xl mx-auto">
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