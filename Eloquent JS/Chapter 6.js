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
  const maxWidths = arrays[0].map(function (str) { return str.length; }); // 4,6,7
  for (let i = 1; i < arrays.length; i++) {
    const temp = arrays[i].map(function (str) { return str.length; });
    for (let ii = 0; ii < temp.length; ii++) {
      if (temp[ii] > maxWidths[ii]) {
        maxWidths[ii] = temp[ii];
      }
    }
  }
  return maxWidths;
}

maxRowLength(table);
