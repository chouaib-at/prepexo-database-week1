import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>{feedback}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
