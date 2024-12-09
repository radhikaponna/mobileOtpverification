const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class OtpVerification extends Model {}

OtpVerification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mobile_number: {
      type: DataTypes.STRING(10), // Accept only 10-digit numbers
      allowNull: false,
      validate: {
        is: /^[0-9]{10}$/, // Regular expression to ensure only 10-digit numbers
        notEmpty: true,
      },
    },
    otp: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.STRING(16), // Storing the formatted date string
      allowNull: false,
    },
    created_at: {
      type: DataTypes.STRING(16), // Storing the formatted date string
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: "OtpVerification", // Model name
    tableName: "otp_verification", // Table name in the database
    timestamps: false, // Disable Sequelize's automatic timestamp handling
  }
);

module.exports = OtpVerification;
