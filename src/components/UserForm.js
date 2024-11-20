import React, { Component } from 'react';
import './styles/UserForm.css';

class UserForm extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    department: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Call POST or PUT API here to add/edit user
    console.log('User submitted:', this.state);
  };

  render() {
    const { name, email, department } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="department"
          value={department}
          onChange={this.handleInputChange}
          placeholder="Department"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
