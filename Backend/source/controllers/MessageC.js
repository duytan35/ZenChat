const MessageM = require("../models/MessageM");

class MessageC {
  async index(req, res) {
    var instance = await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "duytan",
      }),
    });
    var rs = await instance.json();
    console.log(rs);

    // const instance = await MessageM.find({});
    // console.log(instance);
    // res.cookie("cookieName", "1", {
    //   expires: new Date(Date.now() + 9000),
    //   httpOnly: true,
    // }); //9s
    res.send(rs);
  }
}

module.exports = new MessageC();
