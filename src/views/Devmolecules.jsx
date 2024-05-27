import { Navbar } from "../components/molecules/Navbar";
import { Homedescription } from "../components/molecules/Homedescription";
import { Allsocialmedia } from "../components/molecules/Allsocialmedia";
import { Hardskills } from "../components/molecules/Hardskills";
import { Imagecv } from "../components/molecules/Imagecv";
import { Formcontacme } from "../components/molecules/Formcontacme";
import { Infomation } from "../components/molecules/Infomation";
import { Card } from "../components/atoms/Card";
import { Techlogos } from "../components/molecules/Techlogos";
import { Video } from "../components/atoms/Video";
export function Devmolecules() {
  return (
    <div>
      <Homedescription></Homedescription>
      <Allsocialmedia></Allsocialmedia>
      <Hardskills></Hardskills>
      <Imagecv></Imagecv>
      <Formcontacme></Formcontacme>
      <Infomation></Infomation>
      <Card
        color={"#dbceef"}
        cardOne={<div>holass</div>}
        cardTwo={<div>holass2</div>}
      ></Card>
      <Techlogos></Techlogos>
      <Video></Video>
    </div>
  );
}
