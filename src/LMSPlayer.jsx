import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import Author from "./Author";
import Accordian from "./Accordian";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
const LMSPlayer = () => {
  const [videoURLs, setVideoURLs] = useState([
    "https://www.youtube.com/embed/f7AtwOVEfuM?si=_6HVlrY8BGKuaVYK",
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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
      {/* Header */}
      <Navbar />

      {/* Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Video Player + Info */}
        <div className="w-full md:w-2/3 p-4">
          {/* Video */}
          <div className="relative">
            {/* Video Player Wrapper */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden ">
              <ReactPlayer
                config={{
                  file: { attributes: { controlsList: "nodownload" } },
                }}
                url={videoURLs[currentVideoIndex]}
                playing={isPlaying}
                controls={true}
                width="100%"
                height="100%"
                onEnded={() => {
                  if (currentVideoIndex < videoURLs.length - 1) {
                    setCurrentVideoIndex((prev) => prev + 1);
                  } else {
                    setIsPlaying(false);
                  }
                }}
              />
            </div>

            <div>
              <button
                className="absolute top-[88%] left-[15%]"
                onClick={handlePrevious}
                disabled={currentVideoIndex === 0}
                style={{ marginRight: "10px" }}
              >
                <BiSkipPrevious size={30} />
              </button>
              <button
                className="absolute top-[88%] left-[18%]"
                onClick={handleNext}
                disabled={currentVideoIndex === videoURLs.length - 1}
              >
                <BiSkipNext size={30} />
              </button>
            </div>
            {/* Navigation Buttons */}
          </div>

          {/* Info */}
          <div className="">
            {/* Author Section */}
            <Author />
          </div>
        </div>

        {/* Right: Accordion Lecture List */}
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
            Full Stack Course
          </h1>
          <p className="text-lg font-semibold my-4">
            <p onClick={handleNext}>
              This is a completely beginner-friendly Full Stack Course designed
              to help students with Data Structures and Algorithms
              ,Javascript,React,Node,Express with 200+ hrs of content.{" "}
            </p>
          </p>
          <h2
            className="text-2xl font-semibold mb-4 mt-4"
            onClick={handleBoxClick}
          >
            Syllabus
          </h2>
          <Accordian />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LMSPlayer;
