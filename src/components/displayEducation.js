import React from "react";

const DisplayEducation = ({ education, onEdit }) => {
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
        <i className="fas fa-trash"></i>
      </div>
    );
  }
  return <React.Fragment>{displayList}</React.Fragment>;
};
export default DisplayEducation;
