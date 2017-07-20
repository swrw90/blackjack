// 1. Creates random num between 1 and 10
var randomRating = Math.floor((Math.random() * 10) + 1);

// 2. Sum of random nums from 1 through 10
var twoRandomScores = function() {
var score1 = Math.floor((Math.random() * 10) + 1);
var score2 = Math.floor((Math.random() * 10) + 1);
return score1 + score2;
};
twoRandomScores();

// 3. Communicate the randomly assigned card value to the player
var randomScore = Math.floor((Math.random() * 52) + 1);

console.log("I got the score " + randomScore);

// 4.To deal out cards use modulo for remainder values between 0 and 12.
var deal = Math.floor((Math.random() * 52) + 1);
var final = deal % 13;

console.log(final);