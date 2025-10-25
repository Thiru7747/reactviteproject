import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  return (
    <>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Todo;
