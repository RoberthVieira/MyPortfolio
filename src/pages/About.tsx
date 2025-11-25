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
                        Venho de uma origem simples, onde poucos na minha família tiveram a oportunidade
                        de estudar e explorar áreas como a programação. Desde a infância, sempre tive
                        uma curiosidade intensa em entender como tudo funcionava — desmontava brinquedos,
                        eletrônicos e sempre queria descobrir o que havia por trás de cada mecanismo.
                        Isso moldou meu jeito de aprender e de encarar desafios.
                        Comecei a trabalhar cedo, aos 14 anos, e desde então nunca parei de correr atrás
                        dos meus sonhos. Durante muito tempo não me permiti sonhar grande, pois estava
                        acostumado a ver pessoas próximas se contentarem com pouco. Foi na pandemia que
                        percebi que eu também poderia ser grande e conquistar o que desejasse, desde que
                        estivesse disposto a aprender e me dedicar. Essa virada marcou minha trajetória
                        pessoal e profissional.
                        Hoje, trago comigo traços de personalidade que se tornaram diferenciais:
                        resiliência, disciplina e empatia. São essas características, junto com minhas
                        soft skills como comunicação clara, facilidade em aprender e espírito de colaboração,
                        que moldam minha forma de trabalhar e de me relacionar com as pessoas.
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