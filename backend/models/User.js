const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Tenant = require("./Tenant");

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tenant,
        key: "tenant_id",
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true, // Make it optional since the name might come from the social login
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: true, // Optional for social logins, unless required
      validate: {
        isNumeric: true,
        len: [10, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Optional for social logins
    },
    firebaseUID: {
      type: DataTypes.STRING,
      allowNull: true, // This will store the Firebase UID for social logins
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("Admin", "Payee", "F-Admin", "User"), // Add "User" for general social login users
      allowNull: false,
      defaultValue: "User", // Default role for social login users
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
    created_date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: () => Math.floor(Date.now() / 1000),
    },
    updated_date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: () => Math.floor(Date.now() / 1000),
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

// Define associations
Tenant.hasMany(User, { foreignKey: "tenant_id" });
User.belongsTo(Tenant, { foreignKey: "tenant_id" });

module.exports = User;
