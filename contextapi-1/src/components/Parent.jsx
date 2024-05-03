
import React, { useContext } from 'react';
import Child from './Child';
import { CounterContext } from '../context/context';

function Parent() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count (Parent)</button>
      <p>Count: {count}</p>
      <Child />
    </div>
  );
}

export default Parent;
