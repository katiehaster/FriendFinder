// Dependencies
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Data

// Array variables to hold data
  

// Create set of routes for getting and posting queen data

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
