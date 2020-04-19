const Moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define("Form", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    tenantId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    structureId: DataTypes.INTEGER,
    visible: DataTypes.BOOLEAN,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  });

  return Form;
};