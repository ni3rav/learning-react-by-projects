import React from "react";
import Context from "../context/Context";

const Login = () => {
  const { user, setUser } = React.useContext(Context);

  function handleChange(e) {
    setUser(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="Enter your username"
      />
      <input type="password" placeholder="Enter your password" />
      <button>Submit</button>
    </>
  );
};

export default Login;
