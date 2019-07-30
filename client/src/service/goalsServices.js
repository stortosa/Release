// import axios from 'axios';

// //ARCHIVO QUE CONECTA EL FRONT CON EL BACK DE GOALS (METAS)

// export default class goalsServices {   //AuthServices
//   constructor() {
//     this.service = axios.create({
//       baseURL: 'http://localhost:5000/goals.routes',  // O 'http://localhost:5000/goals.routes'
//       withCredentials: true
//     })
//   }

//   userGoals = () =>{
//     return this.service.get('/userGoals', { withCredentials: true})
//     .then(response => response.data )
//   }
// }

  //CODIGO ANTIGÜO
//   postGoals = (goals, user) => {
//     return this.service.post('postGoals/{user_id}', { goals, user }, { withCredentials: true })
//       .then(response => response.data)
//   }

//   getGoals = (user_id) => {
//     return this.service.get('getGoals/{user_id}', { user_id }, { withCredentials: true })
//       .then(response => response.data)
//   }
  
//   updateGoals = (goals) => {
//     return this.service.post('updateGoals', { goals }, { withCredentials: true })
//       .then(response => response.data)
//   }

//   addGoals = (goals) => {
//     return this.service.post('addGoals', { goals }, { withCredentials: true })
//       .then(response => response.data)
//   }

//   deleteGoals = (goals) => {
//     return this.service.post('deleteGoals', { goals }, { withCredentials: true })
//       .then(response => response.data)
//   }
