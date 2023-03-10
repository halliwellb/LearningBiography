'use strict';
// User greeting:
function userGreeting() {
  let name = prompt('Hello! What is your name?');
  let greeting = prompt('Hi, ' + name + '! Thanks for coming by! I would like to ask you a few questions. Would that be alright?'); {
    if (greeting === 'yes') {
      greeting = alert('Perfect! Get ready!');
    } else (alert('No fun.'));
  }
}
userGreeting();

// Website score tracker = r
let r = 0;
// Variables for myQuestionGame function to use
let questionOne = 'The first question is: Do I live in Maine?';
let questionTwo = 'The second question is: Do I have a finance degree?';
let questionThree = 'The third question is: Do I still work in financial planning?';
let questionFour = 'The fourth question is: Is my wife a flower farmer?';
let questionFive = 'The fifth question is: Was I in the military?';
let questionSix = 'The sixth question is: Am I training in software development?';

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
let answers = ['yes', 'yes', 'no', 'yes', 'yes', 'yes'];

// First game; six questions with each correct answer awarding a point
function myQuestionGame (){
  for (let i = 0; i < questions.length; i++) {
    let userCorrect = prompt(questions[i]);
    if (userCorrect === answers[i]) {
      alert('That is correct!');
      r++;
      console.log(userCorrect);
    } else {
      alert('Wrong!');
      console.log(userCorrect);
    }
  }
}
myQuestionGame();

// variables for myNumberGame to use
let myNumber = ('17');
let trys = 0;

// Second game; six attempts to guess correct number with single correct answer awarding a point
function myNumberGame() {
  let guess = prompt('Choose a number between 1 and 20.'); {
    if (guess === '') {
      guess = prompt('Please choose a number! 1-20');
    } while (trys < 5) {
      if (guess === myNumber) {
        alert('Wow, that is exactly right!');
        r++;
        return true;
      } else guess = prompt('I am sorry, incorrect. Please choose another number');
      trys ++;
    }
  }
}
myNumberGame();

// variables for myAgeGame to use
const myAge = ('31');
let userTrys = 1;
// Third game; Four attempts to guess my age with correct answer awarding a point
function myAgeGame() {
  let guessAge = prompt('Guess how old I am. You will have 4 trys.');
  for (let userTryNum = userTrys; userTrys < 4; userTrys++) {
    if (guessAge > myAge) {
      guessAge = prompt('Your guess was ' + guessAge + '. Too high! Try again. You have used ' + userTryNum + ' out of 4 total trys!');
    } else if (guessAge < myAge) {
      guessAge = prompt('Your guess was ' + guessAge + '. Too low! Try again. You have used ' + userTryNum + ' out of 4 total trys!');
    } else if (guessAge === myAge) {
      guessAge = alert('Are you psychic?');
      r++;
      break;
    } else {
      alert('Out of trys. Better luck next time!');
    }
  }
}
myAgeGame();

// User goodbye; tells the user their total score out of "x" questions
let parting = alert('Thank you for learning a bit about me, ' + name + '. You got ' + r + ' questions correct out of 8 total questions!');
console.log(parting);
