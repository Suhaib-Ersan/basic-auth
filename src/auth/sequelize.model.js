'use strict';

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.POSTGRES_URI || "postgres://suhaib@localhost:5432/class03-04");
const users = require('./users.model.js');


const usersModel = users(sequelize, DataTypes);


module.exports = {
  sequelize: sequelize,
  User: usersModel,
}