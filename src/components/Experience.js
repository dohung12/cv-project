import React, { Component } from "react";
import uniqid from "uniqid";
import DisplayExperiences from "./DisplayExperiences";
import Form from "./Form";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: "",
      editMode: false,
      workDateStart: "",
      workDateEnd: "",
      companyName: "",
      positionTitle: "",
      mainTask: "",
      experiences: [],
    };

    this.backToDefault = this.backToDefault.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  backToDefault() {
    this.setState({
      editId: "",
      editMode: false,
      workDateStart: "",
      workDateEnd: "",
      companyName: "",
      positionTitle: "",
      mainTask: "",
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
        experiences: [
          ...this.state.experiences,
          {
            id: uniqid(),
            workDateStart: this.state.workDateStart,
            workDateEnd: this.state.workDateEnd,
            companyName: this.state.companyName,
            positionTitle: this.state.positionTitle,
            mainTask: this.state.mainTask,
          },
        ],
      });
      this.backToDefault();
    } else if (this.state.editMode) {
      this.setState({
        experiences: this.state.experiences.map((element) => {
          if (element.id === this.state.editId) {
            element = {
              id: element.id,
              workDateStart: this.state.workDateStart,
              workDateEnd: this.state.workDateEnd,
              companyName: this.state.companyName,
              positionTitle: this.state.positionTitle,
              mainTask: this.state.mainTask,
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
    const { workDateStart, workDateEnd, companyName, positionTitle, mainTask } =
      this.state.experiences.filter((element) => element.id === id)[0];
    this.setState({
      editId: id,
      editMode: true,
      workDateStart: workDateStart,
      workDateEnd: workDateEnd,
      companyName: companyName,
      positionTitle: positionTitle,
      mainTask: mainTask,
    });
  }

  handleDelete(event) {
    const id = event.currentTarget.parentElement.dataset.id;
    this.setState({
      experiences: this.state.educations.filter((element) => element.id !== id),
    });
  }

  render() {
    const inputFields = [
      {
        label: "From",
        type: "number",
        name: "workDateStart",
        value: this.state.workDateStart,
      },
      {
        label: "To",
        type: "number",
        name: "workDateEnd",
        value: this.state.workDateEnd,
      },
      {
        label: "Company name",
        type: "text",
        name: "companyName",
        value: this.state.companyName,
      },
      {
        label: "Position title",
        type: "text",
        name: "positionTitle",
        value: this.state.positionTitle,
      },
      {
        label: "Main task of your job",
        type: "text",
        name: "mainTask",
        value: this.state.mainTask,
      },
    ];
    return (
      <article>
        <h2>Experience</h2>
        <Form
          fields={inputFields}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />

        <DisplayExperiences
          experiences={this.state.experiences}
          onEdit={this.handleEdit}
          onDel={this.handleDelete}
        />
      </article>
    );
  }
}
export default Experience;
