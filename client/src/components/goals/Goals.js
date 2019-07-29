import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import goalsServices from '../../service/goalsServices';

export default class Goals extends Component {
  constructor() {
    super();
    this.state = { listOfGoals: [] };
    this.service = new goalsServices();

  }

  getAllGoals = () => {
    axios.get(`http://localhost:5000/all`)

      .then(responseFromApi => {

        this.setState({
          listOfGoals: responseFromApi.data
        })
      })
  }

  componentDidMount() {
    this.getAllGoals();
  }

  render() {
    return (
      <div>
        <div style={{ width: '60%', float: "left" }}>
          {this.state.listOfGoals.map(project => {
            return (
              <div key={project._id}>
                <Link to={`/GoalDetail/${project._id}`}>
                  <h3>{project.name}</h3>
                </Link>
                <h3>{project.tagline}</h3>
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }
}