import "./Socialmedialogo.css";

export function Socialmedialogo(props) {
  return (
    <button
      className="SocialmedialogoButton"
      onClick={() => {
        window.open(props.urlSocialMedia, "_blank");
      }}
    >
      {props.img}
    </button>
  );
}
