const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Tenant extends Model {}

Tenant.init(
  {
    tenant_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tenant_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Tenant",
    tableName: "tenants",
    timestamps: false,
  }
);

module.exports = Tenant;
