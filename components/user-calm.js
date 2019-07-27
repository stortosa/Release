import React, { Component } from 'react';
import UserCalmList from './user-calm-list';
import axios from 'axios';


export default class UserCalm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",

      // term: '',// esto es de la calmList que tendrá q ir a Mongo y vovler
      // items: []
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const projectID = this.props.theProject._id;
    // { title, description, projectID } => this is 'req.body' that will be received on the server side in this route, 
    // so the names have to match

    axios.post("http://localhost:5000/newCalm", { title, description, projectID })
      .then(() => {
        // after submitting the form, retrieve project one more time so the new task is displayed as well 
        //              |
        this.props.getTheProject();
        this.setState({ title: "", description: "" });
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
    axios.get(`http://localhost:5000/newCalm`).then(responseFromApi => {
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
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
            <label>Description:</label>
            
            <textarea name="description" value={this.state.description}  onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <UserCalmList items={this.state.items} />
        </div>
        <div>
          {this.state.getAllCalms.map((items, idx) => (
            <ul key={idx}>
              <li>{items.title}</li>
              <li>{items.description}</li>
            </ul>

          ))}
        </div>
      </div>
    )
  }
}
