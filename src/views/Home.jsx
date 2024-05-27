import { Photohome } from "../components/atoms/Photohome";
import { Playbutton } from "../components/atoms/Playbutton";
import { Allsocialmedia } from "../components/molecules/Allsocialmedia";
import { Homedescription } from "../components/molecules/Homedescription";
import "./home.css";

export function Home() {
  return (
    <div className="homestyle">
      <div className="leftSide">
        <Photohome />
      </div>
      <div className="rightSide">
        <Homedescription />
        <Playbutton />
        <Allsocialmedia />
      </div>
    </div>
  );
}
