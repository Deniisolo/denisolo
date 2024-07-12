import { Contactinformation } from "../components/atoms/Contactinformation";
import { Label } from "../components/atoms/Label";
import { DemoButon } from "../components/atoms/DemoButon";
import { TitlePortfolio } from "../components/atoms/TitlePortfolio";
import { RepositoryButon } from "../components/atoms/RepositoryButon";
import { PhotoPortfolio } from "../components/atoms/PhotoPortfolio";
export function Cardportfolio() {
  return (
    <div>
      <img src="" alt="" />
      <TitlePortfolio></TitlePortfolio>
      <Label></Label>
      <Contactinformation></Contactinformation>
      <DemoButon></DemoButon>
      <RepositoryButon></RepositoryButon>

      {/* <Littletittle Littletittle={props.Littletittle}></Littletittle>
      <Paragraphinfo Paragraphinfop={props.Paragraphinfop}></Paragraphinfo> */}
    </div>
  );
}
