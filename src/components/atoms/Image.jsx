import "./Image.css";

export function Image() {
  return (
    <img
      className="imgDenisoloTech"
      src={`${process.env.PUBLIC_URL}/img/DenisTech.jpeg`}
      alt="fotodeprogramadora"
    ></img>
  );
}
