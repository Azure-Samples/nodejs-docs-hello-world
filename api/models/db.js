const Fs = require("fs");
const Path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://testkvl:QgLbZxNa[qW7@kampisgroup.com:3306/kampisvl');


const db = {};

const Form = sequelize.import(Path.join(__dirname, "Form.js"));
const FormStructure = sequelize.import(Path.join(__dirname, "FormStructure.js"));
const FormValueGroup = sequelize.import(Path.join(__dirname, "FormValueGroup.js"));
const Role = sequelize.import(Path.join(__dirname, "Role.js"));
const Tenant = sequelize.import(Path.join(__dirname, "Tenant.js"));
const User = sequelize.import(Path.join(__dirname, "User.js"));
const UserRole = sequelize.import(Path.join(__dirname, "UserRole.js"));
const ValueGroup = sequelize.import(Path.join(__dirname, "ValueGroup.js"));

db[Form.name] = Form;
db[FormStructure.name] = FormStructure;
db[FormValueGroup.name] = FormValueGroup;
db[Role.name] = Role;
db[Tenant.name] = Tenant;
db[User.name] = User;
db[UserRole.name] = UserRole;
db[ValueGroup.name] = ValueGroup;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;