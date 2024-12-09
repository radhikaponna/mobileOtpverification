const sequelize = require("../config/database");
const Tenant = require("./Tenant");
const PageSchema = require("./PageSchema");
const User = require("./User");
const OtpVerification = require("./OtpVerification");

// Set up associations
Tenant.hasMany(PageSchema, { foreignKey: "tenant_id" });
PageSchema.belongsTo(Tenant, { foreignKey: "tenant_id" });

module.exports = {
  sequelize,
  Tenant,
  PageSchema,
  User,
  OtpVerification,
};
