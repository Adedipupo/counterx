import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <button 
      style= {{ backgroundColor : counter < 0 ? "red" : "green"}}
      onClick={increment}>
        Add Count
        </button>

      <p>
        {counter}
      </p>
      <button 
      onClick={decrement}>
        Lower Count
        </button>
    </div>
  );
}

export default App;
