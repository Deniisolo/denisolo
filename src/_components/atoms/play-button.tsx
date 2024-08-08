import React, { useRef, useState } from "react";
import "./Playbutton.css";

export function Playbutton() {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setVideoVisible(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error al intentar reproducir el video: ", error);
        });
      }
    }, 100);
  };

  return (
    <div className="playButtonContainer">
      {!isVideoVisible && (
        <button className="playVideoButton" onClick={handlePlayVideo}>
          <img
            src={`${process.env.PUBLIC_URL}/img/playbutton.png`}
            alt="playbutton"
            className="imgPlayVideoButton"
          />
        </button>
      )}
      {isVideoVisible && (
        <div className="videoCard">
          <video ref={videoRef} className="videoPlayer" controls>
            <source
              src={`${process.env.PUBLIC_URL}/presentationVideoDenisolo.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
