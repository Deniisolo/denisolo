import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import { Sendbutton } from "../atoms/Sendbutton";
import "./Formcontacme.css";

export function Formcontacme() {
  return (
    <div className="containerFormcontacme">
      <Label
        laberinformation={
          "If you are interested in my work, please contact me  👩‍💻 "
        }
      ></Label>
      <Input></Input>
      <Sendbutton></Sendbutton>
    </div>
  );
}
