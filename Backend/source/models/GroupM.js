const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Group = new Schema({
  name: String,
  members: String,
  createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("group", Group);
