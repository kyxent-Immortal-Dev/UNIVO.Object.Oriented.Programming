




class DigitalLottery {

    static allowedAmounts = [1, 5, 10, 20];

    /**
     * Plays the lottery game.
     * insane decorators xd
     * @param {number} userNumber - The chosen number by the user (between 0 and 99).
     * @param {number} purchaseAmount - The amount with which the user is buying the number.
     * @returns {string} - A message with the result of the game.
     */
    static play(userNumber, purchaseAmount) {

     
        if (userNumber < 0 || userNumber > 99) return 'The chosen number must be between 0 and 99.';
        

        if (!this.allowedAmounts.includes(purchaseAmount)) return 'The purchase amount must be $1, $5, $10, or $20.';
        

        const randomNumber = Math.floor(Math.random() * 100);

        if (userNumber === randomNumber) {

            const prize = purchaseAmount * 20;
            return `Congratulations you guessed the correct number.\n` +
                   `Your prize is: $${prize}`;
        } else {
            return `sorry, you did not guess correctly.\n` +
                   `The winning number was: ${randomNumber}. Please try again.`;
        }
    }
}

console.log(DigitalLottery.play(23, 5));
