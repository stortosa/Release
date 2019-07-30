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
        <h2>SONRIE</h2>
        <h3>Lista</h3>
        <ul>
          <li>
            xxxxxxx          </li>
          <li>
            yyyyyyy          </li>
          <li>
            zzzzzzz          </li>
        </ul>

        <Link to="/calm" className="">Calm</Link>
        <Link to="/AddGoal" className="">Add Goal</Link>
        <Link to="/fear" className="">Fear</Link>
        <Link to="/addRecord" className="">Record</Link>

        {/* <Link to="/happiness" className="">Happiness</Link>
        <Link to="/rage" className="">Rage</Link>
        <Link to="/sadness" className="">Sadness</Link> */}

        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}
export default Profile;
