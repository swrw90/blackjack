class Player {
    constructor(hand) {
        this.hand = hand;
        this.isDone = false;
        this.isBusted = false;
    }

    get totalOfHand() {
        let handTotal = 0;
        for (let i = 0; i < this.hand.length; i++) {
            handTotal += this.hand[i].value;
        };
        return handTotal;
    }

    hit() {
        this.hand.push(Deck.hit());
        if (this.totalOfHand > 21) {
            this.isBusted = true;
        }
    };

    stay() {
        this.isDone = true;
    }
};

module.exports = Player;