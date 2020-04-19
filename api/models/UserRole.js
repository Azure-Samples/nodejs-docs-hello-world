const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define("UserRole", {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
  });

  return UserRole;
};