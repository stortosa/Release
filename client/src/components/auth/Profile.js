import React, { Component } from 'react';
import AuthServices from '../../service/Services';
// import { Switch, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.services = new AuthServices()
  }

  handleLogout = (e) => {
    this.props.logout(e)
  }

  render() {
    return (
      <div>
        <h2>Are you ready for today's homework? </h2>
        <h3>Lista Información de lo que puedes hacer en la APP</h3>
        <section className="wrap">
          <div className="linkProfile">
            <Link to="/calm" style={{ textDecoration: 'none' }}>Calm</Link>
          </div>
          <div className="linkProfile">
            <Link to="/AddGoal" style={{ textDecoration: 'none' }}>Goals and Dreams</Link>
          </div>
          <div className="linkProfile">
            <Link to="/Demo" style={{ textDecoration: 'none' }}>Audio-Daily</Link>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile;
