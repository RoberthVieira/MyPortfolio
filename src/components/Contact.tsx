import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "./Button";
import React, { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import emailjs from 'emailjs-com';

export default function Contact(){

    const contentRef = useRef<HTMLHeadingElement | null>(null);
    const contentVisivel = useScrollAnimation(contentRef);

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if(form.current){
            emailjs.sendForm(
                "service_zt5f0w7",
                "template_o1dqtkl",
                form.current,
                "W8PYOre7dfgG0C9gq"
            ).then(
                () => {
                    alert("Mensagem enviada com sucesso!");
                    form.current?.reset();
                }, (error) => {
                    alert("Erro ao enviar mensagem: " + error.text)
                }
            )
        }
    }

    return(
        <section id="contact" 
            className="w-full bg-transparent text-white py-16 px-6"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div 
                    ref={contentRef}
                    className={`flex flex-col justify-start transition-all duration-700 ease-out
                    ${contentVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Entre em contato
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Entre em contato em <span>roberthvieiracv@gmail.com</span><br /> ou mande uma mensagem por aqui mesmo!
                    </p>
                    <div className="flex space-x-4">
                        <a 
                            href="https://www.linkedin.com/in/roberth-vieira-501490211/" 
                            target="_blank"
                            className="transition-transform transform hover:scale-110"
                        >
                            <Button icon={<FaLinkedin className="h-6 w-6"/>}/>
                        </a>
                        <a 
                            href="https://github.com/RoberthVieira" 
                            target="_blank"
                            className="transition-transform transform hover:scale-110"
                        >
                            <Button icon={<FaGithub className="h-6 w-6"/>}/>
                        </a>
                    </div>
                </div>
                <div className={`bg-gray-900 p-8 rounded-2xl space-y-4 transition-all duration-700 ease-out
                    ${contentVisivel ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    <form
                        ref={form}
                        onSubmit={sendEmail} 
                        className="flex flex-col space-y-4">
                        <input 
                            type="text"
                            placeholder="Seu nome"
                            name="name"
                            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <input 
                            type="text"
                            placeholder="Seu e-mail"
                            name="email"
                            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <input 
                            type="text"
                            placeholder="Assunto"
                            name="subject"
                            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <textarea 
                            placeholder="Sua mensagem"
                            rows={5}
                            name="message"
                            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        ></textarea>
                        <Button
                            type='submit'
                            text="Enviar mensagem"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}