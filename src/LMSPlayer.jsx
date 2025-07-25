import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import Author from "./Author";
import Accordian from "./Accordian";
const LMSPlayer = () => {
  const [theme, setTheme] = useState("LIGHT");
  const [videoURLs, setVideoURLs] = useState([
    "https://www.youtube.com/embed/f7AtwOVEfuM?si=_6HVlrY8BGKuaVYK",
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(60); // default 60%
  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const videoFiles = files.filter((file) => file.type.startsWith("video/"));
    if (videoFiles.length === 0) {
      alert("Please select valid video files.");
      return;
    }
    const urls = videoFiles.map((file) => URL.createObjectURL(file));
    setVideoURLs(urls);
    setCurrentVideoIndex(0);
    setIsPlaying(true);
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };
  const handleNext = () => {
    if (currentVideoIndex < videoURLs.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
      setIsPlaying(true);
    }
  };
  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prev) => prev - 1);
      setIsPlaying(true);
    }
  };
  return (
    <div className="bg-gray-900 min-h-screen text-white mx-9">
      <Navbar setTheme={setTheme} theme={theme} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <video
                src={videoURLs[currentVideoIndex]}
                autoPlay
                controls
                controlsList="nodownload"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 rounded-lg"
                style={{
                  backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
                }}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2"></label>
            <input
              type="range"
              min="0"
              max="100"
              value={overlayOpacity}
              onChange={(e) => setOverlayOpacity(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="">
            <Author />
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4 border-t md:border-t-0 md:border-l border-gray-700">
          <input
            type="file"
            accept="video/*"
            ref={fileInputRef}
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <h1 className="text-3xl font-bold mb-4" onClick={handlePrevious}>
            {theme == "LIGHT" ? "Full Stack Course" : " Course"}
          </h1>
          <p className="text-lg font-semibold my-4">
            <p onClick={handleNext}>
              {theme == "LIGHT"
                ? " This is a completely beginner-friendly Full Stack Course designed to help students with Data Structures and Algorithms ,Javascript,React,Node,Express with 200+ hrs of content."
                : "This is a completely beginner-friendly English Course designed to help students  with 200+ hrs of content."}
            </p>
          </p>
          <h2
            className="text-2xl font-semibold mb-4 mt-4"
            onClick={handleBoxClick}
          >
            Syllabus
          </h2>

          <Accordian theme={theme} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LMSPlayer;
