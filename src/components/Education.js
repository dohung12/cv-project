import React, { Component } from "react";
import DisplayEducation from "./DisplayEducation";
import uniqid from "uniqid";
import Form from "./Form";
import "./Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: "",
      editFlag: false,
      dateStart: "",
      dateEnd: "",
      titleOfStudy: "",
      schoolName: "",
      educations: [],
    };
    this.backToDefault = this.backToDefault.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  backToDefault() {
    this.setState({
      editFlag: false,
      editId: "",
      dateStart: "",
      dateEnd: "",
      titleOfStudy: "",
      schoolName: "",
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.editFlag) {
      this.setState({
        educations: [
          ...this.state.educations,
          {
            id: uniqid(),
            dateStart: this.state.dateStart,
            dateEnd: this.state.dateEnd,
            titleOfStudy: this.state.titleOfStudy,
            schoolName: this.state.schoolName,
          },
        ],
      });
      this.backToDefault();
    } else if (this.state.editFlag) {
      this.setState({
        educations: this.state.educations.map((element) => {
          if (element.id === this.state.editId) {
            element = {
              id: element.id,
              dateStart: this.state.dateStart,
              dateEnd: this.state.dateEnd,
              titleOfStudy: this.state.titleOfStudy,
              schoolName: this.state.schoolName,
            };
          }
          return element;
        }),
      });
      this.backToDefault();
    }
  }

  handleEdit(event) {
    const id = event.currentTarget.parentElement.dataset.id;
    const { dateStart, dateEnd, titleOfStudy, schoolName } =
      this.state.educations.filter((element) => element.id === id)[0];
    this.setState({
      editId: id,
      editFlag: true,
      dateStart: dateStart,
      dateEnd: dateEnd,
      titleOfStudy: titleOfStudy,
      schoolName: schoolName,
    });
  }

  handleDelete(event) {
    const id = event.currentTarget.parentElement.dataset.id;
    this.setState({
      educations: this.state.educations.filter((element) => element.id !== id),
    });
  }

  render() {
    const inputFields = [
      {
        label: "From",
        type: "text",
        name: "dateStart",
        value: this.state.dateStart,
        placeholder: "From: YYYY-MM",
      },
      {
        label: "To",
        type: "text",
        name: "dateEnd",
        value: this.state.dateEnd,
        placeholder: "To: YYYY-MM or Present",
      },
      {
        label: "School name",
        type: "text",
        name: "schoolName",
        value: this.state.schoolName,
        placeholder: "University's name",
      },
      {
        label: "Title of Study",
        type: "text",
        name: "titleOfStudy",
        value: this.state.titleOfStudy,
        placeholder: "Title of Study",
      },
    ];
    return (
      <article className="education">
        <h4>Education</h4>
        <Form
          fields={inputFields}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          editFlag={this.state.editFlag}
        />

        <DisplayEducation
          education={this.state.educations}
          onEdit={this.handleEdit}
          onDel={this.handleDelete}
        />
      </article>
    );
  }
}

export default Education;
