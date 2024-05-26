import { Socialmedialogo } from "../atoms/Socialmedialogo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./Allsocialmedia.css";
export function Allsocialmedia() {
  return (
    <div className="containerSocialmedialogo">
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
    </div>
  );
}
