// const express = require('express')
// const router = express.Router();
// const Goals = require("../models/goal.model");
// const User = require("../models/User");

//añadiendo goals
// router.post('/addGoals', (req, res, next) => {
//   Goals.create({
//     title: req.body.title,
//     description: req.body.description,
//     createdBy: req.body.user,
//     // timestamp:
//   })
//     .then(createdGoal=>{
//       // console.log(createdGoal)
//       res.json(createdGoal)
//     })
// });

//mostrando goals
// router.get('/userGoals',(req,res, next)=>{
//   Goals.find({
//     createdBy: req.user._id,    
//   })
//   .then(foundGoal=>[
//     res.json(foundGoal)
    
//   ])
//   .catch(err => console.log(err));
// });


// module.exports = router;



//******************************CODIGO ANTIGÜO */
// //mostrar los goals o con post
// router.get('/postGoals',(req, res, next) => {
//   Goals.find({goals: req.body.goals})
//   .sort({title: 1})
//   .then(goals =>{
//     res.json(goals);
//   });
// });

// //añadir goals
// router.post('/addGoals', (req, res, next) => {
//   Goals.create({
//     title: req.body.title,
//     description: req.body.description,
//     // timestamp:
//   })
//   .then(createdGoals =>
//     res.json(createdGoals)   //o {$push: {goals: goals_id}}
//   )
// });

// //Borrar goals

// //Actualizar goals
// router.put('/updateGoals/{:goals_id}', (req, res, next)=>{  //Id mal puesto
//   Goals.findByIdAndUpdate(req.params.goals_id, req.body)
//   .then(x =>{
//     res.json({"updated": true, _id: req.params.goals_id})
//   })
// })

// module.export = router;
