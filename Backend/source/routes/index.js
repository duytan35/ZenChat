const messageRouter = require("./message.js");
const userRouter = require("./user.js");
const groupRouter = require("./group.js");
const authRouter = require("./auth.js");
const signupRouter = require("./signup.js");

function route(app) {
  app.use("/user", userRouter);
  app.use("/message", messageRouter);
  app.use("/group", groupRouter);
  app.use("/auth", authRouter);
  app.use("/signup", signupRouter);
}

module.exports = route;
