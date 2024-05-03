
import React, { useContext } from "react";
import { CounterContext } from "../context/context";

function GrandChild() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h4>GrandChild Component</h4>
      <button onClick={() => setCount(count + 1)}>
        Increment Count (GrandChild)
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default GrandChild;
