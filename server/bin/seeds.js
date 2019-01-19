// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Library = require("../models/Library");

const bcryptSalt = 10;

require("../configs/database");

let libraries = [
  {
    name: "Concordia",
    capacity: 2000
  },
  {
    name: "McGill",
    capacity: 2500
  },
  {
    name: "Polytechnique",
    capacity: 1700
  }
];

Library.deleteMany()
  .then(() => {
    return Library.create(libraries);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
