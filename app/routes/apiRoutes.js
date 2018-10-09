// LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests - outputs json
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Handles when a user submits form data (a JSON object)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    // respond to requests and let users know if they have a friend
      console.log("Recievied\n",req.body);
      res.json(friendData[1]);
      console.log(friendData[1]);

  });

};
