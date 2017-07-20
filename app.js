// 1. Creates random num between 1 and 10
var randomRating = Math.floor((Math.random() * 10) + 1);

// 2. Sum of random nums from 1 through 10
var twoRandomScores = function() {
var score1 = Math.floor((Math.random() * 10) + 1);
var score2 = Math.floor((Math.random() * 10) + 1);
return score1 + score2;
};
twoRandomScores();

