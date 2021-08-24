'use strict';

const express = require('express');
const router = express.Router();

const { Users } = require('../auth/sequelize.model.js');
const singIn = require('./auth/middleware/signin.js')

router.post('/signin', singinUser); // signs up a user to the db

function singinUser(req, res){
  let user = await Users.create(req.body);
  res.status(201).json(user);
}

module.exports = router;