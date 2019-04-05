let queenList = require("../data/friends")
console.log("api routes loaded");

module.exports = function(app) {
  app.get("/api/queenReveal", function(req, res) {
    return res.json(queenList);
  })

  app.post("/api/queenReveal", function(req, res) {
   res.json(req.body);
   
    // queenList.push(newFriend);
    // console.log(queenList);
    });
};

