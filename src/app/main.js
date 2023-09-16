import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const Count = ({ count }) => {
  return (
    <div>
      <h2>Count</h2>
      <p>Count value: {count}</p>
    </div>
  );
};

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Add 1!</button>;
};

export { Counter, Count, Button };
