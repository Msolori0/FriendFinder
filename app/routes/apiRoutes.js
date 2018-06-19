var friendsList = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifferece = 0;

        for (var i = 0; i < friendsList.length; i++) {
            totalDifference = 0;

            for (var k = 0; k < friendsList[i].scores[k]; k++) {
                totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(friendsList[i].scores[k]));

                if (totalDifference == bestMatch.friendsDifference) {
                    bestMatch.name = friendsList[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifferece = totalDifference;
                }
            }
        }
        friendsList.push(userData);
        res.json(bestMatch);
    });
};