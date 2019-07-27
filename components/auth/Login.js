import React, { Component } from 'react';
import AuthServices from '../../Services';
import { Link, withRouter } from 'react-router-dom';
// Redirect

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', logged: false, error: '' };
    this.service = new AuthServices();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
      .then(response => {
        this.props.getUser(response)
        this.props.history.push("/profile")
        // this.setState({ ...this.state, error: false });
      })
      .catch(() => {
        this.setState({
          ...this.state,
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
        <h3>Please, login to our site</h3>
        <h2>Login</h2>
        <form className="" onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.handleChange(e)} />
          </fieldset>

          <input type="submit" value="Login" />
        </form>
        <h1>{this.state.error ? 'Error' : ''}</h1>

        <p>Don't have account?
            <Link to={"/signup"}> Signup</Link>
        </p>

      </div>
    )
  }
}
export default withRouter(Login);