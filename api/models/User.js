const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    guid: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    tenantId: DataTypes.INTEGER, 
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  });

  return User;
};