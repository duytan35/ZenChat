const MessageM = require("../models/MessageM");
const UserM = require("../models/UserM");
const GroupM = require("../models/GroupM");

class HomeC {
  async index(req, res) {
    const instance = await GroupM.find({});
    // console.log(instance);
    // res.cookie("cookieName", "1", {
    //   expires: new Date(Date.now() + 9000),
    //   httpOnly: true,
    // }); //9s
    res.send(instance.json());
  }
}

module.exports = new HomeC();
