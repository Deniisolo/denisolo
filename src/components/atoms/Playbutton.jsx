import "./Playbutton.css";

export function Playbutton() {
  return (
    <button className="playVideoButton">
      <img
        src={`${process.env.PUBLIC_URL}/img/playbutton.png`}
        alt="playbutton"
      className="imgPlayVideoButton"/>
    </button>
  );
}
