import { Link } from "react-router-dom";

interface NavBarProps {
    mobile?: boolean;
    onLinkClick?: () => void;
}

export default function NavBar({ mobile = false, onLinkClick }: NavBarProps) {
    const baseClasses =
        "text-gray-200 hover:text-white transition duration-300 relative group";

    const handleClick = () => {
        if (onLinkClick) onLinkClick();
    };

    return (
        <nav className={`${mobile ? "flex flex-col gap-4" : "flex gap-6"}`}>
            <Link to="/" onClick={handleClick} className={baseClasses}>
                Home
            </Link>
            <Link to="/about" onClick={handleClick} className={baseClasses}>
                About
            </Link>
            <a href="#contact" onClick={handleClick} className={baseClasses}>
                Contact
            </a>
        </nav>
    );
}
