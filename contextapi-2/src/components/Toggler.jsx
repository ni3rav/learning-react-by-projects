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
