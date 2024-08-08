import "./showCvButton.css";
import { useNavigate } from "react-router-dom";
export function ShowCvButton(props) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/cv");
      }}
      className="cvButton"
    >
      {props.CvButton}
    </button>
  );
}
