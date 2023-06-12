import React from "react";

// hooks
import useCounter from "../../hooks/useCounter";

// assets
import "../../assets/styles/counter-component.scss";


function CounterComponent() {
  const [value, setValue] = useCounter();


  return (
    <div className="lsn-counter-component">
      <code className="lsn-counter-component__label">
        { value }
      </code>
      <button
        className="lsn-counter-component__button"
        // when we depend from prev state
        onClick={() => setValue()}
      >
        Increment
      </button>
    </div>
  );
}

export default CounterComponent;
