// step 2: import that context in this component file and use the context using useContext hook just (so many use lol)
// syntax of useContext is similar to useState 
// damn i had to write these same lines twice
import React, { useContext } from "react";
import { themeContext } from "../context/context";
function Toggler() {
  const { light, setLight } = useContext(themeContext);
  const toggleTheme = () => setLight((prev) => !prev);
  return (
    <>
      <span>
        This button Controls the theme mode:{" "}
        <button onClick={toggleTheme}>Change Theme</button>
      </span>
    </>
  );
}

export default Toggler;
