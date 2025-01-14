import React, { createContext, useState } from "react";
import Navber from "./component/Navber";
const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Navber />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext };
