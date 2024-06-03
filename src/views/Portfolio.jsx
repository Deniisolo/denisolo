import { Card } from "../components/atoms/Card";
import "./Portfolio.css";
import { Contactinformation } from "../components/atoms/Contactinformation";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { Techlogo } from "../components/atoms/Techlogo";

export function Portfolio() {
  return (
    <div className="containerPortfolio">
      <Card
        cardTwo={
          <div>
            <Contactinformation
              ContactinformationParagraph={
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, "
              }
            ></Contactinformation>
            <Techlogo imgtech={<FaReact size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<SiTypescript size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoCss3 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaGitAlt size={"35px"} />}></Techlogo>
          </div>
        }
        color={"#DBCEEF"}
        cardOne={
          <Contactinformation
            ContactinformationParagraph={"Movie-Challenge"}
          ></Contactinformation>
        }
      ></Card>
      <Card
        cardTwo={
          <div>
            <Contactinformation
              ContactinformationParagraph={
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, "
              }
            ></Contactinformation>
            <Techlogo imgtech={<IoLogoJavascript size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoCss3 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaGitAlt size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaFigma size={"35px"} />}></Techlogo>
          </div>
        }
        color={"#EECEEF"}
        cardOne={
          <Contactinformation
            ContactinformationParagraph={"Dataverse"}
          ></Contactinformation>
        }
      ></Card>
      <Card
        cardTwo={
          <div>
            <Contactinformation
              ContactinformationParagraph={
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, "
              }
            ></Contactinformation>
            <Techlogo imgtech={<IoLogoJavascript size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoCss3 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaGitAlt size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaFigma size={"35px"} />}></Techlogo>
          </div>
        }
        color={"#EFCED4"}
        cardOne={
          <Contactinformation
            ContactinformationParagraph={"Dataverse-chat"}
          ></Contactinformation>
        }
      ></Card>
      <Card
        cardTwo={
          <div>
            <Contactinformation
              ContactinformationParagraph={
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, "
              }
            ></Contactinformation>
            <Techlogo imgtech={<IoLogoJavascript size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoCss3 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaGitAlt size={"35px"} />}></Techlogo>
            <Techlogo imgtech={<FaFigma size={"35px"} />}></Techlogo>
          </div>
        }
        color={"#DBCEEF"}
        cardOne={
          <Contactinformation
            ContactinformationParagraph={"Text Analyzer"}
          ></Contactinformation>
        }
      ></Card>
    </div>
  );
}
