"use strict";
require("dotenv").config();
const server = require("./src/server.js");
const { sequelize } = require("./auth/sequelize.model.js");

sequelize
  .sync()
  .then(() => {
    server.start(process.env.PORT || 3000);
  })
  .catch((e) => {
    console.error("Could not start server", e.message);
  });
