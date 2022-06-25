const Letter = require('./Letter');

class Word {
    constructor(word){
        this.currentWord = word;
        this.letters = [...word].map((character) => {
            const letter = new Letter(character);

            return letter;
        });
    }

    displayWord(){};
}

module.exports = Word;