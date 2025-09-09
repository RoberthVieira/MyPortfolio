import Button from "./Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function AboutSection() {

    const contentRef = useRef<HTMLHeadingElement | null>(null);
    const contentVisivel = useScrollAnimation(contentRef);

    return (
        <section className="w-full bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-24 mb-22 flex border-b border-gray-600">
                <div className="w-1/2 pr-6"
                >
                    <h2 
                        ref={contentRef}
                        className={`text-4xl text-white font-extrabold mb-4 tracking-tight
                        transition-all duration-700 ease-out
                        ${contentVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        Um Pouco sobre mim
                    </h2>
                </div>
                <div
                    ref={contentRef} 
                    className={`w-1/2
                    transition-all duration-700 ease-out
                    ${contentVisivel ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    <p className="mb-2 text-gray-400 text-lg font-medium leading-relaxed italic ">
                        Sou desenvolvedor front-end, focado em construir aplicações funcionais e bem estruturadas, sempre buscando evoluir tecnicamente.
                    </p>
                    <p className="mb-6 text-gray-400 text-justify">
                        Tenho estudado React.js e outras ferramentas do ecossistema JavaScript, além de praticar conceitos de design e usabilidade. Meu objetivo é aplicar o que aprendo em projetos reais, explorando boas práticas e novas tecnologias.
                    </p>
                    <Link to="/about">
                        <Button text="Mais Sobre Mim"
                            className="bg-gray-800 rounded-full px-6 py-2 hover:bg-gray-700 text-white transition-colors duration-300 ease-in-out"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}