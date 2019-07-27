import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthServices from '../../Services';

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthServices();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </fieldset>

          <input type="submit" value="Signup" />
        </form>

        <h1>{this.state.error ? 'Error' : ''}</h1>

        <p>Already have account?
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}