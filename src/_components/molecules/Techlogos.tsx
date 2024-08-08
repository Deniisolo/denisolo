import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { Techlogo } from "../atoms/Techlogo";
export function Techlogos() {
  return (
    <div className="techlogos-container">
      <Techlogo imgtech={<IoLogoJavascript size={"35px"} />}></Techlogo>
      <Techlogo imgtech={<FaReact size={"35px"} />}></Techlogo>
      <Techlogo imgtech={<FaGitAlt size={"35px"} />}></Techlogo>
      <Techlogo imgtech={<SiTypescript size={"35px"} />}></Techlogo>
      <Techlogo imgtech={<FaFigma size={"35px"} />}></Techlogo>
      <Techlogo imgtech={<IoLogoCss3 size={"35px"} />}></Techlogo>
      <Techlogo imgtech={<IoLogoHtml5 size={"35px"} />}></Techlogo>
    </div>
  );
}
