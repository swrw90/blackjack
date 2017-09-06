let Deck = require('./Deck.js');
let Dealer = require('./Dealer.js');
let Player = require('./Player.js');
let readlineSync = require('readline-sync');


// Player Turn Logic
let startPlayerTurn = () => {
    player.startNewGame(Deck.deal());

    console.log("\n" + "Player hand is " + player.totalOfHand);

    while (player.isDone === false && player.isBusted === false) {
        let hitOrStay = readlineSync.question('Hit or Stay?' + "\n").toUpperCase();
        // console.log(hitOrStay);

        if (hitOrStay === "HIT") {
            player.hit(Deck.generateCard());
            console.log("\n" + player.totalOfHand + "\n");
        } else {
            player.stay();
            console.log("\n" + player.totalOfHand);
        };
    };
};

// Dealer Turn Logic
let startDealerTurn = () => {
    dealer.startNewGame(Deck.deal());

    while (dealer.isDone === false && dealer.isBusted === false && player.isBusted === false) {
        if (dealer.totalOfHand <= 16) {
            dealer.hit(Deck.generateCard());
            console.log("\n" + dealer.totalOfHand + "\n");
        } else {
            dealer.stay();
            console.log("\n" + dealer.totalOfHand + "\n");

        }
    };
};

// Conditions to determine win or lose
let displayResult = () => {
    if (dealer.totalOfHand === player.totalOfHand) {
        console.log("It's a draw!" + "\n");
    } else if (dealer.isBusted) {
        console.log("Dealer busts! You win!" + "\n");
        player.incrementScore();
    } else if (dealer.totalOfHand > player.totalOfHand) {
        console.log("Dealer wins!" + "\n")
    } else if (player.isBusted === true) {
        console.log("You busted! Game over!") + "\n";
    } else if (player.totalOfHand === 21) {
        console.log("You win!" + "\n");
        player.incrementScore();
    } else if (player.totalOfHand > dealer.totalOfHand) {
        console.log("You win!" + "\n");
        player.incrementScore();
    };
    console.log("Player Score: " + player.score + "\n");
};

let resetGameState = () => {
    player.reset();
    dealer.reset();
};

// LOGIC

// Instantiates player/dealer
let player = new Player();
let dealer = new Dealer();

var playGame = readlineSync.question('Play a game of Blackjack? Yes or No' + "\n").toUpperCase();
while (playGame === "YES") {
    startPlayerTurn();
    startDealerTurn();
    displayResult();
    resetGameState();
    playGame = readlineSync.question('Play again? Yes or No \n').toUpperCase();
};