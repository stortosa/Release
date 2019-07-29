// const express = require('express')
// const router = express.Router();
// const User = require("../models/User");
// const Goals = require("../models/goal.model");

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
