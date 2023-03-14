const UserM = require("../models/UserM");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class SignupC {
  async index(req, res) {
    var instance = await UserM.find({ username: req.body.username });
    if (instance.length == 0) {
      const salt = bcrypt.genSaltSync(saltRounds);
      const passwordHash = bcrypt.hashSync(req.body.password, salt);
      await UserM.create({
        fullName: req.body.fullName,
        username: req.body.username,
        password: passwordHash,
        birthday: req.body.birthday,
      });
      res.send(true);
    } else {
      res.send(false);
    }
  }
}

module.exports = new SignupC();
