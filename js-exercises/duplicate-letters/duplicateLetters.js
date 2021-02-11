import { isString } from 'util';

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

function getDuplicateWithMaxCount(lookupObject) {
  return Math.max(...Object.values(lookupObject));
}

function handleEmptyArg(str) {
  if (!isString(str)) {
    throw new Error('Input needed.');
  }
}

function duplicateLetters(...args) {
  const EMPTY_DELIMITER = '';
  handleEmptyArg(args[0]);
  const splitChars = args[0].split(EMPTY_DELIMITER);
  const duplicateCount = getDuplicateWithMaxCount(populateLookup(splitChars));
  return duplicateCount === 1 ? false : duplicateCount;
}

export {
  duplicateLetters,
};
