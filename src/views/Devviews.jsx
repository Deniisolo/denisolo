import "./Devviews.css"
import { Photohome } from "../components/atoms/Photohome";
import { Logo } from "../components/atoms/Logo";
import { Playbutton } from "../components/atoms/Playbutton";
import { Navbarbutton } from "../components/atoms/Navbarbutton";
import { Githublogo } from "../components/atoms/Githublogo";
export function Devviews() {
  return (
    <div className="devDiv">
      <Navbarbutton navBarinfo={"Portafolio"}></Navbarbutton>
      <Navbarbutton navBarinfo={"Sobre mi"}></Navbarbutton>
      <Navbarbutton navBarinfo={"Contacto"}></Navbarbutton>
      <Logo></Logo>
      <Photohome></Photohome>
      <Playbutton></Playbutton>
      <Githublogo></Githublogo>
    </div>
  );
}
