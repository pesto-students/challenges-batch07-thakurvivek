import { isString } from 'util';

function handleNonStrings(inputFromUser) {
  if (isString(inputFromUser)) {
    throw new TypeError('Please input a number.');
  }
}

function sumFibs(num) {
  handleNonStrings(num);
  const series = [];
  let firstNumberInSeries = 1;
  let secondNumberInSeries = 1;
  let nextNumberInSeries;
  for (let i = 0; i < num; i += 1) {
    series.push(firstNumberInSeries);
    nextNumberInSeries = firstNumberInSeries + secondNumberInSeries;
    firstNumberInSeries = secondNumberInSeries;
    secondNumberInSeries = nextNumberInSeries;
  }

  return series
    .filter(element => element % 2 !== 0 && element <= num)
    .reduce((a, b) => a + b);
}

function cacheFunction(func) {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    const result = func(num);
    cache[num] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
