import { Image } from "../atoms/Image";
import { ShowCvButton } from "../atoms/ShowCvButton";
export function Imagecv() {
  return (
    <div>
      <Image> </Image>
      <ShowCvButton CvButton={"Open CV"}></ShowCvButton>
    </div>
  );
}
