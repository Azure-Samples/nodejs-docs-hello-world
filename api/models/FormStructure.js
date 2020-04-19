const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const FormStructure = sequelize.define("FormStructure", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    inputFieldId: DataTypes.INTEGER,
    valueGroupId: DataTypes.INTEGER,
    required: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  });

  return FormStructure;
};