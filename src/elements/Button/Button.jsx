import React from "react";

// assets
import "../../assets/styles/elements/button.scss";


function Button({ children, htmlType, onClick }) {


  return (
    <button className="lsn-button" type={htmlType} onClick={onClick}>
      { children }
    </button>
  );
}

export default Button;
