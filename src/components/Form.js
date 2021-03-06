import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    //State to checked
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "", 
      favColor: ""
    };
    //invoke status of the state
    this.handleChange = this.handleChange.bind(this);
  }
//conditional display the checkbox
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checked" ? this.setState({ [name]: checked}) : this.setState({
      [name]: value
    });
  }
  handleSubmit(){

  }
  //Render file for th application
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea value={"Some default value"} onChange={this.handleChange} />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is Friendly
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        {/* Select box */}
        <label>
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="Blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="yellow">Orange</option>
          </select>
        </label>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>

    );
  }
}

export default Form;
