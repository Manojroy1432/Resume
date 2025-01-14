import React, { useContext } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { themeContext } from "../App";

function Contact() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="my-10 text-sm sm:text-xl">
      <div
        className={`flex items-center justify-center gap-1 sm:gap-2 md:gap-3 ${
          theme ? "text-gray-200" : "text-gray-700"
        }`}
      >
        <span className="relative cursor-pointer group">
          <FaSquareGithub />
          <p
            className={`hidden group-hover:flex rounded-full px-4 py-2 absolute top-[-40px] left-[-20px] text-xs ${
              theme ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
            }`}
          >
            manoj1321
          </p>
        </span>
        <FaSquareXTwitter />
        <ImLinkedin />
        <FaSquareInstagram />
      </div>
    </div>
  );
}

export default Contact;
