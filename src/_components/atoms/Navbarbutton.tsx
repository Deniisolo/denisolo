import "./Navbarbutton.css";

export function Navbarbutton(props) {
  return (
    <button className="Navbarbutton" onClick={props.onClick}>
      {props.navBarinfo}
    </button>
  );
}
