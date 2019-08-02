// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default class GoalDetail extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {};
//     //meter el goalsService
//   }

//   componentDidMount() {
//     this.getSingleProject();
//   }

//   getSingleProject = () => {
//     const { params } = this.props.match;
//     axios.get(`http://localhost:5000/single/${params.id}`)
//       .then(responseFromApi => {
//         const theProject = responseFromApi.data;
//         this.setState(theProject);
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>

//         <p>{this.state.tagline}</p>
//         <Link to={'/goals'}>Back to goals</Link>
//       </div>
//     )
//   }
// }
