const express = require("express");
const { generateOtp } = require("../services/otpServices");
const router = express.Router();

// Route for OTP generation
router.post("/generate-otp", async (req, res) => {
  try {
    const { mobile_number } = req.body;

    if (!mobile_number) {
      return res.status(400).json({ message: "Mobile number is required" });
    }

    const result = await generateOtp(mobile_number);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to send OTP",
      error: error.message,
    });
  }
});

module.exports = router;
