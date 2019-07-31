import axios from 'axios';
require ('dotenv').config();

//ARCHIVO QUE CONECTA EL FRONT CON EL BACK

export default class AuthServices {
  constructor() {
    this.service = axios.create({
      baseURL:  `${process.env.REACT_APP_URL}/auth`,   //'http://localhost:5000/auth',
      withCredentials: true
    })
  }

  signup = (username, password) => {
    return this.service.post('/signup', { username, password })
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(response => response.data)

  }

  logout = () => {
    return this.service.get('/logout')
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser')   // o poner ('/loggedin') /currentUser
      .then(response => response.data)
  }



  addCalms = (title, description, user) => {
    return this.service.post('/addCalms',{ title, description, user })
    .then(response => response.data )
  }

  userCalms = () => {
    return this.service.get('/userCalms')  //addCalms  o userCalms
    .then(response => response.data )
  }

  userGoals = () =>{
    return this.service.get('/userGoals')
    .then(response => response.data )
  }

  removeGoal = (goalId) =>{
    return this.service.delete('/removeGoal', {data: {goalId:goalId }})
    .then(response => response.data)
  }
  addGoals = (title, description, user) =>{
    return this.service.post('/addGoals', {title, description, user})
    .then(response => response.data)
  }
}