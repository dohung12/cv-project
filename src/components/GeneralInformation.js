import React, { Component } from "react";
import DisplayGeneral from "./displayGeneral";
import InputField from "./InputField";
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
    return (
      <article>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <InputField
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <InputField
            name="tel"
            type="tel"
            value={this.state.tel}
            onChange={this.handleInputChange}
          />
          <InputField
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
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
