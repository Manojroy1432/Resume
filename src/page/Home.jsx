import React, { useContext } from "react";
import profile from "../assets/profile.jpeg";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import { themeContext } from "../App";

function Home() {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col pt-8">
      {/*image */}
      <img
        src={profile}
        alt="Profile"
        className="w-[40%] max-w-[100px] rounded-full mt-3"
      />
      {/*name */}
      <h1 className="my-1 text-xl md:text-2xl font-bold">Manoj Roy</h1>
      {/*Address */}
      <h2 className={`text-lg ${theme ? "text-gray-300" : "text-gray-600"}`}>
        Studend | Full Stack Devloper
      </h2>
      <Contact />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
