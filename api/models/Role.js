const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  return Role;
};