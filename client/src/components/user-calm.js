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
      task: [],       //cosas a mejorar.
      listRecorded: []

      // term: '',// esto es de la calmList que tendrá q ir a Mongo y vovler
      // items: []
    };
    this.service = new AuthServices();

  }

  onSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const task = this.state.Task;
    const listRecorded = this.state.ListRecorded;
    const projectID = this.props.theProject._id;
    // { title, description, projectID } => this is 'req.body' that will be received on the server side in this route, 
    // so the names have to match

    axios.post("http://localhost:5000/addCalms", { title, description, projectID })
      .then(() => {
        // after submitting the form, retrieve project one more time so the new task is displayed as well 
        //              |
        this.props.getTheProject();
        this.setState({ title: "", description: "", task:[], listRecorded:[] });
      })
      .catch(error => console.log(error))


    // this.setState({
    //   term: '',
    //   items: [...this.state.items, this.state.term]
    // });
  }

  onChange = (event) => {
    // this.setState({ term: event.target.value });
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  getAllCalms = () => {
    axios.post(`http://localhost:5000/addCalms`).then(responseFromApi => {
      this.setState({
        ListOfCalms: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllCalms();
  }


  render() {
    return (
      <div>
        <h1>Welcome to Calm</h1>
        <div>
          <form className="" onSubmit={this.onSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.getAllCalms.title} onChange={this.onChange} />
            
            <label>Description:</label>
            <textarea name="description" value={this.state.getAllCalms.description} onChange={this.onChange} />

            <label>Task:</label>
            <input type="text" name="task" value={this.state.getAllCalms.task} onChange={this.onChange} />
            
            {/* <label>Title:</label>
            <input type="text" name="listRecorded" value={this.state.listRecorded} onChange={this.onChange} />
             */}
            <button>Submit</button>
          </form>
          <UserCalmList items={this.state.items} />
        </div>
        <div>
          {this.state.getAllCalms.map((items, idx) => (
            <ul key={idx}>
              <li>{items.title}</li>
              <li>{items.description}</li>
              <li>{items.task}</li>
              <li>{items.listRecorded}</li>
            </ul>

          ))}
        </div>
      </div>
    )
  }
}
