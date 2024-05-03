import React, { useContext } from "react";
import { themeContext } from "../context/context";

function Block() {
  const { light, setLight } = useContext(themeContext);
  const blockStyle = {
    height: "500px",
    width: "500px",
    backgroundColor: light ? "white" : "black",
    color: "red",
  };
  return (
    <>
      <h3>This Block's Background Color is Controlled by the context</h3>
      <div style={blockStyle}>
      </div>
    </>
  );
}

export default Block;
