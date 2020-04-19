const Models = require("../models/db");

module.exports = {
  all : async (req,res, next) => {
    const id = req.params.guid;
    const result = await Models.Tenant.findAll();
    console.log(result.dataValues);
    return result.dataValues;
  }
};