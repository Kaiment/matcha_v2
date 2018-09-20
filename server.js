const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");

const index = require(__dirname + "/routes/index");

const app = express();
app.set("view engine", "pug");

var server = app.listen(8008);

app.use(express.static(__dirname + '/public'));
app.use("/", index);