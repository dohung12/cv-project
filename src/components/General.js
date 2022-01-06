import React, { Component } from "react";
import DisplayGeneral from "./DisplayGeneral";
import Form from "./Form";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFlag: false,
      infos: {},
      name: "",
      title: "",
      tel: "",
      email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hanldeEdit = this.hanldeEdit.bind(this);
    this.handleDel = this.handleDel.bind(this);
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
    this.setState({
      infos: {
        name: this.state.name,
        title: this.state.title,
        tel: this.state.tel,
        email: this.state.email,
      },
      name: "",
      title: "",
      tel: "",
      email: "",
      onEdit: false,
    });
  }

  hanldeEdit() {
    const { name, title, tel, email } = this.state.infos;
    this.setState({
      onEdit: true,
      name: name,
      title: title,
      tel: tel,
      email: email,
    });
  }

  handleDel() {
    this.setState({
      infos: {},
      name: "",
      title: "",
      tel: "",
      email: "",
    });
  }

  render() {
    const inputFields = [
      {
        label: "Name",
        type: "text",
        name: "name",
        value: this.state.name,
        placeholder: "Name",
      },
      {
        label: "Title",
        type: "text",
        name: "title",
        value: this.state.title,
        placeholder: "Current title",
      },
      {
        label: "Tel",
        type: "tel",
        name: "tel",
        value: this.state.tel,
        placeholder: "Phone number",
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        value: this.state.email,
        placeholder: "Email",
      },
    ];

    return (
      <article>
        <h4>Personal Information</h4>
        <Form
          fields={inputFields}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          editFlag={this.state.editFlag}
        />

        <DisplayGeneral
          info={this.state.infos}
          onEdit={this.hanldeEdit}
          onDel={this.handleDel}
        />
      </article>
    );
  }
}

export default GeneralInformation;
