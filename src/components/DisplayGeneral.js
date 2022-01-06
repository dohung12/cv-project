import React from "react";
import reactDom from "react-dom";

const DisplayGeneral = ({ info, onEdit, onDel }) => {
  const { name, title, tel, email } = info;
  return reactDom.createPortal(
    <React.Fragment>
      <h1> {name}</h1>
      <p>{title}</p>
      <p>Tel: {tel}</p>
      <p> Email: {email} </p>

      <div className="btn-container">
        <i className="fas fa-edit" onClick={onEdit}></i>
        <i className="fas fa-trash" onClick={onDel}></i>
      </div>
    </React.Fragment>,
    document.querySelector(".display-general")
  );
};

export default DisplayGeneral;
