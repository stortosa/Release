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
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  getAllCalms = () => {
    axios.get(`http://localhost:5000/calmmods`).then(responseFromApi => {
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
            <input value={this.state.term} onChange={this.onChange} />
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
