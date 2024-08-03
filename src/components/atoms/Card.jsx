import React from "react";
import "./Card.css";
import { Openmodal } from "./Openmodal";

export function Card(props) {
  return (
    <div className="card">
      <div className="cardChildOne" style={{ backgroundColor: props.color }}>
        {props.cardOne}
      </div>

      <div className="cardChildTwo">
        {props.cardTwo} <Openmodal portafolio={props.Portfolio}></Openmodal>
      </div>
    </div>
  );
}
