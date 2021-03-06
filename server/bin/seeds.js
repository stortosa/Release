// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const CalmMod = require("../models/calm.model");
const RageMod = require("../models/rage.model");
const FearMod = require("../models/fear.model");
const HappinessMod = require("../models/happiness.model");
const SadnessMod = require("../models/sadness.model");

const bcryptSalt = 10;

mongoose
.connect(process.env.BBDDATLAS, { useNewUrlParser: true })
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  // {
  //   username: "bob",
  //   password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  // },
  {
    username: "MiAmol",
    password: bcrypt.hashSync("MiAmol", bcrypt.genSaltSync(bcryptSalt)),
  },
 
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

let calm = [
  {
    title: "Las Calma",
    description: "Oye tu cálmate hombre",
    ListRecorded: ["music one", "music two", "music three"],
    Task: ["aprendí a calmarme", " y grabar un diario", "lo puedo conseguir"]
  }
]

CalmMod.deleteMany()
  .then(() => {
    return CalmMod.create(calm)
  })
  .then(calmCreated => {
    console.log(`${calmCreated.length} calm created with the following id:`);
    console.log(calmCreated.map(c => c._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


let rage = [
  {
    title: "Las IRA",
    description: "Oye tu IRA hombre",
    ListRecorded: ["IRA one", "IRA two", "IRA three"],
    Task: ["aprendí a calmarme", " y grabar un diario", "lo puedo conseguir"]
  }
]

RageMod.deleteMany()
  .then(() => {
    return RageMod.create(rage)
  })
  .then(rageCreated => {
    console.log(`${rageCreated.length} rage created with the following id:`);
    console.log(rageCreated.map(c => c._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

