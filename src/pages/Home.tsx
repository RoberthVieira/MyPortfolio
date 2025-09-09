import Button from "../components/Button";
import Projects from "../components/Projects";
import MyPhoto from '../../public/IMG/myPhoto.png';
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-transparent">
            <div
                className={`h-screen max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 border-b border-gray-600`}>
                <div className="flex-1 text-center md:text-left ">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text">
                            Olá, eu sou
                        </span>
                        <span className="block text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                            Roberth Vieira!
                        </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                        🚀 Desenvolvedor <span className="font-semibold text-cyan-400">Frontend</span> em constante evolução. Transformo ideias em código e interfaces que encantam.
                    </p>

                    <p className="mt-3 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                        Descubra mais sobre meus trabalhos e
                        minha <span className="text-cyan-300">jornada</span> como dev.
                    </p>

                    <a href="#contact">
                        <Button
                            text="Contact-me"
                            className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-cyan-500/50 transition-transform duration-300 ease-in-out"
                        />
                    </a>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <img src={MyPhoto} alt="Minha fotografia"
                        className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_25px_8px_rgba(34,211,238,0.6)]" />
                </div>
            </div>
            <Projects />
            <AboutSection />
            <Contact />
        </main>
    )
}