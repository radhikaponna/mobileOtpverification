const { sequelize } = require("../models");
const ResponsePayload = require("../utils/ResponsePayload");
const OtpVerification = require("../models/OtpVerification");

// Logic to verify OTP
const verifyOtp = async (mobile_number, otp) => {
  try {
    const currentTime = new Date();

    // Query the database for matching mobile number and otp
    const otpRecord = await OtpVerification.findOne({
      where: {
        mobile_number,
        otp,
      },
    });

    if (!otpRecord) {
      return new ResponsePayload(400, {
        message: "Invalid OTP or Mobile number.",
      });
    }

    // Parse `expires_at` from string and compare to check if expired
    const otpExpirationTime = new Date(otpRecord.expires_at);

    if (currentTime > otpExpirationTime) {
      return new ResponsePayload(400, {
        message: "OTP has expired.",
      });
    }

    // OTP is valid
    return new ResponsePayload(200, {
      message: "OTP verified successfully",
      mobile_number,
    });
  } catch (error) {
    console.error("Error in verifying OTP:", error.message);

    return new ResponsePayload(500, {
      message: "An error occurred while verifying OTP",
      error: error.message,
    });
  }
};

module.exports = {
  verifyOtp,
};
