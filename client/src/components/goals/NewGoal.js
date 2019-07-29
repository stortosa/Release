import React, { Component } from 'react';
import axios from 'axios';


export default class NewGoal extends Component {
  constructor(props) {
    super(props)
    this.state = { title: "goal title", description: "your goal description" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    // const tagline = this.state.tagline;

    axios.post("http://localhost:5000/new", { title, description })
      .then(() => {

        this.setState({ title: "", description: "" });
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  showNewGoalForm = () => {

    return (
      <div>
        <h3>Add Goal</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          {/* <label>tagline:</label>
          <textarea name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)} /> */}

          <input type="submit" value="Submit" />

        </form>
      </div>
    )

  }

  render() {
    return (
      <div>
        <hr />
        {this.showNewGoalForm()}
      </div>
    )
  }
}
