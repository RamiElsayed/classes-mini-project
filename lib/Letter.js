class Letter {
    constructor(character) {
        const regex = new RegExp('[^a-zA-Z0-9]');

        this.character = character;
        this.isVisible = regex.test(character);
    }
    
}

module.exports = Letter;