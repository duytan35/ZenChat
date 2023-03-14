const UserM = require("../models/UserM");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthC {
  async login(req, res) {
    var user = await UserM.findOne({ username: req.body.username });
    if (user) {
      const isAuth = bcrypt.compare(req.body.password, user.password);
      if (isAuth) {
        delete user.password;
        const accessToken = jwt.sign(
          {
            data: req.body.username,
          },
          process.env.SECRET,
          {
            expiresIn: "3d",
          }
        );
        const refreshToken = jwt.sign(
          {
            data: req.body.username,
          },
          process.env.SECRET,
          {
            expiresIn: "1y",
          }
        );
        res.cookie(
          "user",
          {
            fullName: user.fullName,
            username: user.username,
            birthday: user.birthday,
            createAt: user.createAt,
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
          {
            expires: new Date(Date.now() + 12 * 30 * 24 * 60 * 60),
            httpOnly: false,
            secure: false,
          }
        ); //1 year
        const response = await UserM.updateOne(
          { username: user.username },
          { refreshToken: refreshToken }
        );
        res.send({ isSuccess: true });
      } else res.send({ isSuccess: false, error: "Incorrect password!" });
    } else {
      res.send({ isSuccess: false, error: "No username exists!" });
    }
  }

  async verify(req, res) {
    if (req.cookies.user) {
      // have user => have accessToken => check exp
      var user = await UserM.findOne({ username: req.cookies.user.username });
      jwt.verify(
        req.cookies.user.accessToken,
        process.env.SECRET,
        async (err, decoded) => {
          if (err) {
            // expired => check refresh token
            jwt.verify(
              req.cookies.user.refreshToken,
              process.env.SECRET,
              async (err, decoded) => {
                if (err) {
                  // totally expired
                  res.send({ isAuth: false });
                } else {
                  // refreshToken not expired => check in db => renew access token and refresh token
                  if (req.cookies.user.refreshToken == user.refreshToken) {
                    const accessToken = jwt.sign(
                      {
                        data: decoded.data,
                      },
                      process.env.SECRET,
                      {
                        expiresIn: "3d",
                      }
                    );
                    const refreshToken = jwt.sign(
                      {
                        data: decoded.data,
                      },
                      process.env.SECRET,
                      {
                        expiresIn: "1y",
                      }
                    );
                    res.cookie(
                      "user",
                      {
                        fullName: req.cookies.user.fullName,
                        username: req.cookies.user.username,
                        birthday: req.cookies.user.birthday,
                        createAt: req.cookies.user.createAt,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                      },
                      {
                        expires: new Date(Date.now() + 12 * 30 * 24 * 60 * 60),
                        httpOnly: false,
                        secure: false,
                      }
                    ); //1 year
                    const response = await UserM.updateOne(
                      { username: user.username },
                      { refreshToken: refreshToken }
                    );
                    res.send({ isAuth: true });
                  } else {
                    // refreshToken is invalid with database
                    res.send({ isAuth: false });
                  }
                }
              }
            );
          } else {
            // accessToken not expired => continue
            res.send({ isAuth: true });
          }
        }
      );
    } else {
      res.send({ isAuth: false });
    }
  }
}

module.exports = new AuthC();
