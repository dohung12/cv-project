import React from "react";

const InputField = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>{props.label}: </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};

export default InputField;
