const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const ValueGroup = sequelize.define("ValueGroup", {
    values: DataTypes.TEXT,
    tenantId: DataTypes.INTEGER,
    defaultValue: DataTypes.STRING,
  });

  return ValueGroup;
};