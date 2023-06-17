import React from "react";

// assets
import "../../assets/styles/elements/button.scss";


function Button({ children, className = "", htmlType = "button", type = "primary", ...rest }) {

  const buttonClassNames = `mdst-button ${className} ${type ? `mdst-button_type-${type}` : ""}`;
  
  return (
    <button type={htmlType} className={buttonClassNames} { ...rest }>
      { children }
    </button>
  )
};

export default Button;
