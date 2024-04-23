import React from "react";
import ContextProvider from "./context/ContextProvider";
import Login from "./comps/Login";
import Profile from "./comps/Profile";

function App() {
  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
