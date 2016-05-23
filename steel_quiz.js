/*
Steel Brain's PoC for the Quiz App
*/

const questions = [
  'Question #1',
  'Question #2',
  'Question #3',
];
const answers = [
  1, 2, 3,
];

const choices = [];
for (let i = 0, length = questions.length; i < length; i += 1) {
  const answer = parseInt(prompt(questions[i]), 10);
  choices.push(answer === answers[i]);
}

const content = [
  `You have got ${choices.filter(i => i).length} out of ${questions.length} questions correct`,
  '<ul>',
];
for (let i = 0, length = choices.length; i < length; i += 1) {
  content.push(`<li>${questions[i]}: ${choices[i] ? 'Correct' : 'Incorrect'}</li>`);
}
document.body.innerHTML = content.join('');
