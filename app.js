'use strict';
function userGreeting() {
  let usersName = prompt('Hello! What is your name?');
  let greeting = prompt('Hi, ' + usersName + '! Thanks for coming by! I would like to ask you a few questions. Would that be alright?'); {
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
let t = 1;

// Second game; six attempts to guess correct number with single correct answer awarding a point
function myNumberGame() {
  let guess = prompt('Choose a number between 1 and 20.'); {
    for (let trys = t; t < 6; t++) {
      if (guess === myNumber) {
        alert('Wow, great guess! That is exactly right!');
        console.log('Wow, great guess! That is exactly right!');
        r++;
        break;
      } else if (guess > myNumber) {
        guess = prompt('Your guess was ' + guess + '. Too high! Try again. You have used ' + t + ' out of 6 total trys!');
        console.log('Your guess was ' + guess + '. Too high! Try again. You have used ' + t + ' out of 6 total trys!');
      } else if (guess < myNumber) {
        guess = prompt('Your guess was ' + guess + '. Too low! Try again. You have used ' + t + ' out of 6 total trys!');
        console.log('Your guess was ' + guess + '. Too low! Try again. You have used ' + t + ' out of 6 total trys!');
      }
    }
  }
}
myNumberGame();

// variables for myAgeGame to use
const myAge = ('31');
let userTrys = 1;

// Third game; Four attempts to guess my age with correct answer awarding a point
function myAgeGame() {
  let guessAge = prompt('Guess how old I am. You will have 4 trys.'); {
    for (let userTryNum = userTrys; userTrys < 5; userTrys++) {
      if (guessAge === myAge) {
        guessAge = alert('Wow, incredible guess! Are you psychic?');
        console.log('Wow, incredible guess! Are you psychic?');
        r++;
        break;
      } else if (guessAge > myAge) {
        guessAge = prompt('Your guess was ' + guessAge + '. Too high! Try again. You have used ' + userTrys + ' out of 4 total trys!');
        console.log('Your guess was ' + guessAge + '. Too high! Try again. You have used ' + userTrys + ' out of 4 total trys!');
      } else if (guessAge < myAge) {
        guessAge = prompt('Your guess was ' + guessAge + '. Too low! Try again. You have used ' + userTrys + ' out of 4 total trys!');
      }
    }
  }
}
myAgeGame();

let goodByeUser = alert('Thank you for learning a bit about me! You got ' + r + ' questions correct out of 8 total questions!');
console.log(goodByeUser);
