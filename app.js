let Card = require('./Card.js');
let Dealer = require('./Dealer.js');
let Deck = require('./Deck.js');
let Player = require('./Player.js');

// Start logic
let player = new Player(Deck.deal());
let dealer = new Dealer(Deck.deal());

console.log("Player hand is " + player.totalOfHand);