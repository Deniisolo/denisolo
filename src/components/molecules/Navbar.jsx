import React, { useState } from "react";
import "./Navbar.css";
import { Logo } from "../atoms/Logo";
import { Navbarbutton } from "../atoms/Navbarbutton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="containerNav">
      <Logo />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`buttonsContainer ${isOpen ? "open" : ""}`}>
        <Navbarbutton navBarinfo={"Portfolio"} />
        <Navbarbutton navBarinfo={"About me"} />
        <Navbarbutton navBarinfo={"Contact me"} />
      </div>
    </div>
  );
}
