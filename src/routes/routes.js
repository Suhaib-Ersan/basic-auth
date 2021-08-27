"use strict";

const express = require("express");
const router = express.Router();

const { User } = require("../auth/sequelize.model.js");
const singInMiddleware = require("../auth/middleware/signin.js");

// ---------------- SIGN IN ----------------- //

router.post("/signin", singInMiddleware, (req, res) => {
  if (req.user) {
    res.status(201).json(req.user);
  } else {
    res.status(403).send("Invalid Login");
  }
});

// ---------------- SIGN UP ----------------- //

router.post("/signup", async (req, res) => {
  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<< reached SIGN UP >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  let userNameExists = User.findOne(req.body.username);
  if (!userNameExists) {
    try {
      let user = await User.create(req.body);
      res.status(201).json(user);
    } catch (e) {
      let obj = {
        status: 403,
        message: "Error Creating User",
        error: e,
      };
      res.status(403).json(obj);
    }
  } else {
    res.status(403).send("user name must be unique");
  }
}); // signs up a user to the db

module.exports = router;
