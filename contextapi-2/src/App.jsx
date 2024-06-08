import React, { useState } from "react";
import { themeContext } from "./context/context";
import Block from "./components/Block";
import Toggler from "./components/Toggler";
// step 3: import all those components and context to App.jsx and pass the context value to components by wripping them in context provider and passing via value
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

