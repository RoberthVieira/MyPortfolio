import Contact from "../components/Contact"
export default function About() {
    return (
        <section className="w-full bg-transparent pt-32 md:pt-28 lg:pt-32 pb-4 md:pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                        Sobre Mim
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Aqui você vai conhecer mais sobre minha trajetória, formação e habilidades
                        que venho desenvolvendo como dev.
                    </p>
                </div>

                <div className="mb-12 md:mb-16 border-b border-gray-600 pb-8 md:pb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Minha Jornada
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed text-justify">
                        Desde cedo sempre fui movido pela curiosidade e pelo desejo de entender como as coisas funcionam. Isso acabou me levando naturalmente para a tecnologia. Comecei a trabalhar jovem e, ao longo da minha trajetória, aprendi a valorizar dedicação, disciplina e evolução constante.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed text-justify">
                        Quando descobri a programação, finalmente encontrei um caminho que unia lógica, criatividade e a oportunidade de construir algo do zero. Desde então, venho me aprofundando no desenvolvimento web, iniciando pelo front-end e agora expandindo meus conhecimentos rumo ao fullstack.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed text-justify">
                        Hoje, meu foco é me tornar um desenvolvedor fullstack completo, dominando não só o React e TypeScript no front, mas também Node.js e todo o ecossistema backend. Busco sempre aprender um pouco mais a cada dia, melhorar meu código e criar soluções que realmente façam a diferença.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed text-justify">
                        Trago comigo paixão pelo que faço, vontade de crescer na área e a mentalidade de estar sempre evoluindo — um passo de cada vez, mas sempre adiante.
                    </p>
                </div>

                <div className="mb-12 md:mb-16 border-b border-gray-600 pb-8 md:pb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Formação Acadêmica
                    </h3>
                    <ul className="">
                        <li>
                            🎓 Faculdade de Análise e Desenvolvimento de Sistemas — Estácio <br />
                            <span className="italic"> início 06/2023 · previsão conclusão 12/2025</span>
                        </li>
                        <li>
                            📚 Cursos complementares em React.js, TypeScript, JavaScript, Tailwindcss, Next.js, CSS, HTML, Git/Github.
                        </li>
                    </ul>
                </div>
                <div className="mb-1 border-b border-gray-600 pb-8 md:pb-12 grid md:grid-cols-2 gap-8 md:gap-10">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Hard Skills</h3>
                        <ul className="list-disc list-inside text-sm md:text-base lg:text-lg text-gray-300 space-y-2">
                            <li>React.js · TypeScript · JavaScript ES6+</li>
                            <li>Next.js · TailwindCSS</li>
                            <li>Git/GitHub · APIs REST</li>
                            <li>HTML5 · CSS3</li>
                            <li>Node/Express (introdutório)</li>
                            <li>Python (introdutório)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Soft Skills</h3>
                        <ul className="list-disc list-inside text-sm md:text-base lg:text-lg text-gray-300 space-y-2">
                            <li>Comunicação clara e objetiva</li>
                            <li>Trabalho em equipe</li>
                            <li>Resolução de problemas</li>
                            <li>Aprendizado contínuo</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Contact/>                        
                </div>
            </div>
        </section>
    )
}