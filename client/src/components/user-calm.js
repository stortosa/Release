import React, { Component } from 'react';
import UserCalmList from './user-calm-list';
import axios from 'axios';
import AuthServices from '../service/Services'

export default class UserCalm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      isShowing: false,
      loggedInUser: null

      // term: '',// esto es de la calmList que tendrá q ir a Mongo y vovler
      // items: []
    };
    this.service = new AuthServices();

  }

  onSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    // const task = this.state.Task;
    // const listRecorded = this.state.ListRecorded;
    const user = this.state.loggedInUser

    axios.post("http://localhost:5000/auth/addCalms", { title, description })
      .then((responsefromApi) => {
        this.setState({ title: responsefromApi.data.title, description: responsefromApi.data.description });
      })
      .catch(error => console.log(error))


    // this.setState({
    //   term: '',
    //   items: [...this.state.items, this.state.term]
    // });
  }

  // componentDidMount() {
  //   this.service.loggedin()
  //     .then(response => {
  //       this.setState({
  //         loggedInUser: response
  //       })
  //     })
  //   console.log(this.state.loggedInUser)
  // }

  onChange = (event) => {
    console.log(this)
    // this.setState({ term: event.target.value });
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  getAllCalms = () => {
    axios.post(`http://localhost:5000/auth/addCalms`).then(responseFromApi => {
      this.setState({
        ListOfCalms: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllCalms();
  }

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to Calm</h1>
        <div>
          <form className="" onSubmit={this.onSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />

            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={this.onChange} />

            {/* <label>Task:</label>
            <input type="text" name="task" value={this.state.getAllCalms.task} onChange={this.onChange} />

            {/* <label>Title:</label>
            <input type="text" name="listRecorded" value={this.state.listRecorded} onChange={this.onChange} />
             */}
            <button>Submit</button>
          </form>
          <UserCalmList items={this.state.items} />
        </div>
        {/* <div> */}
          {/* {this.state.ListOfCalms.map((items, idx) => (
            <ul key={idx}>
              <li>{items.title}</li>
              <li>{items.description}</li>
            </ul>

          ))} */}
        {/* </div> */}
      </div>
    )
  }
}
