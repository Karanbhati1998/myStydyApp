import React, { useState } from "react";
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
const Accordian = () => {
  const [selectedLecture, setSelectedLecture] = useState(lectures[0]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
    setSelectedLecture(lectures.find((l) => l.id === id));
  };
  return (
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
            <div className="p-4 text-gray-300 bg-gray-800 border-t border-gray-700">
              <p>{lecture.description}</p>
              <p className="text-sm text-gray-400 mt-1">
                Duration: {lecture.duration}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
