import "./Cv.css";
export function Cv() {
  return (
    <div className="cvContainer">
      <embed
        title="CvDenisAlvarez"
        src={`${process.env.PUBLIC_URL}/CV_Denis_Alvarez_Front-End_Developer.pdf`}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
}
