import React, { useState } from "react";

// assets
import "../../assets/styles/counter-component.scss";


function WithCounter({ children }) {
  const [value, setValue] = useState(0);


  return (
    <div>
      { children }
    </div>
  );
}

export default WithCounter;
