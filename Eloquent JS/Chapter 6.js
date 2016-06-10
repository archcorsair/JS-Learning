// Sample Output:
// name         height country   Hello
// ------------ ------ --------  ------
// Everest      8848   Nepal     sfgsgwfg
// Mount Fuji   3776   Japan     efwefwefw

const table = [
['namsdfge', 'heisdfgght', 'counsdgftry', 'bob'],
['Everest', '8848', 'Nepal', 'f32f'],
['Mount Fuji', '37342376', 'Japan', '234234'],
];

function maxRowLength(arrays) {
  const maxWidths = arrays[0].map(str => str.length); // Returns an array of array lengths
  for (let i = 1; i < arrays.length; i++) {           // Start at 1 because above ran 0 already
    const temp = arrays[i].map(str => str.length);
    for (let ii = 0; ii < temp.length; ii++) {
      if (temp[ii] > maxWidths[ii]) {
        maxWidths[ii] = temp[ii];
      }
    }
  }
  return maxWidths;
}

maxRowLength(table);
