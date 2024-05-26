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
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Techlogo } from "../components/atoms/Techlogo";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { Portafoliodescription } from "../components/atoms/Portafoliodescription";

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
      <Socialmedialogo
        urlSocialMedia={"https://www.linkedin.com/in/denisolo/"}
        img={<FaLinkedin size={"80px"} />}
      ></Socialmedialogo>
      <Socialmedialogo
        urlSocialMedia={"https://www.tiktok.com/@deniisolo"}
        img={<AiFillTikTok size={"92px"} />}
      ></Socialmedialogo>
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
      <Techlogo imgtech={<IoLogoJavascript size={"40px"} />}></Techlogo>
      <Techlogo imgtech={<FaReact size={"40px"} />}></Techlogo>
      <Techlogo imgtech={<FaGitAlt size={"40px"} />}></Techlogo>
      <Techlogo imgtech={<SiTypescript size={"40px"} />}></Techlogo>
      <Techlogo imgtech={<FaFigma size={"40px"} />}></Techlogo>
      <Techlogo imgtech={<IoLogoCss3 size={"40px"} />}></Techlogo>
      <Techlogo imgtech={<IoLogoHtml5 size={"40px"} />}></Techlogo>
      <Portafoliodescription
        portafoliDescription={
          "Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
        }
      ></Portafoliodescription>
    </div>
  );
}
