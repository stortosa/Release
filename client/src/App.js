import React, { Component } from 'react';

import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile';
import AuthServices from './service/Services';
import Navbar from './components/Navbar';
import UserCalm from './components/user-calm';
// import Fear from './components/emotions/fear/Fear';
// import Happiness from './components/emotions/happiness/Happiness';
// import Rage from './components/emotions/rage/Rage';
// import Sadness from './components/emotions/sadness/Sadness'
// import Contents from './components/Contents'



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

  render() {
    // this.fetchUser()

    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              {/* aqui simplemente se muestra un lorem ipsum genérico para que veáis contenidos que solo se muestran a usuarios logeados */}
              <Switch>
                <Route exact path='/profile' render={() => <Profile logout={this.logout} />} />
                <Route exact path='/calm' render={() => <UserCalm logout={this.logout} />} />
                {/* <Route exact path='/fear' render={() => <Fear logout={this.logout} />} />
                <Route exact path='/happiness' render={() => <Happiness logout={this.logout} />} />
                <Route exact path='/rage' render={() => <Rage logout={this.logout} />} />
                <Route exact path='/sadness' render={() => <Sadness logout={this.logout} />} /> */}

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