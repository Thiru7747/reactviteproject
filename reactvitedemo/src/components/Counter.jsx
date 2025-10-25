import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function handleIncrement() {
    setCount(count + incrementBy);
  }
  function handleDecrement() {
    setCount(count - incrementBy);
  }
  function handleIncrementBy() {
    setIncrementBy(incrementBy + 1);
  }
  function handleDecrementBy() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <>
      <h1>the number is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>increment the count by : {incrementBy}</h1>
      <button onClick={handleIncrementBy}>Increment By</button>
      <button onClick={handleDecrementBy}>Decrement By</button>
    </>
  );
}

export default Counter;
