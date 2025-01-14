import React, { useContext } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { themeContext } from "../App";

function Contact() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="mt-7 mb-4 text-sm sm:text-xl">
      <div
        className={`flex items-center justify-center gap-2 sm:gap-2 md:gap-3 ${
          theme ? "text-gray-200" : "text-gray-700"
        }`}
      >
        <span className="relative cursor-pointer group">
          <FaSquareGithub />
          <p
            className={`hidden group-hover:flex rounded-full px-2  absolute top-[-25px] md:top-[-30px] left-[-20px] text-[10px] ${
              theme ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
            }`}
          >
            manoj1321
          </p>
        </span>
        <span className="relative cursor-pointer group">
          <FaSquareXTwitter />
          <p
            className={`hidden group-hover:flex rounded-full px-2  absolute top-[-25px] md:top-[-30px] left-[-20px] text-[10px] ${
              theme ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
            }`}
          >
            manoj1321
          </p>
        </span>
        <span className="relative cursor-pointer group">
          <ImLinkedin />
          <p
            className={`hidden group-hover:flex rounded-full px-2  absolute top-[-25px] md:top-[-30px] left-[-20px] text-[10px] ${
              theme ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
            }`}
          >
            manoj1321
          </p>
        </span>
        <span className="relative cursor-pointer group">
          <FaSquareInstagram />

          <p
            className={`hidden group-hover:flex rounded-full px-2  absolute top-[-25px] md:top-[-30px] left-[-20px] text-[10px] ${
              theme ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
            }`}
          >
            manoj1321
          </p>
        </span>
      </div>
    </div>
  );
}

export default Contact;
