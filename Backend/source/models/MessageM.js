const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Message = new Schema({
  userID: String,
  groupID: String,
  content: String,
  createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("message", Message);
