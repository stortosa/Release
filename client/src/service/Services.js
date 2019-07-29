import axios from 'axios';

//ARCHIVO QUE CONECTA EL FRONT CON EL BACK

export default class AuthServices {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/auth',  //      baseURL: 'http://localhost:5000/auth',
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

  addCalms = (calms) => {
    return this.service.post('/addCalms', {calms}, { withCredentials: true})
    .then(response => response.data )
  }

}