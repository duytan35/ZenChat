const express = require("express");
const router = express.Router();
const UserC = require("../controllers/UserC.js");

router.post("/", UserC.index);

module.exports = router;
