import React from "react";

const DisplayGeneral = ({ info, onEdit, onDel }) => {
  const { name, title, tel, email } = info;
  return (
    <React.Fragment>
      <h1>Name: {name}</h1>
      <p>Title: {title}</p>
      <p>Tel: {tel}</p>
      <p> Email: {email} </p>

      <i className="fas fa-edit" onClick={onEdit}></i>
      <i className="fas fa-trash" onClick={onDel}></i>
    </React.Fragment>
  );
};

export default DisplayGeneral;
