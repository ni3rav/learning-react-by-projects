//? if button is made into a component, then where will be the state managed ? inside of the button component file or in this

import React, { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("bg-black");
  return (
    <div className={`h-screen w-screen ${bgColor}`}>
      <div className="w-full h-1/6 flex items-center justify-center gap-12">
        <button className="text-white" onClick={() => setBgColor("bg-red-500")}>
          bg-red-500
        </button>

        <button
          className="text-white"
          onClick={() => setBgColor("bg-green-500")}
        >
          bg-green-500
        </button>

        <button className="text-white" onClick={() => setBgColor("bg-black")}>
          bg-black
        </button>
      </div>
    </div>
  );
}
export default App;