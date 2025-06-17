import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";

const lectures = [
  {
    id: 1,
    title: "Introduction to Javascript",
    duration: "10:32",
    description: "Learn what Javascript is and why it's useful.",
  },
  {
    id: 2,
    title: "Introduction to React",
    duration: "10:32",
    description: "Learn what React is and why it's useful.",
  },
  {
    id: 3,
    title: "Components & Props",
    duration: "14:20",
    description: "Understand how components and props work.",
  },
  {
    id: 4,
    title: "State & Lifecycle",
    duration: "18:45",
    description: "Manage dynamic data with state and lifecycle.",
  },
  {
    id: 5,
    title: "React Hooks",
    duration: "22:01",
    description: "Explore useState, useEffect and custom hooks.",
  },
  {
    id: 6,
    title: "Handling Events",
    duration: "09:58",
    description: "Learn how to handle user events in React.",
  },
  {
    id: 7,
    title: "Conditional Rendering",
    duration: "12:34",
    description: "Render content dynamically using conditions.",
  },
  {
    id: 8,
    title: "Lists and Keys",
    duration: "11:27",
    description: "Render multiple elements using arrays and keys.",
  },
  {
    id: 9,
    title: "Forms in React",
    duration: "16:45",
    description: "Build and manage forms with controlled components.",
  },

  {
    id: 10,
    title: "React Router Basics",
    duration: "20:10",
    description: "Navigate between pages with React Router.",
  },
];

const LMSPlayer = () => {
  const [selectedLecture, setSelectedLecture] = useState(lectures[0]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/embed/f7AtwOVEfuM?si=_6HVlrY8BGKuaVYK"
  );
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

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
    setSelectedLecture(lectures.find((l) => l.id === id));
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
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <ReactPlayer
              url={videoURL}
              playing={isPlaying}
              controls={true}
              width="100%"
              height="100%"
              onEnded={() => setIsPlaying(false)}
            />
          </div>

          {/* Info */}
          <div className="">
            {/* Author Section */}
            <div className="mt-12 px-4 md:px-9 py-4 bg-gray-900 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-6"> Author</h3>
              <div className="flex items-center gap-4">
                {/* Author Avatar */}
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <img
                    src="https://imgproxy.learnyst.com/https://learnyst-user-assets-cdn.learnyst.com/school-assets/schools/150122/teacher/IMG_7715_Original.jpg?w=48&h=48&resizetype=fit"
                    alt="Sanket Singh"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Author Name and Description */}
                <div className="flex flex-col">
                  <h6 className="text-lg font-semibold">Farz Ali</h6>
                  <p className="text-sm text-gray-300 mt-2 max-w-3xl leading-relaxed">
                    Farz is a Software Engineer 2 at Microsoft and an
                    Ex-Software Engineer at Google. Prior to Google, he has
                    worked at LinkedIn and InterviewBit as well. He was selected
                    for Google Summer of Code under Harvard University in 2019.
                    He has mentored thousands of students and has received great
                    feedback for his teaching skills. Sanket has spoken at PyCon
                    Italy, NDC Melbourne, and is an upcoming speaker at React
                    Nexus and PyCon MEA.
                  </p>
                </div>

                {/* Social Icons - Optional Placeholder SVGs */}
                <div className="ml-auto flex gap-4">
                  {/* Placeholder for YouTube */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 1024 1024"
                    fill="white"
                    className="cursor-pointer hover:text-red-500 transition"
                  >
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z" />
                  </svg>

                  {/* Placeholder for LinkedIn */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 1024 1024"
                    fill="white"
                    className="cursor-pointer hover:text-blue-500 transition"
                  >
                    <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z" />
                    <path d="M64 384h192v576h-192v-576z" />
                    <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Accordion Lecture List */}
        <div className="w-full md:w-1/3 p-4 border-t md:border-t-0 md:border-l border-gray-700">
          <input
            type="file"
            accept="video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <h1 className="text-3xl font-bold mb-4">Full Stack Course</h1>
          <p className="text-lg font-semibold my-4">
            <p>
              This is a completely beginner-friendly Full Stack Course designed
              to help students with Data Structures and Algorithms ,Javascript,React,Node,Express with 200+ hrs
              of content.{" "}
            </p>
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-4">Syllabus</h2>
          <div id="accordion-collapse">
            {lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="mb-2 border border-gray-700 rounded-lg"
              >
                <h2>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(lecture.id)}
                    className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-expanded={activeAccordion === lecture.id}
                  >
                    <span>{lecture.title}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        activeAccordion === lecture.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </h2>
                {activeAccordion === lecture.id && (
                  <div
                    className="p-4 text-gray-300 bg-gray-800 border-t border-gray-700"
                    onClick={handleBoxClick}
                  >
                    <p>{lecture.description}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Duration: {lecture.duration}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 px-4 md:px-9 py-8 bg-gray-800 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-4">📘 About This Course</h3>
        <div className="text-sm leading-relaxed space-y-4 text-gray-300">
          <p>
            This online course on Data Structures and Algorithms in JavaScript
            is designed to provide you with a comprehensive understanding of
            core programming concepts and their implementation in JavaScript.
            The course covers a wide range of topics, including arrays, linked
            lists, stacks, queues, trees, graphs, sorting algorithms, searching
            algorithms, and dynamic programming.
          </p>
          <p>
            The course begins with an introduction to JavaScript and its
            features, followed by an overview of data structures and algorithms.
            You will learn how to implement these structures and algorithms in
            JavaScript and apply them to solve real-world programming problems.
          </p>
          <p>
            Throughout the course, you will be presented with hands-on coding
            exercises, quizzes, and projects to help reinforce your learning. By
            the end of the course, you will have gained a deep understanding of
            how to leverage JavaScript to build efficient and scalable
            applications using data structures and algorithms.
          </p>

          <p>
            <strong>Advantages of Learning JavaScript:</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>High demand:</strong> JavaScript is in high demand in the
              tech industry, and there is a shortage of skilled JavaScript
              developers.
            </li>
            <li>
              <strong>Cross-platform:</strong> JavaScript is a cross-platform
              language that can be used to develop web applications for any
              device.
            </li>
            <li>
              <strong>Versatility:</strong> JavaScript is a versatile language
              that can be used for front-end development, back-end development,
              mobile app development, and more.
            </li>
            <li>
              <strong>Large community:</strong> JavaScript has a large and
              active community of developers who constantly contribute to its
              growth and development.
            </li>
          </ul>

          <p>
            <strong>Industry Relevance of JavaScript:</strong>
          </p>
          <ol className="list-decimal list-inside pl-4 space-y-1">
            <li>
              <strong>Front-end development:</strong> JavaScript is used to
              build interactive user interfaces and dynamic web applications on
              the client-side.
            </li>
            <li>
              <strong>Back-end development:</strong> JavaScript can be used to
              build scalable and efficient server-side applications using
              Node.js.
            </li>
            <li>
              <strong>Mobile app development:</strong> JavaScript frameworks
              like React Native and Ionic can be used to build cross-platform
              mobile applications.
            </li>
            <li>
              <strong>Data visualization:</strong> JavaScript is used to build
              data visualizations and interactive dashboards for businesses and
              organizations.
            </li>
          </ol>

          <p>
            The course will also cover a range of algorithms that are commonly
            used in programming. You will learn about sorting algorithms such as
            bubble sort, insertion sort, and quicksort. You will also learn
            about searching algorithms such as <strong>linear search</strong>,{" "}
            <strong>binary search</strong>, and{" "}
            <strong>depth-first search</strong>.
          </p>

          <p>
            By the end of this course, you will have a strong foundation in data
            structures and algorithms in JavaScript. You will be able to analyze
            problems and apply the appropriate data structure and algorithm to
            solve them. You will also be able to write efficient and optimized
            code using JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LMSPlayer;
