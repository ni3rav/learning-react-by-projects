import React, { useState } from "react";
import { CounterContext } from "./context/context";
import Parent from "./components/Parent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
