// Dependencies
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('app/public'));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'app', 'public', 'survey.html'));
});

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
