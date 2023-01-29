const router = require("express").Router();
const { sendOtp, verifyOtp } = require("../controller/otp.controller");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;
