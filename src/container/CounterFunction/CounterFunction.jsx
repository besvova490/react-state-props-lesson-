import { useState, useEffect } from "react";

// assets
import "../../assets/styles/containers/counter.scss";


function CounterFunction() {
  const [number, setNumber] = useState(5);
  const [inputValue, setInputValue] = useState("123");

  const handleClick = () => {
    setNumber(number + 1);
  };

  const setDefaultInputValue = () => {
    setInputValue("Hello World");
  }

  useEffect(() => {
    console.log("element is on page");
  }, []);


  useEffect(() => {
    return () => alert("Oppps!!!!");
  }, []);

  // console.log("render");

  return (
    <div className="lsn-counter">
      <p>{ number }</p>
      <button onClick={handleClick}>Count</button>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={setDefaultInputValue}>Set default</button>
      </div>

      <code>{inputValue}</code>
    </div>
  );
}

export default CounterFunction;
