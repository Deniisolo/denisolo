import "./Socialmedialogo.css"

export function Socialmedialogo(props) {
    return <button className="SocialmedialogoButton">
    <img
      src={`${process.env.PUBLIC_URL}${props.srcsocialmedialogos}`}
      alt="SocialmedialogoButton"
    className="Socialmedialogoimg"/>
  </button>
}