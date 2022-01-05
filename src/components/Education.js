import React, { Component } from "react";
import DisplayEducation from "./displayEducation";
import uniqid from "uniqid";
import Form from "./Form";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: "",
      editMode: false,
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
      editMode: false,
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
    if (!this.state.editMode) {
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
    } else if (this.state.editMode) {
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
      editMode: true,
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
        type: "number",
        name: "dateStart",
        value: this.state.dateStart,
      },
      {
        label: "To",
        type: "number",
        name: "dateEnd",
        value: this.state.dateEnd,
      },
      {
        label: "School name",
        type: "text",
        name: "schoolName",
        value: this.state.schoolName,
      },
      {
        label: "Title of Study",
        type: "text",
        name: "titleOfStudy",
        value: this.state.titleOfStudy,
      },
    ];
    return (
      <article>
        <h2>Education</h2>
        <Form
          fields={inputFields}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
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
