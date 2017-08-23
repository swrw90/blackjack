let Deck = require('./Deck.js');
let Dealer = require('./Dealer.js');
let Player = require('./Player.js');
let readlineSync = require('readline-sync');

// Start logic
let player = new Player(Deck.deal());
let dealer = new Dealer(Deck.deal());

console.log("\n" + "Player hand is " + player.totalOfHand);

// Player Turn Logic
while (player.isDone === false && player.isBusted === false) {
    let hitOrStay = readlineSync.question('Hit or Stay?' + "\n");
    // console.log(hitOrStay);

    if (hitOrStay === "hit") {
        player.hit();
        console.log("\n" + player.totalOfHand + "\n");
    } else {
        player.stay();
        console.log("\n" + player.totalOfHand);
    };
}

// Dealer Turn Logic
while (dealer.isDone === false && dealer.isBusted === false && player.isBusted === false) {
    if (dealer.totalOfHand <= 16) {
        dealer.hit();
        console.log("\n" + dealer.totalOfHand + "\n");
    } else {
        dealer.stay();
        console.log("\n" + dealer.totalOfHand + "\n");

    }
};

// Conditions to determine win or lose
if (dealer.totalOfHand === 21 && player.totalOfHand === 21) {
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

let playAgain = readlineSync.question('Play again?' + "\n");
