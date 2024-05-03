import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { usernameContext } from "./Context";
function App() {
  const [username, setUsername] = useState("no name hehe");
  return (
    <>
      <usernameContext.Provider value={{ username, setUsername }}>
        <Navbar />
        <Form />
      </usernameContext.Provider>
    </>
  );
}

export default App;
