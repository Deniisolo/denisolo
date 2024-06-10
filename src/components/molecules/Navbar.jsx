import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Logo } from "../atoms/Logo";
import { Navbarbutton } from "../atoms/Navbarbutton";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="containerNav" ref={menuRef}>
      <Logo />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`buttonsContainer ${isOpen ? "open" : ""}`}>
        <Navbarbutton
          onClick={() => {
            navigate("/portfolio");
            setIsOpen(false); // Cerrar el menú al hacer clic en un botón
          }}
          navBarinfo={"Portfolio"}
        />
        <Navbarbutton
          onClick={() => {
            navigate("/aboutme");
            setIsOpen(false); // Cerrar el menú al hacer clic en un botón
          }}
          navBarinfo={"About me"}
        />
        <Navbarbutton
          onClick={() => {
            navigate("/contactme");
            setIsOpen(false); // Cerrar el menú al hacer clic en un botón
          }}
          navBarinfo={"Contact me"}
        />
      </div>
    </div>
  );
}
