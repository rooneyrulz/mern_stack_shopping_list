const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

//Require Routes
const indexRoute = require("./api/routes/index");
const itemRoute = require("./api/routes/item");

//Require database connections
const DBConnection = require("./api/config/database");

//Setup HTTP-Logger middleware
app.use(logger('dev'));

//Setup body-parser & cookie-parser middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

//Setup index route
app.use('/api', indexRoute);

//Setup item route
app.use('/api', itemRoute);


module.exports = app;