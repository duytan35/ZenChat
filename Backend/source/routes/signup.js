const express = require("express");
const router = express.Router();
const SignupC = require("../controllers/SignupC");

router.post("/", SignupC.index);

module.exports = router;
