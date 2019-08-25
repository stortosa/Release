import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class throwUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    };
  }
  render() {
    return (
      <div>
        <h1>Coming Soon</h1>
        <section className="wrapcalm">
          <div className="linkcalm">
            <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
          </div>
          <div className="linkcalm">
            <Link to="/calm" style={{ textDecoration: 'none' }}>Calm</Link>
          </div>
          <div className="linkcalm">
            <Link to="/AddGoal" style={{ textDecoration: 'none' }}>Audio-Daily</Link>
          </div>
          <div className="linkcalm">
            <Link to="/Demo" style={{ textDecoration: 'none' }}>Audio-Daily</Link>
          </div>
        </section>
      </div>
    )
  }
}
