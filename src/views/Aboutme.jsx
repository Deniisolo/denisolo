import { Hardskills } from "../components/molecules/Hardskills";
import { Image } from "../components/atoms/Image";
import { ShowCvButton } from "../components/atoms/ShowCvButton";
import "./Aboutme.css";
export function Aboutme() {
  return (
    <section className="aboutMeContainer">
      <section className="aboutMeContainerChildOne">
        <Hardskills></Hardskills>
      </section>
      <section className="aboutMeContainerChildTwo">
        <Image></Image>
        <ShowCvButton CvButton={"Open CV"}></ShowCvButton>
      </section>
    </section>
  );
}
