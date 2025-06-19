import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-wrapper">
      <div className="counter-container">
        <h2>Counter App</h2>
        <div className="counter-display">{count}</div>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}> Increment</button>
          <button onClick={handleDecrement} disabled={count === 0}> Decrement</button>
          <button onClick={() => setCount(0)}>🔁 Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
