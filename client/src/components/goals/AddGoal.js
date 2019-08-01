import React, { Component } from 'react';
// import axios from 'axios';
import AuthService from '../../service/Services'
import Goals from './Goals';

export default class AddGoal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      color: "",
      isShowing: false,
      loggedInUser: null,
      allGoals: []
    };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const color = this.state.color;
    const user = this.state.loggedInUser

    this.service.addGoals(title, description, color, user)
      .then((responsefromApi) => {

        let cloneallGoals = [...this.state.allGoals];

        cloneallGoals.unshift(responsefromApi)  //unshift o push
        console.log(responsefromApi)
        this.setState({
          ...this.state,
          allGoals: cloneallGoals,

        })
        // this.setState({ title: cloneallGoals.data.title, description: cloneallGoals.data.description });
      })
      .catch(error => console.log(error))
    this.getUserGoals()
  }

  getUserGoals = () => {
    this.service.userGoals()
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          allGoals: response,
        })
      })
  }

  componentDidMount() {
    this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        })
      })
    this.getUserGoals()
    // console.log(this.state.loggedInUser)
  }

  handleChange = (event) => {
    // console.log(this)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  deleteGoal = (e, goal_id) => {
    e.preventDefault();
    this.service.removeGoal(goal_id)
      .then(x => {
        // this.setState({
        //   ...this.state,
        // })
      })
    this.getUserGoals()
  }

  showAddGoalForm = () => {
    if (this.state.isShowing) {
      return (
        <div>
          <h3>Add a Great Dream</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Dream:</label>
            <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />

            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />

            <label>Favourite Color:</label>
            <textarea name="color" value={this.state.color} onChange={e => this.handleChange(e)} />

            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <hr />
        <button onClick={() => this.toggleForm()}> Add Dream </button>
        {this.showAddGoalForm()}

        <ol className="goals-list">
          {
            this.state.allGoals.map((goal, idx) => {
              return (<li key={idx}>
                {goal.title}--{goal.description}--{goal.color}
                <button onClick={e => this.deleteGoal(e, goal._id)}> Delete</button>
              </li>)
            })
          }
        </ol>
      </div>
    )
  }
}