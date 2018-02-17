const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
// const db = require("./models");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");

const chalkAnimation = require('chalk-animation');

const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//testing
// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");
// //tesing end

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

// const routes = require("./controllers/busController.js")
// app.use("/", routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({
//   //force: true,
//   logging: true
//
// }).then(function() {
//   app.listen(PORT, function() {
//     chalkAnimation.rainbow("App listening on PORT ", 2 + PORT);
//   });
// });

app.listen(PORT, function() {
  console.log("App listening on PORT ", + PORT);
})
