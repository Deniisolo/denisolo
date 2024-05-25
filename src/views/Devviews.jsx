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
import { ShowCvButton } from "../components/atoms/ShowCvButton";
import { Image } from "../components/atoms/Image";
import { Label } from "../components/atoms/Label";
import { Sendbutton } from "../components/atoms/Sendbutton";
import { Input } from "../components/atoms/Input";
import { InfoLabel } from "../components/atoms/InfoLabel";
import { Contactinformation } from "../components/atoms/Contactinformation";
import { FaGithub } from "react-icons/fa";
export function Devviews() {
  return (
    <div className="devDiv">
      <Navbarbutton navBarinfo={"Portafolio"}></Navbarbutton>
      <Navbarbutton navBarinfo={"Sobre mi"}></Navbarbutton>
      <Navbarbutton navBarinfo={"hola"}></Navbarbutton>
      <Navbarbutton navBarinfo={"que mas "}></Navbarbutton>
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
        urlSocialMedia={"https://github.com/Deniisolo"}
        img={<FaGithub size={"80px"} />}
      ></Socialmedialogo>
      <Socialmedialogo img={<FaGithub size={"80px"} />}></Socialmedialogo>
      <Socialmedialogo img={<FaGithub size={"80px"} />}></Socialmedialogo>
      <Hardskillspurple hardSkillsPurpleButton={"HTML"}></Hardskillspurple>
      <Hardskillsgrey hardSkillsGreyButton={"HTML"}></Hardskillsgrey>
      <ShowCvButton CvButton={"Abrir CV"}></ShowCvButton>
      <Image></Image>
      <Label
        laberinformation={"Si te interesa mi trabajo contactame 👩‍💻 "}
      ></Label>
      <Sendbutton></Sendbutton>
      <Input></Input>
      <InfoLabel infoLabelparagraph={"Info"}></InfoLabel>
      <Contactinformation
        ContactinformationParagraph={"Email: deniissolo@gmail.com"}
      ></Contactinformation>
      <Contactinformation
        ContactinformationParagraph={
          "Linkedin: https://www.linkedin.com/in/denisolo/"
        }
      ></Contactinformation>
    </div>
  );
}
