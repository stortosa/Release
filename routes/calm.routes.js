const express = require("express");
const router = express.Router();
// const User = require("../models/User");
const Calm = require("../models/calm.model");
const axios = require("axios");

//list of calms
router.get('/', (req, res, next) => {
  Calm.find()
    .then(ListOfCalms => res.render('calms/list', { calms: ListOfCalms }))
    .catch(error => console.log(error))
})

