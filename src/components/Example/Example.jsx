import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      {/* Use the named function as the onClick handler */}
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Example;
