const express = require("express");
const router = express.Router();
const MessageC = require("../controllers/MessageC.js");

router.get("/", MessageC.index);

module.exports = router;
