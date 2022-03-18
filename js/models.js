'use strict';



class Word {
  constructor(word) {
    this.word = word;
    this.chars = word.split();
    this.letters = this.getLetters();
  }

  /*
    Letters in format:
      word.letters = [{},{},{},{},{}]
      where {} is {
        ch: 'a' // whatever the given letter is
        color: 'grey'
      }

      so ...
      word.letters = [
        {
          ch: 'a',
          color: 'grey'
        },
        {
          ch: 'p',
          color: 'yellow'
        },
        {
          ch: 'p',
          color: 'grey'
        }
        ...
      ]
   */
  getLetters() {

  }

  // takes the user's guess and compares it to the Word
  // calls this.getLetterColor(letter) for each letter
  // ?returns an array of values: [green, yellow, grey, grey, green]
  checkGuess(guess) {

  }

  // checks if the letter should be grey, yellow, or green
  getLetterColor(letter) {

  }
}

class Game {
  constructor(word) {

  }

  win() {

  }

  lose() {

  }

  // Moves the game to the next line/guess
  next() {

  }

  // Exports the user's game as a shareable format, just like Wordle does
  // Returns a string containing results
  export() {

  }
}


// WordList handles functions related to lists of words, as well as contains the word lists themselves. 
class WordList {
  constructor(words) {
    this.words = words;
  }

  /*   
  Picks a word from the word lists based on the given word length
  - length: the chosen length of the word
  Returns the new Word instance
   */
  chooseWord() {

  }

  chooseLength(length) {

  }

  static makeList(length) {
    return new WordList;
  }
}