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
import { Allsocialmedia } from "../components/molecules/Allsocialmedia";

import { project1, project2, project3, project4 } from "./data";

export function Portfolio() {
  return (
    <div className="containerPortfolio">
      <div className="containerPortfolioOne">
        <Card
          cardTwo={
            <div>
              <Contactinformation
                ContactinformationParagraph={
                  "Movie Challenge is a platform for browsing, filtering and sorting movies with data from The Movie Database API V3. It offers an intuitive and efficient experience."
                }
              />
              <Techlogo imgtech={<FaReact size={"35px"} />} />
              <Techlogo imgtech={<SiTypescript size={"35px"} />} />
              <Techlogo imgtech={<IoLogoCss3 size={"35px"} />} />
              <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />} />
              <Techlogo imgtech={<FaGitAlt size={"35px"} />} />
            </div>
          }
          color={"#DBCEEF"}
          cardOne={
            <Contactinformation
              ContactinformationParagraph={"Movie-Challenge"}
            />
          }
          Portfolio={project1}
        />

        <Card
          cardTwo={
            <div>
              <Contactinformation
                ContactinformationParagraph={
                  "At Denisolo.com, you will find a collection of exciting projects, each with its own story and style."
                }
              />
              <Techlogo imgtech={<IoLogoJavascript size={"35px"} />} />
              <Techlogo imgtech={<IoLogoCss3 size={"35px"} />} />
              <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />} />
              <Techlogo imgtech={<FaGitAlt size={"35px"} />} />
              <Techlogo imgtech={<FaFigma size={"35px"} />} />
            </div>
          }
          color={"#EECEEF"}
          cardOne={
            <Contactinformation ContactinformationParagraph={"Denisolo.com"} />
          }
          Portfolio={project2}
        />

        <Card
          cardTwo={
            <div>
              <Contactinformation
                ContactinformationParagraph={
                  "I established communication with the OPENAI API, a platform to discover profiles of international music artists and connect with your favourites through its integrated chat."
                }
              />
              <Techlogo imgtech={<IoLogoJavascript size={"35px"} />} />
              <Techlogo imgtech={<IoLogoCss3 size={"35px"} />} />
              <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />} />
              <Techlogo imgtech={<FaGitAlt size={"35px"} />} />
              <Techlogo imgtech={<FaFigma size={"35px"} />} />
            </div>
          }
          color={"#EFCED4"}
          cardOne={
            <Contactinformation
              ContactinformationParagraph={"Dataverse-chat"}
            />
          }
          Portfolio={project3}
        />

        <Card
          cardTwo={
            <div>
              <Contactinformation
                ContactinformationParagraph={
                  "Text Analyzer is a tool that counts characters and numbers, calculates the total sum of numbers and the average word length, useful for students, teachers and writers."
                }
              />
              <Techlogo imgtech={<IoLogoJavascript size={"35px"} />} />
              <Techlogo imgtech={<IoLogoCss3 size={"35px"} />} />
              <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />} />
              <Techlogo imgtech={<FaGitAlt size={"35px"} />} />
              <Techlogo imgtech={<FaFigma size={"35px"} />} />
            </div>
          }
          color={"#DBCEEF"}
          cardOne={
            <Contactinformation ContactinformationParagraph={"Text Analyzer"} />
          }
          Portfolio={project4}
        />
      </div>
    </div>
  );
}
