'use strict';

let questionOne = 'I would like to ask you a few questions. Would that be alright?';
let questionTwo = 'The first question is: Do I live in Maine?';
let questionThree = 'The second question is: Do I have a finance degree?';
let questionFour = 'The third question is: Do I still work in financial planning?';
let questionFive = 'The fourth question is: Is my wife a flower farmer?';
let questionSix = 'The fifth question is: Was I in the military?';
let questionEight = 'The sixth question is: Am I training in software development?';

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionEight];
let answers = ['yes', 'yes', 'yes', 'no', 'yes', 'yes', 'yes'];
let response = null;

let name = prompt('Hello! What is your name?');
alert('Hi, ' + name + '! Thanks for coming by!');

let r = 0;

for (let i = 0; i < questions.length; i++) {
  {
    response = prompt(questions[i]);
    console.log(questions);
    if (response === answers[i]) {
      alert('Great!'); {
        r++;
      }
    } else {
      alert('Wrong!');
    }
  }
}

let myNumber = 17;
let trys = 0;
let questionSeven = prompt('Please choose a number between 1-20');
if (questionSeven === '') {
  questionSeven = prompt('Please choose a number! 1-20');
} while (trys < 5) {
  if (questionSeven == myNumber) {
    alert('Wow, that is exactly right!');
    break;
  } else (questionSeven = prompt('I am sorry, incorrect. Please choose another number'));
  trys += 1;
}

let parting = alert('Thank you for learning a bit about me, ' + name + '. You got ' + r + ' questions correct!');
console.log(parting);

// document.write('<h4>Great job, ' + name + '! You got ' + r + ' questions correct!</h4>');
