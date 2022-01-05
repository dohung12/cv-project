import React, { Component } from "react";
import DisplayGeneral from "./displayGeneral";
import Form from "./Form";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEdit: false,
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
      { label: "Name", type: "text", name: "name", value: this.state.name },
      { label: "Title", type: "text", name: "title", value: this.state.title },
      { label: "Tel", type: "tel", name: "tel", value: this.state.tel },
      { label: "Email", type: "email", name: "email", value: this.state.email },
    ];

    return (
      <article>
        <h2>Personal Information</h2>
        <Form
          fields={inputFields}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />

        <div>
          <DisplayGeneral {...this.state.infos} />
          <i className="fas fa-edit" onClick={this.hanldeEdit}></i>
          <i className="fas fa-trash" onClick={this.handleDel}></i>
        </div>
      </article>
    );
  }
}

export default GeneralInformation;
