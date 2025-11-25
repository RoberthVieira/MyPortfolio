import Button from "./Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function AboutSection() {

    const contentRef = useRef<HTMLHeadingElement | null>(null);
    const contentVisivel = useScrollAnimation(contentRef);

    return (
        <section className="w-full bg-transparent">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row gap-12 border-b border-gray-600">
                <div className="md:w-1/2 pr-0 md:pr-6 md:mb-0"
                >
                    <h2 
                        ref={contentRef}
                        className={`text-3xl sm:text-4xl md:text-5xl text-white font-extrabold mb-2 sm:mb-4 tracking-tight
                        transition-all duration-700 ease-out
                        ${contentVisivel ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                        Um pouco sobre mim
                    </h2>
                </div>
                <div
                    ref={contentRef} 
                    className={`md:w-1/2 transition-all duration-700 ease-out
                    ${contentVisivel ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                    <p className="mb-2 text-gray-300 text-base sm:text-lg font-medium leading-relaxed italic">
                        Sou desenvolvedor front-end com bases sólidas em JavaScript, React.js, TypeScript e TailwindCSS, comprometido em criar interfaces funcionais, modernas e bem estruturadas. Ao longo da minha jornada, evoluí além do front-end: hoje estou expandindo minhas habilidades para o back-end com Node.js, buscando me tornar um desenvolvedor fullstack completo.
                    </p>
                    <p className="mb-6 text-gray-300 text-sm sm:text-base text-justify">
                        Tenho me aprofundado em todo o ecossistema JavaScript, estudando ferramentas, padrões e boas práticas que elevam a qualidade dos meus projetos. Gosto de transformar conceitos em aplicações reais, explorando usabilidade, performance e organização de código.
                    </p>
                    <p className="mb-6 text-gray-300 text-sm sm:text-base text-justify">
                        Meu objetivo é unir o melhor dos dois mundos — front-end e back-end — para construir soluções completas, eficientes e preparadas para o futuro.
                    </p>
                    <Link to="/about">
                        <Button text="Mais Sobre Mim"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}