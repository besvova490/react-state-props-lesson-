import { useState, useEffect } from "react";


function useCounter(step = 1) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 10) {
      alert("is more 10");
    }
  }, [value]);

  const onChangeValue = () => {
    setValue(state => {
      const newValue = state + step;

      if (newValue > 10) {
        return state;
      }

      return newValue;
    });
  };

  return [value, onChangeValue];
}

export default useCounter;
