const NUMBER_OF_CARDS = 52;
const NUMBERS_IN_SUIT = 13;

class Deck {
    constructor() {
    }
    static generateCard() {
        let value = (Math.floor(Math.random() * NUMBER_OF_CARDS) + 1) % NUMBERS_IN_SUIT;
        let suit = Math.floor(Math.random() * 4) + 1;
        return new Card(suit, value);
    }

    static deal() {
        return [Deck.generateCard(), Deck.generateCard()];
    }

    static hit() {
        return Deck.generateCard();
    }
};