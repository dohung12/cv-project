import React from "react";
import reactDom from "react-dom";

const DisplaySkills = (props) => {
  const { skills, onEdit, onDel } = props;

  return reactDom.createPortal(
    <ul>
      {skills.map((skill) => {
        return (
          <div key={skill.id} data-id={skill.id} className="skill">
            <li>{skill.text}</li>
            <div className="btn-container">
              <i className="fas fa-edit" onClick={onEdit}></i>
              <i className="fas fa-trash" onClick={onDel}></i>
            </div>
          </div>
        );
      })}
    </ul>,
    document.querySelector(".display-skill")
  );
};

export default DisplaySkills;
