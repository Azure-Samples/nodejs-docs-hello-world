const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define("Tenant", {
    guid: DataTypes.UUID,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.TEXT,
    statusId: DataTypes.INTEGER,
    others: DataTypes.TEXT, 
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  });

  return Tenant;
};