import React from "react";

// assets
import "../../assets/styles/elements/input.scss";


function Input({ label, error, placeholder, type = "text", value, onChange }) {


  return (
    <div className="lsn-input-wrapper">
      { label && <label className="lsn-input-wrapper__label">{ label }</label> }
      <input
        type={type}
        className="lsn-input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      { error && <span className="lsn-input-wrapper__error">{ error }</span> }
    </div>
  );
}

export default Input;
