import React, { useContext } from "react";
import projects from "../assets/assert";
import { themeContext } from "../App";

function Projects() {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div className="border rounded-md border-gray-600 p-2 sm:p-4 md:p-6 m-1 w-[90%] mx-auto max-w-5xl my-5">
      <h1 className="m-3 text-xl md:text-2xl font-bold">My All Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((item) => (
          <p key={item.id} className="p-1 m-2 text-xs sm:text-sm ">
            {item.id}.{" "}
            <span className={`${theme ? "text-gray-400" : "text-gray-600"}`}>
              {item.heading}
            </span>
            ...
            <a
              href={item.link}
              className={`mx-2 text-blue-500 hover:underline cursor-pointer `}
            >
              read more
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Projects;
