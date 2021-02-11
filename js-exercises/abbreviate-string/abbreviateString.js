import { isString } from 'util';

const ERROR_MESSAGES = {
  type: 'You must provide a String type.',
  range: 'You must provide more than one word.',
};

function handleTypeError(str) {
  if (!isString(str)) {
    throw new TypeError(ERROR_MESSAGES.type);
  }
}

function handleRangeErrors(splitted) {
  if (splitted.length === 1) {
    throw new RangeError(ERROR_MESSAGES.range);
  }
}

function processLastWord(word, capitalise) {
  const abbreviatedLastWord = `${word.substring(0, 1)}.`;
  return capitalise ? abbreviatedLastWord.toUpperCase() : abbreviatedLastWord;
}

function abbreviateString(str) {
  handleTypeError(str);
  const DELIMITER = ' ';
  const splitted = str.split(DELIMITER);
  handleRangeErrors(splitted);
  const firstWord = splitted[0];
  const lastWord = splitted[splitted.length - 1];
  const abbreviatedLastWord = processLastWord(lastWord, true);

  return `${firstWord} ${abbreviatedLastWord}`;
}

export { abbreviateString, ERROR_MESSAGES };
