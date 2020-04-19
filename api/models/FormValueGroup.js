const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const FormValueGroup = sequelize.define("FormValueGroup", {
    values: DataTypes.TEXT,
  });

  return FormValueGroup;
};