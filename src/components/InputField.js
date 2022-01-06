import React from "react";

const InputField = ({ name, label, type, value, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}: </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export default InputField;
