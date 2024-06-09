import React, { useState } from "react";
import "./Navbar.css";
import { Logo } from "../atoms/Logo";
import { Navbarbutton } from "../atoms/Navbarbutton";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <div className="containerNav">
      <Logo />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`buttonsContainer ${isOpen ? "open" : ""}`}>
        <Navbarbutton
          onClick={() => {
            navigate("/portfolio");
          }}
          navBarinfo={"Portfolio"}
        />
        <Navbarbutton
          onClick={() => {
            navigate("/aboutme");
          }}
          navBarinfo={"About me"}
        />

        <Navbarbutton navBarinfo={"Contact me"} />
      </div>
    </div>
  );
}
