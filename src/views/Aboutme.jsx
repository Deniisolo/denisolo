import { Hardskills } from "../components/molecules/Hardskills";
import { Image } from "../components/atoms/Image";
import { ShowCvButton } from "../components/atoms/ShowCvButton";
export function Aboutme() {
  return (
    <section>
      <Hardskills></Hardskills>
      <Image></Image>
      <ShowCvButton CvButton={"Abrir CV"}></ShowCvButton>
    </section>
  );
}
