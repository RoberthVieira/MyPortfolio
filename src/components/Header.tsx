import { useState } from "react";
import NavBar from "./NavBar";
import Button from "./Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function scrollToTop() {
        window.scroll({ top: 0, behavior: "smooth" });
    }

    return (
        <header className="fixed top-0 z-50 bg-[rgba(10,15,26,0.4)] backdrop-blur-md shadow-sm w-full">
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center px-4">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => location.pathname === "/" && scrollToTop()}
                    className="text-2xl font-bold text-gray-200 tracking-tight"
                >
                    Roberth Vieira
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-grow justify-center mr-6">
                    <NavBar />
                </div>

                {/* Social Icons Desktop */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/roberth-vieira-501490211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <Button icon={<FaLinkedin className="h-6 w-6" />} />
                    </a>

                    <a
                        href="https://github.com/RoberthVieira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <Button icon={<FaGithub className="h-6 w-6" />} />
                    </a>
                </div>

                {/* Hamburger Menu - Mobile Only */}
                <button
                    className="md:hidden text-gray-200 text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>

            </div>

            {/* MOBILE MENU DROPDOWN (Fora do header) */}
            {isOpen && (
                <div
                    className="
            absolute right-4 top-[68px]  /* abaixo do header */
            bg-[rgba(10,15,26,0.95)]
            backdrop-blur-md
            border border-gray-700
            rounded-xl
            shadow-xl
            flex flex-col
            gap-4
            p-6
            z-50
          "
                >
                    <NavBar mobile onLinkClick={() => setIsOpen(false)} />
                </div>
            )}
        </header>
    );
}