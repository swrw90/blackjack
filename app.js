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

// 5. Determine if cards value is even or odd
var outcome;
var deal = Math.floor((Math.random() * 40) + 1);
if (deal % 2 == 0) {
    outcome = "even" 
}
else 
{
  outcome = "odd";
};


// BEGIN GAME

confirm("Are you ready to play blackjack?");

var card = Math.floor((Math.random() * 52) + 1);

// Define a function called deal
// It should return a random number between 1 and 52

var deal = function () {
var card = Math.floor((Math.random() * 52) + 1);
return card;
};

// Declare two variables 
// For both variables, assign values gotten by calling the function
var card1 = deal();
var card2 = deal();

// The deal function will return one random card
var deal = function () {
var card = Math.floor((Math.random() * 52) + 1);
return card;
    };

// Declare two variables card1 and card2
var card1 = deal;
var card2 = deal;

// Define a function called score, which will assign points by
// adding up the cards: 

var score = function() {
return card1 + card2;
    }
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());