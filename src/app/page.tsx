import Image from "next/image";
import { Photohome } from "~/_components/atoms/photo-home";
import { Playbutton } from "~/_components/atoms/play-button";
import { AllSocialMedia } from "~/_components/molecules/all-social-media";
import { Homedescription } from "~/_components/molecules/home-description";
import "~/styles/home.css";
// import "./photo-home.css";
import homePicture from "./img/phoneDenis.png";

export default function Home() {
  return (
    <div className="min-h-100 flex">
      <div className="h-full items-center justify-center p-5">
        <Image
          className="responsive-photo"
          src={"/img/phoneDenis.png"}
          // src={homePicture}
          fill={true}
          alt="photodeDenisolo"
          // width={100}
          // height={100}
        />
      </div>
      <div className="h-full items-center justify-center p-5">
        <h1 className="titleHome"> Hello! I&apos;m Denis, </h1>
        <p>
          also known as Deniisolo on social media. I&apos;m a front-end
          developer specialised in creating amazing web experiences.
        </p>
        <div className="playButtonWrapper">
          <Playbutton />
        </div>
        <AllSocialMedia />
      </div>
    </div>
  );
}
