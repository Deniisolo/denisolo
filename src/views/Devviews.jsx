import "./Devviews.css";
import { Photohome } from "../components/atoms/Photohome";
import { Logo } from "../components/atoms/Logo";
import { Playbutton } from "../components/atoms/Playbutton";
import { Navbarbutton } from "../components/atoms/Navbarbutton";
import { Socialmedialogo } from "../components/atoms/Socialmedialogo";
import { Titlehome } from "../components/atoms/Titlehome";
import { Paragraphinfo } from "../components/atoms/Paragraphinfo";
import { Hardskillspurple } from "../components/atoms/Hardskillspurple";
import { Hardskillsgrey } from "../components/atoms/Hardskillsgrey";
import { Shortword } from "../components/atoms/Shortword";
import { Image } from "../components/atoms/Image";
import { Label } from "../components/atoms/Label";
export function Devviews() {
  return (
    <div className="devDiv">
      <Navbarbutton navBarinfo={"Portafolio"}></Navbarbutton>
      <Navbarbutton navBarinfo={"Sobre mi"}></Navbarbutton>
      <Navbarbutton navBarinfo={"Contacto"}></Navbarbutton>
      <Logo></Logo>
      <Titlehome></Titlehome>
      <Paragraphinfo
        Paragraphinfop={"también conocido como Deniisolo "}
      ></Paragraphinfo>
      <Paragraphinfo Paragraphinfop={"en las redes sociales. "}></Paragraphinfo>
      <Paragraphinfo
        Paragraphinfop={"Soy una desarrolladora front-end"}
      ></Paragraphinfo>
      <Paragraphinfo
        Paragraphinfop={"especializada en crear experiencias"}
      ></Paragraphinfo>
      <Paragraphinfo Paragraphinfop={"web increíbles."}></Paragraphinfo>
      <Photohome></Photohome>
      <Playbutton></Playbutton>
      <Socialmedialogo
        srcsocialmedialogos={"/img/linkedin.png"}
      ></Socialmedialogo>
      <Socialmedialogo
        srcsocialmedialogos={"/img/Github.png"}
      ></Socialmedialogo>
      <Socialmedialogo
        srcsocialmedialogos={"/img/tiktok.png"}
      ></Socialmedialogo>
      <Hardskillspurple hardSkillsPurpleButton={"HTML"}></Hardskillspurple>
      <Hardskillsgrey hardSkillsGreyButton={"HTML"}></Hardskillsgrey>
      <Shortword shortWordParagraph={"Abrir CV"}> </Shortword>
      <Image></Image>
      <Label laberinformation="Name"></Label>
      <Label laberinformation="Email"></Label>
      <Label laberinformation="Subject"></Label>
      <Label laberinformation=" Message"></Label>
    </div>
  );
}
