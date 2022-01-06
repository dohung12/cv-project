import React, { Component } from "react";
import uniqid from "uniqid";
import DisplayExperiences from "./DisplayExperiences";
import Form from "./Form";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: "",
      editFlag: false,
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
      editFlag: false,
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
    if (!this.state.editFlag) {
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
    } else if (this.state.editFlag) {
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
      editFlag: true,
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
      experiences: this.state.experiences.filter(
        (element) => element.id !== id
      ),
    });
  }

  render() {
    const inputFields = [
      {
        label: "From",
        type: "number",
        name: "workDateStart",
        value: this.state.workDateStart,
        placeholder: "From: YYYY-MM",
      },
      {
        label: "To",
        type: "number",
        name: "workDateEnd",
        value: this.state.workDateEnd,
        placeholder: "To: YYYY-MM or Present",
      },
      {
        label: "Company name",
        type: "text",
        name: "companyName",
        value: this.state.companyName,
        placeholder: "Company's name",
      },
      {
        label: "Position title",
        type: "text",
        name: "positionTitle",
        value: this.state.positionTitle,
        placeholder: "Position",
      },
      {
        label: "Main task of your job",
        type: "text",
        name: "mainTask",
        value: this.state.mainTask,
        placeholder: "Further description or archivements",
      },
    ];
    return (
      <article>
        <h4>Experience</h4>
        <Form
          fields={inputFields}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          editFlag={this.state.editFlag}
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
