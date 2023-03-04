
const User = require('../models/User');

class SiteController {
    async index(req, res) {
        const instance = await User.find({});
        console.log(instance);
        res.cookie('cookieName', '1', { expires: new Date(Date.now() + 9000), httpOnly: true }) //9s
        res.send("Home");
    }
}

module.exports = new SiteController;