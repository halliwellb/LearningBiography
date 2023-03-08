'use strict';

let name = prompt('Hello! What is your name?');
alert('Hi, ' + name + '! Thanks for coming by! I would like to ask you a few questions.');
// console.log('Your name is ' + name + '.');

let questionOne = prompt('Would that be alright, ' + name + '?').toLowerCase();

if (questionOne === '') {
  questionOne = prompt('Please answer yes or no.');
} else if (questionOne === 'yes') {
  alert('Awesome, ' + name + '! Coming right up.');
//   console.log('Thanks for playing, ' + name + '!');
} else {
  alert('I do not understand..If yes, please type yes.');
//   console.log('I do not understand..If yes, please type yes.');
}

let questionTwo = prompt('The first question is: Do I live in Maine?').toLowerCase();
if (questionTwo === '') {
  questionTwo = prompt('Please answer yes or no.');
} else if (questionTwo === 'yes') {
  alert('Correct!');
//   console.log('Correct, ' + name + '!');
} else {
  alert('Incorrect, sorry.');
//   console.log('Incorrect, ' + name + ' sorry.');
}

let questionThree = prompt('The second question is: Do I have a finance degree?').toLowerCase();
if (questionThree === '') {
  questionThree = prompt('Please answer yes or no.');
} else if (questionThree === 'yes') {
  alert('Correct!');
//   console.log('Correct, ' + name + '!');
} else {
  alert('Incorrect, sorry.');
//   console.log('Incorrect, ' + name + ' sorry.');
}

let questionFour = prompt('The third question is: Do I still work in financial planning?').toLowerCase();
if (questionFour === '') {
  questionFour = prompt('Please answer yes or no.');
} else if (questionFour === 'no') {
  alert('Correct!');
//   console.log('Correct, ' + name + '!');
} else {
  alert('Incorrect, sorry.');
//   console.log('Incorrect, ' + name + ' sorry.');
}

let questionFive = prompt('The last question is: Is my wife a flower farmer?').toLowerCase();
if (questionFive === '') {
  questionFive = prompt('Please answer yes or no.');
} else if (questionFive === "yes") {
  alert('Correct!');
//   console.log('Correct, ' + name + '!');
} else {
  alert('Incorrect, sorry.');
//   console.log('Incorrect, ' + name + ' sorry.');
}

let parting = alert('Thank you for learning a bit about me ' + name + '. It is great to have you here!');
// console.log(parting);
