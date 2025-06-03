import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [videoURL, setVideoURL] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
      setIsPlaying(false);
    } else {
      alert("Please select a valid video file.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.playerWrapper}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          React Player - Local File
        </h2>
        <input type="file" accept="video/*" onChange={handleFileChange} />

        {videoURL && (
          <>
            <div style={styles.player}>
              <ReactPlayer
                url={videoURL}
                playing={isPlaying}
                controls={true}
                width="100%"
                height="100%"
                onEnded={() => setIsPlaying(false)}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  playerWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  player: {
    position: "relative",
    width: "100%",
    height: "100%",
    marginTop: "1rem",
    backgroundColor: "#000",
  },
};

export default VideoPlayer;
