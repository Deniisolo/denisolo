import React from "react";
import "./Cv.css";
export function Cv() {
  return (
    <div className="cvContainer">
      <iframe
        title="CvDenisAlvarez"
        src={`${process.env.PUBLIC_URL}/PDF/CV_Denis_Alvarez_Front-End_Developer.pdf`}
        width="100%"
        height="100%"
      />
    </div>
  );
}
