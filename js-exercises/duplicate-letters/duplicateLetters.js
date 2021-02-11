function populateLookup(splitChars) {
  const lookupObject = {};
  splitChars.forEach(element => {
    if (lookupObject[element] === undefined) {
      lookupObject[element] = 1;
    } else {
      lookupObject[element] += 1;
    }
  });
  return lookupObject;
}

function countDuplicates(lookupObject, minCount) {
  return Object.values(lookupObject)
    .filter(count => count > minCount)
    .length;
}

function duplicateLetters(...args) {
  const EMPTY_DELIMITER = '';
  const splitChars = args[0].split(EMPTY_DELIMITER);
  const duplicateCount = countDuplicates(populateLookup(splitChars), 1);
  return duplicateCount === 0 ? false : duplicateCount;
}

export {
  duplicateLetters,
};
