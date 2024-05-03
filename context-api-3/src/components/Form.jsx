import React, { useContext, useState } from "react";
import { usernameContext } from "../Context";

function Form() {
  const { username, setUsername } = useContext(usernameContext);
  const [change, setChange] = useState("hehe no name");
  const handleChange = (e) => setChange(e.target.value);
  const updateToContext = () => setUsername(change);
  return (
    <>
      <div className="w-screen h-screen text-black flex items-center justify-center flex-wrap">
        <div className="h-4/6 w-2/4 flex flex-col items-center justify-center gap-6">
          <input
            type="text"
            placeholder="Enter Username"
            className="p-4 w-3/4 bg-slate-200"
            onChange={handleChange}
            required
          />

          <span className="w-full  flex flex-wrap justify-center items-center">
            <button className="bg-blue-500 p-2 w-28" onClick={updateToContext}>
              Login
            </button>
          </span>
          <span className="w-full  flex flex-wrap justify-center items-center">
            <h1 className="text-3xl"> Hello, {username}!</h1>
          </span>
        </div>
      </div>
    </>
  );
}

export default Form;
