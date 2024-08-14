import { Hardskillspurple } from "../atoms/Hardskillspurple";
import { Hardskillsgrey } from "../atoms/Hardskillsgrey";
import "./Hardskills.css";
import { Label } from "../atoms/Label";
export function Hardskills() {
  return (
    <div className="containerHardskills">
      <Label
        laberinformation={"👩🏻‍💻Front-end developer with skills in: "}
      ></Label>
      <Hardskillspurple hardSkillsPurpleButton={"React"}></Hardskillspurple>
      <Hardskillsgrey hardSkillsGreyButton={"JavaScript"}></Hardskillsgrey>
      <Hardskillspurple
        hardSkillsPurpleButton={"TypeScript"}
      ></Hardskillspurple>
      <Hardskillsgrey hardSkillsGreyButton={"HTML"}></Hardskillsgrey>
      <Hardskillspurple hardSkillsPurpleButton={"CSS"}></Hardskillspurple>
      <Hardskillsgrey hardSkillsGreyButton={"Tailwind"}></Hardskillsgrey>
      <Hardskillspurple hardSkillsPurpleButton={"GitHub"}></Hardskillspurple>
      <Hardskillsgrey hardSkillsGreyButton={"Git"}></Hardskillsgrey>
      <Hardskillspurple
        hardSkillsPurpleButton={"Unit Testing"}
      ></Hardskillspurple>
      <Hardskillsgrey
        hardSkillsGreyButton={"Responsive Design"}
      ></Hardskillsgrey>
    </div>
  );
}
