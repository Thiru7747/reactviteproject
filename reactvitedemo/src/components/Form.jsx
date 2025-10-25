import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  return (
    <>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        ></input>
      </form>
    </>
  );
}

export default Form;
