"use client";

import { LucidePlay } from "lucide-react";
import { useRef, useState } from "react";

export function PlayButton() {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);

  function handlePlayVideo() {
    setVideoVisible(true);
    setTimeout(() => {
      if (videoRef.current) {
        (videoRef.current as HTMLVideoElement).play().catch((error) => {
          console.error("Error al intentar reproducir el video: ", error);
          setVideoVisible(false);
        });
      }
    }, 100);
  }

  function handleVideoEnded() {
    setVideoVisible(false);
  }

  return (
    <div className="flex h-[300px] max-w-[600px] items-center justify-center">
      <button
        className={`absolute ${isVideoVisible ? "hidden" : "block"} animate-bounce rounded-full bg-[#716af2] p-5 text-white`}
        onClick={handlePlayVideo}
      >
        <LucidePlay width={40} height={40} />
      </button>

      <div
        className={`${isVideoVisible ? "w-[500px] p-2 opacity-100" : "w-0 opacity-0"} rounded-md bg-[#918ce7] transition-all`}
      >
        <video
          ref={videoRef}
          className="rounded-sm"
          controls
          onEnded={handleVideoEnded}
        >
          <source src={`./presentationVideoDenisolo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
