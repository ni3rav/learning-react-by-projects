import { useState } from "react";
import { ThemeContextProvider } from "./context/Context";
import Display from "./components/Display";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (<ThemeContextProvider>
      <Display />
      <ToggleButton />
  </ThemeContextProvider>)
}

export default App;
