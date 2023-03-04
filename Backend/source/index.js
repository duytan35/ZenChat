require('dotenv').config()

const path = require('path');
const { engine } = require("express-handlebars");
const express = require("express");
var morgan = require("morgan"); // display connect client information
var bodyParser = require("body-parser");

const app = express();
const route = require('./routes/index.js')

app.use(bodyParser.urlencoded({ extended: false }))// parameter url
app.use(bodyParser.json());// body request

app.engine(".hbs", engine({extname: '.hbs'}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

const port = 3000;
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname + '/public')));

const db = require("./config/index")
db.Connect();

app.use((req, res, next) => {
    console.log(123);
    next();
});

route(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
