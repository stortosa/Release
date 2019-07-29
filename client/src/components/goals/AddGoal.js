import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../../service/Services'

export default class AddGoal extends Component {
  constructor(props) {
    // console.log(props)
    super(props)
    this.state = { title: "", description: "", isShowing: false, loggedInUser: null };
  this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const user = this.state.loggedInUser
    
    // const projectID = this.props.theProject.id; // <== we need to know to which project the created task belong, so we need to get its 'id'
   
    axios.post("http://localhost:5000/auth/addGoals", { title, description, user }) // o newGoal
      .then((responsefromApi) => {
        // after submitting the form, retrieve project one more time so the new task is displayed as well 
        //              |
        // this.props.getTheProject();
        // console.log(responsefromApi);
        this.setState({ title: responsefromApi.data.title, description: responsefromApi.data.description });
      })
      .catch(error => console.log(error))
  }

  componentDidMount(){
    this.service.loggedin()
    .then(response=>{
      this.setState({
        loggedInUser: response
      })
    })
  console.log(this.state.loggedInUser)}

  handleChange = (event) => {
    console.log(this)
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

  showAddGoalForm = () => {
    if (this.state.isShowing) {
      return (
        <div>
          <h3>Add Goal</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />

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
        <button onClick={() => this.toggleForm()}> Add Goal </button>
        {this.showAddGoalForm()}
      </div>
    )
  }
}