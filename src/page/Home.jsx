import React from "react";
import profile from "../assets/profile.jpeg";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";

function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      {/*image */}
      <img
        src={profile}
        alt="Profile"
        className="w-[40%] max-w-[100px] rounded-full mt-3"
      />
      {/*name */}
      <h1 className="my-1 text-xl md:text-2xl">Manoj Roy</h1>
      {/*Address */}
      <h2 className="text-lg ">Studend | Full Stack Devloper</h2>
      <Contact />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
