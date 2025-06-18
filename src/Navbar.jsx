import { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0b0e1c] text-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-7">
        <div className="text-4xl font-bold">
          {theme == "LIGHT" ? (
            <>
              <span className="text-[#BF8FFF]">Cod</span>
              <span className="text-[#CEFF8F]">Prog</span>
            </>
          ) : (
            <>
              <span className="text-[#BF8FFF]">We</span>
              <span className="text-[#CEFF8F]">Can Talk</span>
            </>
          )}
        </div>

        {/* Center Search & Theme */}
        <div className="flex items-center space-x-4 flex-1 justify-center">
          {/* Search Box */}
          <div className="flex items-center bg-[#0b0e1c] border border-gray-600 rounded px-3 py-2 w-72">
            <input
              type="text"
              placeholder="search"
              className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
              />
            </svg>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "LIGHT" ? "DARK" : "LIGHT"))
            }
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded hover:bg-gray-700 transition"
          >
            <MdOutlineWbSunny />
            <span className="font-bold">{theme}</span>
          </button>
        </div>
      </div>

      {/* Right Auth Buttons */}
      <div className="flex items-center space-x-3">
        <button className="px-4 py-2 border border-teal-300 text-teal-300 rounded hover:bg-teal-900 transition font-semibold">
          SIGN IN
        </button>
        <button className="px-4 py-2 bg-teal-300 text-gray-900 rounded hover:bg-teal-200 transition font-semibold">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
