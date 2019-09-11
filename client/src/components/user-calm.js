import React, { Component } from 'react';
import AuthServices from '../service/Services';
import { Link } from 'react-router-dom';


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

    this.service.addCalms(title, description, user)
      .then((responsefromApi) => {

        let cloneallCamls = [...this.state.allCalms];

        cloneallCamls.unshift(responsefromApi)  //unshift o push
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

  deleteCalm = (e, calm_id) => {
    e.preventDefault();
    this.service.removeCalms(calm_id)
      .then(x => {
        // this.setState({
        //   ...this.state,
        // })
      })
    this.getUserCalms()
  }


  showAddCalmForm = () => {
    if (this.state.isShowing) {
      return (
        <div>
          <form className="" onSubmit={this.onSubmit}>
            <label>Write the Negative words:</label>
            <textarea name="title" value={this.state.title} onChange={e => this.onChange(e)} />

            <label>   Change to Positive words:</label>
            <textarea name="description" value={this.state.description} onChange={e => this.onChange(e)} />

            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  };

  render() {
    return (
      <div className="">
        <h1>What do you want to change??</h1>
        <button className="boton" onClick={() => this.toggleForm()}> Add Calm </button>
        {this.showAddCalmForm()}
        <div className="ContCalmList">
          <section>
            <ol className="todoListMain">
              {
                this.state.allCalms.map(calm =>
                  <li className="theList" key={calm._id}>
                    {calm.title}: ==change==> "{calm.description}".
                    <button onClick={e => this.deleteCalm(e, calm._id)}> Say it Bye Bye!!</button>
                  </li>
                )
              }
            </ol>
          </section>
          <section className="wrapcalm">
            <div className="linkcalm">
              <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
            </div>
            <div className="linkcalm">
              <Link to="/AddGoal" style={{ textDecoration: 'none' }}>Goals and Dreams</Link>
            </div>
            <div className="linkcalm">
              <Link to="/Demo" style={{ textDecoration: 'none' }}>Audio-Daily</Link>
            </div>
          </section>
        </div>
      </div>
    )
  }
}