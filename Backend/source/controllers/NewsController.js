
class NewsController {
    index(req, res) {
        console.log(req.headers.cookie);
        res.send("News");
    }
}

module.exports = new NewsController;