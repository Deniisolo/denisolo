import Image from "next/image";
import { Playbutton } from "~/_components/atoms/play-button";
import { AllSocialMedia } from "~/_components/molecules/all-social-media";
import "~/styles/home.css";

export default function Home() {
  return (
    <div className="bg-red flex flex-1">
      <div className="flex flex-1 items-center justify-center">
        <Image
          src={"/img/phoneDenis.png"}
          alt="photodeDenisolo"
          width={450}
          height={450}
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-10 p-5 text-center">
        <h1 className="text-[64px] font-bold"> Hello! I&apos;m Denis, </h1>
        <p className="text-[40px] font-light">
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
