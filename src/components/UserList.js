import React, { Component } from 'react';
import axios from 'axios';
import './styles/UserList.css';

class UserList extends Component {
  state = {
    users: [],
    error: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.setState({ users: response.data });
    } catch (error) {
      this.setState({ error: 'Failed to fetch users' });
    }
  }

  render() {
    const { users, error } = this.state;

    if (error) {
      return <div className="error-message">{error}</div>;
    }

    return (
      <div>
        <h2>User List</h2>
        <table className="user-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
