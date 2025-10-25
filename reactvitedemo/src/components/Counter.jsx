import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement(){
    setCount(count+1);
  }
  function handleDecrement(){
    setCount(count-1);
  }
  return (
    <>
      <h1>the number is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
