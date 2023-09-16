import React, { useState } from "react";
import { Counter, Count, Button } from "./main.js";

const App = () => {
  return (
    <div>
      <h1>React Counter App</h1>
      <Counter />
      <Count count={count} />
      <Button onAddOne={increment} />
    </div>
  );
};

export default App;
