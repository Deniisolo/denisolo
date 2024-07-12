import "./Card.css";
import { Openmodal } from "./Openmodal";
export function Card(props) {
  return (
    <div className="card">
      <div className="cardChildOne" style={{ "background-color": props.color }}>
        {props.cardOne}
      </div>
      <div className="cardChildTwo">
        {props.cardTwo} <Openmodal></Openmodal>
      </div>
    </div>
  );
}
