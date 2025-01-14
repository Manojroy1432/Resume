import React, { useContext } from "react";
import { themeContext } from "../App";

function Skills() {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div className="w-[80%] mx-auto max-w-6xl my-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 ">
        {/*first col */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ol
            className={`text-xs sm:text-sm ${
              theme ? "text-blue-300" : "text-orange-400"
            }`}
          >
            <li className="text-sm my-1 cursor-pointer">React</li>
            <li className="text-sm my-1 cursor-pointer">Bootstrap</li>
            <li className="text-sm my-1 cursor-pointer">React</li>
          </ol>
        </div>
        {/*second col */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ol
            className={`text-xs sm:text-sm ${
              theme ? "text-blue-300" : "text-orange-400"
            }`}
          >
            <li className="text-sm my-1 cursor-pointer">React</li>
            <li className="text-sm my-1 cursor-pointer">React</li>
            <li className="text-sm my-1 cursor-pointer">React</li>
          </ol>
        </div>
        {/*Third col */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ol
            className={`text-xs sm:text-sm ${
              theme ? "text-blue-300" : "text-orange-400"
            }`}
          >
            <li className="text-sm my-1 cursor-pointer">React</li>
            <li className="text-sm my-1 cursor-pointer">React</li>
            <li className="text-sm my-1 cursor-pointer">React</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Skills;
