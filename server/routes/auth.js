const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Goals = require("../models/goal.model");
const Calms = require("../models/calm.model")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      if (err) {
        reject(new Error('Something went wrong'))
      } else {
        resolve(user);
      }
    })
  })
}



// SIGNUP
router.post('/signup', (req, res, next) => {

  const { username, password } = req.body;

  console.log('username', username)
  console.log('password', password)

  // Check for non empty user or password
  if (!username || !password) {
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
    .then(foundUser => {
      if (foundUser) throw new Error('Username already exists');

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        username,
        password: hashPass
      }).save();
    })
    .then(savedUser => login(req, savedUser)) // Login the user using passport
    .then(user => res.json({ status: 'signup & login successfully', user })) // Answer JSON
    .catch(e => next(e));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {

    // Check for errors
    if (err) next(new Error('Something went wrong'));
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  }
})

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'logged out' })
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

// añadiendo calms
router.post('/addCalms', (req, res, next) => {
  Calms.create({
    title: req.body.title,
    description: req.body.description,
    createdBy: req.body.user,
    // timestamp:
  })
    .then(createdCalms => {
      res.json(createdCalms)   //o {$push: {calms: calms_id}}
    })
});

//mostrando calms
router.get('/userCalm',(req,res, next)=>{
  Calm.find({
    createdBy: req.user._id,    
  })
  .then(foundCalm=>[
    res.json(foundCalm)
    
  ])
  .catch(err => console.log(err));
});

//añadiendo goals
router.post('/addGoals', (req, res, next) => {
  Goals.create({
    title: req.body.title,
    description: req.body.description,
    createdBy: req.body.user,
    // timestamp:
  })
    .then(createdGoal=>{
      // console.log(createdGoal)
      res.json(createdGoal)
    })
});

//mostrando goals
router.get('/userGoals',(req,res, next)=>{
  Goals.find({
    createdBy: req.user._id,    
  })
  .then(foundGoal=>[
    res.json(foundGoal)
    
  ])
  .catch(err => console.log(err));
});


module.exports = router;
