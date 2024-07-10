import { Contactinformation } from "../atoms/Contactinformation";
import { Label } from "../atoms/Label";
import { DemoButon } from "../atoms/DemoButon";
import { RepositoryButon } from "../atoms/RepositoryButon";
import { TitlePortfolio } from "../atoms/TitlePortfolio";
export function Cardportfolio() {
  return (
    <div>
      <img src="" alt="" />
      <TitlePortfolio></TitlePortfolio>
      <Label></Label>
      <Contactinformation></Contactinformation>
      <DemoButon></DemoButon>
      <RepositoryButon></RepositoryButon>
    </div>
  );
}
