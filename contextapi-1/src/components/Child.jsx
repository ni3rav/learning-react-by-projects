
import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { CounterContext } from "../context/context";

function Child() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment Count (Child)
      </button>
      <p>Count: {count}</p>
      <GrandChild />
    </div>
  );
}

export default Child;
