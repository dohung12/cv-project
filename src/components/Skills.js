import React, { Component } from "react";
import DisplaySkills from "./DisplaySkills";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      editId: "",
      editFlag: false,
      skill: {
        text: "",
        id: uniqid(),
      },
      skills: [],
    };

    this.backToDefault = this.backToDefault.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  backToDefault() {
    this.setState({
      editFlag: false,
      editId: "",
      skill: {
        text: "",
        id: uniqid(),
      },
    });
  }

  handleEdit(event) {
    const id = event.currentTarget.parentElement.parentElement.dataset.id;
    const { text } = this.state.skills.filter(
      (element) => element.id === id
    )[0];

    this.setState({
      editId: id,
      editFlag: true,
      skill: {
        text: text,
        id: id,
      },
    });
  }

  handleDelete(event) {
    const id = event.currentTarget.parentElement.parentElement.dataset.id;
    this.setState({
      skills: this.state.skills.filter((element) => element.id !== id),
    });
  }

  handleChange = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
        id: this.state.skill.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    if (!this.state.editFlag) {
      this.setState({
        skills: this.state.skills.concat(this.state.skill),
        skill: {
          text: "",
          id: uniqid(),
        },
      });
    } else if (this.state.editFlag) {
      this.setState({
        skills: this.state.skills.map((element) => {
          if (element.id === this.state.editId) {
            element = this.state.skill;
          }
          return element;
        }),
      });
      this.backToDefault();
    }
  };

  render() {
    const { skill, skills } = this.state;

    return (
      <div>
        <h4>Skills</h4>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={skill.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add</button>
        </form>
        <DisplaySkills
          skills={skills}
          onEdit={this.handleEdit}
          onDel={this.handleDelete}
        />
      </div>
    );
  }
}

export default Skills;
