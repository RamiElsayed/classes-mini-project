const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.currentWord = word;
    this.letters = [...word].map((character) => {
      const letter = new Letter(character);

      return letter;
    });
  }

  displayWord() {
    const wordToDisplay = this.letters
    .map((letter) => letter.displayLetter())
    .join('');

    console.log(wordToDisplay);
  }
}

module.exports = Word;
