const messageRouter = require("./message.js");
const userRouter = require("./user.js");
const groupRouter = require("./group.js");

function route(app) {
  app.use("/user", userRouter);
  app.use("/message", messageRouter);
  app.use("/group", groupRouter);
}

module.exports = route;
