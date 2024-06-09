import "./Logo.css";
import { useNavigate } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/");
      }}
      className="logoName"
    >
      Denis Alvarez
    </button>
  );
}
