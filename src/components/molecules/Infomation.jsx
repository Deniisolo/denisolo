import { InfoLabel } from "../atoms/InfoLabel";
import "./Infomation.css";
import { Contactinformation } from "../atoms/Contactinformation";
import { Allsocialmedia } from "./Allsocialmedia";

export function Infomation() {
  return (
    <div className="informationContainer">
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
