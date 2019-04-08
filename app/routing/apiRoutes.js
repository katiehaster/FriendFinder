let queenList = require("../data/friends")

console.log("api routes loaded");

module.exports = function(app) {
  app.get("/api/queenReveal", function(req, res) {
    console.log("queen list from app.get ", queenList.queenList)
    // return res.json(queenList.queenList);
    res.json(queenList.queenList);
  })

  app.post("/api/queenReveal", function(req, res) {
    let position = 0;
    let newUser = req.body;
    let sumsDiff = [];
    console.log("req.body ", newUser);
    console.log("queen list= ", queenList.queenList);
    console.log(newUser.scores[0]);
    console.log(queenList.queenList[0].scores[0]);


      //Greater for loop goes through each queen individually
      for (let q = 0; q < queenList.queenList.length; q++) {
    
        // Compares newUser scores to each Queen score to find the absolute value
        let result = [];
        for (let i = 0; i < newUser.scores.length; i++) {
          result.push(Math.abs(parseInt(newUser.scores[i]) - parseInt(queenList.queenList[q].scores[i])));
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

        // SumsDiff is the array holding the final sum of each newUser/Queen abs value calculation
          sumsDiff[q] = total;
          console.log("sums diff array: ", total);
      } 
        console.log("sumsDiff ", sumsDiff);
          function match () {
            
            let value = sumsDiff[0];
            for (let s = 1; s < sumsDiff.length; s++) {
              if (value > sumsDiff[s]) {
            
            position = s;
            value = sumsDiff[s];
            }}
            console.log("position: ", position);

          // return position gives the particular queen's spot in the queenList who matches with our user
            console.log("Your best match is: ", queenList.queenList[position]);
          }
          match(total);

          // Allows the user input to be appended to the queenList. 
          (queenList.queenList).push(newUser);
          res.json(queenList.queenList[position]);
    });
};

