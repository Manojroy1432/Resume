import React, { useContext, useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { themeContext } from "../App";

function Navber() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useContext(themeContext);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(!theme);
  };

  return (
    <div className="flex w-full items-center justify-between max-w-6xl">
      <div></div>
      <div className="">
        {theme ? (
          <button onClick={toggleDarkMode}>
            {" "}
            <MdWbSunny />
          </button>
        ) : (
          <button>
            {" "}
            <BsFillMoonStarsFill onClick={toggleDarkMode} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navber;
