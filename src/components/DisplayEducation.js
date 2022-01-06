import React from "react";
import reactDom from "react-dom";

const DisplayEducation = ({ education, onEdit, onDel }) => {
  const displayList = [];
  for (let edu in education) {
    const { id, dateStart, dateEnd, titleOfStudy, schoolName } = education[edu];

    displayList.push(
      <div key={id} data-id={id} className="edu">
        <p className="dateOfStudy">
          {dateStart} - {dateEnd}
        </p>
        <h4 className="titleOfStudy">{titleOfStudy}</h4>
        <p className="schoolName">{schoolName}</p>

        <div className="btn-container">
          <i className="fas fa-edit" onClick={onEdit}></i>
          <i className="fas fa-trash" onClick={onDel}></i>
        </div>
      </div>
    );
  }
  return reactDom.createPortal(
    <React.Fragment>{displayList}</React.Fragment>,
    document.querySelector(".display-education")
  );
};
export default DisplayEducation;
