import React from "react";
import reactDom from "react-dom";
const DisplayExperiences = ({ experiences, onEdit, onDel }) => {
  const displayList = [];
  for (const exp of experiences) {
    const {
      id,
      workDateStart,
      workDateEnd,
      companyName,
      positionTitle,
      mainTask,
    } = exp;

    displayList.push(
      <div key={id} data-id={id} className="exp">
        <p className="workTime">
          {workDateStart} - {workDateEnd}
        </p>
        <h4 className="company-name"> {companyName} </h4>
        <p className="pos-title"> {positionTitle} </p>
        <p className="main-task"> {mainTask} </p>

        <div className="btn-container">
          <i className="fas fa-edit" onClick={onEdit}></i>
          <i className="fas fa-trash" onClick={onDel}></i>
        </div>
      </div>
    );
  }
  return reactDom.createPortal(
    <React.Fragment>{displayList}</React.Fragment>,
    document.querySelector(".display-experience")
  );
};

export default DisplayExperiences;
