import React from "react";

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
      <div key={id} data-id={id}>
        <p className="workTime">
          {workDateStart} - {workDateEnd}
        </p>
        <h4 className="company-name"> {companyName} </h4>
        <p className="pos-title"> {positionTitle} </p>
        <p className="main-task"> {mainTask} </p>
      </div>
    );
  }
  return <React.Fragment>{displayList}</React.Fragment>;
};

export default DisplayExperiences;
