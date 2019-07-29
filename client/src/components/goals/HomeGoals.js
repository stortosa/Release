import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HomeGoals extends Component {
  render() {
    return (
      <div>
        <Link className="link" to={'/'}>Home Goals</Link>

        <Link className="link" to={'/goals'}>Goals</Link>
        <Link className="link" to={'/new-goal'}>New-Goal</Link>

      </div>
    )
  }
}
