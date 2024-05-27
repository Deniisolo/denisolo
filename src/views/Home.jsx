import { Photohome } from "../components/atoms/Photohome";
import { Playbutton } from "../components/atoms/Playbutton";
import { Allsocialmedia } from "../components/molecules/Allsocialmedia";
import { Homedescription } from "../components/molecules/Homedescription";
import "./home.css";
export function Home() {
  return (
    <div className="homestyle">
      <div className="leftSide">
        <Photohome></Photohome>
      </div>
      <div className="rightSide">
        <Homedescription></Homedescription>
        <Playbutton></Playbutton>
        <Allsocialmedia></Allsocialmedia>
      </div>
    </div>
  );
}
