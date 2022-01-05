import React from "react";

const DisplayGeneral = (props) => {
  const { name, title, tel, email } = props;
  return (
    <React.Fragment>
      <h1>Name: {name}</h1>
      <p>Title: {title}</p>
      <p>Tel: {tel}</p>
      <p> Email: {email} </p>
    </React.Fragment>
  );
};

export default DisplayGeneral;
