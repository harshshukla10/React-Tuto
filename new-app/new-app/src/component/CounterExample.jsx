import React from "react";
import { useOneState } from "./useOneState";
import "./footer.css";

export function CounterExample() {
  const [count, setCount] = useOneState(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Button clicked {count} times</h2>
      <div className="counter-value">{count}</div>
      
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}