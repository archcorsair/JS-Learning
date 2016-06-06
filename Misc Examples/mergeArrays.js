function mergeArrays(arrays) {
 // Validate that all their lengths are equal
  let lastLength;
  for (let i = 0, length = arrays.length; i < length; i++) {
    if (typeof lastLength === 'undefined') {
      lastLength = arrays[i].length;
      continue;
    }
    if (arrays[i].length !== lastLength) {
      throw new Error('Expected array lengths to be equal');
    }
  }

  const toReturn = new Array(lastLength);
  for (let i = 0; i < lastLength; ++i) {
    toReturn[i] = 0;
    for (let j = 0, length = arrays.length; j < length; ++j) {
      toReturn[i] += arrays[j][i];
    }
  }
  return toReturn;
}

// example run
mergeArrays([[1, 0], [2, 0], [3, 1]]); // -> [6, 1]
