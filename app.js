let Card = require('./Card.js');
let Dealer = require('./Dealer.js');
let Deck = require('./Deck.js');
let Player = require('./Player.js');
let readlineSync = require('readline-sync');

// Start logic
let player = new Player(Deck.deal());
let dealer = new Dealer(Deck.deal());

console.log("Player hand is " + player.totalOfHand);

while (player.isDone === false && player.isBusted === false) {
    let hitOrStay = readlineSync.question('Hit or Stay?');
    console.log(hitOrStay);

    if (hitOrStay === "hit") {
        player.hit();
        console.log(player.totalOfHand);
    } else {
        player.stay();
        console.log(player.totalOfHand);
    };
}