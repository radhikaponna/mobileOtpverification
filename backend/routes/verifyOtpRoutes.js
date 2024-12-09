const express = require("express");
const { verifyOtp } = require("../services/verifyOtpService");
const router = express.Router();

// Route for OTP verification
router.post("/verify-otp", async (req, res) => {
  try {
    const { mobile_number, otp } = req.body;

    if (!mobile_number || !otp) {
      return res
        .status(400)
        .json({ message: "Mobile number and OTP are required" });
    }

    const result = await verifyOtp(mobile_number, otp);

    if (result.statusCode === 200) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Error during OTP verification",
      error: error.message,
    });
  }
});

module.exports = router;
