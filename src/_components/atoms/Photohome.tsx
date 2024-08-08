import "./Photohome.css";

export function Photohome() {
  return (
    <img
      className="responsive-photo"
      src={`${process.env.PUBLIC_URL}/img/phoneDenis.png`}
      alt="photodeDenisolo"
    />
  );
}
