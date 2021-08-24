"use strict";

// 3rd Party Resources
const express = require("express");
const server = express();



// Prepare the express server



// routes
const signUpRoute = require("./routes/signup.js");
const signInRoute = require("./routes/signin.js");

// Process JSON input and put the data on req.body
server.use(express.json());

server.use(signUpRoute);
server.use(signInRoute);


// Process FORM input and put the data on req.body
server.use(express.urlencoded({ extended: true }));

// Create a Sequelize model


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo



// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo




// make sure our tables are created, start up the HTTP server.


module.exports = {
  server,
  start: port => {
    server.listen(port, () => console.log(`server started on ${port}`));
  },
};
