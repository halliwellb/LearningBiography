'use strict';

function askQuestion(questions, answers) {
  let response = prompt(questions);
  if (response) {
    if (response === answers) {
      return true;
    } else {
      return false;
    }
  }
}

let questionOne = 'I would like to ask you a few questions. Would that be alright?';
let questionTwo = 'The first question is: Do I live in Maine?';
let questionThree = 'The second question is: Do I have a finance degree?';
let questionFour = 'The third question is: Do I still work in financial planning?';
let questionFive = 'The fourth question is: Is my wife a flower farmer?';
let questionSix = 'The fifth question is: Was I in the military?';
let questionSeven = 'The sixth question is: Am I training in software development?';

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
let answers = ['yes', 'yes', 'yes', 'no', 'yes', 'yes', 'yes'];
let response = [''];

let name = prompt('Hello! What is your name?');
alert('Hi, ' + name + '! Thanks for coming by!');

let r = 0;

for (let i = 0; i < questions.length; i++) {
  let userCorrect = askQuestion(questions[i], answers[i]);
  if (userCorrect) {
    alert('Awesome!');
    r++;
    console.log(userCorrect);
  } else {
    alert('Wrong!');
    console.log(userCorrect);
  }
}

let myNumber = ('17');
let trys = 0;

function numberGame() {
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
numberGame();

let myAge = ('31');
let userTrys = 0;

// function myGame() {
  let game = prompt('Guess how old I am. You will have 4 trys.'); {
    if (game === '') { 
      game = prompt('Please guess!');
    } while (userTrys <2) {
      if (game === myAge) {
        alert('Are you psychic?');
        r++;
        return true;
      } else game = prompt('Sorry, try again!');
      userTrys ++;
    }
  }
// }
// myGame();

let parting = alert('Thank you for learning a bit about me, ' + name + '. You got ' + r + ' questions correct!');
console.log(parting);

document.write('<h4>Great job, ' + name + '! You got ' + r + ' questions correct!</h4>');
