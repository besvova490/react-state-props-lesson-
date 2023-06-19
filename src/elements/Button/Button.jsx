import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  danger: PropTypes.bool,
  number: PropTypes.number,
};

export default Button;
