const express = require("express");
const router = express.Router();
const AuthC = require("../controllers/AuthC");

router.post("/login", AuthC.login);
router.post("/verify", AuthC.verify);

module.exports = router;
