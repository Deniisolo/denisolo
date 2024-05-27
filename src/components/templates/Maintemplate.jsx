import { Navbar } from "../molecules/Navbar";
import "./Maintemplate.css";
export function Maintemplate(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="contentStyle"> {props.content} </div>
    </div>
  );
}
