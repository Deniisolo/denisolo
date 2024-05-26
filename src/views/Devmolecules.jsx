import { Navbar } from "../components/molecules/Navbar";
import { Homedescription } from "../components/molecules/Homedescription";
import { Allsocialmedia } from "../components/molecules/Allsocialmedia";
import { Hardskills } from "../components/molecules/Hardskills";
import { Imagecv } from "../components/molecules/Imagecv";

export function Devmolecules() {
  return (
    <div>
      <Navbar></Navbar>
      <Homedescription></Homedescription>
      <Allsocialmedia></Allsocialmedia>
      <Hardskills></Hardskills>
      <Imagecv></Imagecv>
    </div>
  );
}
