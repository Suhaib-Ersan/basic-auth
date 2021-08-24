"use strict";

const Users = (sequelize, DataTypes) => sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Users.beforeCreate(async user => {
  let hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
});
Users.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ where: { username } });
  // we need to check if null.

  const isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
      return user;
  }

  throw new Error('Invalid user');
}

module.exports = Users;
