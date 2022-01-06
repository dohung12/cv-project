import React from "react";
import "./InputField.css";
const InputField = ({ name, label, type, value, placeholder, onChange }) => {
  return (
    <div className={name}>
      {/* <label htmlFor={name}>{label}: </label> */}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
