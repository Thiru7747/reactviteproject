import { useState } from "react";

function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        ></input>
        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          value={name.lastname}
        ></input>
      </form>
    </>
  );
}

export default Form;
