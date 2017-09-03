class Player {
    constructor() {
        this.hand = [];
        this.isDone = false;
        this.isBusted = false;
        this.score = 0;
    }

    get totalOfHand() {
        let handTotal = 0;
        for (let i = 0; i < this.hand.length; i++) {
            handTotal += this.hand[i].value;
        };

        return handTotal;
    }

    hit(card) {
        this.hand.push(card);
        if (this.totalOfHand > 21) {
            this.isBusted = true;
        }
    };

    stay() {
        this.isDone = true;
    };

    incrementScore() {
        this.score++;
    }

    reset() {
        this.hand = [];
        this.isDone = false;
        this.isBusted = false;
    };

    startNewGame(cards) {
        this.hand = cards;
    }
};

module.exports = Player;