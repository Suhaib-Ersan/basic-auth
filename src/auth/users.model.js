"use strict";
const bcrypt = require("bcrypt");

const User = (sequelize, DataTypes) => {
  const userModel = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // role: {
    //   type: DataTypes.ENUM("level 1", "level 2", "level 3"),
    //   defaultValue: "level 1",
    //   allowNull: false,
    // }
  });

  userModel.beforeCreate(async (user) => {
    console.log("<<<<<<<<<<<<<<<<<<< reached beforeCreate >>>>>>>>>>>>>>>>>>>>>>>>");
    let hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  });
  userModel.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username } });
    // we need to check if null.

    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }

    throw new Error("Invalid user");
  };
  return userModel;
};

module.exports = User;
