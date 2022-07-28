const words = require("../words");
const Word = require("./Word");

class Game {
  constructor(username) {
    this.username = username;
    this.guessRemaining = 12;
  }

  async start() {
    console.log(`####### WORD GUESSING GAME #######`);
    console.log(`Welcome ${this.username}\n\n`);
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    const word = new Word(randomWord);

    word.displayWord();
    while (!word.isComplete()) {
        console.log(`GUESSES REMAINING: ${this.guessRemaining}\n\n`)
       const isCorrect =  await word.guessCharacter();

       if (!isCorrect) {
        this.guessRemaining -= 1
       }

       word.displayWord();
       if (this.guessRemaining <= 0) {
           console.log(`####### YOU LOST #######`);
           console.log(`----------------------------------\n\n`);
           break;
       }
    }
    console.log(`####### END OF GAME #######`);
    console.log(`----------------------------------\n\n`);
  }
}

module.exports = Game;
