import { useState } from "react";
import Hello from "./components/Hello";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="App">
      <Hello name="Bob" greet="How are you?" />
      <Hello name="Mike" greet="How it is going?" />
      <h1>Cars</h1>
      <Cars />
    </div>
  );
}

export default App;
