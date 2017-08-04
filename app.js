// 1. Creates random num between 1 and 10
var randomRating = Math.floor((Math.random() * 10) + 1);

// 2. Sum of random nums from 1 through 10
var twoRandomScores = function () {
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
else {
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

var score = function () {
    return card1 + card2;
}
console.log("You have cards " + card1 + " and " + card2 +
    " for a score of " + score());



// The deal function will return a random card
var deal = function () {
    var card = Math.floor((Math.random() * 52) + 1);
    return card;
};
// Deal out our first hand by declaring variables card1 and card2
var card1 = deal();
var card2 = deal();

// Define a function getValue that returns the remainder when card
// is divided by 13
// Make a getValue function here, which should convert a card to
// the value that card is worth
var getValue = function (card) {
    var newCard = card % 13;
    return newCard;
};

// Return the score of our hand
var score = function () {
    var total = getValue(card1) + getValue(card2);
    return total
};

console.log("You have cards " + card1 + " and " + card2 +
    " for a score of " + score());

// ========================================
// **TEST BUILD**

// Get suit
function getTheSuit() {
    var suit = Math.floor(Math.random() * 4) + 1
    if (suit === 1) {
        return "Hearts";
    }
    if (suit === 2) {
        return "Diamonds";
    }
    if (suit === 3) {
        return "Spades";
    }
    if (suit === 4) {
        return "Clubs";
    }
}

// Get a card
function getACard(turn) {
    var card = Math.floor(Math.random() * 13) + 1
    suit = getTheSuit();
    if (card === 1) {
        return 11;
    }
    if (card > 10) {
        return 10;
    }
    return card;
}

var counter = 0;


// Deal cards, , computer & human start at 0 points
// Then gives a card to user and computer by calling getComputedStyle()
function GenerateNewCard() {
    counter += 1;
    var d = document.getElementById("human").innerHTML = "";
    var e = document.getElementById("computer").innerHTML = "";
    var f = document.getElementById("count").innerHTML = counter;
    var a = parseInt(document.getElementById("dealer").value = 0);
    var resa = document.getElementById("you");
    resa.value = a + getACard("You");
    res.value = aa + getACard("Dealer");
}

// This checks if computer has less than 17 points
function COMPUTER() {
    var a = parseInt(document.getElementById("dealer").value);
    var res = document.getElementById("dealer");
    while (res.value < 17) {
        var b = parseInt(document.getElementById("dealer").value);
        res.value = b + getACard("Dealer");
    }
}

// If user has more than 21 then computer wins
function HUMAN() {
    var a = parseInt(document.getElementById("you").value);
    var res = document.getElementById("you");
    res.value = a + getACard("You");
    if (res.value > 21) {
        whoWonC += 1;
        document.getElementById("compWon").innerHTML = whoWonC;
        var a = document.getElementById("computer").innerHTML = "I win!";
    }
}

var whoWonH = 0;
var whoWonC = 0;

// Check for bust and if player wins or loses
function determineWinner() {
    var a = parseInt(document.getElementById("you").value);
    var b = parseInt(document.getElementById("dealer").value);
    if (b > 21) {
        whoWonH += 1;
        document.getElementById("humanWon").innerHTML = whoWonH;
        var winner = document.getElementById("human").innerHTML = "I win!";
        return;
    }
    if (a === b) {
        var a = document.getElementById("human").innerHTML = "Tie";
        var b = document.getElementById("computer").innerHTML = "Tie";
    }

    if (a > b) {
        whoWonH += 1;
        document.getElementById("human").innerHTML = whoWonH;
        var a = document.getElementById("human").innerHTML = "I win!";
    }
    if (b > a) {
        whoWonC += 1;
        document.getElementById("compWon").innerHTML = whoWonC;
        var g = document.getElementById("computer").innerHTML = "I win!";
        var g = document.getElementById("computer").innerHTML = "I win!";
    }
}