import { projectsData } from "../data/ProjetctsData";
import ProjectCard from "./ProjectCard";

export default function Projects(){

    return(
        <section className="w-full py-16 bg-neutral-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 mb-22">
                <div className="mb-12">
                    <h2 className="text-neutral-900 text-3xl font-bold">
                        Alguns dos meus melhores projetos front end.
                    </h2>
                    <p className="mt-2 text-ms text-gray-600">
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