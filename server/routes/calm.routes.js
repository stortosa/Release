const express = require("express");
const router = express.Router();
const Calm = require("../models/calm.model");
// const User = require("../models/User");
// const axios = require("axios");

//list of calms
// router.get('/', (req, res, next) => {
//   Calm.find()
//     .then(ListOfCalms => res.json('calms/list', { calms: ListOfCalms }))
//     .catch(error => console.log(error))
// })

router.post('/camlmods',(req, res)=>{
  // const {title, description, task, listRecorded} = req.body.calm
  // let indexTask = 1
  // let taskArray = [];
  // crateTaskCalm = (calm) => task.create({task_id: indexTask})

Calm.create({title, description, task, listRecorded})
.then(calm =>{
  req.user.calm = calm
  res.json(req.user)
})

User.findByIdAndUpdate({_id: user._id}, {calm: calm._id},{ new: true})
.then(updatedUser => console.log('Actualizado la emoción de Calm', uodatedUser))

.catch(error => console.log(error))

})

module.exports = router;