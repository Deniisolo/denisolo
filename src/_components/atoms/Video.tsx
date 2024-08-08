export function Video() {
  return (
    <div className="video">
      <video>
        <source
          src={process.env.PUBLIC_URL + "/Video/presentationVideoDenisolo.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
