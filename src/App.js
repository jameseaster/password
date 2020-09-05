import React, { useState } from "react";
import "./App.css";

import passwordGenerator from "./password";

function App() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setPassword(passwordGenerator(length));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setLength(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="number"
        min={0}
        max={100}
        value={length}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Generate Password</button>
      {password && <h3>{password}</h3>}
    </div>
  );
}

export default App;
