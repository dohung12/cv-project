import React from "react";
import reactDom from "react-dom";

const DisplayEducation = ({ education, onEdit, onDel }) => {
  const displayList = [];
  for (let edu in education) {
    const { id, dateStart, dateEnd, titleOfStudy, schoolName } = education[edu];

    displayList.push(
      <div key={id} data-id={id}>
        <p className="dateOfStudy">
          {dateStart} - {dateEnd}
        </p>
        <h4 className="titleOfStudy">{titleOfStudy}</h4>
        <p className="schoolName">{schoolName}</p>
        <i className="fas fa-edit" onClick={onEdit}></i>
        <i className="fas fa-trash" onClick={onDel}></i>
      </div>
    );
  }
  return reactDom.createPortal(
    <React.Fragment>{displayList}</React.Fragment>,
    document.getElementById("display-cv")
  );
};
export default DisplayEducation;
