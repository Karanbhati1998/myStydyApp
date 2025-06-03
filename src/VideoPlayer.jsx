import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [videoURL, setVideoURL] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
      setIsPlaying(true);
    } else {
      alert("Please select a valid video file.");
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={styles.container}>
      {!videoURL ? (
        <>
          <div style={styles.uploadBox} onClick={handleBoxClick}>
            <span style={styles.boxText}>📺 Watch the Course</span>
          </div>
          <input
            type="file"
            accept="video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </>
      ) : (
        <div style={styles.playerWrapper}>
          <ReactPlayer
            url={videoURL}
            playing={isPlaying}
            controls={true}
            width="100%"
            height="100%"
            onEnded={() => setIsPlaying(false)}
          />
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      )}
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
  uploadBox: {
    width: "300px",
    height: "150px",
    border: "2px dashed #007bff",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    transition: "0.3s ease",
  },
  boxText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
  },
  playerWrapper: {
    width: "90vw",
    maxWidth: "800px",
    aspectRatio: "16 / 9",
    backgroundColor: "#000",
    position: "relative",
  },
};

export default VideoPlayer;
