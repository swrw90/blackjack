// King is 0 because of modulo 13 of King is 0
const KING = 0;
const JACK = 11;
const QUEEN = 12;

class Card {
    constructor(suitValue, number) {
        this._suitValue = suitValue;
        this._number = number;
    }
    get suit() {
        switch (this._suitValue) {
            case 1: return "Spades";
            case 2: return "Clubs";
            case 3: return "Hearts";
            case 4: return "Diamonds";
        }
    }

    get value() {
        
    }
}