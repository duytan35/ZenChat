const MessageM = require("../models/MessageM");
const UserM = require("../models/UserM");
const GroupM = require("../models/GroupM");

class UserC {
  async index(req, res) {
    //await Adventure.findOne({ country: 'Croatia' }).exec();
    const instance = await UserM.find({});
    //console.log(instance);

    res.cookie("cookieName", "1", {
      expires: new Date(Date.now() + 9000),
      httpOnly: true,
    }); //9s
    res.send(instance);
  }
}

module.exports = new UserC();
