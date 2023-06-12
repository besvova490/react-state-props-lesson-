import React from "react";

// hooks
import useCounter from "../../hooks/useCounter";

// assets
import "../../assets/styles/counter-component.scss";


function ReachInput() {
  const [value, setValue] = useCounter(2);


  return (
    <div className="lsn-counter-component">
      <code className="lsn-counter-component__label">
        { value }
      </code>
      <input
        placeholder="Input placeholder"
        type="text"
        className="lsn-counter-component__input"
        onBlur={() => setValue(state => state + 1)}
      />
    </div>
  );
}

export default ReachInput;
