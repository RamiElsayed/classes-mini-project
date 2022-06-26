class Letter {
    constructor(character) {
      const regex = new RegExp('[^a-zA-Z0-9]');
  
      this.character = character;
      this.isVisible = regex.test(character);
    }
  
    displayLetter() {
      if (this.isVisible) {
        return this.character;
      } else {
        return '_';
      }
    }
  }
  
  module.exports = Letter;