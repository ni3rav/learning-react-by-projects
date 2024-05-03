import React, { useState } from "react";
import { themeContext } from "./context/context";
import Block from "./components/Block";
import Toggler from "./components/Toggler";

function App() {
  const [light, setLight] = useState(false);
  return (
    <>
      <themeContext.Provider value={{ light, setLight }}>
        <Block />
        <Toggler />
      </themeContext.Provider>
    </>
  );
}

export default App;
