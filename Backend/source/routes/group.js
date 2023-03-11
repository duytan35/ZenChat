const express = require("express");
const router = express.Router();
const GroupC = require("../controllers/GroupC.js");

router.post("/", GroupC.index);

module.exports = router;
