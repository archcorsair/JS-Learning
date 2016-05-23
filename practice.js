const students = [
  { name: 'John', track: 'JavaScript', achievements: 1, points: 1 },
  { name: 'Doe', track: 'HTML', achievements: 2, points: 2343 },
  { name: 'Daniel', track: 'Ruby', achievements: 3, points: 4232 },
  { name: 'Larry', track: 'CSS', achievements: 32, points: 12732 },
  { name: 'Becky', track: 'PHP', achievements: 323, points: 9001 },
];

let student;
let message = '';
let search;

function print(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  let report = `<h2>Student: ${student.name}</h2>`;
  report += `<p>Track: ${student.track}</p>`;
  report += `<p>Points: ${student.points}</p>`;
  report += `<p>Achievements: ${student.achievements}</p>`;

  return report;
}

while (true) {
  search = prompt('Search Student Records: Type a name "Jody" or type "quit" to exit.');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (let i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
    }
  }
}

print(message);

// Next task: Make searchable and deal with duplicate names.
