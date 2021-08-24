'use strict';

const express = require('express');
const router = express.Router();

const { Users } = require('../auth/sequelize.model.js');

router.post('/signup', createAUser); // signs up a user to the db

function createAUser(req, res){
  try {
    let user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(403).send("Error Creating User");
  }
}

module.exports = router;