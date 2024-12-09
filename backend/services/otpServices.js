const { sequelize } = require("../models");
const ResponsePayload = require("../utils/ResponsePayload");
const OtpVerification = require("../models/OtpVerification");
const { formatDateTime } = require("../utils/dateHelper"); //helper converts date format to readable "2024-12-09 16:22"

const generateOtp = async (mobile_number) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const rawExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const expiresAt = formatDateTime(rawExpiresAt);
    const createdAt = formatDateTime(new Date());

    console.log(`mobile_number: ${mobile_number}`);
    console.log(`otp: ${otp}`);
    console.log(`expiresAt: ${expiresAt}`);
    console.log(`createdAt: ${createdAt}`);

    // Insert OTP into DB with formatted expiresAt and createdAt
    await OtpVerification.create({
      mobile_number,
      otp,
      expires_at: expiresAt,
      created_at: createdAt,
    });

    console.log("OTP generation success");

    return new ResponsePayload(200, {
      message: "OTP sent successfully",
      otp,
      expiresAt,
    });
  } catch (error) {
    console.error("Error in OTP service:", error.message);

    return new ResponsePayload(500, {
      message: "Failed to send OTP",
      error: error.message,
    });
  }
};

module.exports = {
  generateOtp,
};
