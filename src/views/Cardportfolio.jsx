import { Paragraphinfo } from "../components/atoms/Paragraphinfo";
import { Littletittle } from "../components/atoms/Littletittle";
import { Carrusel } from "../components/organisms/Carrusel";
export function Cardportfolio(props) {
  return (
    <section>
      <Carrusel images={props.images}></Carrusel>
      <Littletittle Littletittle={props.Littletittle}></Littletittle>
      <Paragraphinfo Paragraphinfop={props.Paragraphinfop}></Paragraphinfo>
    </section>
  );
}
