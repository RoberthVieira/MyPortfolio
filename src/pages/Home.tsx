import Button from "../components/Button";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-stone-50">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="flex-1 text-center md:text-left ">
                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Olá,<br />Eu sou <span className="text-gray-900">Roberth Vieira</span>!
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2x1">
                        Desenvolvedor Frontend em constante evolução. Gosto de transformar ideias em código e interfaces bonitas.
                    </p>
                    <p className="mt-2 text-lg text-gray-600 max-w-2x1">
                        Descubra mais sibre meus trabalhos e estudos!
                    </p>
                    <Button text="Contact-me" className="mt-4 bg-gray-800 text-white rounded-full px-6 py-3 transition-colors hover:bg-gray-700"/>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                        {/*Div onde vai ficar a minha imagem*/}
                </div>
            </div>
        </main>
    )
}