import "./Navbar.css";
import { Logo } from "../atoms/Logo";
import { Navbarbutton } from "../atoms/Navbarbutton";
import { FiMenu } from "react-icons/fi";
import useNavbar from "../../hooks/useNavbar";

export function Navbar() {
  const { isOpen, toggleMenu, handleNavigation } = useNavbar()

  const navLinks = [
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/aboutme', name: 'About Me' },
    { path: '/contactme', name: 'Contact Me' },
  ];
  return (
    <nav className="containerNav">
      <Logo />
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <FiMenu size={30} />
      </button>
      <div className={`buttonsContainer ${isOpen && "open"}`}>
        {navLinks.map(({ path, name }) => (
          <Navbarbutton
            key={path}
            onClick={() => handleNavigation(path)}
            navBarinfo={name}
          />
        ))}
      </div>
    </nav>
  );
}
