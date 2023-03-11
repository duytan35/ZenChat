const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  fullName: String,
  username: String,
  password: String,
  birthday: String,
  birthday: String,
  avatar: String,
  createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("user", User);
