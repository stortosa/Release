import React, { Component } from 'react';
import axios from 'axios';
import AuthServices from '../service/Services'

export default class UserCalm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      isShowing: false,
      loggedInUser: null,
      allCalms: []
    };
    this.service = new AuthServices();

  }

  onSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const user = this.state.loggedInUser

    axios.post("http://localhost:5000/auth/addCalms", { title, description, user })
      .then((responsefromApi) => {

        let cloneallCamls = [...this.state.allCalms];

        cloneallCamls.unshift(responsefromApi.data)  //unshift o push
        console.log(responsefromApi)
        this.setState({
          ...this.state,
          allCalms: cloneallCamls,

        })
      })
      .catch(error => console.log(error))
  }

  getUserCalms = () => {
    this.service.userCalms()
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          allCalms: response,
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
    this.getUserCalms()

    // console.log(this.state.loggedInUser)
  }

  onChange = (event) => {
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

  showAddCalmForm = () => {
    if (this.state.isShowing) {
      return (
        <div>
          <h3>Add Calm</h3>
          <form className="" onSubmit={this.onSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={e => this.onChange(e)} />
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={e => this.onChange(e)} />

            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to Calm</h1>
        <hr />
        <button onClick={() => this.toggleForm()}> Add Calm </button>
        {this.showAddCalmForm()}

        <ol className="calms-list">
          {
            this.state.allCalms.map(calm =>
              <li key={calm._id}>
                {calm.title}--{calm.description}
              </li>
            )
          }
        </ol>
        {/* <div>
          {this.state.allCalms.map((calm, idx) => (
            <ul key={idx}>
              <li>{calm.title}</li>
              <li>{calm.description}</li>
            </ul>

          ))}
        </div> */}
        <h1>DON´T FORGET IT</h1>
      </div>
    )
  }
}
