let queenList = require("../data/friends")


console.log("api routes loaded");

module.exports = function(app) {
  app.get("/api/queenReveal", function(req, res) {
    console.log("queen list from app.get ", queenList.queenList)
    return res.json(queenList.queenList);
  })

  app.post("/api/queenReveal", function(req, res) {
    res.json(req.body);
    let newFriend = req.body;
    let sumsDiff = [];
    console.log("req.body ", newFriend);
    console.log("queen list= ", queenList.queenList);
    console.log(newFriend.scores[0]);
    console.log(queenList.queenList[0].scores[0]);

      //Greater for loop goes through each queen individually
      for (let q = 0; q < queenList.queenList.length; q++) {
    
        // Compares newFriend scores to each Queen score to find the absolute value
        let result = [];
        for (let i = 0; i < newFriend.scores.length; i++) {
          result.push(Math.abs(parseInt(newFriend.scores[i]) - parseInt(queenList.queenList[q].scores[i])));
          }

          // Finds the total of all of the absolute values in a given array
          var total = 0;
          function sum () {
            for (let j = 0; j < result.length; j++) {
              total = result[j] + total;
            }
            console.log("total of absolute values in array: ", total);
            return total;
          }
          sum(result);

        // SumsDiff is the array holding the final sum of each newFriend/Queen abs value calculation
          sumsDiff[q] = total;
          console.log("sums diff array: ", total);
      } 
        console.log("sumsDiff ", sumsDiff);
          function match () {
            let position = 0;
            let value = sumsDiff[0];
            for (let s = 1; s < sumsDiff.length; s++) {
              if (value > sumsDiff[s]) {
            
            position = s;
            value = sumsDiff[s];
            }}
            console.log("position: ", position)

          // return position gives the particular queen's spot in the queenList who matches with our user
            return position;
          }
          match(total);

          
      
    });
};

