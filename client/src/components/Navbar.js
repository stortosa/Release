import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  handleLogout = (e) => {
    this.props.logout(e)
  }

  render() {
    if (this.props.userInSession) {
      return (
        <nav className="nav-style">
          <button onClick={this.handleLogout}>Logout</button>
          <h2>Welcome, {this.props.userInSession.username}</h2>
        </nav>
      )
    } else {
      return (
        <nav className="nav-style-not">
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </nav>
      )
    }
  }
}

export default Navbar;