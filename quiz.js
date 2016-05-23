const questions = [
['What is the answer to everything and life itself?', 42],
['Question 2', 2],
['Question 3', 3],
];

const correctAnswers = [];
const wrongAnswers = [];

let html;

function print(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  let buildHTML = '<ol>';
  for (let i = 0; i < arr.length; i += 1) {
    buildHTML += `<li>${arr[i]}</li>`;
  }
  buildHTML += '</ol>';
  return buildHTML;
}

// Ask questions and keep track of correct/wrong answers.
for (let i = 0; i < questions.length; i += 1) {
  const question = questions[i][0];
  const answer = questions[i][1];
  const response = parseInt(prompt(question), 10);
  if (response === answer) {
    correctAnswers.push(question);
  } else {
    wrongAnswers.push(question);
  }
}
// Display Results
html = `<h1>You got ${correctAnswers.length} question(s) correct:</h1>`;
html += '<h2>You got these questions correct: </h2>';
html += buildList(correctAnswers);
html += '<h2>You got these questions wrong: </h2>';
html += buildList(wrongAnswers);
print(html);
