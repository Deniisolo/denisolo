import { Formcontacme } from "../components/molecules/Formcontacme";
import { Infomation } from "../components/molecules/Infomation";

import "./Contactme.css";
export function Contactme() {
  return (
    <section className="contactmeContainer">
      <section className="contactmeContaineChildOne">
        <Formcontacme></Formcontacme>
      </section>
      <section className="contactmeContaineChildTwo">
        <Infomation></Infomation>
      </section>
    </section>
  );
}
