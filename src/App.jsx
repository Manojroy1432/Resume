import React, { createContext, useState } from "react";
import Navber from "./component/Navber";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme ? "dark" : "light"}`}>
        <BrowserRouter>
          <Navber />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext };
