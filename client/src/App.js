import React, { Component } from 'react';

import './App.css';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile';
import AuthServices from './service/Services';
import Navbar from './components/Navbar';
import UserCalm from './components/user-calm';
import AddGoal from './components/goals/AddGoal';
import Demo from './components/Demo'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null,
    }
    this.service = new AuthServices();
  }

  getTheUser = (userObj) => {
    this.setState({
      ...this.state,
      loggedInUser: userObj
    })
  }

  logout = (e) => {
    e.preventDefault();
    this.service.logout()
      .then(() => {
        this.props.history.push('/login')
        this.setState({
          ...this.state,
          loggedInUser: null
        })
      })
  }

  fetchUser = () => {
    this.service.loggedin()
      .then((data) => {
        if (data != "") {
          this.setState({ ...this.state, loggedInUser: data })
        }
      })
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  render() {
    // this.fetchUser()

    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <Redirect to="/profile" />
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
                <Route exact path='/profile' render={() => <Profile logout={this.logout} {...this.state.loggedInUser} />} />
                <Route exact path='/calm' render={() => <UserCalm logout={this.logout} {...this.state.loggedInUser} />} />
                <Route exact path='/addGoal' render={() => <AddGoal logout={this.logout} {...this.state.loggedInUser} />} />
                <Route exact path='/demo' render={() => <Demo logout={this.logout} {...this.state.loggedInUser} />} />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
                <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
                <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(App);