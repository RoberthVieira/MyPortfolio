import Button from "./Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function AboutSection() {

    const contentRef = useRef<HTMLHeadingElement | null>(null);
    const contentVisivel = useScrollAnimation(contentRef);

    return (
        <section className="w-full bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-24 mb-22 flex flex-col md:flex-row gap-12 border-b border-gray-600">
                <div className="md:w-1/2 pr-0 md:pr-6 mb-8 md:mb-0"
                >
                    <h2 
                        ref={contentRef}
                        className={`text-5xl text-white font-extrabold mb-4 tracking-tight
                        transition-all duration-700 ease-out
                        ${contentVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        Um Pouco sobre mim
                    </h2>
                </div>
                <div
                    ref={contentRef} 
                    className={`md:w-1/2 transition-all duration-700 ease-out
                    ${contentVisivel ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    <p className="mb-2 text-gray-300 text-lg font-medium leading-relaxed italic ">
                        Sou desenvolvedor front-end, focado em construir aplicações funcionais e bem estruturadas, sempre buscando evoluir tecnicamente.
                    </p>
                    <p className="mb-6 text-gray-300 text-justify">
                        Tenho estudado React.js e outras ferramentas do ecossistema JavaScript, além de praticar conceitos de design e usabilidade. Meu objetivo é aplicar o que aprendo em projetos reais, explorando boas práticas e novas tecnologias.
                    </p>
                    <Link to="/about">
                        <Button text="Mais Sobre Mim"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}