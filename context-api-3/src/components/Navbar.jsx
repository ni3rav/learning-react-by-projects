import React, { useContext } from "react";
import { usernameContext } from "../Context";

function Navbar() {
  const { username } = useContext(usernameContext);
  return (
    <nav className="p-6 flex flex-wrap items-center justify-center gap-12 h-1/5 bg-slate-950 text-white">
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
      <a>{username}</a>
    </nav>
  );
}

export default Navbar;
