import "./Homedescription.css";
import { Titlehome } from "../atoms/Titlehome";
import { Paragraphinfo } from "../atoms/Paragraphinfo";
export function Homedescription() {
  return (
    <div className="titleDescriptionContainer">
      <Titlehome></Titlehome>
      <Paragraphinfo
        Paragraphinfop={
          "also known as Deniisolo on social media. I'm a front-end developer specialised in creating amazing web experiences."
        }
      ></Paragraphinfo>
    </div>
  );
}
