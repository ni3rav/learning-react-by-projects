import React from "react";
import Context from "./Context";

const ContextProvider = ({ child }) => {
  const [user, setUser] = React.useState("");
  return <Context.Provider value={{ user, setUser }}>{child}</Context.Provider>;
};

export default ContextProvider;
