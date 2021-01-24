exports.newWord = {
    wordList: ['NIZAR MAAROUF','BEEKEEPER','JAVA SCRIPT','BOOTCAMP','GOAL AND PHILOSOPHY','MICROWAVE',
    'HANGMAN','ESPIONAGE','WHOMEVER','SYNDROME','NUMSKULL','DOCUMENTATION'],
    hangman: ["\n\n\n\n\n\n\n-------------", "\n |\n |\n |\n |\n |\n |\n |\n-------------", "____________\n |         |\n |\n |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |\n |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |         |\n |         |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |         |\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        |\n |\n-------------","____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        | |\n |\n-------------"]
};
const reandlineSync = require("readline-sync");
const userName = reandlineSync.question(" May I have your name? ");
console.log("Welcome Welcome To HangMan Game your name is : " + userName + " Good Luck!!!!");
const inquirer = require('inquirer');
require('is-letter');
const hangManDisplay = exports.newWord.hangman;
require('events').EventEmitter.prototype["_maxListeners"] = 100;
const hangman = {
    wordBank: exports.newWord.wordList,
    guessesRemaining: 10,
    guessedLetters: [],
    display: 0,
    currentWord: null,
    startGame: function () {
        let that = this;

        if (this.guessedLetters.length > 0) {
            this.guessedLetters = [];
        }
        inquirer.prompt([{
            name: "play",
            type: "confirm",
            message: "Ready to play?"
        }]).then(function (answer) {
            if (answer.play) {
                that.newGame();
            } else {
                console.log("Fine, I didn't want to play anyway..");
            }
        })
    },
    newGame: function () {
        if (this.guessesRemaining === 10) {
            console.log("Okay! Here we go!");
            console.log('*****************');
            let randNum = Math.floor(Math.random() * this.wordBank.length);
            this.currentWord = new Word(this.wordBank[randNum]);
            this.currentWord.getLets();
            console.log(this.currentWord.wordRender());
            this.keepPromptingUser();
        } else {
            this.resetGuessesRemaining();
            this.newGame();
        }
    },
    resetGuessesRemaining: function () {
        this.guessesRemaining = 10;
    },
    keepPromptingUser: function () {
        let that = this;

        inquirer.prompt([{
            name: "chosenLtr",
            type: "input",
            message: "Choose a letter:"
        }]).then(function (ltr) {
            let letterReturned = (ltr.chosenLtr).toUpperCase();
            let guessedAlready = false;
            for (let i = 0; i < that.guessedLetters.length; i++) {
                if (letterReturned === that.guessedLetters[i]) {
                    guessedAlready = true;
                }
            }
            if (guessedAlready === false) {
                that.guessedLetters.push(letterReturned);

                let found = that.currentWord.checkIfLetterFound(letterReturned);
                if (found === 0) {
                    console.log('Nope! You guessed wrong.');
                    that.guessesRemaining--;
                    that.display++;
                    console.log('Guesses remaining: ' + that.guessesRemaining);
                    console.log(hangManDisplay[(that.display) - 1]);
                    console.log('\n*******************');
                    console.log(that.currentWord.wordRender());
                    console.log('\n*******************');
                    console.log("Letters guessed: " + that.guessedLetters);
                } else {
                    console.log('Yes! You guessed right!');
                    if (that.currentWord.didWeFindTheWord() === true) {
                        console.log(that.currentWord.wordRender());
                        console.log('Congratulations! You won the game!!!');

                    } else {
                        console.log('Guesses remaining: ' + that.guessesRemaining);
                        console.log(that.currentWord.wordRender());
                        console.log('\n*******************');
                        console.log("Letters guessed: " + that.guessedLetters-1);
                    }
                }
                if (that.guessesRemaining > 0 && that.currentWord.wordFound === false) {
                    that.keepPromptingUser();
                } else if (that.guessesRemaining === 0) {
                    console.log('Game over!');
                    console.log('The word you were guessing was: ' + that.currentWord.word);
                }
            } else {
                console.log("You've guessed that letter already. Try again.")
                that.keepPromptingUser();
            }
        });
    }
};
hangman.startGame();

let Letter = function (ltr)
{
    this.letter = ltr;
    this.appear = false;
    this.letterRender = function () {
        if (this.letter === ' ') {
            this.appear = true;
            return '  ';
        }
        if (this.appear === false) {
            return ' _ ';
        } else {
            return this.letter;
        }
    };
};
module.exports = Letter;
function Word(wrd) {
    let that = this;
    this.word = wrd;
    this.letters = [];
    this.wordFound = false;

    this.getLets = function() {
        for(let i = 0; i<that.word.length; i++){
            let newLetter = new Letter(that.word[i]);
            this.letters.push(newLetter);
        }
    };
    this.didWeFindTheWord = function() {
        if(this.letters.every(function(lttr){
            return lttr.appear === true;
        })){
            this.wordFound = true;
            return true;
        }
    };
    this.checkIfLetterFound = function(guessedLetter) {
        let whatToReturn = 0;
        this.letters.forEach(function(lttr){
            if(lttr.letter === guessedLetter){
                lttr.appear = true;
                whatToReturn++;
            }
        })
        return whatToReturn;
    };
    this.wordRender = function() {
        let display = '';
        that.letters.forEach(function(lttr){
            let currentLetter = lttr.letterRender();
            display+= currentLetter;
        });
        return display;
    };
}
module.exports = Word;

