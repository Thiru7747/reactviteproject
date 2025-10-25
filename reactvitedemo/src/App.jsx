import { useState } from "react";
import Hello from "./components/Hello";
import Cars from "./components/Cars";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Hello name="Bob" greet="How are you?" />
      <Hello name="Mike" greet="How it is going?" />
      <h1>Cars</h1>
      <Cars />
      <Message />
      <Counter />
      <br></br>
      <Form />
    </div>
  );
}

export default App;
